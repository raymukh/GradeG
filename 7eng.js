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
        question: 'Choose the plural form of “mouse.”',
        choice1: 'meese',
        choice2: 'mice',
        choice3: 'mouses',
        choice4: "mece",
        answer: "2"
    },
    {
        question: 'A _____ is singular in form but names a group of persons, animals, or things.',
        choice1: 'collective noun',
        choice2: 'proper noun',
        choice3: 'definite noun',
        choice4: "indefinite noun",
        answer: "1"
    },
    {
        question: 'Choose the correct word for the following sentence: The instructor asked us to work ____.',
        choice1: 'carefully',
        choice2: 'more careful',
        choice3: 'care',
        choice4: "all of above",
        answer: "1"
    },
    {
        question: 'Identify the type of conjunction used in the following sentence: After the sunset, everyone applauded and went home.',
        choice1: 'Correlative',
        choice2: 'subordinating',
        choice3: 'Coordinating',
        choice4: "all of above",
        answer: "2"
    },
    {
        question: 'Identify the underlined word in the following sentence:She worked hard on her college application.',
        choice1: 'noun',
        choice2: 'pronoun',
        choice3: 'conjunction',
        choice4: "adverb",
        answer: "4"
    },
    {
        question: 'Choose the correct word for the following sentence: I am so excited to visit my ____ house this summer.',
        choice1: 'grandfathers',
        choice2: 'grandfatheres',
        choice3: 'grendfathers',
        choice4: "all of above",
        answer: "1"
    },
    {
        question: 'Identify the underlined word in the following sentence: I tried on seven shirts yesterday and bought only two.',
        choice1: 'noun',
        choice2: 'verb',
        choice3: 'adjective',
        choice4: "all of above",
        answer: "3"
    },
    {
        question: 'Identify the indefinite pronoun.',
        choice1: 'few',
        choice2: 'many',
        choice3: 'everyone',
        choice4: "all of the above",
        answer: "4"
    },   
    {
        question: 'Identify the object of the preposition in the following sentence: Many people live in the worlds coldest countries.',
        choice1: 'people',
        choice2: 'coldest',
        choice3: 'countries',
        choice4: "all of above",
        answer: "3"
    },    
    {
        question: 'she never____meat',
        choice1: 'eats',
        choice2: 'is eating',
        choice3: 'shall eat',
        choice4: "dosent eat",
        answer: "1"
    },
    {
        question: 'Identify the underlined word in the following sentence: Anya draws _inside_ the dotted lines.',
        choice1: 'noun',
        choice2: 'adverb',
        choice3: 'preposition',
        choice4: "all above",
        answer: "3"
    },
    {
        question: 'Identify the prepositional phrase in the following sentence: I dropped my pencil under the desk and couldnt find it.',
        choice1: 'under the desk',
        choice2: 'dropped my pencil',
        choice3: 'and',
        choice4: "all above",
        answer: "1"
    },
    {
        question: 'Identify the correct demonstrative pronoun in the following sentence: I was astonished that ____ are the only ones in the store.',
        choice1: 'many',
        choice2: 'these',
        choice3: 'this',
        choice4: "some",
        answer: "2"
    },
    {
        question: 'Identify correct examples of collective nouns.',
        choice1: 'run, walk, sprint, hop',
        choice2: 'he, she, it, we',
        choice3: 'audience, team, staff, crew',
        choice4: "none of the above",
        answer: "3"
    },
    {
        question: 'Identify the coordinating conjunction in the following sentence: I wanted it to be Sunday, but it was Monday.',
        choice1: 'but',
        choice2: 'it',
        choice3: 'wanted',
        choice4: "Monday",
        answer: "1"
    },
    {
        question: 'Identify the correct relative pronoun in the following sentence: I was thrilled to see a sculpture by Auguste Rodin, ___ my parents always admired.',
        choice1: 'which',
        choice2: 'whose',
        choice3: 'who',
        choice4: "whom",
        answer: "4"
    },
    {
        question: 'Coordinating conjunctions ____.',
        choice1: 'ask question',
        choice2: 'join words and groups of words of equal importance',
        choice3: 'joins two phrases or clauses that are not of equal importance.',
        choice4: "none of the above",
        answer: "2"
    },
    {
        question: 'Identify the underlined word in the following sentence: I let myself into the house through the front door.',
        choice1: 'a reflexive pronoun',
        choice2: 'a relative pronoun',
        choice3: 'an interrogative pronoun',
        choice4: "a possessive pronoun",
        answer: "1"
    },
    {
        question: 'An _____ is a verb indicating physical or mental activity.',
        choice1: 'linking verb',
        choice2: 'main verb',
        choice3: 'action verb',
        choice4: "none of the above",
        answer: "3"
    },
    {
        question: 'Choose the correct adjective for the following sentence: Finishing a marathon was the ___ thing she ever did.',
        choice1: 'most hard',
        choice2: 'hard',
        choice3: 'harder',
        choice4: "hardest",
        answer: "4"
    },
    {
        question: 'Choose the best word for the following sentence: Jack has ___ homework tonight than he did last night.',
        choice1: 'most ',
        choice2: 'less',
        choice3: 'fewer',
        choice4: "least",
        answer: "2"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'deprive',
        choice2: 'depryve',
        choice3: 'deeprive',
        choice4: "depriv",
        answer: "1"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'akademy',
        choice2: 'academe',
        choice3: 'academy',
        choice4: "akademe",
        answer: "3"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'apresheate',
        choice2: 'apreciate',
        choice3: 'appreshiate',
        choice4: "appreciate",
        answer: "4"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'aprentiss',
        choice2: 'apprentice',
        choice3: 'apprentis',
        choice4: "aprentice",
        answer: "2"
    },
    {
        question: 'Identify the following sentence: Did you finish your journal entry today?',
        choice1: 'interrogative',
        choice2: 'declarative',
        choice3: 'exclamatory',
        choice4: "none of the above",
        answer: "1"
    },
    {
        question: 'Select the word that is spelled correctly',
        choice1: 'tomorow',
        choice2: 'tomoro',
        choice3: 'tomorow',
        choice4: "tomorrow",
        answer: "4"
    },
    {
        question: 'Identify the compound subject in the following sentence: String lights will make the room more festive.',
        choice1: 'the room',
        choice2: 'more festive',
        choice3: 'string lights',
        choice4: "will make",
        answer: "3"
    },
    {
        question: 'Identify the following sentence type: The zebra at the zoo stripes.',
        choice1: 'compound sentence',
        choice2: 'run-on',
        choice3: 'interrogative sentence',
        choice4: "sentence fragment",
        answer: "4"
    },
    {
        question: 'Choose the correct punctuation for the following sentence: Mabel really loved the book ___ however, she could not afford to buy it.',
        choice1: '; semi-colon',
        choice2: ': colon',
        choice3: ', comma',
        choice4: ". period",
        answer: "1"
    },
    {
        question: 'What does the word “credentials” mean?',
        choice1: 'It refers to a document(s) showing a real estate sale.',
        choice2: 'It refers to a document(s) proving a persons identity or ability.',
        choice3: 'It refers to a document(s) showing how to travel somewhere.',
        choice4: "It refers to a document(s) showing a recipe.",
        answer: "2"
    },
    {
        question: 'They____to New York last year',
        choice1: 'moving',
        choice2: 'moved',
        choice3: 'didnt moved',
        choice4: "are going to move",
        answer: "2"
    },
    {
        question: 'My friend____ a good movie yesterday',
        choice1: 'watched',
        choice2: 'is watching',
        choice3: 'will watch',
        choice4: "watches",
        answer: "1"
    },
    {
        question: 'Identify the object of the preposition in the following sentence: Many people live in the worlds coldest countries.',
        choice1: ' people',
        choice2: 'coldest ',
        choice3: 'countries',
        choice4: "all of above",
        answer: "3"
    },
    {
        question: 'A person from the Netherlands is.......',
        choice1: 'Dutch',
        choice2: 'french',
        choice3: 'british',
        choice4: "none of the above",
        answer: "1"
    },
    {
        question: 'Next year michael and his wife are____________around the world',
        choice1: 'are going to travel',
        choice2: 'will travel',
        choice3: 'arent going to travel',
        choice4: "have traveled",
        answer: "1"
    },
    {
        question: 'New York____many people',
        choice1: 'has',
        choice2: 'has got',
        choice3: 'will have',
        choice4: "is",
        answer: "2"
    },
    {
        question: 'Select the word that is spelled correctly',
        choice1: 'charcutrie',
        choice2: 'charcuterie',
        choice3: 'charcut',
        choice4: "charcutry",
        answer: "2"
    },
    {
        question: 'complete the sentence: last year they______a new flat',
        choice1: 'bought',
        choice2: 'will buy',
        choice3: 'cant buy',
        choice4: "all of the above",
        answer: "1"
    },
    {
        question: 'What kind of sentence is this? I couldnt believe how talented those trapeze artists were!',
        choice1: 'interrogative',
        choice2: 'exclamatory',
        choice3: 'declarative',
        choice4: "none of the above",
        answer: "2"
    },
    {
        question: 'did you bring_____food',
        choice1: 'any',
        choice2: 'some',
        choice3: 'no',
        choice4: "none of the above",
        answer: "1"
    },
    {
        question: 'are there____corals near the island',
        choice1: 'some',
        choice2: 'no',
        choice3: 'maybe',
        choice4: "all of the above",
        answer: "1"
    },
    {
        question: 'mary has green eyes, we can say that: mary___green eyes',
        choice1: 'has',
        choice2: 'has got',
        choice3: 'may have ',
        choice4: "dosent have",
        answer: "1"
    },
    {
        question: 'What kind of sentence is this? Do you know Rob from soccer camp, or do you have another connection with him?',
        choice1: 'interrogative',
        choice2: 'exclamatory',
        choice3: 'declarative',
        choice4: "none of the above",
        answer: "1"
    },
    {
        question: 'What kind of sentence is this? It is too dangerous to climb that mountain! I got an A on my book report!',
        choice1: 'interrogative',
        choice2: 'exclamatory',
        choice3: 'declarative',
        choice4: "none of the above",
        answer: "2"
    },
    {
        question: 'the plane arrived_____march 6th____sixo clock',
        choice1: 'on/at',
        choice2: 'in/on',
        choice3: 'at/in',
        choice4: "in/at",
        answer: "1"
    },
    {
        question: 'the plane arrived_____march 6th____sixo clock',
        choice1: 'on/at',
        choice2: 'in/on',
        choice3: 'at/in',
        choice4: "in/at",
        answer: "1"
    },
    {
        question: 'What does the root bene mean?',
        choice1: 'empty',
        choice2: 'good',
        choice3: 'own or self',
        choice4: "none of the above",
        answer: "2"
    },
    {
        question: 'im not going to school_____im sick',
        choice1: 'but',
        choice2: 'and',
        choice3: 'because',
        choice4: "so",
        answer: "3"
    },
    {
        question: 'Look at the roots below. Which one means law?',
        choice1: 'dict',
        choice2: 'puls',
        choice3: 'jur',
        choice4: "none of the above",
        answer: "3"
    },
    {
        question: 'What does the root cred mean?',
        choice1: 'say or declare',
        choice2: 'believe',
        choice3: 'good',
        choice4: "trust",
        answer: "3"
    },
    {
        question: 'Look at the roots below. Which one means one-half?',
        choice1: 'semi',
        choice2: 'quar',
        choice3: 'cent',
        choice4: "none of the above",
        answer: "1"
    },
    {
        question: 'Look at the roots below. Which one means say or declare?',
        choice1: 'dict',
        choice2: 'scrib',
        choice3: 'cred',
        choice4: "all of the above",
        answer: "1"
    },
    {
        question: 'What does the root geo mean?',
        choice1: 'shape',
        choice2: 'earth or rock',
        choice3: 'the study of something',
        choice4: "all of the above",
        answer: "2"
    },
    {
        question: ' What does the root bene mean?',
        choice1: 'law',
        choice2: 'empty',
        choice3: 'good',
        choice4: "nothing",
        answer: "3"
    },
    {
        question: 'Which word is a synonym of tedious?',
        choice1: 'boring',
        choice2: 'complete',
        choice3: 'weird',
        choice4: "none of the above",
        answer: "1"
    },
    {
        question: 'What does the root chron mean?',
        choice1: 'do',
        choice2: 'make',
        choice3: 'time',
        choice4: "weight",
        answer: "3"
    },
    {
        question: 'What does the root flex mean?',
        choice1: 'own',
        choice2: 'self',
        choice3: 'bend ',
        choice4: "shapes",
        answer: "3"
    },
    {
        question: 'Which word is a synonym of monarch?',
        choice1: 'ruler',
        choice2: 'supervisor',
        choice3: 'all of the above',
        choice4: "none of the above",
        answer: "1"
    },
    {
        question: 'Look at the roots below. Which one means go or yield?',
        choice1: 'cede',
        choice2: 'tele',
        choice3: 'junc',
        choice4: "good",
        answer: "1"
    },
    {
        question: 'Which word is a synonym of discern?',
        choice1: 'squint',
        choice2: 'notice',
        choice3: 'ignore',
        choice4: "none of the above",
        answer: "2"
    },
    {
        question: 'Look at the roots below. Which one means heat?',
        choice1: 'therm',
        choice2: 'bio',
        choice3: 'hyro',
        choice4: "line",
        answer: "1"
    },
    {
        question: 'Identify the part of speech for the underlined word: Rebecca checked out a beautiful book from the library.',
        choice1: 'adverb',
        choice2: 'noun',
        choice3: 'adjective',
        choice4: "conjunction",
        answer: "3"
    },
    {
        question: 'What does the root pens mean?',
        choice1: 'carry',
        choice2: 'weight out or distribrute',
        choice3: 'small',
        choice4: "ignore",
        answer: "2"
    },
    {
        question: 'What does the root jur mean?',
        choice1: 'do or make',
        choice2: 'bad ',
        choice3: 'law',
        choice4: "evil",
        answer: "3"
    },
    {
        question: 'What does the root geo mean?',
        choice1: 'the study or something',
        choice2: 'life ',
        choice3: ' earth or rock',
        choice4: "none of above",
        answer: "3"
    },
    {
        question: 'Identify the part of speech for the underlined word: He was packed and ready to go on the trip.',
        choice1: 'pronoun',
        choice2: 'noun',
        choice3: 'preposition',
        choice4: "adjective",
        answer: "1"
    },
    {
        question: 'Identify the part of speech for the underlined word: Hooray, the Cubs won the World Series!',
        choice1: 'adjectivce',
        choice2: 'interjection',
        choice3: 'conjuntion',
        choice4: "prepostion",
        answer: "1"
    },
    {
        question: 'Identify the part of speech for the underlined word: Their neighbor drove slowly down the street.',
        choice1: 'adjective',
        choice2: 'adverb',
        choice3: 'interjection',
        choice4: "verb",
        answer: "2"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'accidentally',
        choice2: 'accidentaly',
        choice3: 'acidentaly',
        choice4: "acidentally",
        answer: "1"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'contaygious',
        choice2: 'kontagious',
        choice3: 'contagious',
        choice4: "contagous",
        answer: "3"
    },
    {
        question: 'Choose the correct plural of the following word: echo',
        choice1: 'echoos',
        choice2: 'echoes',
        choice3: 'echo',
        choice4: "eco",
        answer: "2"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'fire proof',
        choice2: 'fireprofe',
        choice3: 'fireprove',
        choice4: "fireproof",
        answer: "4"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'jesture',
        choice2: 'jestur',
        choice3: 'gestur',
        choice4: "gesture",
        answer: "4"
    },
    {
        question: 'Choose the correct spelling.',
        choice1: 'multipul',
        choice2: 'multipel',
        choice3: 'multipule',
        choice4: "multiple",
        answer: "4"
    },
    {
        question: 'Which word is a common noun?',
        choice1: 'Elm Street',
        choice2: 'Mississippi River',
        choice3: 'city',
        choice4: "New York",
        answer: "3"
    },
    {
        question: 'Which word is a proper noun?',
        choice1: 'Atlanta',
        choice2: 'president',
        choice3: 'town',
        choice4: "car",
        answer: "1"
    },
    {
        question: 'Identify the preposition in this sentence: The black-and-white cow is grazing quietly in the farmers field.',
        choice1: 'cow',
        choice2: 'quietly',
        choice3: 'farmers',
        choice4: "in",
        answer: "4"
    },
    {
        question: 'Identify the adverb in this sentence: The movie theater is usually busy.',
        choice1: 'busy',
        choice2: 'usually',
        choice3: 'theater',
        choice4: "movie",
        answer: "2"
    },
    {
        question: 'Choose the correct word for the following sentence: Will you please take a photo of Jane and___?',
        choice1: 'me',
        choice2: 'we',
        choice3: 'us',
        choice4: "I",
        answer: "4"
    },
    {
        question: 'Select the reason why the pronoun and antecedent not agree in the following sentence: My friend is looking for their jacket.',
        choice1: 'number',
        choice2: 'gender',
        choice3: 'case',
        choice4: "person",
        answer: "1"
    },
    {
        question: 'Choose the correct pronoun-antecedent pairing.',
        choice1: 'everyone; my',
        choice2: 'teachers; their',
        choice3: 'you; their',
        choice4: "the man; her",
        answer: "2"
    },
    {
        question: 'Identify the correct verb tense in the following sentence: The lecture will start at four oclock.',
        choice1: 'present',
        choice2: 'past',
        choice3: 'future',
        choice4: "none of the abover",
        answer: "3"
    },
    {
        question: 'Choose the correct word for the following sentence: She laughed __ at the joke.',
        choice1: 'happyingly',
        choice2: 'happiness',
        choice3: 'happy',
        choice4: "happily",
        answer: "4"
    },
    {
        question: 'Identify the prepositional phrase in the following sentence: During the last month, we worked hard to meet our goals.',
        choice1: 'during the last month',
        choice2: 'we worked hard',
        choice3: 'hard to meet',
        choice4: "to meet our goals",
        answer: "1"
    },
    {
        question: 'Identify the singular possessive pronoun.',
        choice1: 'none of the above',
        choice2: 'my',
        choice3: 'their',
        choice4: "ours",
        answer: "2"
    },
    {
        question: 'Identify the adjective in the following sentence: The heavy snow lasted all week.',
        choice1: 'snow',
        choice2: 'all week',
        choice3: 'heavy',
        choice4: "lasted",
        answer: "3"
    },
    {
        question: 'Identify how the word “form” is used in the following sentence: We use bricks to form the circle.',
        choice1: 'verb',
        choice2: 'conjunction',
        choice3: 'noun',
        choice4: "adjective",
        answer: "1"
    },
    {
        question: 'Which of the following is a non-count noun?',
        choice1: 'information',
        choice2: 'car',
        choice3: 'piano',
        choice4: "desk",
        answer: "1"
    },
    {
        question: 'Identify the form of the pronoun in the following sentence: Dad took us to the theater.',
        choice1: 'singular pronoun',
        choice2: 'object pronoun',
        choice3: 'possessive pronoun',
        choice4: "subject pronoun",
        answer: "2"
    },
    {
        question: 'Which type of pronoun indicates whether the personal pronoun is masculine, feminine or neutral?',
        choice1: 'Personal pronoun gender',
        choice2: 'Personal pronoun person',
        choice3: 'Personal pronoun number ',
        choice4: "Personal pronoun case",
        answer: "1"
    },
    {
        question: 'Match the pronoun to its antecedent in the following sentence: When Harriet helped her neighbor, ___ often stayed for hours.',
        choice1: 'they',
        choice2: 'he',
        choice3: 'she',
        choice4: "it",
        answer: "3"
    },
    {
        question: 'Identify the sentence with the intransitive verb.',
        choice1: 'I gave Patrick the book.',
        choice2: 'She loves animals.',
        choice3: 'Julie sent the letter.',
        choice4: "The baby was crying.",
        answer: "4"
    },
    {
        question: 'Identify the underlined word in the following sentence: The gardener pulled the weeds.',
        choice1: 'adverb',
        choice2: 'action verb',
        choice3: 'helping verb',
        choice4: "linking verb",
        answer: "2"
    },
    {
        question: 'Identify the verb tense in the following sentence: We worked all day yesterday.',
        choice1: 'present',
        choice2: 'past',
        choice3: 'future',
        choice4: "none of the above",
        answer: "2"
    },
    {
        question: 'In New York, January is the _______ month in the year.',
        choice1: 'wet',
        choice2: 'wetter',
        choice3: 'wettest',
        choice4: "not wet",
        answer: "3"
    },
    {
        question: 'I____up at 7o clock',
        choice1: 'wake',
        choice2: 'woke',
        choice3: 'will wake up',
        choice4: "will not wake up",
        answer: "1"
    },
    {
        question: 'There are two things _______ affect temperature.',
        choice1: 'who',
        choice2: 'where',
        choice3: 'when',
        choice4: "which",
        answer: "4"
    },
    {
        question: 'I______that film',
        choice1: 'will not see',
        choice2: 'have seen',
        choice3: 'will see',
        choice4: "havent seen",
        answer: "4"
    },
    {
        question: 'There isnt _______ fruit in the Fridge.',
        choice1: 'some',
        choice2: 'any',
        choice3: 'are',
        choice4: "lot of",
        answer: "2"
    },
    {
        question: 'There ______ many rivers in Italy.',
        choice1: 'are',
        choice2: 'is',
        choice3: 'am',
        choice4: "was",
        answer: "1"
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
