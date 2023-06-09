import { NextApiRequest, NextApiResponse } from "next";
import { GroomsmenDBModel } from "../../../../db/groomsmen/groomsmendbmodel";
import { Groomsmen } from "../../../../db/groomsmen/models/groomsmen";
import { RiddleEntry } from "../../../../db/riddleentry/models/riddleentry";
import { RiddleEntryDBModel } from "../../../../db/riddleentry/riddleentrydbmodel";

export type RiddlesAndGroomsmen = {
  riddleEntries: RiddleEntry[];
  groomsmen: Groomsmen[];
};
export type RiddleAPIResponse = {
  success: boolean;
  response: RiddlesAndGroomsmen;
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RiddleAPIResponse>
) {
  const groomsmenDBModel = new GroomsmenDBModel();
  const riddleEntryDBModel = new RiddleEntryDBModel();

  if (req.method == "GET") {
    const { groomsmen } = req.query;
    const riddleEntries = await riddleEntryDBModel.getAllRiddleEntries();
    if (riddleEntries) {
      if (
        riddleEntries.some(
          (riddle) => riddle.groomsmenName == groomsmen && riddle.solved
        )
      ) {
        const groomsmen = await groomsmenDBModel.getAllGroomsmen();
        if (groomsmen) {
          return res.status(200).send({
            success: true,
            response: { riddleEntries: riddleEntries, groomsmen: groomsmen },
            message: "Success",
          });
        }
      }

      return res.status(400).send({
        success: false,
        response: { riddleEntries: [], groomsmen: [] },
        message:
          "You must solve your riddles before accessing the leaderboard or other riddles... :)",
      });
    }

    return serverProblem(res);
  }

  if (req.method == "POST") {
    const { groomsmen } = req.query;
    const decreaseTries = await riddleEntryDBModel.decreaseTries(
      (groomsmen as string[])[0],
      (groomsmen as string[])[1]
    );
    if (decreaseTries) {
      return res.status(200).send({
        success: true,
        response: { riddleEntries: [], groomsmen: [] },
        message:
          "Wow you're a great person you helped your buddy. I love you. God loves you.",
      });
    }
    return serverProblem(res);
  }
}
function serverProblem(res: NextApiResponse<RiddleAPIResponse>) {
  return res.status(400).send({
    success: false,
    response: { riddleEntries: [], groomsmen: [] },
    message: "Server problem uh oh, call danny.",
  });
}
