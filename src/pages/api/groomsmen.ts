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
  if (req.method == "GET") {
    const name = req.body.name;
    const riddleKey = req.body.riddleKey;
    const isSolved = await riddleEntryDBModel.didCompletePuzzle(
      name,
      riddleKey
    );
    return res.status(200).json({
      success: true,
      response: isSolved,
      toManyFailedAttempts: false,
    });
  }

  if (req.method == "POST") {
    const groomsmenName = req.body.name;
    const riddleKey = req.body.riddleKey;
    const data = req.body.data;
    if (riddleKey == "riddle1482") {
      const retries = await riddleEntryDBModel.getRetries(
        groomsmenName,
        riddleKey
      );
      if (retries === false) {
        return serverProblem(res);
      }
      if (retries > 0) {
        return res.status(200).send({
          success: true,
          response: false,
          toManyFailedAttempts: true,
        });
      }
      if (data == "iamaweenieboy") {
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

  return serverProblem(res);
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
