import { ConnectionManager } from "../connection/connectionmanager";
import { IDBQuery } from "../connection/idbquery";
import TypeValue from "../connection/typevalue";
import mssql from "mssql";
import { Groomsmen } from "./models/groomsmen";
export class GroomsmenDBReads {
  private tableName: string = "Groomsmen";

  public getAllGroomsmen() {
    const sql = `SELECT * from ${this.tableName}`;
    const parameters = new Map<string, TypeValue>();
    const query: IDBQuery<Groomsmen> = {
      sql: sql,
      receivesData: true,
      parameters: parameters,
    };
    return ConnectionManager.getInstance().execute(query);
  }
}
