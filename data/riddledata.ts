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
    "Enter who crosses the bridge followed by a ':' use commas for more than one person crossing. Put the faster person first if two people crossing. For example 1,3: 1 (this matches the example below).",
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
    "Kyle Rohmer",
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
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your kindness and loyalty. We once heard you were strapped up like a cow and pulled back and forth. For about 10 minutes. After this you still stayed friends with your wranglers. That's friendship.",
    "You have two buckets, one can hold 3 gallons of water and the other can hold 5 gallons of water. The water boy named Kyle needs exactly four gallons of water to give to his thirsty players that he bows down to. The two buckets are misshapen though, so you can’t fill it half way and be sure it’s half.",
    "Once you think you know the answer, text or call Danny and he will give you the password.",
    "",
    "/riddles/KyleQuinlan.png"
  ),
  //answer -23,05,37,63,26. 108
  riddle2621: new RiddleData(
    [
      "You can only move a penny and a quarter together at the same time (you can’t change their order once you start moving them).",
      "Once you are done moving a penny and quarter, that penny and quarter must be touching another coin.",
      "You have to do this in 5 moves, always moving a penny and quarter (together, RULE 1)",
    ],
    "Jan Boermann",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your high speed leg tapping and quick maneuverability. We once heard you went on a date with a girl and didn’t speak her language… but still got the girl. Impressive.",
    "You have three quarters and two pennies. They are in a line alternating, starting with a quarter. They are all touching. You must end up with three quarters and two pennies, in a line touching.",
    "Imagine a line of numbers, starting at -20 and ending at 20. The first coin is at -2 the last coin at 2. Everytime you move two coins, write down the start and end of the move (use the left coin as reference). The answer to the puzzle is the five moves added together.",
    "Example input: I move first quarter to spot 3 = -23. If I moved the two coins back the moves would be -23,3-2. Add those together and you get -22 as the answer.",
    "/riddles/janboermann.png"
  ),
  riddle1229: new RiddleData(
    [
      "You can only move one quarter at a time",
      "When you move a quarter it must be touching two other quarters when you let go",
      "You can’t push quarters around with the quarter you’re moving",
      "You must do this in 5 moves and in the most optimzed way",
      "It must end in a straight horizontal line",
      "There are no 'tricks' to this (it's not a trick question)",
    ],
    "Jaden Hunsaker",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your humility and your drive to do anything to win. We once heard you entered a march madness tournament but didn’t want to boast about how good you are, so instead you entered your son and purposely ‘lost’ and let him win. Kept the money in the family,stayed humble, and still won. Genius.",
    "You have four quarters in a specific starting shape. You must move these four quarters one at a time until they are in a straight horizontal line. You must do this in 5 moves or less.",
    "Starting with the top coin as 1 move clockwise and assign each coin a number. e.g 1,2,3,4. When you move a coin add that to the total. For example if I move the top coin then the right coin the total is 3 so far. Enter the most optimized 5 moves you can do",
    "Another Example: I move the left coin(4) then I move the right coin(2) then the top coin(1) then the left coin again(4) and then the bottom coin(3) for a total of 14. That is what you input.",
    "/riddles/jadenhunsaker.png"
  ),
  riddle0102: new RiddleData(
    [
      "Each ant can walk 1 meter per minute.",
      "Each tube is 1 meter long.",
      "There are hundreds of ants in the tubes and they can start anywhere.",
      "If an ant runs into another ant in the tube, they will bump heads and switch directions going backwards.",
      "If an ant comes into a cross section it will choose randomly to go left, right, or forwards.",
      "If an ant hits a dead end, it will turn around.",
      "An ant can only turn around if it hits another ant or a dead end.",
      "Picture of ant farm below.",
    ],
    "Brody Smith",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your agility and reaction time. We once heard while playing volleyball you jumped up at the net to block a spike. Instead of blocking the spike however, you faked a block with your right and spiked the spike back with your left hand. It barely even makes sense to read but it happened.",
    "Brody being a loving guy, loves all kinds of animals. This is what encouraged him to buy an ant farm. He has had his ant farm for a while now though, and needs to clean up the tubes. But Brody procrastinated like a bad little bitch boy and now if he doesn’t get the ants out of the tube in five minutes, they will all die from the toxic fumes in the tube. Luckily brody also loves to suck things and has two vacuum tubes. He can place them anywhere in the ant farm to suck up an ant that walks pass. The problem is he has to suck up ALL the ants in under five minutes, so where he places the vacuums is important. ",
    "Where do you place your two tubes? Enter the sum of those tubes.",
    "Example: if you choose 1 and 2 to place your tubes, enter 3 as the answer.",
    "/riddles/brodysmith.png"
  ),

  riddle1112: new RiddleData(
    [
      "You must entrance at the top left.",
      "You must exit at the bottom right.",
      "You must visit each bull once.",
      "Once you visit a bull, you can’t go back to that cage ever. The bulls are SUPER horny.",
      "The top left entrance does not have a bull in it.",
    ],
    "Jackson Boyer",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your bull-like charge and incredible strength. It doesn’t matter what sport you’re playing, you always find a way to charge head first. We once heard you were playing a game of basketball and sacrificed your body to save the ball, and in the process obliterated a fence. We need that energy.",
    "Jackson loves animals, specifically bulls. Without understanding why or how, he just feels connected to the large animals. Jack owns 15 bulls and puts each one of them in their own beautiful cages, his fear is they might hurt each other otherwise, they are very horny bulls. Can’t stress this enough, Jack feels connected to these animals. One day while Jack is out and about he hears a scream. It’s a damsel in distress! To save her he must cross all of the cages his bulls are in, it’s the only way. The cages are in a 4 by 4 pattern with the entrance at the top left and the exit at the bottom right. You must navigate through these cages to save the damsel. There is a problem though, once you enter a cage, you can’t go back as the horny bulls would be ready this time. Also, your bulls are hungry for their grub, so you must feed each one along the way. Luckily for you, the first cage does not have a bull in it. How can you visit each bull only once and still exit to save the Damsel?",
    "Assume the cages are labeled 1 - 16 from top left to right. Enter the route you took separated by commas",
    "Example input: 1,2,3,4,5",
    "/riddles/jacksonboyer.png"
  ),
  riddle9976: new RiddleData(
    [
      "The combo requires 3 numbers in increasing or equal order.",
      "The thugs can give three hints.",
      "Sydney will escape as soon as she can guarantee she knows the combo lock.",
      "First Hint: The product of the three numbers is 36.",
      "Second Hint:  The sum of the three numbers is the same as Sydney's favorite number.",
      "Third Hint: The largest number is unique.",
      "You don’t know sydneys lucky number",
    ],
    "Zac Packer",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your large calves and spiking ability. We once heard you spiked a volleyball so hard it ceased to have velocity and teleported into the enemies team's face. Although the game stopped because of it, it was still an incredible feat of strength.",
    "You are with your girlfriend Sydney who is a perfect logician. A group of thugs approaches and somehow, amazingly, we really don’t know how, captures YOU and syd and throws you into a makeshift prison with a combo lock on both of your hands. You hear them talking and planning on killing you tomorrow morning. While you’re waiting, you also hear them say “the combo lock passwords are the same”. They come into the prison a few moments later and say they will free one of you if you can solve a puzzle. Knowing Sydney is a perfect logician, you both agree she should try the puzzle. With both of your hands tied and mouths duck taped they say they will give Sydney at most three hints to escape. The puzzle starts like this, the combo lock requires three numbers in increasing order. This means 1,1,1 is valid. 1,2,4 is valid. But 1,21 is not valid. The first hint is: The product of the three numbers is 36. Sydney thinks for a second then motions for the second hint. The second hint is: The sum of the three numbers is the same as Sydney's favorite number (these thugs did their research). Sydney thinks again but still motions for the third hint. The third hint is: The largest number is unique. With that, sydney unlocks the combo and runs away. Without knowing sydneys lucky number, what is the combo lock combination?",
    "What is the combo lock combination?",
    "Enter the combo separated by commas."
  ),
  riddle2123: new RiddleData(
    [
      "You need to cross the river and can do so when it is half full of lily pads.",
      "A lily pad duplicates every 5 seconds.",
      "At 9500 seconds, the river completely full of lily pads",
    ],
    "Ty Siepert",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your perseverance and will toughness. We once heard, for no reward or prize, you stuck your face in snow for over 15 seconds just to win. We need that.",
    "Ty loves going outdoors with his dog, the beautiful scenery is amazing and to die for. He comes across a river with a lily pad in it, and needs to cross the river. However there are not enough lily pads to jump across. All of a sudden, the lily pad duplicates and another pad appears. Now there are two lily pads. You realize you can cross the river when it is half full with lily pads. If a lily pad duplicates every 5 seconds and the river is full at 9500 seconds, at what time can you cross the river?",
    "Enter the time at which you can cross.",
    ""
  ),
  riddle2351: new RiddleData(
    [
      "Each plane has enough fuel to cross half the world.",
      "Your plane must circle the world without ever turning directions or stopping.",
      "Planes can refuel each other instantly while flying, but they must be next to each other.",
      "No planes can run out of fuel in mid air.",
      "Planes can only land, refuel, and take off from the starting airport.",
    ],
    "Jameson Boyer",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your speed and positivity. We’re in desperate need of good vibes, and we recently heard a story proving that you can bring it. You were once asked to run a ball up a field while being hit by a bunch of men's sticks, even with all of these sticks in your face, you still made it and delivered the ball. Bravo.",
    "Jamo is speed, jamo loves speed. His favorite movie growing up was Lightning mcqueen. Because of this you were awarded three extremely fast planes, built by the famous engineer DANIEL BOYER. To prove you’re the best, your goal is to fly around the world without ever leaving the plane. The problem is your plane only makes it halfway before running out of gas. Luckily the two other planes you have can be put to use. Each plane is able to refuel another plane instantly, and in the air. All planes can only take off, refuel, and land at the same starting airport. With your two trusty sidekicks tommy and jack, you embark to be the first in the world to achieve this feat. It is important your sidekicks survive too, so they also must land safely at the airport. So how do you do it?",
    "Enter the amount of times a plane lands and takes off and refuels another plane (don't count refueling at the airport). Also this must be optimized: optimized = lowest number.",
    "Example: 2 planes take off, one refuels another, and two planes land = 5"
  ),
  riddle0291: new RiddleData(
    [
      "There is an unknown amount of money in each chest. All three add to 30.",
      "Each chest must have at least 2 dollars in it.",
      "One chest must have 6 dollars more than another.",
      "If your guess for a chest is less than or equal to the amount in the chest, you win the amount of money you guessed.",
      "If your guess is greater, you earn nothing.",
    ],
    "David Heredia",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your discipline and imagination. We once heard someone walked in on you practicing your viola without a viola, only the air. Now that’s discipline.",
    "Late at night David hears a crash in his house, he jumps out of bed holding his viola as a weapon. He sees that 30 dollars have been stolen from him and he’s absolutely pissed. He runs outside and sees a man giggle then fly away into the sky. That was really weird. The next day the giggling man comes back and says “I’ll give you some of your money back if you play this game with me”. The giggly man pulls out three chests and hides some of the money in each one. He says you are allowed to write three numbers on each chest, if the number is equal to or below the amount of money in the chest you earn the amount you wrote. If it is over the amount in the chest, you earn nothing. However, the giggly man says each chest will have at least two dollars in it, and one of them must have 6 more dollars than the other. What 3 numbers should you write to guarantee the most money back?",
    "Enter the three numbers you should write separated by commas",
    "Example: 2,2,2"
  ),
  riddle1792: new RiddleData(
    [
      "You can guess at most 7 times.",
      "The cloaked figure will tell you if your guess is lower,higher, or correct.",
      "10 dollars for a correct guess.",
      "-5 dollars for 8 or more incorrect guesses in a row.",
    ],
    "Carter Binks",
    "You have been personally selected to be included in the 2023 Bachelor Bowl Draft. This formal invitation is letting you know the draft will happen August 11th at 8am. After the draft we will begin the SBB (Super Bachelor Bowl). You have been selected for your work ethic and dicispline. We were told that when choosing a job you always decide on the job that is between the hours of 12-9 AM and involves snow. To be specific, shoveling snow off old main at 4am, and driving a CAT grooming runs. Damn.",
    "A random guy named Carter was heavily addicted to gambling. The thrill of winning was too much to stop. A cloaked figure approached him and offered him a chance at some money. He said I am thinking of a number between 1 and 100, if you can guess my number in 7  moves or less I will give you 10 dollars. After every guess I will tell you if it’s lower or higher. If you don’t guess it after 7 moves you owe me 5 dollars. Wanna play? Carter thinks and thinks, but before he can think about a solution he says yes. Gambling really took a hold of this guy. If you played this game 13 times, how much money would you earn/lose on average?",
    "Enter the average amount earned per game, up to two decimal points.",
    ""
  ),
};
