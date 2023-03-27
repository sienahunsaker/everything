import { GroomsmenDBReads } from "./groomsmendbreads";
import { GroomsmenDBWrites } from "./groomsmendbwrites";

export class GroomsmenDBModel {
  private dbReads: GroomsmenDBReads = new GroomsmenDBReads();
  private dbWrites: GroomsmenDBWrites = new GroomsmenDBWrites();

  public async solvedPuzzle(name: string) {
    try {
      await this.dbWrites.solvedPuzzle(name);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public async getSolved(name: string) {
    try {
      const isSolved = await this.dbReads.isSolved(name);
      if (isSolved) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }
}
