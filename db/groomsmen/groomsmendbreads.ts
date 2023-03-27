import { ConnectionManager } from "../connection/connectionmanager";
import { IDBQuery } from "../connection/idbquery";
import TypeValue from "../connection/typevalue";
import mssql from "mssql";
export class GroomsmenDBReads {
  private tableName: string = "Groomsmen";

  public isSolved(name: string) {
    const parameters = new Map<string, TypeValue>();
    parameters.set("name", new TypeValue(mssql.VarChar, name));
    const sql = `SELECT solved from ${this.tableName} where name = @name`;

    const query: IDBQuery<boolean> = {
      sql: sql,
      receivesData: true,
      parameters: parameters,
    };
    return ConnectionManager.getInstance().execute(query);
  }
}
