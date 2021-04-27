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
        question: 'Elasticity is a property of matter that is applicable by only objects that can stretch?',
        choice1: 'False',
        choice2: 'True',
        choice3: 'Maybe',
        choice4: 'Sometimes',
        answer: 2,
    },  
      {
        question: 'Light is an electromagnetic wave?',
        choice1: 'Sometimes',
        choice2: 'Maybe',
        choice3: 'True',
        choice4: 'False',
        answer: 3,
    },  
      {
        question: 'Is the ability of a material to return to its original shape...',
        choice1: 'Elasticity',
        choice2: 'Visible Light',
        choice3: 'Density',
        choice4: 'Infrasonic Sounds',
        answer: 1,
    },  
      {
        question: 'Infrasonic sounds are so low that you cannot hear them?',
        choice1: 'Sometimes',
        choice2: 'Maybe',
        choice3: 'False',
        choice4: 'True',
        answer: 4,
    },
    {
        question: 'Visible lights make up a part of the electromagnetic sperctrum?',
        choice1: 'False',
        choice2: 'Sometimes',
        choice3: 'True',
        choice4: 'Maybe',
        answer: 3,
    },
    {
        question: 'Describe how high or a low a sound is?',
        choice1: 'Sound Waves',
        choice2: 'Density',
        choice3: 'Pitch',
        choice4: 'Volume',
        answer: 3,
    },
    {
        question: 'What is a force?',
        choice1: 'A push or pull',
        choice2: 'Light',
        choice3: 'Energy',
        choice4: 'Heat',
        answer: 1,
    },
    {
        question:'What is the theory that says how species change?',
        choice1: 'Electrctiy',
        choice2: 'Magnetism',
        choice3: 'Relativity',
        choice4: 'Evoulution',
        answer: 4,
    },
    {
        question: 'What is the resistance an object has to changing its motion?	What is the resistance an object has to changing its motion?',
        choice1: 'Color',
        choice2: 'Charge',
        choice3: 'Inertia',
        choice4: 'Force',
        answer: 3,
    },
    {
        question: 'What is the type of energy an object has because it is moving?',
        choice1: 'Electrostatic',
        choice2: 'Magnetic',
        choice3: 'Kinetic',
        choice4: 'Potential',
        answer: 3,
    },
    {
        question: 'What is the name for the height of a wave?',
        choice1: 'Amplitude',
        choice2: 'Frequency',
        choice3: 'Energy',
        choice4: 'Wavelength',
        answer: 1,
    },
    {
        question: 'Which of the following molecules contains genetic information?',
        choice1: 'Fat',
        choice2: 'Protein',
        choice3: 'Sugar',
        choice4: 'DNA',
        answer: 4,
    },
    {
        question: 'In a wave, what is the name for the distance between two crests?',
        choice1: 'Amplitude',
        choice2: 'Frequency',
        choice3: 'Energy',
        choice4: 'Wavelength',
        answer: 4,
    },
    {
        question: 'What kind of energy does a roller coaster car have the top of a hill?',
        choice1: 'Chemical',
        choice2: 'Heat',
        choice3: 'Potential',
        choice4: 'Kinetic',
        answer: 3,
    },
        {
            question: 'Humans have how many pairs of chromosomes?',
            choice1: '50',
            choice2: '23',
            choice3: '46',
            choice4: '21',
            answer: 2,
        },
        {
            question: 'What is the basic unit of heredity?',
            choice1: 'Proteins',
            choice2: 'Sugar',
            choice3: 'Genes',
            choice4: 'Brains',
            answer: 3,
        },
        {
            question: 'What is it called when the moon moves in between the Earth and the sun?',
            choice1: 'Solar Eclipse',
            choice2: 'Lunar Eclipse',
            choice3: 'Solar Flare',
            choice4: 'Solar Wind',
            answer: 1,
        },
        {
            question: 'What planet is closest to the sun?',
            choice1: 'Venus',
            choice2: 'Neptune',
            choice3: 'Mars',
            choice4: 'Mercury',
            answer: 4,
        },
        {
            question: 'Rainbows appear only after a rainstorm if the weather is hot?',
            choice1: 'True',
            choice2: 'Maybe',
            choice3: 'False',
            choice4: 'Sometimes',
            answer: 3,
        },
        {
            question: 'The tool is used in measuring intensity...',
            choice1: 'Ultraviolet',
            choice2: 'Oscilloscope',
            choice3: 'Photometer',
            choice4: 'Spectrometer',
            answer: 2,
        },
        {
            question: 'Is an intrinsic property of a material that is determined by the amount of mass per a area of space or volume of the material?',
            choice1: 'Light-Year',
            choice2: 'Density',
            choice3: 'Pitch',
            choice4: 'Infrasonic Sounds',
            answer: 2,
        },
        {
            question: 'What type of change is burning a candle?',
            choice1: 'Physical',
            choice2: 'Chemical',
            choice3: 'Chemical Properties',
            choice4: 'Physical Properties',
            answer: 2,
        },
        {
            question: 'What are the number of electrons in Carbon?',
            choice1: '12.001',
            choice2: '3',
            choice3: '6',
            choice4: '12',
            answer: 3,
        },
        {
            question: 'Water pollution can be?',
            choice1: 'Chemical',
            choice2: 'Physical',
            choice3: 'Disaster',
            choice4: 'All of the Above',
            answer: 2,
        },
        {
            question: 'All matter is composed of...',
            choice1: 'Compounds',
            choice2: 'Atoms',
            choice3: 'Water',
            choice4: 'H2O',
            answer: 2,
        },
        {
            question: 'All atoms have a __________ in the center.',
            choice1: 'Electron',
            choice2: 'Particle',
            choice3: 'Nucleus',
            choice4: 'Cloud',
            answer: 3,
        },
        {
            question: 'A proton has a _____________ charge.',
            choice1: 'Positive',
            choice2: 'Negative',
            choice3: 'Neutral',
            choice4: 'None of the Following',
            answer: 1,
        },
        {
            question: 'A marble rolling across the floor is a type of _____________ force.',
            choice1: 'Applied',
            choice2: 'Normal',
            choice3: 'Gravity',
            choice4: 'Friction',
            answer: 4,
        },
        {
            question: 'A plate sitting on a table top is an example of a_____________force.',
            choice1: 'Applied',
            choice2: 'Normal',
            choice3: 'Friction',
            choice4: 'Gravity',
            answer: 2,
        },
        {
            question: 'A desk that is pushed across the room is an example of a_______________________force.',
            choice1: 'Applied',
            choice2: 'Gravity',
            choice3: 'Normal',
            choice4: 'Friction',
            answer: 1,
        },
        {
            question: 'If it takes 10 seconds for ball dropped from a plane to hit the ground, which is its velocity just before it hits?',
            choice1: '0 m/s',
            choice2: '1 m/s',
            choice3: '10 m/s',
            choice4: '100 m/s',
            answer: 4,
        },
        {
            question: 'Which is measured by numbers?',
            choice1: 'Chemistry',
            choice2: 'Theory',
            choice3: 'Quantitantive',
            choice4: 'Control',
            answer: 3,
        },
        {
            question: 'Explanation of some aspect of the natural world that can be repeatedly tested?',
            choice1: 'Chemistry',
            choice2: 'Theory',
            choice3: 'Quantitative',
            choice4: 'Qualitative',
            answer: 2,
        },
        {
            question: 'Variable being tested or meausred?',
            choice1: 'Physics',
            choice2: 'Control',
            choice3: 'Dependant Variable',
            choice4: 'Independant Variable',
            answer: 3,
        },
        {
            question: 'The electrons are in the electron ________________.',
            choice1: 'Region',
            choice2: 'Area',
            choice3: 'Cloud',
            choice4: 'Protons',
            answer: 3,
        },
        {
            question: 'The nucleus of the atom has the____________________and___________________in it.',
            choice1: 'Electrons and Neutrons',
            choice2: 'Protons and Neutrons',
            choice3: 'Protons and Electrons',
            choice4: 'Molecules and Atoms',
            answer: 2,
        },
        {
            question: '____________________________ is anything that has mass and takes up space.',
            choice1: 'Matter',
            choice2: 'Atoms',
            choice3: 'Molecules',
            choice4: 'Volume',
            answer: 1,
        },
        {
            question: 'What does SI stand for?',
            choice1: 'Study and Investigate',
            choice2: 'International System of Units',
            choice3: 'International Space Exploration',
            choice4: 'Scientific Investigation',
            answer: 2,
        },
        {
            question: 'What is the base length for SI?',
            choice1: 'Meters',
            choice2: 'Millimeters',
            choice3: 'Centimeters',
            choice4: 'Liters',
            answer: 1,
        },
        {
            question: 'What is the SI base for mass?',
            choice1: 'Milliliters',
            choice2: 'Liters',
            choice3: 'Kilogram',
            choice4: 'Grams',
            answer: 3,
        },
    {
        question: 'What is the SI base for time?',
        choice1: 'Hours',
        choice2: 'Minutes',
        choice3: 'Milliseconds',
        choice4: 'Seconds',
        answer: 4,
    },
    {
        question: 'What is the SI base for temperature?',
        choice1: 'Celsius',
        choice2: 'Kevlins',
        choice3: 'Fahrenheit',
        choice4: 'Hot and Cold',
        answer: 2,
    },
    {
        question: 'What is the freezing point and boiling point in Celsius?',
        choice1: '100 and 0',
        choice2: '260 and 32',
        choice3: '32 and 100',
        choice4: '300 and -31',
        answer: 1,
    },
    {
        question: 'What are the freezing and boiling points in Fahrenheit?',
        choice1: '32 and 212',
        choice2: '33 and 0',
        choice3: '100 and 0',
        choice4: '100 and 32',
        answer: 1,
    },
    {
        question: 'What are the freezing and boiling points in Kevlins?',
        choice1: '273 and 373',
        choice2: '212 and 32',
        choice3: '0 and 100',
        choice4: '33 and 273',
        answer: 1,
    },
    {
        question: 'What is Newton\'s third law?',
        choice1: 'With every action comes an equal and opposite reaction',
        choice2: 'What comes up must come down',
        choice3: 'No object will stop moving unless something is in its way',
        choice4: 'Everything falls',
        answer: 1,
    },
    {
        question: 'What is the meteric unit for momentum?',
        choice1: 'kg mph',
        choice2: 'Mt.',
        choice3: 'm.',
        choice4: 'kg m/s',
        answer: 4,
    },
    {
        question: 'What is the metric unit for force?',
        choice1: 'F',
        choice2: 'N',
        choice3: 'P',
        choice4: 'G',
        answer: 2,
    },
    {
        question: 'What is the metric unit for weight?',
        choice1: 'N',
        choice2: 'W',
        choice3: 'G',
        choice4: 'P',
        answer: 1,
    },
    {
        question: 'What is the acceleration of gravity "g"?',
        choice1: '9.7 m/s^2',
        choice2: '6.8 m/s^2',
        choice3: '8.8 m/s^2',
        choice4: '9.8 m/s^2',
        answer: 4,
    },
    {
        question: 'What is the metric unit for work?',
        choice1: 'Job',
        choice2: 'Joule',
        choice3: 'Busy',
        choice4: 'Pressure',
        answer: 2,
    },
    {
        question: 'What is the metric unit for power?',
        choice1: 'Gas',
        choice2: 'Gigabytes',
        choice3: 'Watts',
        choice4: 'Electricity',
        answer: 3,
    },
    {
        question: 'What is the metric unit for energy?',
        choice1: 'Joule',
        choice2: 'Kinetic',
        choice3: 'Potential',
        choice4: 'Electricity',
        answer: 1,
    },
    {
        question: 'What is Newton\' first law?',
        choice1: 'When objects interact they apply a force of the same magnitude',
        choice2: 'What comes up must come down',
        choice3: 'An object will not change its motion unless a force acts on it',
        choice4: 'The force of an object is equal to its mass times its acceleration',
        answer: 3,
    },
    {
        question: 'What is Newton\' second law?',
        choice1: 'When objects interact they apply a force of the same magnitude',
        choice2: 'What comes up must come down',
        choice3: 'An object will not change its motion unless a force acts on it',
        choice4: 'The force of an object is equal to its mass times its acceleration',
        answer: 4,
    },
    {
        question: 'Electrons are in the electron ___________.',
        choice1: 'Formula',
        choice2: 'Group',
        choice3: 'Cloud',
        choice4: 'Category',
        answer: 3,
    },
    {
        question: 'All atoms have a _________ in the center.',
        choice1: 'Nucleus',
        choice2: 'Proton',
        choice3: 'Organelle',
        choice4: 'Electron',
        answer: 1,
    },
    {
        question: 'All matter is made up of ______.',
        choice1: 'Electrons',
        choice2: 'Atoms',
        choice3: 'Cells',
        choice4: 'Nucleus',
        answer: 2,
    },
    {
        question: 'Protons, neutrons, and electrons are called _________ particles.',
        choice1: 'Life',
        choice2: 'Microscopic',
        choice3: 'Subatomic',
        choice4: 'Nuclear',
        answer: 3,
    },
    {
        question: '___________ are the smallest unit of matter that retains the identity of the substance.',
        choice1: 'Molecules',
        choice2: 'Atoms',
        choice3: 'Cells',
        choice4: 'Electrons',
        answer: 2,
    },
    {
        question: 'An Electron has a _______________ charge.',
        choice1: 'Potential',
        choice2: 'Kinetic',
        choice3: 'Positive',
        choice4: 'Negative',
        answer: 4,
    },
    {
        question: 'What type of charge does a proton have?',
        choice1: 'Positive',
        choice2: 'Kinetic',
        choice3: 'Negative',
        choice4: 'Electric',
        answer: 1,
    },

    {
        question: 'What is neucleotide made of?',
        choice1: 'Base, sodium, calcium',
        choice2: 'Sugar, sodium, base',
        choice3: 'Phosphate, calcium, base',
        choice4: 'Sugar, base, and phosphate',
        answer: 4,
    },
    {
        question: 'Where is the Mariana Trench?',
        choice1: 'Pacific Ocean',
        choice2: 'Atlantic Ocean',
        choice3: 'Arctic Ocean',
        choice4: 'Indian Ocean',
        answer: 1,
    },
    {
        question: 'Where does the Earth get most of its light?',
        choice1: 'Sun',
        choice2: 'Far off stars',
        choice3: 'Moon',
        choice4: 'Reflective light from other galaxies',
        answer: 1,
    },
    {
        question: 'What is calorie used to measure?',
        choice1: 'Sugar',
        choice2: 'Energy',
        choice3: 'Fats',
        choice4: 'Sodium and Fiber',
        answer: 2,
    },
    {
        question: 'Which of these aren\'t part of the circulatory system?',
        choice1: 'Heart',
        choice2: 'Veins',
        choice3: 'Lungs',
        choice4: 'Arteries',
        answer: 3,
    },
    {
        question: 'Who invented the telescope?',
        choice1: 'Isaac Newton',
        choice2: 'Hans Lippershey',
        choice3: 'Antonie van Leeuwenhoek',
        choice4: 'Galilieo Galilei',
        answer: 2,
    },
    {
        question: 'What happens when an animals enviroment chfireanges and it can\'t adapt?',
        choice1: 'Endangerment',
        choice2: 'Less Food',
        choice3: 'They grow in population',
        choice4: 'Extinction',
        answer: 4,
    },
    {
        question: 'In which part of a plant cell does photosynthesis happen?',
        choice1: 'Nucleus',
        choice2: 'Chloroplast',
        choice3: 'Organelle',
        choice4: 'Roots',
        answer: 2,
    },
    {
        question: 'What is a rock formation called that comes from the bottom of caves?',
        choice1: 'Stalagmites',
        choice2: 'Stagelmite',
        choice3: 'Cave Icicles',
        choice4: 'Dripstone',
        answer: 1,
    },
    {
        question: 'What type of star is the sun?',
        choice1: 'Yellow Dwarf',
        choice2: 'Supernova',
        choice3: 'Minor Nova',
        choice4: 'Orange Dwarf',
        answer: 1,
    },
    {
        question: 'What is the molten rock underneaths Earth\'s surface called?',
        choice1: 'The Core',
        choice2: 'Magma',
        choice3: 'Lava',
        choice4: 'Hardened Lava',
        answer: 2,
    },
    {
        question: 'What does Pb stands for what chemical element?',
        choice1: 'Lead',
        choice2: 'Phosphorous',
        choice3: 'Gold',
        choice4: 'Silver',
        answer: 1,
    },
    {
        question: 'What is the layer of mixed gases around the Earth called?',
        choice1: 'Clouds',
        choice2: 'Air',
        choice3: 'Troposphere',
        choice4: 'Atmosphere',
        answer: 4,
    },
    {
        question: 'Salt that is dissolved in water is considered a(n) what?',
        choice1: 'Salt Water',
        choice2: 'Solution',
        choice3: 'Mixture',
        choice4: 'Problem',
        answer: 3,
    },
    {
        question: 'What stage occurs when a liquid changes to gas?',
        choice1: 'Condensation',
        choice2: 'Transpiration',
        choice3: 'Evaporation',
        choice4: 'Melting',
        answer: 3,
    },
    {
        question: 'What is required during a phase change?',
        choice1: 'Sublimation',
        choice2: 'Energy',
        choice3: 'Vibration',
        choice4: 'Water',
        answer: 2,
    },
    {
        question: 'What phase change happens when gas changes to liquid?',
        choice1: 'Transpiration',
        choice2: 'Condensation',
        choice3: 'Freezing',
        choice4: 'Deposition',
        answer: 4,
    },
    {
        question: 'Which of the following processes is not included in the phase change of matter?',
        choice1: 'Heating',
        choice2: 'Freezing',
        choice3: 'Evaporation',
        choice4: 'Condensation',
        answer: 1,
    },
    {
        question: 'Which of the following will cause a decrease in gas pressure in a closed container?',
        choice1: 'Increasing the temperature',
        choice2: 'Reducing the volume',
        choice3: 'Increasing the Volume',
        choice4: 'Lowering the temperature',
        answer: 4,
    },
    {
        question: 'Which phase change occurs when a liquid changes into a solid?',
        choice1: 'Condensation',
        choice2: 'Freezing',
        choice3: 'Evaporation',
        choice4: 'Melting',
        answer: 2,
    },
    {
        question: 'What is the outer most layer of an animal cell?',
        choice1: 'Cell Membrane',
        choice2: 'Nucleus',
        choice3: 'Cell Skin',
        choice4: 'Cell Wall',
        answer: 1,
    },
    {
        question: 'What organelle is only found in a plant cell?',
        choice1: 'Transpiration Cells',
        choice2: 'Seeds',
        choice3: 'Chloroplasts',
        choice4: 'Mitochondria',
        answer: 3,
    },
    {
        question: 'What organisms make energy available to all other organisms in the food chain?',
        choice1: 'Consumers',
        choice2: 'Composters',
        choice3: 'Producers',
        choice4: 'Decomposers',
        answer: 3,
    },
    {
        question: 'When multiple organ systems work together it can form____.',
        choice1: 'Organism',
        choice2: 'Cells',
        choice3: 'Organ',
        choice4: 'Organ system',
        answer: 1,
    },
    {
        question: 'Directs all cell activities through the DNA that is there.',
        choice1: 'Nucleus',
        choice2: 'Mitochondria',
        choice3: 'Lysosomes',
        choice4: 'Ribosomes',
        answer: 1,
    },
    {
        question: 'What organelle do plants have surrounding their cells that animals don\'t?',
        choice1: 'Woody Stems',
        choice2: 'Thorns',
        choice3: 'Cell Membrane',
        choice4: 'Cell Wall',
        answer: 4,
    },
    {
        question: 'What structures are found in every living cell?',
        choice1: 'Chloroplasts and Cell Wall',
        choice2: 'Chloroplasts and Mitochondria',
        choice3: 'Cell Membrane and Cytoplasm',
        choice4: 'Cell Wall and Nucleus',
        answer: 3,
    },
    {
        question: 'Changes to a structure, funciton, or behavior that allow an organism to survive.',
        choice1: 'Camoflauge',
        choice2: 'Adaptation',
        choice3: 'Mutation',
        choice4: 'Interdependence',
        answer: 2,
    },
    {
        question: 'The digestive system converts food into usable______.',
        choice1: 'Energy',
        choice2: 'Nutrients',
        choice3: 'Organs',
        choice4: 'Muscles',
        answer: 1,
    },
    {
        question: 'What is found in plant and animal cells but is larger in plant cells?',
        choice1: 'Vacuole',
        choice2: 'Chloroplast',
        choice3: 'Mitochondria',
        choice4: 'Nucleus',
        answer: 1,
    },
    {
        question: 'Plants use the sunlight to make their own food. Therefore, plants are ____.',
        choice1: 'Producers',
        choice2: 'Decomposers',
        choice3: 'Consumers',
        choice4: 'Predators',
        answer: 1,
    },
    {
        question: 'What is the gell-like substnace in cells called?',
        choice1: 'Photoplasm',
        choice2: 'Cytoskeleton',
        choice3: 'Photosynthesis',
        choice4: 'Cytoplasm',
        answer: 4,
    },
    {
        question: 'What organ system takes in oxygen and releases carbon dioxide?',
        choice1: 'Respiratory System',
        choice2: 'Circulatory System',
        choice3: 'Digestive System',
        choice4: 'Endocrine System',
        answer: 1,
    },
    {
        question: 'What is natural selection?',
        choice1: 'The way natural life works on its own',
        choice2: 'The way mother nature kills off some animals',
        choice3: 'How living things eat and hunt lesser creatures so they aren\'t eaten',
        choice4: 'How living things adapt to their environment to survive and produce more offspring',
        answer: 4,
    },
    {
        question: 'Coloring of markings that help an organism blend in with its surroundings.',
        choice1: 'Mutation',
        choice2: 'Adaptation',
        choice3: 'Camoflauge',
        choice4: 'Trait',
        answer: 3,
    },
    {
        question: 'Which of the following is a predator?',
        choice1: 'Deer',
        choice2: 'Wolf',
        choice3: 'Plant',
        choice4: 'Snail',
        answer: 2,
    },
    {
        question: 'In terms of evolution survival is the most important thing.',
        choice1: 'Maybe',
        choice2: 'True',
        choice3: 'False',
        choice4: 'Sometimes',
        answer: 3,
    },
    {
        question: 'What is the cause for all variation within a population?',
        choice1: 'Mutation',
        choice2: 'Natural Selection',
        choice3: 'Enviromental Changes',
        choice4: 'Adaptation',
        answer: 1,
    },
    {
        question: 'What is a protein?',
        choice1: 'A polymer composed of many sugars',
        choice2: 'A polymer composed of fatty acids',
        choice3: 'A polymer composed of many amino acids',
        choice4: 'A polymer composed of nucleotides',
        answer: 3,
    },
    {
        question: 'Because of enviromental changes organisms develop mutations to survive in that envrioment.',
        choice1: 'True',
        choice2: 'False',
        choice3: 'Maybe',
        choice4: 'Sometimes',
        answer: 2,
    },
    {
        question: 'What are nucleotides?',
        choice1: 'Polymers of DNA',
        choice2: 'Monomers of proteins',
        choice3: 'Monomers of DNA',
        choice4: 'DNA base pairs',
        answer: 3,
    },
    {
        question: 'What animal did Darwin study?',
        choice1: 'A perculular ladybug',
        choice2: 'A Bear',
        choice3: 'A Lizard',
        choice4: 'A Finch',
        answer: 4,
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