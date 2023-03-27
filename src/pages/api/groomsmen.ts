import { NextApiRequest, NextApiResponse } from "next";
import { GroomsmenDBModel } from "../../../db/groomsmen/groomsmendbmodel";

export type GroomsmenAPIResponse = {
  success: boolean;
  response: any;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GroomsmenAPIResponse>
) {
  const dbModel = new GroomsmenDBModel();

  if (req.method == "GET") {
    const name = req.body.name;
    const isSolved = await dbModel.getSolved(name);
    return res.status(200).json({
      success: true,
      response: isSolved,
    });
  }

  if (req.method == "POST") {
    const passkey = req.body.passkey;
    const data = req.body.data;
    if (passkey == "thomasboyer9572") {
      if (data == "iamaweenieboy") {
        const setSolveSuccess = await dbModel.solvedPuzzle(passkey);
        if (setSolveSuccess) {
          return res.status(200).send({
            success: true,
            response: true,
          });
        }
      } else {
        return res.status(200).send({
          success: true,
          response: false,
        });
      }
    }
  }

  return res.status(400).send({
    success: false,
    response: "Something went wrong oops, call danny 281-870-3316",
  });
}
