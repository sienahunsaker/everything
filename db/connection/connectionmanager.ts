import { IDBQuery } from "./idbquery";
import sql, { ConnectionPool } from "mssql";
import { connectionConfig, poolConfig } from "../sql/config";
export class ConnectionManager {
  private static instance: ConnectionManager;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  private generatePromise<T>(query: IDBQuery<T>): Promise<T[] | undefined> {
    const promise: Promise<T[] | undefined> = new Promise((resolve, reject) => {
      sql
        .connect(connectionConfig)
        .then((pool) => {
          const request = pool.request();
          query.parameters.forEach((value, key) => {
            request.input(key, value.type, value.value);
          });

          request.query<T>(query.sql, (err, rows) => {
            if (err) {
              console.error(
                `Request Failed: ${err.message} -- CAUSE: ${err.cause}\n${err.stack}`
              );
              reject(undefined);
              return;
            }

            if (!query.receivesData) {
              resolve(undefined);
              return;
            }
            resolve(rows?.recordset);
          });
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  public static getInstance(): ConnectionManager {
    if (!ConnectionManager.instance) {
      ConnectionManager.instance = new ConnectionManager();
    }

    return ConnectionManager.instance;
  }

  public execute<T>(query: IDBQuery<T>): Promise<T[] | undefined> {
    return this.generatePromise(query);
  }
}
