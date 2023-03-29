import { ConnectionManager } from "../connection/connectionmanager";
import { IDBQuery } from "../connection/idbquery";
import TypeValue from "../connection/typevalue";
import mssql from "mssql";
import { RiddleEntry } from "./models/riddleentry";
export class RiddleEntryDBReads {
  private tableName: string = "RiddleEntry";

  public getRiddleEntry(groomsmenName: string, riddleKey: string) {
    const parameters = new Map<string, TypeValue>();
    parameters.set(
      "groomsmenName",
      new TypeValue(mssql.VarChar, groomsmenName)
    );
    parameters.set("riddleKey", new TypeValue(mssql.VarChar, riddleKey));
    const sql = `SELECT top (1) * from ${this.tableName} where groomsmenName = @groomsmenName and riddleKey = @riddleKey`;

    const query: IDBQuery<RiddleEntry> = {
      sql: sql,
      receivesData: true,
      parameters: parameters,
    };
    return ConnectionManager.getInstance().execute(query);
  }
}
