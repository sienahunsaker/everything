import { ConnectionManager } from "../connection/connectionmanager";
import { IDBQuery } from "../connection/idbquery";
import TypeValue from "../connection/typevalue";
import mssql from "mssql";
export class GroomsmenDBWrites {
  private tableName: string = "Groomsmen";

  public addPoints(name: string, pointsToAdd: number) {
    const parameters = new Map<string, TypeValue>();
    parameters.set("name", new TypeValue(mssql.VarChar, name));
    parameters.set("pointsToAdd", new TypeValue(mssql.Int, pointsToAdd));
    const sql = `UPDATE ${this.tableName} SET points = points + @pointsToAdd where name = @name`;

    const query: IDBQuery<undefined> = {
      sql: sql,
      receivesData: false,
      parameters: parameters,
    };
    return ConnectionManager.getInstance().execute(query);
  }
}
