import TypeValue from "./typevalue";

export interface IDBQuery<T> {
  sql: string;
  //if true, will await data from server, else will return once successful
  receivesData: boolean;
  parameters: Map<string, TypeValue>;
}
