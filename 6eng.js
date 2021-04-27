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

let questions = [ //100
    {
        question: 'We should go to _______ wedding.',
        choice1: 'There',
        choice2: 'Their',
        choice3: 'Theyre',
        choice4: "They’re",
        answer:"2",
    },
    {
        question: 'I want those purple ________.',
        choice1: 'Ones',
        choice2: 'One',
        choice3: 'Those',
        choice4: "These",
        answer:"1",
    },
    {
        question: 'I _____ these milkshakes.',
        choice1: 'Maid',
        choice2: 'Made',
        choice3: 'Mad',
        choice4: "Mde",
        answer:"2",
    },
    {
        question: 'Acknowledge means:',
        choice1: 'Admit',
        choice2: 'Deny',
        choice3: 'Argue',
        choice4: "Refuse",
        answer:"1",
    },
    {
        question: 'All of these are part of the English "plot mountain" except.',
        choice1: 'Climax',
        choice2: 'Resolution',
        choice3: 'Rising action',
        choice4: "Characters",
        answer:"4",
    },
    {
        question: 'Which word in the sentence is an adjective? We gathered those shells',
        choice1: 'Gathered',
        choice2: 'Shells',
        choice3: 'Those',
        choice4: "We",
        answer:"3",
    },
    {
        question: 'Knowing the meaning of the prefix auto- in the word autograph helps the reader understand that the word means:',
        choice1: "Written by a person’s own hand",
        choice2: 'Written before',
        choice3: 'Full of writing',
        choice4: "With writing",
        answer:"1",
    },
   
    {
        question: 'Define invisible:',
        choice1: 'Impossible to fly',
        choice2: 'Impossible or nearly impossible to see',
        choice3: 'Impossible or nearly impossible to cook',
        choice4: "Impossible or nearly impossible to move",
        answer:"2",
    },
    {
        question: 'A fanfare is to:',
        choice1: 'A showy outward display',
        choice2: 'A loud noise inside',
        choice3: 'A secret outward display',
        choice4: "None of the above",
        answer:"1",
    },
    {
        question: 'To be not hurried or forced:',
        choice1: 'Leisurely',
        choice2: 'Dejectedly',
        choice3: 'Destination',
        choice4: "Observing",
        answer:"1",
    },
    {
        question: 'Stamina means:',
        choice1: 'Enduring fun and laughter',
        choice2: 'Enduring strength and energy',
        choice3: 'Enduring sleep and late hours',
        choice4: "Enduring knowledge and educatio",
        answer:"2",
    },
    {
        question: 'A form of government in which the ruler is an absolute dictator is a:',
        choice1: 'Tyranny',
        choice2: 'Proposition',
        choice3: 'Deprivation',
        choice4: "Fanfare",
        answer:"1",
    },
    {
        question: 'Define ardent:',
        choice1: 'Characterized as intense emotion',
        choice2: 'Characterized as intense education',
        choice3: 'Characterized as intense sadness',
        choice4: "Characterized as intense passion",
        answer:"4",
    },
    {
        question: 'Which word means used of unskilled work',
        choice1: 'Dejectedly',
        choice2: 'Phosphorous',
        choice3: 'Menial',
        choice4: "Proposition",
        answer:"3",
    },
    {
        question: 'The lack of education or knowledge is called',
        choice1: 'Conflict',
        choice2: 'Ignorance',
        choice3: 'Setting',
        choice4: "Motivation",
        answer:"2",
    },
    {
        question: 'Which of these is correct?',
        choice1: 'A verb is actually a word',
        choice2: 'A verb shows determination',
        choice3: 'A verb is an acting word',
        choice4: "A verb is an action word",
        answer:"4",
    },
    {
        question: 'A babel of words is an example of :',
        choice1: 'An abstract noun',
        choice2: 'A proper noun',
        choice3: 'A collective noun',
        choice4: "A common noun",
        answer:"3",
    },
    {
        question: 'Which of the following is correct?',
        choice1: 'After our fight, we just layed there upset.',
        choice2: 'After our fight, we just laid there upset.',
        choice3: 'After our fight we just lay there upset.',
        choice4: "After our fight, we just laid there upset",
        answer:"2",
    },
    {
        question: 'Which of these is correct?',
        choice1: 'This chocolate sauce really compliments the dessert.',
        choice2: 'This chocolate sauce really complements the desert.',
        choice3: 'This chocolate sauce really complements the dessert.',
        choice4: "This chocolate sauce really compliments the desert.",
        answer:"1",
    },
    {
        question: 'A compound sentence is',
        choice1: 'Two simple sentences joined with a conjunction',
        choice2: 'Two sentence fragments joined by a coordinating conjunction',
        choice3: 'Two simple sentences joined by the word "and"',
        choice4: "A simple sentence",
        answer:"1",
    },
    {
        question: 'Which of these is correct?',
        choice1: 'I never lend Savannah since she always looses things.',
        choice2: 'I never lend Savannah anything because she always looses things.',
        choice3: 'I never lend Savannah anything because she always loses things.',
        choice4: "I never lend Savannah sense she always loses things.",
        answer:"3",
    },
    {
        question: 'Which of these is correct?',
        choice1: 'Their always bickering.',
        choice2: 'They’re always bickering.',
        choice3: 'Theyre always bickering.',
        choice4: "There always bickering.",
        answer:"2",
    },
    {
        question: 'A synonym is:',
        choice1: 'A word that sounds the same but has a different meaning.',
        choice2: 'A word that is opposite in meaning.',
        choice3: 'A word that has a similar meaning.',
        choice4: "A word that is spelt the same.",
        answer:"3",
    },
    {
        question: 'Personification gives:',
        choice1: 'Human qualities to an inanimate object.',
        choice2: 'Human qualities to people',
        choice3: 'Non-human qualities to people',
        choice4: "Non-human qualities to inanimate objects",
        answer:"1",
    },
    {
        question: ' Which of these is correct?',
        choice1: 'Whose that big umbrella? Is it her’s?',
        choice2: 'Who’s is that big umbrella? Is it her’s?',
        choice3: 'Who’s is that big umbrella? Is it hers?',
        choice4: "Whose big umbrella is that? Is it hers?",
        answer:"4",
    },
    {
        question: 'Which of these is correct?',
        choice1: 'Weird',
        choice2: 'Wierd',
        choice3: 'Weud',
        choice4: "Wead",
        answer:"1",
    },
    {
        question: 'A prefix is:',
        choice1: 'Added to the end of a word to change its meaning',
        choice2: 'Added to the beginning of a word to change its meaning',
        choice3: 'Added to a word from Latin',
        choice4: "Added to the middle of a word to strengthen the meaning",
        answer:"2",
    },
    {
        question: 'The function of a noun:',
        choice1: 'to show an action',
        choice2: 'to exaggerate',
        choice3: 'to name a word',
        choice4: "to describe a movement",
        answer:"1",
    },
    {
        question: 'A punctuation mark that is used to indicate extra information in a sentence',
        choice1: 'hyphen',
        choice2: 'fullstop',
        choice3: 'apostrophe',
        choice4: "dash",
        answer:"4",
    },
    {
        question: 'Alliteration is the repetition of consonants',
        choice1: 'True',
        choice2: 'False',
        choice3: 'maybe',
        choice4: "sometimes",
        answer:"1",
    },
    {
        question: 'KERBOOM! is as example of:',
        choice1: 'personification',
        choice2: 'apostrophe',
        choice3: 'onomatopoeia',
        choice4: "adjective",
        answer:"3",
    },
    {
        question: 'A punctuation mark that is used to join two words to form a compound noun is known as an interrogative',
        choice1: 'True',
        choice2: 'false',
        choice3: 'maybe',
        choice4: "sometimes",
        answer:"2",
    },
    {
        question: 'A word that avoids repetition:',
        choice1: 'pronoun',
        choice2: 'verb',
        choice3: 'collective noun',
        choice4: "article",
        answer:"1",
    },
    {
        question: 'A punctuation mark that shows the ending needs to be added by the reader',
        choice1: 'apostrophe',
        choice2: 'parenthesis',
        choice3: 'ellipsis',
        choice4: "fullstop",
        answer:"3",
    },
    {
        question: 'Apostrophe has the function of:',
        choice1: 'possesion',
        choice2: 'contraction',
        choice3: 'none of the above',
        choice4: "possesion and contraction",
        answer:"4",
    },
    {
        question: 'Choose the correct spelling',
        choice1: 'recieve',
        choice2: 'reiceive',
        choice3: 'receive',
        choice4: "recieive",
        answer:"3",
    },
    {
        question: 'Choose the correct punctuation mark:  I love chocolate cookies toast and honey for breakfast.',
        choice1: 'comma',
        choice2: 'semicolon',
        choice3: 'all of the above',
        choice4: "fullstop",
        answer:"1",
    },
    {
        question: '"My feet ballooned with swelling" is an example of:',
        choice1: 'assonance',
        choice2: 'alliteration',
        choice3: 'personification',
        choice4: "metaphor",
        answer:"4",
    },
    {
        question: 'An exclamation mark',
        choice1: 'is used in sentences that ask questions',
        choice2: 'is used in sentences to show emotion',
        choice3: 'is used in sentences that are simple',
        choice4: "is used when a fullstop has been overused",
        answer:"2",
    },
    {
        question: 'Which sentence is complex?',
        choice1: 'Before scientists invented telescopes, the moon was a mystery.',
        choice2: 'The viewer looked into the special machine.',
        choice3: 'People in earlier days wrote letters or sent telegrams.',
        choice4: "Trained bears were the star of the film.",
        answer:"1",
    },
    {
        question: 'What does the prefix dis- mean?',
        choice1: 'not or opposite of',
        choice2: 'again',
        choice3: 'too much',
        choice4: 'earlier or before',
        answer:"1",
    },
    {
        question: 'What is the word in all caps? I really enjoyed her COLORFUL descriptions of wildlife.',
        choice1: 'adjective',
        choice2: 'adverb',
        choice3: 'pronoun',
        choice4: "noun",
        answer:"1",
    },
    {
        question: 'The prefix mis- means:',
        choice1: 'too much',
        choice2: 'wrongly',
        choice3: 'again',
        choice4: "middle",
        answer:"2",
    },
    {
        question: 'What does mis- mean in the words in the words misplace and misread?',
        choice1: 'opposite',
        choice2: 'not',
        choice3: 'wrong or incorrect',
        choice4: "again",
        answer:"3",
    },
    {
        question: 'The main verb in the following sentence is in what tense? I will eat all of the bacon.',
        choice1: 'Present Tense',
        choice2: 'Past Tense',
        choice3: 'Future Tense',
        choice4: "Calm down, you are too tense.",
        answer:"3",
    },
    {
        question: 'Which option correctly combines the 2 following simple sentences to creat a compound sentence? Marisol plays the harp. She is not very good.',
        choice1: 'Marisol plays the harp, but she is not very good.',
        choice2: 'Marisol is not very good at playing the harp.',
        choice3: 'When she plays the harp, Marisol is not very good.',
        choice4: "Although she is not very good, Marisol plays the harp.",
        answer:"1",
    },
    {
        question: 'One publisher holds a _________ on prinnting all of our school publications.',
        choice1: 'monogram',
        choice2: 'monopoly',
        choice3: 'monarch',
        choice4: "magic",
        answer:"2",
    },
    {
        question: 'Daniel and I will stand here and smile for the camera. Would you please take a picture of Daneil and I? The second use of the word I should be changed to ____',
        choice1: 'We',
        choice2: 'us',
        choice3: 'me',
        choice4: "no change",
        answer:"3",
    },
    {
        question: 'Which sentence is complex?',
        choice1: 'Paris is an old city, but Rome is even more ancient.',
        choice2: 'You can see paintings or go to the opera.',
        choice3: 'The Navajo, and the Iroquois are Native Americans.',
        choice4: "It is possible to see the earth rise over the horizon if you are standing on the moon.",
        answer:"1",
    },
    {
        question: 'Which is the best way to combine the following sentences? Chandra bought the puzzle. She wrapped the puzzle.',
        choice1: 'Chandra bought the puzzle, and wrapped the puzzle.',
        choice2: 'Chandra bought and wrapped the puzzle.',
        choice3: 'Chandra wrapped the puzzle after she bought the puzzle.',
        choice4: "Wrapping the puzzle, Chandra bought it.",
        answer:"2",
    },
    {
        question: 'Which sentence is a simple sentence?',
        choice1: 'We like to eat cheese.',
        choice2: 'We like to eat cheese, although some cheeses are disgusting.',
        choice3: 'In the mornings, we like to eat cheese on our eggs and toast.',
        choice4: "In the mornings, before we go to school, we like to eat cheese.",
        answer:"1",
    },
    {
        question: 'Knowing the meaning of the prefix mis- helps you know that misaltered means:',
        choice1: 'alter again',
        choice2: 'to alter now',
        choice3: 'the most altered',
        choice4: "to alter wrongly",
        answer:"4",
    },
    {
        question: 'What does the suffix -ed mean?',
        choice1: 'to compare',
        choice2: 'past tense',
        choice3: 'full of',
        choice4: "runner",
        answer:"2",
    },
    {
        question: 'Antisocial:',
        choice1: 'unemotional or indifferent',
        choice2: 'to reduce the value of something',
        choice3: 'not social',
        choice4: "to be overly social",
        answer:"3",
    },
    {
        question: 'Based on your knowledge of the prefix dis-, the word disapprove means:',
        choice1: 'To not get along',
        choice2: 'To not approve of something',
        choice3: 'To approve of something',
        choice4: "to agree",
        answer:"2",
    },
    {
        question: 'The following statement is a sentence fragment: Thousands of years old.',
        choice1: 'true',
        choice2: 'false',
        choice3: 'maybe',
        choice4: "sometimes",
        answer:"1",
    },
    {
        question: 'How can you correct the capitalization in the sentence? The climate in the south is favorable for growing agriculturure such as Georgia peaches and Florida oranges.',
        choice1: 'use a capital S in south',
        choice2: 'use a capital letter P in peaches',
        choice3: 'use a capital C in climate',
        choice4: 'use a capital T in the word "the" before south',
        answer:"1",
    },
    {
        question: 'What is the dependent clause in the following sentence? Although Bill was sick, he still went to work.',
        choice1: 'Although',
        choice2: 'he was still sick',
        choice3: 'was sick',
        choice4: "Although Bill was sick",
        answer:"4",
    },
    {
        question: 'Choose the correct meaning of the prefix up-:',
        choice1: 'up or upward',
        choice2: 'inclined to',
        choice3: 'relating to',
        choice4: "with, together",
        answer:"1",
    },
    {
        question: 'Choose the correct meaning of the prefix con-:',
        choice1: 'full of',
        choice2: 'relating to',
        choice3: 'up or upward',
        choice4: "with, together",
        answer:"4",
    },
    {
        question: 'A prefix is placed behind a word.',
        choice1: 'True',
        choice2: 'false',
        choice3: 'maybe',
        choice4: "sometimes",
        answer:"2",
    },
    {
        question: 'Foreshadow:',
        choice1: 'to suggest something is about to happen',
        choice2: 'not according to standards',
        choice3: 'without compassion or pity',
        choice4: "to suggest a hidden meaning",
        answer:"1",
    },
    {
        question: 'The following sentence is a fragment: Scientists study about these paintings they learn about the past.',
        choice1: 'True',
        choice2: 'false',
        choice3: 'maybe',
        choice4: "sometimes",
        answer:"1",
    },
    {
        question: 'The main verb in the following sentence is in what tense? I ate all of the bacon.',
        choice1: 'Present Tense',
        choice2: 'future tense',
        choice3: 'past tense',
        choice4: "Calm down, you are too tense.",
        answer:"3",
    },
    {
        question: 'Irreversible:',
        choice1: 'unable to be undone',
        choice2: 'to reduce the value of something',
        choice3: 'to change the meaning',
        choice4: "without compassion or pity",
        answer:"4",
    },
    {
        question: 'What kind of pronoun is in capitla letters? Joy and George taught Else skills of survival so that a life in the wild could be HERS.',
        choice1: 'reflexive pronoun',
        choice2: 'indefinite pronoun',
        choice3: 'possessive pronoun',
        choice4: "demonstrative pronoun",
        answer:"2",
    },
    {
        question: 'Which sentence correctly uses commas?',
        choice1: 'My three favorite foods are, pasta pizza and ice cream.',
        choice2: 'I need to call Sally, Tom Brad and Kelly about the party.',
        choice3: 'I have to run to the store, get my hair cut, and pick up the kids from daycare.',
        choice4: "I have got to, run to my friends houses.",
        answer:"3",
    },
    {
        question: 'Which is an example of quotation marks used correctly?',
        choice1: 'Mom said, "Where are my keys"?',
        choice2: 'Mom said, "where are my keys?"',
        choice3: 'Mom said, "Where are my keys?"',
        choice4: 'Mom said, "where are my keys"?',
        answer:"3",
    },
    {
        question: 'The main verb in the following sentence is in what tense? I eat all of the bacon.',
        choice1: 'Present Tense',
        choice2: 'Past Tense',
        choice3: 'Future Tense',
        choice4: "Progressive Tense",
        answer:"1",
    },
    {
        question: 'Which sentence correctly uses commas?',
        choice1: 'Paris France, is my favorite place to visit.',
        choice2: 'The capital of the United, States, is Washington D.C.',
        choice3: 'Taylor lives in Nashville, TN.',
        choice4: "I, am in Lex,ingtion Concord.",
        answer:"3",
    },
    {
        question: 'Which sentence uses capitalization correctly?',
        choice1: 'My favorite sandwich is made with Skippy peanut butter.',
        choice2: 'My favorite sandwich is made with skippy peanut butter.',
        choice3: 'My favorite sandwich is made with Skippy Peanut butter.',
        choice4: "My favorite Sandwich is made with skippy Peanut Butter.",
        answer:"1",
    },
    {
        question: 'Which sentence correctly uses commas?',
        choice1: 'I like to run, but not when it is hot.',
        choice2: 'We can go to the grocery store or, we can go to the mall.',
        choice3: 'I do not want, a dog nor do I want a cat.',
        choice4: "We can, go shopping or eat.",
        answer:"1",
    },
    {
        question: 'Which sentence correctly uses commas?',
        choice1: '"Gas is too expensive," said the experienced driver.',
        choice2: '"Ouch", screamed the boy after he was stung by a bee.',
        choice3: 'The sister told the brother ", of course I will pick you up."',
        choice4: 'I told my friend"yes of course", after she asked if I was coming.',
        answer:"1",
    },
    {
        question: 'What is the word in capital letters? Some bats spend the WINTER months in caves.',
        choice1: 'noun',
        choice2: 'adjective',
        choice3: 'adverb',
        choice4: "pronoun",
        answer:"2",
    },
    {
        question: 'Which sentence capitalizes correctly?',
        choice1: 'When a tornado hits a Community, the Red Cross sends help.',
        choice2: 'When a tornado hits a community, the Red Cross sends help.',
        choice3: 'When a tornado hits a Community, the red Cross sends help.',
        choice4: "When a tornado hits a Community, the Red cross sends help.",
        answer:"2",
    },
    {
        question: 'Which sentence uses apostrophes correctly?',
        choice1: "'Daves' bike is green.",
        choice2: "'Stan's birthday is next week.",
        choice3: '"Thats mine."',
        choice4: "'That purse is Tatyanas'.",
        answer:"2",
    },
    {
        question: 'Which of the following items has no mistakes in capitalization?',
        choice1: 'do you know where Sarah is? She promised to help me.',
        choice2: 'Show me your new game. is it your favorite?',
        choice3: 'Ramon needs a new backpack. Tell him where you got yours.',
        choice4: "Why did Samantha leave early? did she have a doctor's appointment?",
        answer:"3",
    },
    {
        question: 'Pronouns and antecedents have to agree. Which contains pronouns and antecedents that agree?',
        choice1: 'Each student must sit in their assigned seat.',
        choice2: 'Humankind has his own flaws.',
        choice3: 'Each student must sit in his or her assigned seat.',
        choice4: "Each student must sit in his own seat for the duration of class.",
        answer:"1",
    },
    {
        question: 'Which of the following sentences use semicolons correctly?',
        choice1: 'The president; was very popular; he easily won the election.',
        choice2: 'I cannot buy a new car; I do not have much money.',
        choice3: 'I am hot I am wearing; a sweater and a jacket.',
        choice4: "I have a pen;paper.",
        answer:"4",
    },
    {
        question: 'Identify the part of speech for the selected word: James saw the -awesome- sight from the air.',
        choice1: 'adjective',
        choice2: 'adverb',
        choice3: 'conjuction',
        choice4: "noun",
        answer:"1",
    },
    {
        question: 'Identify the part of speech for the selected word:   Her sister is the oldest member of the -group-.',
        choice1: 'pronoun',
        choice2: 'noun',
        choice3: 'adjective',
        choice4: "adverb",
        answer:"2",
    },
    {
        question: 'Identify the part of speech for the selected word: -They- were counting the ballots for student government officers',
        choice1: 'Pronoun',
        choice2: 'noun',
        choice3: 'preposition',
        choice4: "adjective",
        answer:"1",
    },
    {
        question: 'Even though the test was difficult, Michael was not _______.',
        choice1: 'faced',
        choice2: 'phased',
        choice3: 'fazed',
        choice4: "fhased",
        answer:"3",
    },
    {
        question: 'Which sentence uses capitalization correctly?',
        choice1: "Kassy's first class of the day is fundamentals of music.",
        choice2: "Kassy's First class of the day is Fundamentals of Music.",
        choice3: "Kassy's first class of the day is Fundamentals of Music.",
        choice4: "kassy's first Class of the Day is the fundamentals of Music.",
        answer:"3",
    },
    {
        question: 'Which of the following pairs models correct pronoun-antecedent agreement?',
        choice1: 'nobody;their',
        choice2: 'the man; her',
        choice3: 'doctors; their',
        choice4: "you; his",
        answer:"1",
    },
    {
        question: 'Knowing the meaning of the prefix pro- helps you know that pro-life means:',
        choice1: 'to live before',
        choice2: 'in favor of life',
        choice3: 'to live again',
        choice4: "did live",
        answer:"2",
    },
    {
        question: 'Which sentence is punctuated correctly?',
        choice1: '"It is important Chelsea, that you wash your hands."',
        choice2: '"It is important, Chelsea, that you wash your hands."',
        choice3: '"It is important, Chelsea that you wash your hands."',
        choice4: '"It is important, Chelsea, that you, wash your hands."',
        answer:"2",
    },
    {
        question: 'Remorseless',
        choice1: 'unemotional or indifferent',
        choice2: 'without a way of protecting yourself',
        choice3: 'without compassion or pity',
        choice4: "to be cruel",
        answer:"3",
    },
    {
        question: 'Identify all the pronouns in the list. They ran to the store to buy us some candy.',
        choice1: 'ran, they, us',
        choice2: 'they, us',
        choice3: 'they, store, candy',
        choice4: "store, candy, us",
        answer:"2",
    },
    {
        question: 'Where should you insert a comma (or commas) in the following sentence? My doctor who I have been seeing since I was born is going to retire.',
        choice1: 'After "My doctor"',
        choice2: 'Before "since I was born"',
        choice3: 'Around "who I have been seeing since I was born"',
        choice4: 'Before "is going to retire"',
        answer:"3",
    },
    {
        question: 'Which sentence uses apostrophes correctly?',
        choice1: "That biography do'esnt do him justice.",
        choice2: "Follow the doctor's advice and you won't get sick this year.",
        choice3: "This a'int the right address.",
        choice4: "I would like to know why you do'nt supply a complimentary tourist guide.",
        answer:"4",
    },
    {
        question: 'Which sentence uses capitalization correctly?',
        choice1: 'Copper canyon in Chihuahua, Mexico, is deeper than the Grand canyon.',
        choice2: 'Copper canyon in Chihuahua, mexico, is deeper than the grand canyon.',
        choice3: 'Copper Canyon in Chihuahua, Mexico, is deeper than the Grand Canyon.',
        choice4: "copper canyon in Chihuahua, Mexico, is deeper than the grand canyon.",
        answer:"3",
    },
    {
        question: 'Choose the sentence with correct punctuation.',
        choice1: 'Our labors in life-learning, earning, and yearning-are also our reasons for living.',
        choice2: 'Our labors in life, learning, earning, and yearning) are also our reasons for living.',
        choice3: 'Our labors in life - learning, earning, and yearning - are also our reasons for living.',
        choice4: "Our labors in life learning, earning, and yearning are also our reasons for living.",
        answer:"1",
    },
    {
        question: 'What is the base word of misguided?',
        choice1: 'guided',
        choice2: 'mis',
        choice3: 'guide',
        choice4: "misguide",
        answer:"3",
    },
    {
        question: 'Based on your knowledge of the prefix un-, the word unfair means:',
        choice1: 'fair',
        choice2: 'not fair',
        choice3: 'over fair',
        choice4: "sometimes fair",
        answer:"4",
    },
    {
        question: 'Pick the answer that correctly uses the possesive case in this sentence. Are these cookies mine or _____?',
        choice1: 'theirs',
        choice2: "their's",
        choice3: "theirs'",
        choice4: "theyres'",
        answer:"1",
    },
    {
        question: 'Match the pronoun to the antecedent. As Gandhi worked for independence, _____ often fasted.',
        choice1: 'he',
        choice2: 'she',
        choice3: 'it',
        choice4: "they",
        answer:"1",
    },
    {
        question: 'The little girl smiled happy at her family. The words -smiled happy- should be changed to:',
        choice1: 'smiled happily',
        choice2: 'smiled happiness',
        choice3: 'happy smiled',
        choice4: "no change",
        answer:"1",
    },
    {
        question: 'Which word uses the root that meaning "move across"?',
        choice1: 'conscious',
        choice2: 'transportation',
        choice3: 'luminate',
        choice4: "endorse",
        answer:"2",
    },
    {
        question: 'Which part of the following sentences have a spelling mistake?',
        choice1: 'Hello! Its nice to meet you.',
        choice2: 'Sir, how would you like your coffee to be served?',
        choice3: 'We hope your enjoyed your stay!',
        choice4: "How did the potato's fall of the table?",
        answer:"3",
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
