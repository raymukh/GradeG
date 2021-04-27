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
        question: 'Which scientific instrument measures weight?',
        choice1: 'Triple Beam Balance',
        choice2: 'Scale',
        choice3: 'Thermometer',
        choice4: "Wheel and axle",
        answer: 2 ,
    },
    {
        question: 'Which is an independent variable?',
        choice1: 'Age',
        choice2: 'Height',
        choice3: 'Neither',
        choice4: "Both",
        answer: 1 ,
    },
    {
        question: 'Which event causes lightning?',
        choice1: 'thunderstorm',
        choice2: 'earthquake',
        choice3: 'volcano',
        choice4: "tornado",
        answer: 1 ,
    },
    {
        question: 'Which group do horses belong to?',
        choice1: 'anthropods',
        choice2: 'birds',
        choice3: 'sponge',
        choice4: "mammals",
        answer: 4 ,
    },
    {
        question: 'How are vertebrates different from invertebrates?',
        choice1: 'They have legs',
        choice2: 'They have lungs',
        choice3: 'They have fur',
        choice4: "They have a backbone",
        answer: 4 ,
    },
    {
        question: 'One way that mosses and ferns are similar is they both?',
        choice1: 'produce spores',
        choice2: 'are flowering plants',
        choice3: 'grow with little rainfall',
        choice4: "are vascular plants",
        answer: 1 ,
    },
    {
        question: 'Seeds with one cotyledon?',
        choice1: 'monocots',
        choice2: 'dicots',
        choice3: 'polycot',
        choice4: "none of the above",
        answer: 2 
    },

    {
        question: 'Narrow leaves with parallel vines?',
        choice1: 'monocots',
        choice2: 'dicots',
        choice3: 'polycot',
        choice4: "none of the above",
        answer: 1
    },

    {
        question: 'Wider leaves with branching network of veins?',
        choice1: 'monocots',
        choice2: 'dicots',
        choice3: 'polycot',
        choice4: "none of the above",
        answer: 2
    },

    {
        question: 'What part of the plant takes in water?',
        choice1: 'roots',
        choice2: 'leaves',
        choice3: 'stems',
        choice4: "chlorophyll",
        answer: 1
    },

    {
        question: 'Which process is a major source of oxygen in the atmosphere?',
        choice1: 'evaporation',
        choice2: 'precipitation',
        choice3: 'photosynthesis',
        choice4: "respiration",
        answer: 3 
    },

    {
        question: 'Which gases are exchanged during photosynthesis?',
        choice1: 'carbon dioxide is used and oxygen is produced',
        choice2: 'oxygen is used and carbon dioxide is produced',
        choice3: 'oxygen is used and nitrogen is produced',
        choice4: "nitrogen is used and carbon dioxide is produced",
        answer: 1
    },

    {
        question: 'Why are plants that photosynthesize important for the human population?',
        choice1: 'they use water',
        choice2: 'they produce oxygen',
        choice3: 'they contain chlorophyll',
        choice4: "they produce carbon dioxide",
        answer: 2 
    },

    {
        question: 'The ___ cycle is the movement of water among oceans, atmosphere, land, and living things.',
        choice1: 'water',
        choice2: 'carbon',
        choice3: 'nitrogen',
        choice4: "none of the above",
        answer: 1
    },

    {
        question: '____ is how water moves from the land to atmosphere.',
        choice1: 'evaporation',
        choice2: 'precipitation',
        choice3: 'condensation',
        choice4: "none of the above",
        answer: 1 
    },

    {
        question: 'Where will you find the ozone layer?',
        choice1: 'stratosphere',
        choice2: 'exosphere',
        choice3: 'thermosphere',
        choice4: "mesosphere",
        answer: 1
    },

    {
        question: 'Which layer is the outermost layer?',
        choice1: 'troposphere',
        choice2: 'thermosphere',
        choice3: 'exosphere',
        choice4: "mesosphere",
        answer: 3
    },

    {
        question: 'Where weather occurs?',
        choice1: 'stratosphere',
        choice2: 'thermosphere',
        choice3: 'troposphere',
        choice4: "mesosphere",
        answer: 3
    },

    {
        question: 'The higher you go, the air becomes...',
        choice1: 'more dense',
        choice2: 'less dense',
        choice3: 'thinner',
        choice4: "none of the above",
        answer: 1 
    },

    {
        question: 'What clouds form - what process is occurring?',
        choice1: 'meteorology',
        choice2: 'condensation',
        choice3: 'collection',
        choice4: "runoff",
        answer: 2
    },

    {
        question: 'What word means: Water vapor forms clouds in the atmosphere?',
        choice1: 'evaporation',
        choice2: 'condensation',
        choice3: 'runoff',
        choice4: "precipitation",
        answer: 2 
    },

    {
        question: 'Which types of energy does the battery produce?',
        choice1: 'sound',
        choice2: 'mechanical',
        choice3: 'light',
        choice4: "electrical",
        answer: 4 
    },

    {
        question: 'A student connected some wire to a battery and a small bulb to make a simple circuit. Energy from the battery is changed into electricity. What type of energy is stored in the battery?',
        choice1: 'chemical',
        choice2: 'nuclear',
        choice3: 'heat',
        choice4: "light",
        answer: 1 
    },

    {
        question: 'What form of energy is stored up?',
        choice1: 'radiant energy',
        choice2: 'kinetic energy',
        choice3: 'potential energy',
        choice4: "energy",
        answer: 3 
    },

    {
        question: 'Is the picture a vertebrate or invertebrate?',
        choice1: 'Vertebrate',
        choice2: 'Invertebrate',
        choice3: 'Both',
        choice4: "None of the above",
        answer: 2 
    },

    {
        question: 'Which of the following has an exoskeleton?',
        choice1: 'foxes',
        choice2: 'lobsters',
        choice3: 'birds',
        choice4: "fish",
        answer: 2 
    },

    {
        question: 'Fishes take in oxygen through their...',
        choice1: 'fins',
        choice2: 'scales',
        choice3: 'gills',
        choice4: "vertebrae",
        answer: 3 
    },

    {
        question: 'What adaptation helps the bird in the picture to seize and hold on to its prey?',
        choice1: 'eyesight',
        choice2: 'talons (sharp claws)',
        choice3: 'wingspan',
        choice4: "sharp, hooked beak",
        answer: 4
    },

    {
        question: 'What would a reptile do in order to warm itself up?',
        choice1: 'bask or lay out in the sun',
        choice2: 'eat some food',
        choice3: 'shiver',
        choice4: "run around",
        answer: 1 
    },

    {
        question: 'How do scientists learn about the world around them?',
        choice1: 'by ignoring observations',
        choice2: 'by studying plants',
        choice3: 'by asking questions',
        choice4: "none of the above",
        answer: 3 
    },

    {
        question: 'Which is an example of a quantitative observation?',
        choice1: 'the ant is 3 cm long',
        choice2: 'the clouds are big and white',
        choice3: 'the classroom feels cold',
        choice4: "none of the above",
        answer: 1 
    },

    {
        question: 'Which is an example of a quantitative observation?',
        choice1: 'the ant is 3 cm long',
        choice2: 'the clouds are big and white',
        choice3: 'the classroom feels cold',
        choice4: "none of the above",
        answer: 1 
    },

    {
        question: 'Heat flow is a transfer of',
        choice1: 'energy',
        choice2: 'mass',
        choice3: 'atoms',
        choice4: "waves",
        answer: 1 
    },

    {
        question: 'The most important source of energy that heats the surface of the Earth comes from',
        choice1: 'volcanic eruptions',
        choice2: 'geysers',
        choice3: 'the Sun',
        choice4: "the core",
        answer: 3 
    },

    {
        question: 'Heat will transfer from',
        choice1: 'an ice pack to a hot pizza',
        choice2: 'a warm cookie to the ice cream on top of it',
        choice3: 'a cold pool to a warm person sitting in it',
        choice4: "a cold window to a hand leaning on it",
        answer: 2 
    },

    {
        question: 'Cardy B wants to know if the type of light affects the growth of plants. What is the independent variable?',
        choice1: 'type of light',
        choice2: 'plant growth',
        choice3: "the plant's health",
        choice4: "None of the above",
        answer: 1 
    },

    {
        question: 'Cardy B wants to know if the type of light affects the growth of plants. What is the dependent variable',
        choice1: 'type of light',
        choice2: 'plant growth',
        choice3: "the plant's health",
        choice4: "None of the above",
        answer: 2 
    },

    {
        question: 'Mrs. Goodwyn wants to test the hypothesis "If I add salt to water then it will boil faster." What is the Independent Variable?',
        choice1: 'Amount of salt added',
        choice2: 'temperature at which water boils',
        choice3: "water temperature",
        choice4: "None of the above",
        answer: 3 
    },

    {
        question: 'Any form of water that falls from clouds is called',
        choice1: 'dew',
        choice2: 'evaporation',
        choice3: "condensation",
        choice4: "precipitation",
        answer: 4 
    },

    {
        question: 'Cold, dry air affecting the northern United States in winter often comes from',
        choice1: 'maritime polar air masses',
        choice2: 'continental polar air masses',
        choice3: "maritime tropical air masses",
        choice4: "continental tropical air masses",
        answer: 2
    },

    {
        question: 'Hurricanes typically form over',
        choice1: 'cold oceans',
        choice2: 'tropical rainforests',
        choice3: "very dry landmasses",
        choice4: "warm ocean water",
        answer: 4
    },

    {
        question: 'The prevailing westerlies, one called the jet stream, the major wind belts over the continental United States, generally push air masses from',
        choice1: 'east to west',
        choice2: 'north to south',
        choice3: "west to east",
        choice4: "south to north",
        answer: 3
    },

    {
        question: 'The cycle of heating, rising, cooling, and sinking is called a:',
        choice1: 'subduction zone',
        choice2: 'convergent zone',
        choice3: "convection current",
        choice4: "conduction current",
        answer: 3
    },

    {
        question: 'What is the most abundant gas in the air?',
        choice1: 'nitrogen',
        choice2: 'oxygen',
        choice3: "carbon dioxide",
        choice4: "helium",
        answer: 1
    },

    {
        question: 'Which cloud type is the most likely to produce hail?',
        choice1: 'stratus',
        choice2: 'cumulonimbus',
        choice3: "cumulus",
        choice4: "cirrus",
        answer: 2
    },

    {
        question: 'What is the primary cause of wind?',
        choice1: 'uneven heating of Earth',
        choice2: 'precipitation falling to Earth',
        choice3: "many gases released into the air",
        choice4: "water constantly evaporating into the atmosphere",
        answer: 1
    },

    {
        question: 'A low pressure system moves into North Carolina, which kind of weather will most likely occur?',
        choice1: 'cold and dry',
        choice2: 'fair and sunny',
        choice3: "clear and humid",
        choice4: "rainy and windy",
        answer: 4
    },

    {
        question: 'This type of energy has two forms: motion and potential',
        choice1: 'thermal',
        choice2: 'sound',
        choice3: "nuclear",
        choice4: "mechanical",
        answer: 4
    },

    {
        question: 'This type of energy is molecule vibration',
        choice1: 'radiant',
        choice2: 'thermal',
        choice3: "sound",
        choice4: "nuclear",
        answer: 2
    },

    {
        question: 'What is a synonym for potential energy',
        choice1: 'kinetic',
        choice2: 'motion',
        choice3: "running",
        choice4: "None of the above",
        answer: 4
    },

    {
        question: 'What is a synonym for kinetic energy?',
        choice1: 'motion',
        choice2: 'sitting',
        choice3: "potential",
        choice4: "None of the above",
        answer: 1
    },

    {
        question: 'Which part of the lever is the part you are trying to move?',
        choice1: 'fulcrum',
        choice2: 'load',
        choice3: "effort",
        choice4: "None of the above",
        answer: 3
    },

    {
        question: 'A stretched rubber band is an example of what type of energy?',
        choice1: 'kinetic',
        choice2: 'potential',
        choice3: "static",
        choice4: "None of the above",
        answer: 1
    },

    {
        question: 'Which simple machine does a flagpole make use of?',
        choice1: 'screw',
        choice2: 'inclined plane',
        choice3: "pulley",
        choice4: "lever",
        answer: 3
    },

    {
        question: 'What should you do to reduce the amount of effort needed to lift something using a first class lever?',
        choice1: 'move the fulcrum closer to the load',
        choice2: 'move the fulcrum to the middle of the lever',
        choice3: "move the fulcrum closer to the effort",
        choice4: "None of the above",
        answer: 1
    }, 

    {
        question: 'Any device that makes work easier is called a:',
        choice1: 'Joule',
        choice2: 'lever',
        choice3: "prop",
        choice4: "machine",
        answer: 4
    }, 

    {
        question: 'A force exerted over a distance to move an object is:',
        choice1: 'power',
        choice2: 'work',
        choice3: "momentum",
        choice4: "watt",
        answer: 2
    }, 

    {
        question: 'A simple machine with a straight slanted surface is a(n):',
        choice1: 'lever',
        choice2: 'inclined plane',
        choice3: "wheel and axle",
        choice4: "pulley",
        answer: 2
    }, 

    {
        question: 'Which of the following is the best example of work being done:',
        choice1: 'doing homework',
        choice2: 'lifting a box',
        choice3: "pushing a stationary box",
        choice4: "carrying a box",
        answer: 2
    }, 

    {
        question: 'A ramp is an example of a(n):',
        choice1: 'wheel and axle',
        choice2: 'incline plane',
        choice3: "lever",
        choice4: "pulley",
        answer: 2
    }, 

    {
        question: 'A drillbit is an example of which machine?',
        choice1: 'screw',
        choice2: 'ramp',
        choice3: "wedge",
        choice4: "pulley",
        answer: 1
    }, 

    {
        question: 'A fulcrum is:',
        choice1: 'an endangered bird',
        choice2: 'place where a lever is supported',
        choice3: "support for an inclined plane",
        choice4: "dressing for a salad",
        answer: 2
    }, 

    {
        question: 'Which simple machines are found on a hammer?',
        choice1: 'lever only',
        choice2: 'wedge and plane',
        choice3: "axle and lever",
        choice4: "screw and pulley",
        answer: 1
    },
    
    {
        question: 'Scissors are made up of what two simple machines?',
        choice1: 'wheel and axle',
        choice2: 'lever and wedge',
        choice3: "lever and fulcrum",
        choice4: "pulley and wedge",
        answer: 2
    }, 

    {
        question: 'A _____________________ is an inclined plane that moves.',
        choice1: 'screw',
        choice2: 'wedge',
        choice3: "wheel",
        choice4: "pulley",
        answer: 2
    }, 

    {
        question: 'Which of the organisms on the list are microorganisms?',
        choice1: 'bacteria',
        choice2: 'mosquito',
        choice3: "seaweed",
        choice4: "human",
        answer: 1
    }, 

    {
        question: 'Microorganisms can help make food. Which 3 of these foods do they help to make?',
        choice1: 'cheese',
        choice2: 'yogurt',
        choice3: "chocolate",
        choice4: "bread",
        answer: 2
    },

    {
        question: 'What do you need to be able to see a microorganism?',
        choice1: 'telescope',
        choice2: 'binoculars',
        choice3: "microscope",
        choice4: "glasses",
        answer: 3
    },

    {
        question: 'What bad thing can microorganisms do?',
        choice1: 'cause disease',
        choice2: 'make bread',
        choice3: "make yogurt",
        choice4: "None of the above",
        answer: 1
    },

    {
        question: 'What is bad to do in the kitchen?',
        choice1: 'washing your hands',
        choice2: 'not keeping food in the fridge',
        choice3: "keeping raw meat stored away from cooked meat",
        choice4: "None of the above",
        answer: 2
    },

    {
        question: 'What do antibiotics do?',
        choice1: 'helping bacteria to grow',
        choice2: 'kill bacteria that cause disease',
        choice3: "make you susceptible to illness",
        choice4: "None of the above",
        answer: 2
    },

    {
        question: 'What are forces measured in?',
        choice1: "Isaac's",
        choice2: "Newton's",
        choice3: "Friction's",
        choice4: "None of the above",
        answer: 2
    },

    {
        question: 'What can I use to measure forces?',
        choice1: "Telescope",
        choice2: "Microscope",
        choice3: "Forcemeter",
        choice4: "None of the above",
        answer: 3
    },

    {
        question: 'What will happen if I have two magnets, and I put both the north poles together?',
        choice1: "The magnets will attract",
        choice2: "The magnets will repel",
        choice3: "The magnets will do nothing",
        choice4: "None of the above",
        answer: 2
    },

    {
        question: 'Which of these of these are magnetic?',
        choice1: "smelly socks",
        choice2: "a wooden spoon",
        choice3: "a metal spoon",
        choice4: "None of the above",
        answer: 3
    },

    {
        question: 'What is the force that pulls us down to Earth and stops us floating into space?',
        choice1: "friction",
        choice2: "air resistance",
        choice3: "gravity",
        choice4: "upthrust",
        answer: 3
    },

    {
        question: 'Which of these forces slows you down if you ride a bike on the grass instead of on a smooth pavement?',
        choice1: "friction",
        choice2: "air resistance",
        choice3: "gravity",
        choice4: "upthrust",
        answer: 1
    },

    {
        question: 'Which force stop a boat from sinking?',
        choice1: "friction",
        choice2: "air resistance",
        choice3: "gravity",
        choice4: "upthrust",
        answer: 4
    },

    {
        question: 'Which of these are a light source?',
        choice1: "the sun",
        choice2: "air",
        choice3: "teapot",
        choice4: "pencil case",
        answer: 1
    },

    {
        question: 'Which of these are not a light source?',
        choice1: "the sun",
        choice2: "air",
        choice3: "flashlight",
        choice4: "candle",
        answer: 2
    },

    {
        question: 'What would be better at reflecting light?',
        choice1: "shiny surface",
        choice2: "air",
        choice3: "dull surface",
        choice4: "none of the above",
        answer: 1
    },

    {
        question: 'Why are shadows formed?',
        choice1: "if something gets in the way of light",
        choice2: "if I turn all the lights off",
        choice3: "when the stars twinkle",
        choice4: "none of the above",
        answer: 1
    },

    {
        question: 'The si unit of speed is?',
        choice1: "M/s",
        choice2: "Cm/kg",
        choice3: "Km/h",
        choice4: "none of the above",
        answer: 1
    },

    {
        question: 'The process by which plants make their food is called:',
        choice1: "transpiration",
        choice2: "photosynthesis",
        choice3: "translocation",
        choice4: "none of the above",
        answer: 2
    },

    {
        question: 'What do plants breathe?',
        choice1: "carbon dioxide",
        choice2: "nitrogen",
        choice3: "oxygen",
        choice4: "none of the above",
        answer: 1
    },

    {
        question: 'The moon is:',
        choice1: "satellite",
        choice2: "plant",
        choice3: "round",
        choice4: "none of the above",
        answer: 1
    },

    {
        question: 'The movement of the earth on its axis is called:',
        choice1: "revolution",
        choice2: "rotation",
        choice3: "motion",
        choice4: "none of the above",
        answer: 3
    },

    {
        question: 'What is Science?',
        choice1: "study of living things",
        choice2: "study of nature",
        choice3: "study of non-living things",
        choice4: "none of the above",
        answer: 2
    },

    {
        question: 'What is Mass?',
        choice1: "An object that shows how much kilogram is in it",
        choice2: "Representing the amount of matter in a particle or object.",
        choice3: "study of non-living things",
        choice4: "none of the above",
        answer: 2
    },

    {
        question: 'What is the length?',
        choice1: "The distance between 100 points.",
        choice2: "The distance between 4 points.",
        choice3: "The distance between 2 points.",
        choice4: "none of the above",
        answer: 3
    },

    {
        question: 'What is the function of the blood cell?',
        choice1: "Carry messages to all over the body",
        choice2: "To control the size of the openings",
        choice3: "To carry oxygen to all over the body",
        choice4: "none of the above",
        answer: 3
    },

    {
        question: 'I have dry, scaly skin breathe with lungs and lay shelled eggs. My relatives are dinosaurs, lizards, snakes, etc. Who am I?',
        choice1: "amphibians",
        choice2: "primates",
        choice3: "reptiles",
        choice4: "none of the above",
        answer: 3
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
