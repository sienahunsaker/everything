import { ConnectionManager } from "../connection/connectionmanager";
import { IDBQuery } from "../connection/idbquery";
import TypeValue from "../connection/typevalue";
import mssql from "mssql";
import { RiddleEntry } from "./models/riddleentry";
export class RiddleEntryDBWrites {
  private tableName: string = "RiddleEntry";

  public updateSolved(id: number) {
    const parameters = new Map<string, TypeValue>();
    parameters.set("id", new TypeValue(mssql.Int, id));
    parameters.set(
      "solvedTime",
      new TypeValue(mssql.DateTimeOffset, new Date())
    );
    const sql = `UPDATE ${this.tableName} SET solved = 1, solvedTime = @solvedTime where id=@id`;

    const query: IDBQuery<undefined> = {
      sql: sql,
      receivesData: false,
      parameters: parameters,
    };
    return ConnectionManager.getInstance().execute(query);
  }
  public increaseTries(id: number) {
    const parameters = new Map<string, TypeValue>();
    parameters.set("id", new TypeValue(mssql.Int, id));

    const sql = `UPDATE ${this.tableName} SET tries = tries +1 where id=@id`;

    const query: IDBQuery<undefined> = {
      sql: sql,
      receivesData: false,
      parameters: parameters,
    };
    return ConnectionManager.getInstance().execute(query);
  }
  public createRiddleEntry(riddleEntry: RiddleEntry) {
    const parameters = new Map<string, TypeValue>();
    parameters.set(
      "groomsmenName",
      new TypeValue(mssql.VarChar, riddleEntry.groomsmenName)
    );
    parameters.set("solved", new TypeValue(mssql.Bit, riddleEntry.solved));
    parameters.set(
      "solvedTime",
      new TypeValue(mssql.DateTimeOffset, riddleEntry.solvedTime)
    );
    parameters.set("tries", new TypeValue(mssql.Int, riddleEntry.tries));
    parameters.set(
      "riddleKey",
      new TypeValue(mssql.VarChar, riddleEntry.riddleKey)
    );

    const sql = `INSERT INTO ${this.tableName} (groomsmenName,solved,${
      riddleEntry.solved ? "solvedTime," : ""
    }tries,riddleKey) VALUES (@groomsmenName,@solved,${
      riddleEntry.solved ? "@solvedTime," : ""
    }@tries,@riddleKey)`;

    const query: IDBQuery<undefined> = {
      sql: sql,
      receivesData: false,
      parameters: parameters,
    };
    return ConnectionManager.getInstance().execute(query);
  }
}
