import { GroomsmenDBReads } from "./groomsmendbreads";
import { GroomsmenDBWrites } from "./groomsmendbwrites";

export class GroomsmenDBModel {
  private dbReads: GroomsmenDBReads = new GroomsmenDBReads();
  private dbWrites: GroomsmenDBWrites = new GroomsmenDBWrites();

  public async addPoints(name: string, pointsToAdd: number) {
    try {
      await this.dbWrites.addPoints(name, pointsToAdd);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
