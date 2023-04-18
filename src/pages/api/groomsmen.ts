import { NextApiRequest, NextApiResponse } from "next";
import { GroomsmenDBModel } from "../../../db/groomsmen/groomsmendbmodel";
import { RiddleEntryDBModel } from "../../../db/riddleentry/riddleentrydbmodel";

export type GroomsmenAPIResponse = {
  success: boolean;
  response: any;
  toManyFailedAttempts: boolean;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GroomsmenAPIResponse>
) {
  const groomsmenDBModel = new GroomsmenDBModel();
  const riddleEntryDBModel = new RiddleEntryDBModel();
  if (req.method == "POST") {
    const groomsmenName = req.body.name;
    const riddleKey = req.body.riddleKey;
    const data = req.body.data;
    const checkHasSolved = req.body.checkHasSolved;
    if (checkHasSolved === true) {
      const isSolved = await riddleEntryDBModel.didCompletePuzzle(
        groomsmenName,
        riddleKey
      );
      return res.status(200).json({
        success: true,
        response: isSolved,
        toManyFailedAttempts: false,
      });
    }
    return solvePuzzle(
      groomsmenName,
      riddleKey,
      data,
      groomsmenDBModel,
      riddleEntryDBModel,
      res
    );
  }

  return serverProblem(res);
}

async function solvePuzzle(
  groomsmenName: string,
  riddleKey: string,
  answer: any,
  groomsmenDBModel: GroomsmenDBModel,
  riddleEntryDBModel: RiddleEntryDBModel,
  res: NextApiResponse<GroomsmenAPIResponse>
) {
  if (riddleAnswers[riddleKey]) {
    const retries = await riddleEntryDBModel.getRetries(
      groomsmenName,
      riddleKey
    );
    if (retries === false) {
      return serverProblem(res);
    }
    if (retries > 1) {
      return res.status(200).send({
        success: true,
        response: false,
        toManyFailedAttempts: true,
      });
    }
    if (riddleAnswers[riddleKey](answer)) {
      const didComplete = await riddleEntryDBModel.didCompletePuzzle(
        groomsmenName,
        riddleKey
      );
      if (didComplete) {
        return alreadySolved(res);
      }

      const setSolveSuccess = await riddleEntryDBModel.completedPuzzle(
        groomsmenName,
        riddleKey
      );
      if (setSolveSuccess) {
        const addPointsSuccess = await groomsmenDBModel.addPoints(
          groomsmenName,
          100
        );
        if (!addPointsSuccess) {
          return serverProblem(res);
        }
        return res.status(200).send({
          success: true,
          response: true,
          toManyFailedAttempts: false,
        });
      }
    } else {
      await riddleEntryDBModel.failedPuzzle(groomsmenName, riddleKey);
      return res.status(200).send({
        success: true,
        response: false,
        toManyFailedAttempts: false,
      });
    }
  }
}
function alreadySolved(res: NextApiResponse<GroomsmenAPIResponse>) {
  return res.status(200).send({
    success: true,
    response: "ALREADYSOLVED",
    toManyFailedAttempts: false,
  });
}
function serverProblem(res: NextApiResponse<GroomsmenAPIResponse>) {
  return res.status(400).send({
    success: false,
    response: "Something went wrong oops, call danny 281-870-3316",
    toManyFailedAttempts: false,
  });
}

function removeWhiteSpace(input: any) {
  return input.replace(/\s/g, "");
}

function convertToInt(input: any): number {
  return Number(input.trim());
}
const riddleAnswers: Record<string, (input: any) => boolean> = {
  riddle1482: (input) =>
    removeWhiteSpace(input).toLowerCase() == "iamaweenieboy",
  riddle2919: (input) =>
    removeWhiteSpace(input).toLowerCase() === "1,2:1:3,4:2:1,2",
  riddle2611: (input) => removeWhiteSpace(input).toLowerCase() === "ilovemymom",
  riddle9299: (input) => convertToInt(input) === 0,
  riddle0012: (input) => convertToInt(input) === 3,
  riddle2552: (input) =>
    ["3,2", "2,3", "3,1", "1,3"].some((t) => input.trim() === t),
  riddle3912: (input) =>
    removeWhiteSpace(input).toLowerCase() === "penisshapedbucket",
  riddle2621: (input) => convertToInt(input) === 108,
  riddle1229: (input) => convertToInt(input) == 9,
  riddle0102: (input) => convertToInt(input) === 24,
  riddle1112: (input) => {
    const answers = removeWhiteSpace(input).split(",");
    if (answers.length != 17) {
      return false;
    }
    return answers[0] == 1 && answers[2] == 1;
  },
  riddle9976: (input) => removeWhiteSpace(input) === "2,2,9",
  riddle2123: (input) => convertToInt(input) == 9495,
  riddle2351: (input) => convertToInt(input) === 16,
  riddle0291: (input) => removeWhiteSpace(input).toLowerCase() === "8,8,8",
  riddle1792: (input) => convertToInt(input) === 10,
};
