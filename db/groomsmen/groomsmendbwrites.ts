import { ConnectionManager } from "../connection/connectionmanager";
import { IDBQuery } from "../connection/idbquery";
import TypeValue from "../connection/typevalue";
import mssql from "mssql";
export class GroomsmenDBWrites {
  private tableName: string = "Groomsmen";

  public solvedPuzzle(name: string) {
    const parameters = new Map<string, TypeValue>();
    parameters.set("name", new TypeValue(mssql.VarChar, name));
    const sql = `UPDATE ${this.tableName} SET solved = 1, points = points + 100 where name = @name`;

    const query: IDBQuery<undefined> = {
      sql: sql,
      receivesData: false,
      parameters: parameters,
    };
    return ConnectionManager.getInstance().execute(query);
  }
}
