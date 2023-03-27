export interface IResult<T> {
  success: boolean;
  value: T | undefined;
}
