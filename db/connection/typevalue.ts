import { ISqlTypeFactoryWithNoParams } from "mssql";
//Setting request parameters is how we stop SQL Injection
//https://tediousjs.github.io/tedious/parameters.html
export default class TypeValue {
  type: ISqlTypeFactoryWithNoParams;
  value: any;

  constructor(type: ISqlTypeFactoryWithNoParams, value: any) {
    this.type = type;
    this.value = value;
  }
}
