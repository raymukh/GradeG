
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'She ... at me',
        choice1: 'Smile',
        choice2: 'Smiles',
        choice3: 'Is smiles',
        choice4: "is smile",
        answer: 2,},
        {
        question:'Last month, I left Lombok Island, I ... there with a group of my school mates.',
        choice1: 'Go',
        choice2: 'Went',
        choice3: 'Going',
        choice4: "Gone",
        answer: 2,},
    {
        question: 'Complete the sentence! There was ... of the students from the class.',
        choice1: 'Come',
        choice2: 'Somes',
        choice3: 'Some',
        choice4: "Comes",
        answer: 3,},
        {
        question: 'Complete the sentence! Ben was not at school last Friday, ... he was ill.',
        choice1: 'Cuz',
        choice2: 'Because',
        choice3: 'So',
        choice4: "bakecause",
        answer: 2,},
        {
        question: 'The person ... you met this morning was my uncle.',
        choice1: 'Who',
        choice2: 'Whom',
        choice3: 'That',
        choice4: "Which",
        answer: 2,},
        {
        question: 'I ... to my uncle’s house in Batam last month on a long holiday.',
        choice1: 'Went',
        choice2: 'Goes',
        choice3: 'Go',
        choice4: "Want",
        answer: 1,},
        {
        question: 'Complete the sentence! He was a strong and smart …',
        choice1: 'Person',
        choice2: 'Pearson',
        choice3: 'Lego',
        choice4: "Parsen",
        answer: 1,},
        {
        question: 'There is ... new kid in class. His name is Rio.',
        choice1: 'An',
        choice2: 'A',
        choice3: 'The',
        choice4: "Same",
        answer: 2,},
        {
        question: 'Alice saw the old woman... she was crossing the street.',
        choice1: 'When',
        choice2: 'Wheat',
        choice3: 'Whan',
        choice4: "Flan",
        answer: 1,},
        {
        question: 'After I ... the book, I realized that science is useful for humankind.',
        choice1: 'Read',
        choice2: 'Reed',
        choice3: 'Weed',
        choice4: "red",
        answer: 1,},
        {
        question: 'My house _____ a small garden.',
        choice1: 'Has got',
        choice2: 'Have got',
        choice3: 'Is',
        choice4: "was",
        answer: 1,},
        {
        question: '____ a green bag. Her bag is blue.',
        choice1: "She hasn't got",
        choice2: 'Has she got',
        choice3: "She haven't got",
        choice4: "She had got",
        answer: 1,
        },
        {
        question: 'Sam: there are two books on the table? Kim: no there arent. ___ One book. Sam: oh I see.',
        choice1: 'There are',
        choice2: 'There is',
        choice3: 'These are ',
        choice4: "Those are",
        answer: 2,},
        {
        question: 'She always___at 5 AM every day',
        choice1: 'Get up',
        choice2: 'Got up',
        choice3: 'Gotten up',
        choice4: "Gets up",
        answer: 4,},
        {
        question: 'This is Nick and this is Carla._____In my class.',
        choice1: 'They is',
        choice2: 'We are',
        choice3: 'They are',
        choice4: "Them are",
        answer: 3,},
        {
        question: 'You can play tennis on the _______',
        choice1: 'Zoo',
        choice2: 'town square',
        choice3: 'Restaurant',
        choice4: "Sport center",
        answer: 4,},
        {
        question: 'Susan _____ a novel after school every day.',
        choice1: 'Reads',
        choice2: 'Read',
        choice3: 'Is reads',
        choice4: "Is read",
        answer: 1,},
        {
        question: 'They______in a hospital near New York.',
        choice1: 'Work',
        choice2: 'Wax',
        choice3: 'Worked',
        choice4: "Working ",
        answer: 1 ,},
        {
        question: 'We _______ Judo on Saturday evenings',
        choice1: 'Play',
        choice2: 'Go',
        choice3: 'Going',
        choice4: "Do",
        answer: 4,},
        {
        question: 'Ronnie loves playing baseball with_____friends twice a week',
        choice1: 'Him',
        choice2: 'He',
        choice3: 'His',
        choice4: "Her",
        answer: 3,},
        {
        question: 'The students_____English and French at school.',
        choice1: 'Study',
        choice2: 'Studies',
        choice3: 'Studied',
        choice4: "Studying",
        answer: 1,},
        {
        question: 'We do athletics on the athletics_____',
        choice1: 'Pool',
        choice2: 'court',
        choice3: 'Rink',
        choice4: "Track",
        answer: 4,},
        {
        question: 'Its football practice after school. Please take your football______with you.',
        choice1: 'Pitch',
        choice2: 'Boots',
        choice3: 'Track',
        choice4: "Stick",
        answer: 2,},
        {
        question: 'Robbie Dowling wants to win free running competitions. The opposite of win is______.',
        choice1: 'Get',
        choice2: 'Have',
        choice3: 'Champion',
        choice4: "Lose",
        answer: 4,},
        {
        question: 'Ronalds favorite sport is basketball. He plays in the school basketball team. They play basketball every Monday and Wednesday and there are matches every week. How many times does Ronald play basketball?',
        choice1: 'Twice a week',
        choice2: 'Once a week',
        choice3: 'Twice a month',
        choice4: "Three times a week",
        answer: 1,},
        { 
        question: 'Choose the unrelated idea from the paragraph below: My family collects dogs. Last year, we bought a chocolate lab. Sunday we bought a beagle. Next week we will get a bulldog. The spring is approaching. Im in love with smaller dogs.',
        choice1: 'Im in love with smaller dogs',
        choice2: 'My family collects dogs',
        choice3: 'Next week we will get a bulldog,',
        choice4: "The spring is approaching.",
        answer: 4,},
        {
        question: 'My sister and I ___________rabbits and rats.',
        choice1: 'Raise',
        choice2: 'Rise',
        choice3: 'Rice',
        choice4: "Race",
        answer: 1,},
        {
        question: 'Please___________ up straight in your seat.',
        choice1: 'Sat',
        choice2: 'Sit',
        choice3: 'Pat',
        choice4: "Set",
        answer: 2,},
        {
        question: 'Identify the verb in the sentence below: Jaliya hiked five miles on her camping trip.',
        choice1: 'Hiked',
        choice2: 'Hicked',
        choice3: 'Miles',
        choice4: "Trip",
        answer: 1,},
        {
        question: 'Jessica _______ always gotten good grades.',
        choice1: 'Have',
        choice2: 'Has',
        choice3: 'Will',
        choice4: "Never will",
        answer: 2,},
        {
        question: 'My brother ____ going to be six years old tomorrow.',
        choice1: 'is',
        choice2: 'Am',
        choice3: 'Are',
        choice4: "Wont",
        answer: 1,},
        {
        question: 'Find the correct sentence:',
        choice1: 'Atleast i could save alot of money.',
        choice2: 'At least I could save a lot of money.',
        choice3: 'Atleast I could save a lot of money.',
        choice4: "At least I could save lot of money.",
        answer: 2,},
        {
        question: 'Which sentence is correct?',
        choice1: 'Andy wants to go to collage.',
        choice2: 'Kallie has applied for colege.',
        choice3: 'Joe is not certain which college to select.',
        choice4: "Brian does not want to go to colage.",
        answer: 3,},
        {
        question: 'If ___________ waiting me to buy ____________ old car, _____________ going to have to wait a long time.',
        choice1: 'your/your/your',
        choice2: 'youre/youre/your',
        choice3: 'youre/your/youre',
        choice4: "your/youre/your",
        answer: 3,},
        {
        question: 'Which is spelled correctly?',
        choice1: 'Potential',
        choice2: 'potentiel',
        choice3: 'potensial',
        choice4: "potentiall",
        answer: 1,},
        {
        question: 'Yesterday was my birthday. When I woke up, I noticed my brother Josh hung up a big sign that said,"Happy Birthday, Charles!" Mom made spaghetti for dinner. Its my favorite food in the whole world. My friend Dave came over and handed me a wrapped gift. I wondered what it was. It was a new basketball! I had a great day. What is the main idea of this paragraph?',
        choice1: 'Josh got lots of gifts',
        choice2: 'Charles got a lot of gifts',
        choice3: 'Charles had a great birthday',
        choice4: "Josh had a great birthday",
        answer: 3,},
        {
        question: 'The definition for the stem SUB is:',
        choice1: 'under',
        choice2: 'over',
        choice3: 'behind',
        choice4: "above",
        answer: 1,},
        {
        question: 'Which sentence contains a misplaced modifier?',
        choice1: 'While on its way to Jupiter, the Starship Enterprise flew through a powerful dust storm.',
        choice2: 'The spaceship will orbit Jupiter for six months.',
        choice3: 'The spaceships warriors battled the Klingon Empire for many years.',
        choice4: "The grateful soldier relaxed after years of battle in his living room.",
        answer:4,},
    {
        question: 'Which of the following is a fact?',
        choice1: 'Wild cats are the most beautiful animals in the world.',
        choice2: 'A cheetah is the worlds fastest animal.',
        choice3: 'A jaguar is sneaky.',
        choice4: "The lion is truly the king of the beasts.",
        answer: 2,},
        {
        question: 'Read the sentence and choose the answer that identifies the type of sentence: The clocks minute hand is moving, but the second hand has stopped.',
        choice1: 'simple sentence',
        choice2: 'compound sentence',
        choice3: 'complex sentence',
        choice4: "compound-complex sentence",
        answer: 2,},
        {
        question: 'Find the adverb in the following sentence. After the game, the disappointed players shook their heads sadly but refused to accept defeat.',
        choice1: 'disappointed',
        choice2: 'sadly',
        choice3: 'After',
        choice4: "shook",
        answer: 2,},
        {
        question: 'Old and in very bad condition. Which of the words below matches the above definition?',
        choice1: 'timid',
        choice2: 'effective',
        choice3: 'feeble',
        choice4: "dilapidated",
        answer: 4,},
        {
        question: 'A story that someone tells about their own life is known as a',
        choice1: 'biography',
        choice2: 'autobiography',
        choice3: 'fable',
        choice4: "fiction",
        answer: 2,},
        {
        question: 'That stupid laugh of hers can absolutely drive everyone up the wall. We cant stand it! What does the idiom DRIVE UP THE WALL mean?',
        choice1: 'Make crazy',
        choice2: 'Make happy',
        choice3: 'Make sad',
        choice4: "Make a car drive vertically up a wall",
        answer: 1,},
        {
        question: 'Identify the part of speech of the word that appears in all caps in the sentence below. The police ran AFTER the thief.',
        choice1: 'interjection',
        choice2: 'conjunction',
        choice3: 'preposition',
        choice4: "verb",
        answer: 3,},
        {
        question: 'Which sentence contains correct capitalization?',
        choice1: 'Why dont we get together to watch the Super Bowl?',
        choice2: 'why dont we get together to watch the Super Bowl?',
        choice3: 'Why dont we get together to watch the super bowl?',
        choice4: "why dont we get together to watch the super bowl?",
        answer: 1,},
        {
        question: 'To see or form a mental image of',
        choice1: 'dream',
        choice2: 'visualize',
        choice3: 'focus',
        choice4: "concept",
        answer: 2},
        {
        question: 'Which of the following sentences is correctly punctuated?',
        choice1: 'Everyone has special skills some people use them very well.',
        choice2: 'Everyone has special skills; some people use them very well.',
        choice3: 'Everyone has special skills and, some people use them very well.',
        choice4: "Everyone has special skills; and, some people use them very well.",
        answer: 2,},
        {
        question: 'Identify the pronoun in the following sentence. She was afraid of Hurricane Sandy.',
        choice1: 'Sandy',
        choice2: 'She',
        choice3: 'Hurricane',
        choice4: "afraid",
        answer: 2,},
        {
        question: 'Once upon a time there were three little pigs who each had homes of their own. The first little pig had a home built out of sticks. The second little pig had a home built out of straw. The third little pig was a very smart and thoughtful pig. He thought his brothers were silly for building their homes out of such weak materials. Knowing safety was of the utmost importance, the third little pig built his house out of bricks. What type of narrator does this passage have?',
        choice1: 'first person',
        choice2: 'second person',
        choice3: 'third person limited',
        choice4: "third person omniscient",
        answer: 3,},
        {
        question: 'In poetry, repetition is the recurrence of the same:',
        choice1: 'word only',
        choice2: 'phrase only',
        choice3: 'sound only',
        choice4: "word, phrase or sound",
        answer: 4,},
        {
        question: 'Mr. Hendrick told them not to mix the chemicals, but Sam and Mark never listened to Mr. Hendrick. After all, he was always telling them not to do this or not to do that. Now that the classroom had been destroyed, both of the boys wished that this time they had listened to Mr. Hendrick. What was the effect of the boys not listening to Mr. Hendrick about the chemicals?',
        choice1: 'The boys decided to listen in the future',
        choice2: 'The boys got a bad grade in chemistry, causing them to fail.',
        choice3: 'Mr. Hendrick taught the boys lab safety',
        choice4: "The boys mixed the chemicals, causing an explosion.",
        answer: 4,},
        {
        question: 'What is the structure of the sentence below? Until we get some light, it will be difficult to find the stone.',
        choice1: 'simple',
        choice2: 'complex',
        choice3: 'compound-complex',
        choice4: "compound",
        answer: 2,},
        {
        question: 'Tanner felt remorse after he stole the cookie from the jar. Which definition best fits the word "remorse"?',
        choice1: 'happy',
        choice2: 'unphased',
        choice3: 'regret',
        choice4: "anxious",
        answer: 3,},
        {
        question: 'Where should you insert a comma (or commas) in the following sentence? My doctor who Ive been seeing since I was born is going to retire.',
        choice1: 'After "My doctor"',
        choice2: 'Before "since I was born"',
        choice3: 'Around "who Ive been seeing since I was born"',
        choice4: 'Before "is going to retire"',
        answer: 3,},
        {
        question: 'Which of the following words is spelled incorrectly?',
        choice1: 'campain',
        choice2: 'voltage',
        choice3: 'torelance',
        choice4: "acknowledgement",
        answer: 1,},
        {
        question: 'Movie theater is to cinema as school is to',
        choice1: 'politics',
        choice2: 'malady',
        choice3: 'academy',
        choice4: "architecture",
        answer: 3,},
        {
        question: 'How do you change the noun skirmish to plural?',
        choice1: 'add s',
        choice2: 'add ed',
        choice3: 'add es',
        choice4: "add ing",
        answer: 3,},
        {
        question: 'The father mentioned that it was a bog outside and the roads were a torrent. What did he mean?',
        choice1: 'There was a tornado outside',
        choice2: 'Monsters were everywhere',
        choice3: 'It was ugly and flooded outside',
        choice4: "The neighbors were throwing a loud party",
        answer: 3,},
        {
        question: 'Where is the main idea usually found in a paragraph',
        choice1: 'in the last sentence',
        choice2: 'in the first word',
        choice3: 'in the second sentence',
        choice4: "in the first sentence",
        answer: 4,},
        {
        question: '"Cruel kindness" is an example of which type of figurative language?',
        choice1: 'oxymoron',
        choice2: 'hyperbole',
        choice3: 'idiom',
        choice4: "personification ",
        answer: 1,},
        {
        question: '"Absolutely unsure" is an example of which figurative language?',
        choice1: 'idiom',
        choice2: 'oxymoron',
        choice3: 'hyperbole',
        choice4: "personification",
        answer: 2,},
        {
        question: '"A fine mess" is an example of which type of figurative language?',
        choice1: 'oxymoron',
        choice2: 'idiom',
        choice3: 'simile',
        choice4: "metaphor",
        answer: 1,},
        {
        question: '"Smart as a whip" is an example of what type of figurative language?',
        choice1: 'personification',
        choice2: 'simile',
        choice3: 'metaphor',
        choice4: "hyperbole",
        answer: 2,},
        {
        question: 'Poetry is a type of writing that uses figurative language to',
        choice1: 'create images and ideas.',
        choice2: 'appeal to the five senses.',
        choice3: 'appeal to emotions.',
        choice4: "all of the above",
        answer: 4,},
        {
        question: '"Hiss" is an example of what type of figurative language?',
        choice1: 'hyperbole',
        choice2: 'onomatopoeia',
        choice3: 'metaphor',
        choice4: "simile",
        answer: 2,},
        {
        question: 'Which of the following sentences contains imagery?',
        choice1: 'I told Charlie I had a lot of homework to do.',
        choice2: '"It was nice to see you again," Jacob said.',
        choice3: 'I opened my eyes and looked around.',
        choice4: "I could hear the waves crashing against the rocks somewhere nearby",
        answer: 4},
        {
        question: 'Which of the following sentences does NOT contain an idiom?',
        choice1: 'A dog ran after a rabbit',
        choice2: 'Those cards are a dime a dozen.',
        choice3: 'Dont count your chickens before they hatch.',
        choice4: "Its raining cats and dogs out there.",
        answer: 1,},
        {
        question: 'When two or more words have the same ending sound such as "flight" and "sight," what is it called?',
        choice1: 'alliteration',
        choice2: 'rhyme',
        choice3: 'rhythm',
        choice4: "assonance",
        answer: 2,},
        {
        question: 'Adverbs modify:',
        choice1: 'nouns',
        choice2: 'nouns and pronouns',
        choice3: 'only adjectives and verbs',
        choice4: "adjectives, verbs, and other adverbs",
        answer: 4,},
        {
        question: 'Adverbs answer all of the following questions except:',
        choice1: 'To what extent?',
        choice2: 'Which one?',
        choice3: 'When?',
        choice4: "Where?",
        answer: 2,},
        { 
        question: 'Find the adverb in the following sentence.  After being sick all week, I feel well.',
        choice1: 'feel',
        choice2: 'well',
        choice3: 'After',
        choice4: "being",
        answer: 2,},
        {
        question: 'Find the adverb in the following sentence.  Our family went outside to enjoy the sunny weather.',
        choice1: 'sunny',
        choice2: 'weather',
        choice3: 'outside',
        choice4: "Our",
        answer: 3,},
        {
        question: 'Find the adverb in the following sentence.      She ran happily along the path.   She ran happily along the path.',
        choice1: 'she',
        choice2: 'ran',
        choice3: 'along',
        choice4: "happily",
        answer: 4,},
        {
        question: 'Find the adverb in the following sentence.    My brother quickly hid his drawing in his math book.',
        choice1: 'brother',
        choice2: 'quickly',
        choice3: 'his',
        choice4: "in",
        answer: 2,},
        {
        question: 'Find the adverb in the following sentence.    After the game, the disappointed players shook their heads sadly but refused to accept defeat.',
        choice1: 'disappointed',
        choice2: 'sadly',
        choice3: 'after',
        choice4: "shook",
        answer: 2,},
    {
        question: 'Find the adverb in the following sentence.     We finally arrived at the restaurant, and the pizza was delicious.',
        choice1: 'finally',
        choice2: 'arrived',
        choice3: 'delicious',
        choice4: "the",
        answer: 1,},
        {
        question: 'Find the adverb in the following sentence.              Sometimes we like to eat Chinese food.',
        choice1: 'Chinese',
        choice2: 'sometimes',
        choice3: 'like',
        choice4: "food",
        answer: 2,},
        {
        question: 'Find the adverb in the following sentence.           Grandma walked quietly through the door.',
        choice1: 'quietly',
        choice2: 'Grandma',
        choice3: 'walked',
        choice4: "through",
        answer: 1,},
        {
        question: 'Which sentence contains a dangling modifier?',
        choice1: 'The hunger strike protests our cafeteria food.',
        choice2: 'Dougs mom hung on the wall her favorite painting.',
        choice3: 'The new sports car was stolen from the parking lot.',
        choice4: "Our cat likes to play with the dog next door.",
        answer: 2,},
        {
        question: 'Which group are abstract nouns?',
        choice1: 'sadness, loyalty, trust',
        choice2: 'sadly, loyally, trustworthy',
        choice3: 'flock, gaggle, crowd',
        choice4: "wriggle, twist, shuffle",
        answer: 1,},
        {    question: 'Choose the correct possessive to fill in the blank.        Their names are Mr. Andrade, Mrs. Roby, and Miss Johnson.',
        choice1: 'tecahers',
        choice2: 'taechers',
        choice3: 'teacherss',
        choice4: "teachers",
        answer: 4,},
        {
        question: 'Identify the part of speech of the word that appears in all caps in the sentence below.          The police ran AFTER the thief.',
        choice1: 'interjection',
        choice2: 'conjunction',
        choice3: 'preposotion',
        choice4: "verb",
        answer: 3,},
        {
        question: 'Which sentence has a direct and indirect object?',
        choice1: 'Parker built his brother a tree house.',
        choice2: 'Edna makes cookies for the holidays.',
        choice3: 'Children rip open their gifts when they get them.',
        choice4: "Michael ate his Brussels sprouts for dinner.",
        answer: 1,},
        {
        question: 'Choose the correct possessive to fill in the blank.       The dog played with the  __________ shoe.',
        choice1: 'babys',
        choice2: 'babyes',
        choice3: 'bays',
        choice4: "babyss",
        answer: 1,},
        {
        question: 'What is the correct way to write the following sentence?         The young girl was walking the dog in a red skirt.',
        choice1: 'The young girl walked the dog wearing a red skirt.',
        choice2: 'The young girl in a red skirt was walking the dog.',
        choice3: 'The young girl walked the dog while wearing a red skirt.',
        choice4: "The young girl walked the dog. She wore a red skirt.",
        answer: 2,},
        {
        question: '_________ Henry wanted to join the Army, he had to take a series of tests.',
        choice1: 'Because',
        choice2: 'And',
        choice3: 'Then',
        choice4: "During",
        answer: 1,},
        {
        question: 'Choose the correct possessive to fill in the blank.         I work at my  _________ store every evening.',
        choice1: 'mommys and dadss',
        choice2: 'moms and dads',
        choice3: 'mom and dads',
        choice4: "moms and dads",
        answer: 3,},
        {    question: 'The lack of rain  ______ affect the pecan trees.',
        choice1: 'can',
        choice2: 'may',
        choice3: 'Pecan',
        choice4: "Farm",
        answer: 2,},
        {
        question: 'Choose the best pronoun to fill in the blank.      Give the candy to John and __________ .',
        choice1: 'they',
        choice2: 'me',
        choice3: 'I',
        choice4: "we",
        answer: 2,},
        {
        question: 'Which word in the sentence below is a coordinating conjunction?              Jason finished his research paper on time, yet he turned it in late.',
        choice1: 'on',
        choice2: 'it',
        choice3: 'his',
        choice4: "yet",
        answer: 4,},
        {
        question: 'Which sentence is capitalized correctly?',
        choice1: 'The planet nearest the sun is mercury.',
        choice2: 'The Planet nearest the Sun is Mercury.',
        choice3: 'The Planet nearest the Sun is Mercury.',
        choice4: "The planet nearest the Sun is Mercury.",
        answer: 4,},
        {
        question: 'Which sentence contains correct capitalization?',
        choice1: "Why don't we get together to watch the Super Bowl?",
        choice2: 'why dont we get together to watch the Super Bowl?',
        choice3: 'Why dont we get together to watch the super bowl?',
        choice4: "why dont we get together to watch the super bowl?",
        answer: 1,},
        {
        question: 'Which sentence uses commas correctly?',
        choice1: 'Will your dad drive us to the museum, or shall we take a bus?',
        choice2: 'Will your dad, drive us to the museum or, shall we take a bus?',
        choice3: 'Will your dad drive us to the museum or, shall we take a bus?',
        choice4: "Will your dad, drive us to the museum, or shall we take a bus?",
        answer: 1,},
        {
        question: 'Choose the words that should be capitalized in the following sentence.',
        choice1: 'You, Destination, North',
        choice2: 'You, Miles, Destination',
        choice3: 'North, Edinburgh',
        choice4: "You, Edinburgh",
        answer: 4,},
        {
        question: 'Choose the best word to fill in the blank.      The _______  picnic will be at the park Saturday afternoon.',
        choice1: 'companies',
        choice2: 'companieses',
        choice3: 'companys',
        choice4: "companyess",
        answer: 1,},
        {
        question: 'Which sentence is punctuated correctly?',
        choice1: 'At the beginning of every class students are supposed to sharpen their pencils and be ready for the lesson.',
        choice2: 'At the beginning of every class, students are supposed to sharpen their pencils, and be ready for the lesson.',
        choice3: 'At the beginning of every class students are supposed to sharpen their pencils, and be ready for the lesson.',
        choice4: "At the beginning of every class, students are supposed to sharpen their pencils and be ready for the lesson.",
        answer: 4,},
        {
        question: 'Choose the correct possessive to fill in the blank.      Their  __________ names are Mr. Andrade, Mrs. Roby, and Miss Johnson.',
        choice1: 'teacheres',
        choice2: 'teachers',
        choice3: 'taechers',
        choice4: "teacherss",
        answer: 2,},
        {
         question: 'Which sentence is capitalized correctly?',
        choice1: 'On a cloudless night, I studied pisces, a constellation in the northern sky.',
        choice2: 'on a Cloudless Night, i studied Pisces, a constellation in the Northern Sky.',
        choice3: 'On a cloudless night, I studies Pisces, a constellation in the Northern Sky.',
        choice4: "on a cloudless night, I studied pisces, a constellation in the northern sky.",
        answer: 1,},
        {
         question: 'Which sentence is punctuated correctly?',
        choice1: 'Because he ate so many cookies, he had a stomachache.',
        choice2: 'He had a stomachache, because he ate so many cookies.',
        choice3: 'Because he ate so many cookies he had a stomachache?',
        choice4: "He had a stomachache because he ate so many cookies?",
        answer: 1,
            },
]  
       
const SCORE_POINTS = 10
const MAX_QUESTIONS = 100

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('index.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()