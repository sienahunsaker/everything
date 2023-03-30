import { RiddleEntry } from "./models/riddleentry";
import { RiddleEntryDBReads } from "./riddleentrydbreads";
import { RiddleEntryDBWrites } from "./riddleentrydbwrites";

export class RiddleEntryDBModel {
  private dbReads: RiddleEntryDBReads = new RiddleEntryDBReads();
  private dbWrites: RiddleEntryDBWrites = new RiddleEntryDBWrites();

  public async getAllRiddleEntries() {
    try {
      return await this.dbReads.getAllRiddleEntries();
    } catch (e) {
      return false;
    }
  }
  public async getRetries(groomsmenName: string, riddleKey: string) {
    try {
      const riddleEntry = await this.dbReads.getRiddleEntry(
        groomsmenName,
        riddleKey
      );
      if (riddleEntry && riddleEntry.length == 1) {
        return riddleEntry[0].tries;
      }
      return -1;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  public async didCompletePuzzle(groomsmenName: string, riddleKey: string) {
    try {
      const riddleEntry = await this.dbReads.getRiddleEntry(
        groomsmenName,
        riddleKey
      );
      return riddleEntry && riddleEntry.length == 1 && riddleEntry[0].solved;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  public async completedPuzzle(groomsmenName: string, riddleKey: string) {
    try {
      const riddleEntry = await this.dbReads.getRiddleEntry(
        groomsmenName,
        riddleKey
      );
      if (riddleEntry && riddleEntry.length == 1 && riddleEntry[0].id) {
        await this.dbWrites.updateSolved(riddleEntry[0].id);
        return true;
      }

      await this.dbWrites.createRiddleEntry(
        new RiddleEntry(
          undefined,
          groomsmenName,
          true,
          new Date(),
          0,
          riddleKey
        )
      );
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public async failedPuzzle(groomsmenName: string, riddleKey: string) {
    try {
      const riddleEntry = await this.dbReads.getRiddleEntry(
        groomsmenName,
        riddleKey
      );
      if (riddleEntry && riddleEntry.length == 1 && riddleEntry[0].id) {
        await this.dbWrites.increaseTries(riddleEntry[0].id);
        return true;
      }

      await this.dbWrites.createRiddleEntry(
        new RiddleEntry(
          undefined,
          groomsmenName,
          false,
          new Date(),
          1,
          riddleKey
        )
      );
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
