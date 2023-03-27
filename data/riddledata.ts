export class RiddleData {
  constructor(
    public rules: string[],
    public name: string,
    public p1: string,
    public question: string,
    public imagePath?: string
  ) {}
}

export const riddles: Record<string, RiddleData> = {
  thomasboyer: new RiddleData(
    [
      "One guard always lies, one guard always tells the truth, you don't know which guard is who",
      "You don't know which guard is guarding the correct path",
      "You can only ask one question to figure out which path is to freedom",
    ],
    "Thomas Boyer",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for being able to dunk once in your life, and your will to win. We once heard you owed money for rent, but refused to pay those suckers and eventually didn't have to pay, amazing.",
    "A man named Tommy is lost in the forest, he swear he knew better than Google Maps, but to his disappointment he is definitely lost. He comes upon a fork in the forest, with a sign that says “one leads to freedom, one leads to death”, in front of each path is a guard. The sign says that “one of them always lies” and “one of them always tells the truth”, what question can you ask that only ONE guard that guarantees your freedom.",
    "/riddles/ThomasBoyer.png"
  ),
};
