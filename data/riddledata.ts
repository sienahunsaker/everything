export class RiddleData {
  constructor(
    public rules: string[],
    public name: string,
    public p1: string,
    public question: string,
    public answerInstructions: string,
    public example: string,
    public imagePath?: string
  ) {}
}

export const riddles: Record<string, RiddleData> = {
  riddle1482: new RiddleData(
    [
      "One guard always lies, one guard always tells the truth, you don't know which guard is who",
      "You don't know which guard is guarding the correct path",
      "You can only ask one question to figure out which path is to freedom",
    ],
    "Thomas Boyer",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for being able to dunk once in your life, and your will to win. We once heard you owed money for rent, but refused to pay those suckers and eventually didn't have to pay, amazing.",
    "A man named Tommy is lost in the forest, he swear he knew better than Google Maps, but to his disappointment he is definitely lost. He comes upon a fork in the forest, with a sign that says “one leads to freedom, one leads to death”, in front of each path is a guard. The sign says that “one of them always lies” and “one of them always tells the truth”, what question can you ask that only ONE guard that guarantees your freedom.",
    "Since this riddle answer is a phrase, call Danny when you think you have the answer.",
    "",
    "/riddles/ThomasBoyer.png"
  ),
  riddle2919: new RiddleData(
    [
      "The speeds of each person are: 1 minute, 2 minute, 5 minute, 10 minute",
      "Only two people can cross the hallway at the same time",
      "Both people cross the hallway at the same speed of the slowest person",
      "You can only cross the hallway if you have the lantern",
      "Everyone must be across the hallway in 17 minutes",
    ],
    "Samuel Berry",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your persistence and consistency. We once heard your car was stolen and then found later on, after retrieving the car and cleaning it up, you still left your keys in the car unlocked. Damn that takes some balls.",
    "Sam is called into work at Rochester, he takes the plane over and lands safely. But something is off. He goes into his work but when he gets there he sees 25 hungry ass zombies. Oh shit. He starts running away and runs into three of his coworkers further down the hall. Sam knows if he can get across the hall they can shut the door and lock the  zombies out. Luckily the zombies are very slow, unluckily his coworkers aren’t as fast as him. All of a sudden the hallway starts collapsing into the inferno of the earth's core below. It’s barely still standing. The hallway can only support two people at once. Even worse, the lights are out, making it pitch black, only sams thoughtful coworker thought to bring a lantern. The zombies will reach the hallway in 17 minutes. Sam can cross the hallway in 1 minute, and the other coworkers can cross the hallway as follows, 2 minutes, 5 minutes, and ten minutes. How can you cross the hallway in 17 minutes?",
    "Enter who crosses the bridge followed by a ':' use commas for more than one person crossing. For example 1,3: 1 (this matches the example above).",
    "Example: Person 1 and person 3 cross the hallway together and it takes 5 minutes, person 1 runs back with the lantern and that takes 1 minute. Equaling a total of 6 minutes so far."
  ),
  riddle2611: new RiddleData(
    [
      "The scale has two sides and can only tell you if one side is lighter or heavier or the same",
      "You must guarantee you know which ball is the lightest (no getting lucky)",
    ],
    "Sagin Hunsaker",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your decisive decision making, and confidence. We hear you were able to date, get married, have two children, move and move back all in under 3.5 years. And you didn’t even break a sweat.",
    "You’re walking with your wife and children through a beautiful meadow, you are relaxing and having a good time, but something is following you and you can feel it deep down.It’s been weeks since you left your hometown, the world isn’t the same anymore after Death himself took over. Somehow Death was able to be everywhere all at once killing millions. You only escaped because your father Nate fought Death off before dying himself. You miss him. No time thinking about that now. You get everyone moving and you come across a massive river. The river is moving quickly you know if anyone falls in it’s over. Even though it’s been relatively quiet the last few weeks, there is something eerie about today. Although the sun and plants and flowers are beautiful, the shadows are slightly deeper. “Keep going” you tell yourself. That’s when you see it. You can’t think of anything else better to call Death than “it”. It’s definitely not human. Death has long slender like arms, a wide grin, and shadow like features. No time to think anymore, you yell and start running. Death follows closely, easily keeping up, as if it likes the chase. It’s pointless running, you don’t even know if Death needs to breathe! With the river to your left and dark woods to your right you realize you have to fight. You look at hailey, “If I die you have to keep going”. You turn around, scared but ready to fight Death. But with what? Your bare hands? “Sagin!”, who said that? You look right and it’s Nate, a floating blue form hovering three inches above the ground. “Take this”, you look and he’s holding a gleaming silvery blue sword, about 6 feet in length. With no time to think you take the sword, right in time, Deaths hammer comes flying in and you’re able to parry and side step the blow. Death didn’t seem fazed that you had a glowing sword, it only made him smile even more. A flurry of hammer strikes came quickly, each one getting closer and closer to striking. And then it did. A solid hit directly to your right leg. You wince in pain falling to the floor. It’s over. Right before Death swings his hammer to end you he stops. “I’m not going to kill you, not unless you can’t help me”. You’re stunned, how could you help him? “I can’t solve this riddle and it’s been driving me crazy” Death said. WTF? You don’t usually swear but WTF? Solve this riddle and you will not only save your family, but the world itself.There are twelve dark balls each one weighs 1000000 pounds, except one of them that weighs 1 pound less. Death pulls out a scale and says “You must figure out which ball is slightly lighter than the rest”, “and you must do by only using the scale three times”",
    "When you think you know the answer, tell Audra your solution. If you're right she will give you the password.",
    ""
  ),
  riddle9299: new RiddleData(
    [
      "Each side of the gap is 50 feet tall",
      "The rope is 80 feet long",
      "Each end of the rope is attached to the sides of the gap",
      "The middle of the hanging rope is 10 feet above the floor",
    ],
    "Ryan Quinlan",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your knowledge and quick thinking. We once heard you were able to summon the powers of the unknown god Jacobe Johnson and easily win a game of basketball ripstick gladiator. Impressive.",
    "You’re trying to jump across an unknown gap, you know this gap is here but you can’t see it because there is A LOT of fog. If you fall you will plummet 50 feet to your death. You can’t even see an inch in front of your face. You know that if you can figure out how far the gap is you can easily adjust your jump strength to land perfectly on the other side. The other side is only one inch long so you have to be perfect. To help you out, you summon the power of jacobe johnson and he tells you two things: He’s attached an 80 foot long rope to each side of the gap and let it hang.\nThe middle of the hanging rope is ten feet above the ground",
    "Enter how wide the gap is",
    "",
    "/riddles/RyanQuinlan.png"
  ),
  riddle0012: new RiddleData(
    [
      "The first golfer says “The second golfer is Kyle”",
      "The second golfer says “I am not Thomas”",
      "The third golfer says “Jack is the fourth golfer”",
      "The fourth golfer didn’t say anything",
    ],
    "Parker Quinlan",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your superior thighs and calves, as well as for your team spirit. We once heard you passed out, had a small seizure, and wet the couch and STILL helped clean up afterwards. Wow.",
    "You’re golfing with your buddies Kyle, Danny, Thomas  and Jack. Just goofin off having a great time. As you go to the first tee, the Caddy Parker Quinlan (you)  asked everyone what there names are (somehow you forgot, probably the seizure). Your friend Danny lies.",
    "Enter which golfer is Danny",
    ""
  ),

  riddle2552: new RiddleData(
    [
      "You can only move the pencils not the quarter",
      "You can only do two moves",
      "A move is moving a pencil (anywhere)",
    ],
    "Kyle Rhomer",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB(Super Bachelor Bowl). You have been selected for your strong tree-like legs and high pain tolerance. We heard you were able to be stung by a scorpion and only winced for like 15 minutes.",
    "You have a goal post made of pencils (all of equal length). Inside the goal post is a quarter. Your goal is to make a new goal post where the quarter IS NOT in the goal post. ",
    "Enter the two numbers you moved to solve the puzzle, separated by a comma. All different combinations are accounted for. e.g 1,2 = 2,1 or 1, 3 = 2,3",
    "",
    "/riddles/KyleRhomer.png"
  ),
  riddle3912: new RiddleData(
    [
      "Kyle needs 4 gallons exactly, filling up the 5 gallon with 4 gallons is impossible since you can’t be sure it’s exactly 4 gallons.",
      "You have unlimited water",
    ],
    "Kyle Quinlan",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your persistence and consistency. We once heard your car was stolen and then found later on, after retrieving the car and cleaning it up, you still left your keys in the car unlocked. Damn that takes some balls.",
    "You have two buckets, one can hold 3 gallons of water and the other can hold 5 gallons of water. The water boy named Kyle needs exactly four gallons of water to give to his thirsty players that he bows down to. The two buckets are misshapen though, so you can’t fill it half way and be sure it’s half.",
    "Once you think you know the answer, text or call Danny and he will give you the password.",
    "",
    "/riddles/KyleQuinlan.png"
  ),
  riddle2621: new RiddleData(
    [
      "The scale has two sides and can only tell you if one side is lighter or heavier or the same",
      "You must guarantee you know which ball is the lightest (no getting lucky)",
    ],
    "Sagin Hunsaker",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your decisive decision making, and confidence. We hear you were able to date, get married, have two children, move and move back all in under 3.5 years. And you didn’t even break a sweat.",
    "You’re walking with your wife and children through a beautiful meadow, you are relaxing and having a good time, but something is following you and you can feel it deep down.It’s been weeks since you left your hometown, the world isn’t the same anymore after Death himself took over. Somehow Death was able to be everywhere all at once killing millions. You only escaped because your father Nate fought Death off before dying himself. You miss him. No time thinking about that now. You get everyone moving and you come across a massive river. The river is moving quickly you know if anyone falls in it’s over. Even though it’s been relatively quiet the last few weeks, there is something eerie about today. Although the sun and plants and flowers are beautiful, the shadows are slightly deeper. “Keep going” you tell yourself. That’s when you see it. You can’t think of anything else better to call Death than “it”. It’s definitely not human. Death has long slender like arms, a wide grin, and shadow like features. No time to think anymore, you yell and start running. Death follows closely, easily keeping up, as if it likes the chase. It’s pointless running, you don’t even know if Death needs to breathe! With the river to your left and dark woods to your right you realize you have to fight. You look at hailey, “If I die you have to keep going”. You turn around, scared but ready to fight Death. But with what? Your bare hands? “Sagin!”, who said that? You look right and it’s Nate, a floating blue form hovering three inches above the ground. “Take this”, you look and he’s holding a gleaming silvery blue sword, about 6 feet in length. With no time to think you take the sword, right in time, Deaths hammer comes flying in and you’re able to parry and side step the blow. Death didn’t seem fazed that you had a glowing sword, it only made him smile even more. A flurry of hammer strikes came quickly, each one getting closer and closer to striking. And then it did. A solid hit directly to your right leg. You wince in pain falling to the floor. It’s over. Right before Death swings his hammer to end you he stops. “I’m not going to kill you, not unless you can’t help me”. You’re stunned, how could you help him? “I can’t solve this riddle and it’s been driving me crazy” Death said. WTF? You don’t usually swear but WTF? Solve this riddle and you will not only save your family, but the world itself.There are twelve dark balls each one weighs 1000000 pounds, except one of them that weighs 1 pound less. Death pulls out a scale and says “You must figure out which ball is slightly lighter than the rest”, “and you must do by only using the scale three times”",
    "When you think you know the answer, tell Audra your solution. If you're right she will give you the password.",
    ""
  ),
  riddle1229: new RiddleData(
    [
      "Each side of the gap is 50 feet tall",
      "The rope is 80 feet long",
      "Each end of the rope is attached to the sides of the gap",
      "The middle of the hanging rope is 10 feet above the floor",
    ],
    "Ryan Quinlan",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your knowledge and quick thinking. We once heard you were able to summon the powers of the unknown god Jacobe Johnson and easily win a game of basketball ripstick gladiator. Impressive.",
    "You’re trying to jump across an unknown gap, you know this gap is here but you can’t see it because there is A LOT of fog. If you fall you will plummet 50 feet to your death. You can’t even see an inch in front of your face. You know that if you can figure out how far the gap is you can easily adjust your jump strength to land perfectly on the other side. The other side is only one inch long so you have to be perfect. To help you out, you summon the power of jacobe johnson and he tells you two things: He’s attached an 80 foot long rope to each side of the gap and let it hang.\nThe middle of the hanging rope is ten feet above the ground",
    "Enter how wide the gap is",
    "",
    "/riddles/RyanQuinlan.png"
  ),
  riddle0102: new RiddleData(
    [
      "Each side of the gap is 50 feet tall",
      "The rope is 80 feet long",
      "Each end of the rope is attached to the sides of the gap",
      "The middle of the hanging rope is 10 feet above the floor",
    ],
    "Ryan Quinlan",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your knowledge and quick thinking. We once heard you were able to summon the powers of the unknown god Jacobe Johnson and easily win a game of basketball ripstick gladiator. Impressive.",
    "You’re trying to jump across an unknown gap, you know this gap is here but you can’t see it because there is A LOT of fog. If you fall you will plummet 50 feet to your death. You can’t even see an inch in front of your face. You know that if you can figure out how far the gap is you can easily adjust your jump strength to land perfectly on the other side. The other side is only one inch long so you have to be perfect. To help you out, you summon the power of jacobe johnson and he tells you two things: He’s attached an 80 foot long rope to each side of the gap and let it hang.\nThe middle of the hanging rope is ten feet above the ground",
    "Enter how wide the gap is",
    "",
    "/riddles/RyanQuinlan.png"
  ),

  riddle1112: new RiddleData(
    [
      "One guard always lies, one guard always tells the truth, you don't know which guard is who",
      "You don't know which guard is guarding the correct path",
      "You can only ask one question to figure out which path is to freedom",
    ],
    "Thomas Boyer",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for being able to dunk once in your life, and your will to win. We once heard you owed money for rent, but refused to pay those suckers and eventually didn't have to pay, amazing.",
    "A man named Tommy is lost in the forest, he swear he knew better than Google Maps, but to his disappointment he is definitely lost. He comes upon a fork in the forest, with a sign that says “one leads to freedom, one leads to death”, in front of each path is a guard. The sign says that “one of them always lies” and “one of them always tells the truth”, what question can you ask that only ONE guard that guarantees your freedom.",
    "Since this riddle answer is a phrase, call Danny when you think you have the answer.",
    "",
    "/riddles/ThomasBoyer.png"
  ),
  riddle9976: new RiddleData(
    [
      "The speeds of each person are: 1 minute, 2 minute, 5 minute, 10 minute",
      "Only two people can cross the hallway at the same time",
      "Both people cross the hallway at the same speed of the slowest person",
      "You can only cross the hallway if you have the lantern",
      "Everyone must be across the hallway in 17 minutes",
    ],
    "Samuel Berry",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your persistence and consistency. We once heard your car was stolen and then found later on, after retrieving the car and cleaning it up, you still left your keys in the car unlocked. Damn that takes some balls.",
    "Sam is called into work at Rochester, he takes the plane over and lands safely. But something is off. He goes into his work but when he gets there he sees 25 hungry ass zombies. Oh shit. He starts running away and runs into three of his coworkers further down the hall. Sam knows if he can get across the hall they can shut the door and lock the  zombies out. Luckily the zombies are very slow, unluckily his coworkers aren’t as fast as him. All of a sudden the hallway starts collapsing into the inferno of the earth's core below. It’s barely still standing. The hallway can only support two people at once. Even worse, the lights are out, making it pitch black, only sams thoughtful coworker thought to bring a lantern. The zombies will reach the hallway in 17 minutes. Sam can cross the hallway in 1 minute, and the other coworkers can cross the hallway as follows, 2 minutes, 5 minutes, and ten minutes. How can you cross the hallway in 17 minutes?",
    "Enter who crosses the bridge followed by a ':' use commas for more than one person crossing. For example 1,3: 1 (this matches the example above).",
    "Example: Person 1 and person 3 cross the hallway together and it takes 5 minutes, person 1 runs back with the lantern and that takes 1 minute. Equaling a total of 6 minutes so far."
  ),
  riddle2123: new RiddleData(
    [
      "The scale has two sides and can only tell you if one side is lighter or heavier or the same",
      "You must guarantee you know which ball is the lightest (no getting lucky)",
    ],
    "Sagin Hunsaker",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your decisive decision making, and confidence. We hear you were able to date, get married, have two children, move and move back all in under 3.5 years. And you didn’t even break a sweat.",
    "You’re walking with your wife and children through a beautiful meadow, you are relaxing and having a good time, but something is following you and you can feel it deep down.It’s been weeks since you left your hometown, the world isn’t the same anymore after Death himself took over. Somehow Death was able to be everywhere all at once killing millions. You only escaped because your father Nate fought Death off before dying himself. You miss him. No time thinking about that now. You get everyone moving and you come across a massive river. The river is moving quickly you know if anyone falls in it’s over. Even though it’s been relatively quiet the last few weeks, there is something eerie about today. Although the sun and plants and flowers are beautiful, the shadows are slightly deeper. “Keep going” you tell yourself. That’s when you see it. You can’t think of anything else better to call Death than “it”. It’s definitely not human. Death has long slender like arms, a wide grin, and shadow like features. No time to think anymore, you yell and start running. Death follows closely, easily keeping up, as if it likes the chase. It’s pointless running, you don’t even know if Death needs to breathe! With the river to your left and dark woods to your right you realize you have to fight. You look at hailey, “If I die you have to keep going”. You turn around, scared but ready to fight Death. But with what? Your bare hands? “Sagin!”, who said that? You look right and it’s Nate, a floating blue form hovering three inches above the ground. “Take this”, you look and he’s holding a gleaming silvery blue sword, about 6 feet in length. With no time to think you take the sword, right in time, Deaths hammer comes flying in and you’re able to parry and side step the blow. Death didn’t seem fazed that you had a glowing sword, it only made him smile even more. A flurry of hammer strikes came quickly, each one getting closer and closer to striking. And then it did. A solid hit directly to your right leg. You wince in pain falling to the floor. It’s over. Right before Death swings his hammer to end you he stops. “I’m not going to kill you, not unless you can’t help me”. You’re stunned, how could you help him? “I can’t solve this riddle and it’s been driving me crazy” Death said. WTF? You don’t usually swear but WTF? Solve this riddle and you will not only save your family, but the world itself.There are twelve dark balls each one weighs 1000000 pounds, except one of them that weighs 1 pound less. Death pulls out a scale and says “You must figure out which ball is slightly lighter than the rest”, “and you must do by only using the scale three times”",
    "When you think you know the answer, tell Audra your solution. If you're right she will give you the password.",
    ""
  ),
  riddle2351: new RiddleData(
    [
      "Each side of the gap is 50 feet tall",
      "The rope is 80 feet long",
      "Each end of the rope is attached to the sides of the gap",
      "The middle of the hanging rope is 10 feet above the floor",
    ],
    "Ryan Quinlan",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your knowledge and quick thinking. We once heard you were able to summon the powers of the unknown god Jacobe Johnson and easily win a game of basketball ripstick gladiator. Impressive.",
    "You’re trying to jump across an unknown gap, you know this gap is here but you can’t see it because there is A LOT of fog. If you fall you will plummet 50 feet to your death. You can’t even see an inch in front of your face. You know that if you can figure out how far the gap is you can easily adjust your jump strength to land perfectly on the other side. The other side is only one inch long so you have to be perfect. To help you out, you summon the power of jacobe johnson and he tells you two things: He’s attached an 80 foot long rope to each side of the gap and let it hang.\nThe middle of the hanging rope is ten feet above the ground",
    "Enter how wide the gap is",
    "",
    "/riddles/RyanQuinlan.png"
  ),
  riddle1792: new RiddleData(
    [
      "Each side of the gap is 50 feet tall",
      "The rope is 80 feet long",
      "Each end of the rope is attached to the sides of the gap",
      "The middle of the hanging rope is 10 feet above the floor",
    ],
    "Ryan Quinlan",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your knowledge and quick thinking. We once heard you were able to summon the powers of the unknown god Jacobe Johnson and easily win a game of basketball ripstick gladiator. Impressive.",
    "You’re trying to jump across an unknown gap, you know this gap is here but you can’t see it because there is A LOT of fog. If you fall you will plummet 50 feet to your death. You can’t even see an inch in front of your face. You know that if you can figure out how far the gap is you can easily adjust your jump strength to land perfectly on the other side. The other side is only one inch long so you have to be perfect. To help you out, you summon the power of jacobe johnson and he tells you two things: He’s attached an 80 foot long rope to each side of the gap and let it hang.\nThe middle of the hanging rope is ten feet above the ground",
    "Enter how wide the gap is",
    "",
    "/riddles/RyanQuinlan.png"
  ),
};
