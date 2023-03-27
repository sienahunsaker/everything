import { config } from "mssql";

export const connectionConfig: config = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: "boxheads-db.database.windows.net",
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
  },
};
export const poolConfig = {
  min: 2,
  max: 4,
  log: true,
};
