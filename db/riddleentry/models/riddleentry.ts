export class RiddleEntry {
  constructor(
    public id: number | undefined,
    public groomsmenName: string,
    public solved: boolean,
    public solvedTime: Date,
    public tries: number,
    public riddleKey: string
  ) {}
}
