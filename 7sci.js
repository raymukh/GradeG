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
        question: 'What type of rock forms from cooled magma?',
        choice1: 'Sedimentary',
        choice2: 'Metamorphic',
        choice3: 'Igneous',
        choice4: "Lava",
        answer: 3,
    },
    {
        question: 'What is the Earths surface divided into?',
        choice1: 'Plates',
        choice2: 'Phases',
        choice3: 'Colors',
        choice4: "Textures",
        answer: 1,
    },
    {
        question: 'What is the hottest place inside the Earth?',
        choice1: 'Crust',
        choice2: 'Mantle',
        choice3: 'Ocean',
        choice4: "Core",
        answer: 4,
    },
    {
        question: 'What is the natural disaster where the ground shakes?',
        choice1: 'Hurricane',
        choice2: 'Tornado',
        choice3: 'Earthquake',
        choice4: "Lightning",
        answer: 3,
    },
    {
        question: 'What is the phase change from a solid to a liquid?',
        choice1: 'Freezing',
        choice2: 'Melting',
        choice3: 'Evaporation',
        choice4: "Condensation",
        answer: 2,
    },
    {
        question: 'What is the phase change from a liquid to a solid?',
        choice1: 'Freezing',
        choice2: 'Melting',
        choice3: 'Evaporation',
        choice4: "Condensation",
        answer: 1,
    },
    {
        question: 'What is the phase change from a gas to a liquid?',
        choice1: 'Freezing',
        choice2: 'Melting',
        choice3: 'Evaporation',
        choice4: "Condensation",
        answer: 4,
    },
    {
        question: 'What is the phase change from a liquid to a gas?',
        choice1: 'Freezing',
        choice2: 'Melting',
        choice3: 'Evaporation',
        choice4: "Condensation",
        answer: 3,
    },
    {
        question: 'What forms when magma goes up to the Earths surface?',
        choice1: 'Fault',
        choice2: 'Volcano',
        choice3: 'Tree',
        choice4: "Trench",
        answer: 2,
    },
    {
        question: 'In what phase of matter do the molecules have the lowest energy?',
        choice1: 'Solid',
        choice2: 'Liquid',
        choice3: 'Gas',
        choice4: "Plasma",
        answer: 1,
    },
    {
        question: 'What is the type of energy that moving objects have?',
        choice1: 'Potential energy',
        choice2: 'Kinetic energy',
        choice3: 'Chemical energy',
        choice4: "Inverse energy",
        answer: 2,
    },
    {
        question: 'What is the name of the outer layer of the Earth?',
        choice1: 'Crust',
        choice2: 'Mantle',
        choice3: 'Inner core',
        choice4: "Outer core",
        answer: 1,
    },
    {
        question: 'A household cleaner has a pH around 10. It would be considered',
        choice1: 'a base.',
        choice2: 'an acid.',
        choice3: 'neutral.',
        choice4: "a liquid.",
        answer: 1,
    },
    {
        question: 'Which pH range describes strong acids?',
        choice1: '0-7',
        choice2: '6-8',
        choice3: '11-15',
        choice4: "0-4",
        answer: 4,
    },
    {
        question: 'Distilled water with a pH of 7 is  .',
        choice1: 'a salt',
        choice2: 'an alkaline',
        choice3: 'an acid',
        choice4: "neutral",
        answer: 4,
    },
    {
        question: 'Which could be the pH of an acidic substance?',
        choice1: '3',
        choice2: '7',
        choice3: '11',
        choice4: "13",
        answer: 1,
    },
    {
        question: 'Which pH value indicates a neutral solution?',
        choice1: '0',
        choice2: '5',
        choice3: '7',
        choice4: "10",
        answer: 3,
    },
    {
        question: 'A solution at pH 11.5 is  .',
        choice1: 'acidic',
        choice2: 'basic',
        choice3: 'neutral',
        choice4: "none of the above",
        answer: 2,
    },
    {
        question: 'According to the geologic time scale, what is the current period called?',
        choice1: 'Cretaceous',
        choice2: 'Jurassic',
        choice3: 'Triassic',
        choice4: "Quaternary",
        answer: 4,
    },
    {
        question: 'What are the major subdivisions of geologic time, in order from longest to shortest time?',
        choice1: 'Eons, eras, periods, epochs',
        choice2: 'Epochs, eons, eras, periods',
        choice3: 'Eras, eons, epochs, periods',
        choice4: "Periods, eras, eons, epochs",
        answer: 1,
    },
    {
        question: 'The principle that states geologic changes occur over long periods of time is',
        choice1: 'the threshold theory.',
        choice2: 'catastrophism.',
        choice3: 'gradualism.',
        choice4: "the feedback mechanism.",
        answer: 3,
    },
    {
        question: 'In which era did the first fish appear?',
        choice1: 'Carboniferous',
        choice2: 'Paleozoic',
        choice3: 'Mesozoic',
        choice4: "Permian",
        answer: 2,
    },
    {
        question: 'Pangaea began to break up into continents during the',
        choice1: 'Tertiary Period.',
        choice2: 'Precambrian Era.',
        choice3: 'Mesozoic Era.',
        choice4: "Cenozic Era.",
        answer: 3,
    },
    {
        question: 'Dinosaurs became extinct at the end of the',
        choice1: 'Cretaceous period.',
        choice2: 'Triassic period.',
        choice3: 'Carboniferous period.',
        choice4: "Permian period.",
        answer: 1,
    },
    {
        question: 'Huttons observations of the nature of the development of sandstone would be an example of',
        choice1: 'tectonic plate theory.',
        choice2: 'catastrophism.',
        choice3: 'the carbon cycle.',
        choice4: "gradualism.",
        answer: 4,
    },
    {
        question: 'When did the Mesozoic era end?',
        choice1: '85 millions years ago',
        choice2: '65 million years ago',
        choice3: '45 million years ago',
        choice4: "25 million years ago",
        answer: 2,
    },
    {
        question: 'The longest part of Earths history is called the  .',
        choice1: 'Cambrian',
        choice2: 'Precambrian',
        choice3: 'Mesozoic',
        choice4: "Jurassic",
        answer: 2,
    },
    {
        question: 'The most recent ice age was during the',
        choice1: 'Pennsylvanian Period.',
        choice2: 'Pleistocene Epoch.',
        choice3: 'Jurassic Park.',
        choice4: "Mesozoic Era.",
        answer: 2,
    },
    {
        question: 'The youngest period of the Mesozoic Era is known as the',
        choice1: 'Triassic Period.',
        choice2: 'Silurian Period.',
        choice3: 'Pennsylvanian Period.',
        choice4: "Cretaceous Period.",
        answer: 4,
    },
    {
        question: 'Which of the following is an example of a trace fossil?',
        choice1: 'footprint',
        choice2: 'leaf',
        choice3: 'skeleton',
        choice4: "trilobite",
        answer: 1,
    },
    {
        question: 'Which is an important index fossil for the Paleozoic Era?',
        choice1: 'fish',
        choice2: 'sponges',
        choice3: 'trilobites',
        choice4: "plants",
        answer: 3,
    },
    {
        question: 'The evolution of the horse took place during the  .',
        choice1: 'Jurassic Period',
        choice2: 'Permian Period',
        choice3: 'Quaternary Period',
        choice4: "Tertiary Period",
        answer: 4,
    },
    {
        question: 'The theory of   explains that natural forces now shaping Earth have been doing it the same way for billions of years.',
        choice1: 'creationism',
        choice2: 'natural selection',
        choice3: 'catastrophism',
        choice4: "uniformitarianism",
        answer: 4,
    },
    {
        question: 'A  _______ is the area of land that is drained by a river system, stream, river or floodplain.',
        choice1: 'tributary',
        choice2: 'water drain',
        choice3: 'divide',
        choice4: "watershed",
        answer: 4,
    },
    {
        question: 'A stream that flows into another larger stream is called a ___________.',
        choice1: 'tributary.',
        choice2: 'distributary.',
        choice3: 'delta.',
        choice4: "meander.",
        answer: 1,
    },
    {
        question: 'The point at which a river originates is called its  ___________.',
        choice1: 'mouth',
        choice2: 'delta',
        choice3: 'elevation',
        choice4: "source",
        answer: 4,
    },
    {
        question: 'The region of land where water from rain and melting snow or ice flows downhill into a body of water is called a  ____________.',
        choice1: 'flood plain',
        choice2: 'divide',
        choice3: 'drainage basin',
        choice4: "delta",
        answer: 3,
    },
    {
        question: 'The headwaters of a river is another term for the rivers  ___________.',
        choice1: 'mouth',
        choice2: 'source',
        choice3: 'tributaries',
        choice4: "watershed",
        answer: 2,
    },
    {
        question: 'A streams drainage basin, or watershed, is all the water that ___________________.',
        choice1: 'flows into it.',
        choice2: 'infiltrates from the ground.',
        choice3: 'is removed from drinking water.',
        choice4: "is within 100 km of its channel.",
        answer: 1,
    },
    {
        question: 'The Mississippi River and the Missouri River join together near St. Louis, Missouri. The place where these two rivers join is called a  ___________.',
        choice1: 'divide',
        choice2: 'tributary',
        choice3: 'watershed',
        choice4: "confluence",
        answer: 4,
    },
    {
        question: 'The thermal energy of an object is the sum of the  ______ and  ______ energy of all the molecules in an object.',
        choice1: 'heat, temperature',
        choice2: 'thermal, mechanical',
        choice3: 'friction, convection',
        choice4: "kinetic, potential",
        answer: 4,
    },
    {
        question: 'Thermal energy always moves',
        choice1: 'from a higher temperature to a lower temperature.',
        choice2: 'from a lower temperature to a higher temperature.',
        choice3: 'from inside to outside.',
        choice4: "from outside to inside.",
        answer: 1,
    },
    {
        question: 'Thermal energy can be transferred by',
        choice1: 'conduction only',
        choice2: 'convection only',
        choice3: 'radiation only',
        choice4: "conduction, convection, and radiation",
        answer: 4,
    },
    {
        question: 'Which of the following most accurately describes how an insulated lunch bag keeps your food cool?',
        choice1: 'The material prevents the cool air from leaving the bag.',
        choice2: 'The material destroys thermal energy.',
        choice3: 'The material prevents thermal energy outside from flowing into the bag.',
        choice4: "The material produces cold molecules.",
        answer: 3,
    },
    {
        question: 'Which has the most thermal energy?',
        choice1: '1 cup of cold water',
        choice2: '1 gallon of cold water',
        choice3: '1 cup of hot water',
        choice4: "1 gallon of hot water",
        answer: 4,
    },
    {
        question: 'A pan of water is set on a stove. After the heat is turned on, the temperature of the water begins to   and the thermal energy of the water  .',
        choice1: 'decrease, decreases',
        choice2: 'decrease, increases',
        choice3: 'increase, increases',
        choice4: "increase, decreases",
        answer: 3,
    },
    {
        question: 'What are baby sharks called?',
        choice1: 'cub',
        choice2: 'kid',
        choice3: 'pup',
        choice4: "child",
        answer: 3,
    },
    {
        question: 'What shark is at the top of the oceanic food chain?',
        choice1: 'great white shark',
        choice2: 'hammerhead',
        choice3: 'Tiger shark',
        choice4: "killer sharks",
        answer: 4,
    },
    {
        question: 'Which shark is the fastest shark in the world?',
        choice1: 'blue shark',
        choice2: 'shortfin mako shark',
        choice3: 'killer shark',
        choice4: "great white shark",
        answer: 2,
    },
    {
        question: 'The jellylike substance between the cell membrane and the organelles that supports the cell and allows the parts to move is called _________',
        choice1: 'lysosomes',
        choice2: 'cytoplasm',
        choice3: 'ribosomes',
        choice4: "none of the above",
        answer: 2,
    },
    {
        question: 'A(n)                is the smallest functional and structural unit of all organisms.',
        choice1: 'cell',
        choice2: 'molecule',
        choice3: 'atom',
        choice4: "energy",
        answer: 1,
    },
    {
        question: '                    are tiny structures inside cells that carry out specific functions.',
        choice1: 'cell wall',
        choice2: 'chloropast',
        choice3: 'organelles',
        choice4: "none of the above",
        answer: 3,
    },
    {
        question: 'The                  is the control center of the cell. It directs the cells activities.',
        choice1: 'Head',
        choice2: 'nucleus',
        choice3: 'chloropast',
        choice4: "none of the above",
        answer: 2,
    },
    {
        question: 'The                   a flexible covering that protects the inside of a cell from the environment outside a cell.',
        choice1: 'chloropast',
        choice2: 'Mitochondria',
        choice3: 'cell membraneis',
        choice4: "none of the above",
        answer: 3,
    },
    {
        question: 'A(n)                 is what gives plant cells a rigid shape.',
        choice1: 'cell wall',
        choice2: 'chloropast',
        choice3: 'Mitochondria',
        choice4: "none of the above",
        answer: 1,
    },
    {
        question: 'A part in a plant cell that uses sunlight to make food is called a(n)                  .',
        choice1: 'molecule',
        choice2: 'chloroplast.',
        choice3: 'nucleus',
        choice4: "none of the above",
        answer: 2,
    },
    {
        question: '                        are rod-shaped cell structures that produce most of the energy needed to carry out the cells functions.',
        choice1: 'chloropast',
        choice2: 'nucleus',
        choice3: 'Mitochondria',
        choice4: "none of the above",
        answer: 3,
    },
    {
        question: 'The organelles that package cellular substances for export are                    .',
        choice1: 'Mitochondria',
        choice2: 'chloropast',
        choice3: 'Golgi Bodies',
        choice4: "none of the above",
        answer: 3,
    },
    {
        question: 'Organelles called                  contain enzymes, which break down worn-out or damaged organelles, waste materials, and foreign invaders in the cell.',
        choice1: 'lysosomes',
        choice2: 'Mitochondria',
        choice3: 'Golgi Bodies',
        choice4: "none of the above",
        answer: 1,
    },
    {
        question: 'A(n)                  a cell structure where proteins are manufactured.',
        choice1: 'ribosomes',
        choice2: 'Golgi Bodies',
        choice3: 'chloropast',
        choice4: "none of the above",
        answer: 1,
    },
    {
        question: 'The                           is a cell structure that creates a maze of passageways where protein and other materials are moved from one side of the cell to the other.',
        choice1: 'chloropast',
        choice2: 'endoplasmic reticulum',
        choice3: 'Mitochondria',
        choice4: "none of the above",
        answer: 2,
    },
    {
        question: 'A structure in a cell that stores food, water or wastes is called a(n)',
        choice1: 'lysosomes',
        choice2: 'vacuole',
        choice3: 'nucleous',
        choice4: "none of the above",
        answer: 2,
    },
    {
        question: 'Violent, whirling wind that moves in a narrow path over land, forming a highly destructive funnel is called a  .',
        choice1: 'hurricane',
        choice2: 'earthquake',
        choice3: 'tornado',
        choice4: "thunderstorm",
        answer: 3,
    },
    {
        question: 'Produced by cumulonimbus clouds when a cold front meets a warm front.',
        choice1: 'water sprout',
        choice2: 'typhoon',
        choice3: 'thunderstorm',
        choice4: "hurricane",
        answer: 3,
    },
    {
        question: 'What is a large, swirling storm that forms over warm, tropical water called?',
        choice1: 'hurricane',
        choice2: 'tornado',
        choice3: 'hailstorm',
        choice4: "blizzard",
        answer: 1,
    },
    {
        question: ' Which natural disaster comes from powerful thunderstorms that originate over land?',
        choice1: 'cyclone',
        choice2: 'hurricane',
        choice3: 'typhoon',
        choice4: "tornado",
        answer: 4,
    },
    {
        question: 'What is the name of the storm that originates over the Indian Ocean?',
        choice1: 'typhoon',
        choice2: 'tornado',
        choice3: 'cyclone',
        choice4: "hurricane",
        answer: 3,
    },
    {
        question: 'What do you call a storm that forms over the Atlantic Ocean?',
        choice1: 'tornado',
        choice2: 'cyclone',
        choice3: 'hurricane',
        choice4: "typhoon",
        answer: 3,
    },
    {
        question: 'Dry land surfaces heated unevenly by the Sun produce convective rolls of air. If these rolls get tilted upright, then a               can form.',
        choice1: 'dust devil',
        choice2: 'tornado',
        choice3: 'water spout',
        choice4: "snow tornado",
        answer: 1,
    },
    {
        question: 'Whirling funnel-shaped cloud over land with very low pressure at the funnels bottom.',
        choice1: 'tornado',
        choice2: 'cyclone',
        choice3: 'anti-cyclone',
        choice4: "water spout",
        answer: 1,
    },
    {
        question: 'What does the Saffir-Simpson scale measure?',
        choice1: 'tornadoes',
        choice2: 'cyclones',
        choice3: ' typhoons',
        choice4: "hurricanes",
        answer: 4,
    },
    {
        question: 'Which is the first thing that would happen if a plant could NOT obtain carbon dioxide?',
        choice1: 'It would not be able to reproduce.',
        choice2: 'It would not be able to make food.',
        choice3: 'It would not be able to get rid of waste.',
        choice4: "It would not be able to absorb minerals.",
        answer: 2,
    },
    {
        question: 'Plants absorb light energy and store that energy in the form of _______',
        choice1: 'water.',
        choice2: 'carbon dioxide.',
        choice3: 'sugar.',
        choice4: "oxygen.",
        answer: 3,
    },
    {
        question: 'Kim wanted to determine if certain seeds require sunlight to germinate. She placed one seed in a moist paper towel in the sunlight and another seed in an equally moistened paper towel in a dark closet. The seed in the sunlight germinated but the one in the closet did not. Kim reported to the class that this type of seed needs sunlight in order to germinate. Given this information, which statement would best describe an improvement in Kim’s experiment that would strengthen her claim?',
        choice1: 'Use many seeds to conduct the experiment.',
        choice2: 'Start the samples on different days.',
        choice3: 'Use different amounts of water',
        choice4: "Place the seeds in new locations.",
        answer: 1,
    },
    {
        question: 'Which process will produce igneous rocks?',
        choice1: 'deposition of sediments',
        choice2: 'volcanic action',
        choice3: 'earthquake activity',
        choice4: "erosion of surface rocks",
        answer: 2,
    },
    {
        question: 'Which motion describes molecules in a solid at extremely low temperatures?',
        choice1: 'bumping together with some room to move',
        choice2: 'vibrating while closely packed together',
        choice3: 'moving freely and randomly in a space',
        choice4: "sliding around one another and colliding",
        answer: 2,
    },
    {
        question: 'Cindy dissected a flowering plant and looked at the stem, roots, leaves, and flower using a microscope. After her observations, Cindy should conclude that all flowering plant structures _____',
        choice1: 'are not living.',
        choice2: 'have the same function.',
        choice3: 'have cells.',
        choice4: "are green.",
        answer: 3,
    },
    {
        question: 'Some insects consume nectar from flowering plants and help the plant by spreading pollen Which type of relationship between insects and plants does this demonstrate?',
        choice1: 'parasitic',
        choice2: 'competitive',
        choice3: 'predator-prey',
        choice4: "mutually beneficial",
        answer: 4,
    },
    {
        question: 'Which action would have the greatest impact on reducing river pollution in a farm area?',
        choice1: 'planting crops that absorb less water',
        choice2: 'plowing land earlier in the year',
        choice3: 'controlling the use of fertilizer',
        choice4: "increasing irrigation of crops",
        answer: 3,
    },
    {
        question: 'A chemical change could best be demonstrated by ________',
        choice1: 'burning a piece of paper.',
        choice2: 'folding a piece of paper.',
        choice3: 'cutting a piece of paper.',
        choice4: "dropping a piece of paper",
        answer: 1,
    },
    {
        question: 'Engineers have recently developed alternative fuels such as ethanol to power vehicles. Ethanol is a fuel that is made from corn or other crops including wheat, barley, and potatoes. E85 is a mixture of 85% ethanol and 15% gasoline. The greatest environmental advantage to using E85 would be that _______',
        choice1: 'it has gasoline mixed in it.',
        choice2: 'it is used to power vehicles.',
        choice3: 'it is made up mostly of renewable resources.',
        choice4: "it is made from crops that require powerful fertilizers.",
        answer: 3,
    },
    {
        question: 'Many lizards that live in Arizona are unable to live in Michigan. Which statement best explains why Arizona lizards have difficulty surviving in Michigan?',
        choice1: 'They have the ability to live both on land and in the water.',
        choice2: 'They are unable to live where temperatures are lower than 30°F (–1.1°C).',
        choice3: 'They have the ability to live where temperatures are above 100°F (37.8°C).',
        choice4: "They are unable to live where there is no water.",
        answer: 2,
    },
    {
        question: 'Which statement best describes organisms in a food web?',
        choice1: 'Producers acquire energy directly from the consumers.',
        choice2: 'Consumers acquire energy indirectly from the Sun.',
        choice3: 'Decomposers acquire energy directly from the Sun.',
        choice4: "Producers acquire energy indirectly from the decomposers.",
        answer: 2,
    },
    {
        question: 'When a solid substance is heated, individual molecules _______',
        choice1: 'move faster.',
        choice2: 'move slower.',
        choice3: 'break apart into atoms.',
        choice4: "do not change speed or direction.",
        answer: 1,
    },
    {
        question: 'Fog would most likely occur when ________',
        choice1: 'cool rain falls on warmer ground.',
        choice2: 'air pressure increases and water vapor decreases.',
        choice3: 'relative humidity decreases and dew point decreases.',
        choice4: "moist air passes over cooler ground causing condensation.",
        answer: 4,
    },
    {
        question: 'Which characteristic of Earth is most responsible for our seasons?',
        choice1: 'Earth’s gravitational pull on the moon',
        choice2: 'Earth’s rotation',
        choice3: 'Earth’s mass',
        choice4: "Earth’s tilt on its axis",
        answer: 4,
    },
    {
        question: 'On a hot day, a glass containing ice water slowly collects liquid on the outside of the glass. Which statement best explains where this liquid come from?',
        choice1: 'Air molecules outside of the glass turned to liquid on the outside surface of the glass.',
        choice2: 'Water from the inside of the glass seeped to the outside of the glass.',
        choice3: 'Water vapor from the air outside of the glass condensed on the outside surface of the glass.',
        choice4: "Water from inside the glass and water from the air outside the glass combined on the outside of the glass.",
        answer: 3,
    },
    {
        question: 'During a scientific investigation, when should measurements be recorded?',
        choice1: 'when forming a hypothesis',
        choice2: 'when designing an experiment',
        choice3: 'when communicating results',
        choice4: "when gathering data",
        answer: 4,
    },
    {
        question: 'What is the main reason for clearly recording the procedures for an experiment?',
        choice1: 'so the experiment can be modified',
        choice2: 'so the experiment can be connected',
        choice3: 'so the experiment can be repeated',
        choice4: "so the experiment can be summarized",
        answer: 3,
    },
    {
        question: 'A group of students predicts that folding an index card into a different shape will result in a chemical change. Which step of the scientific process is this?',
        choice1: 'experiment',
        choice2: 'observation',
        choice3: 'hypothesis',
        choice4: "conclusion",
        answer: 3,
    },
    {
        question: 'In Michigan, it is warmer in summer than in winter because in summer',
        choice1: 'Earth is closer to the Sun.',
        choice2: 'there are fewer clouds.',
        choice3: 'the Sun’s rays hit Michigan more directly.',
        choice4: "Michigan is tilted away from the Sun.",
        answer: 3,
    },
    {
        question: 'Pill bugs can often be found underneath rocks and rotting logs. When exposed to light, they immediately try to find a dark place to hide. This reaction by the pill bugs is a result of ___',
        choice1: 'migration.',
        choice2: 'feeding behavior.',
        choice3: 'energy requirements.',
        choice4: "changing environmental conditions.",
        answer: 4,
    },
    {
        question: 'An amoeba divides into two identical daughter cells. They have exactly the same characteristics as the parent amoeba. Which best describe the amoeba’s division?',
        choice1: 'Diffusion',
        choice2: 'Meiosis',
        choice3: 'Mitosis',
        choice4: "Osmosis",
        answer: 3,
    },
    {
        question: 'In a food chain, which are the most efficient users of solar energy?',
        choice1: 'Herbivores',
        choice2: 'Carnivores',
        choice3: 'Omnivores',
        choice4: "Parasites",
        answer: 1,
    },
    {
        question: 'In Illinois, the constellation Orion can be seen in the night sky in winter. Why can this constellation not be seen in the summer?',
        choice1: 'Earth is tilted away from the constellation.',
        choice2: 'Earth orbits to the other side of the sun.',
        choice3: 'Brighter constellations block Orion from view in the Northern Hemisphere.',
        choice4: "The orbit of the moon blocks Orion from view in the Northern Hemisphere.",
        answer: 2,
    },
    {
        question: 'Green plants are important to animals because the plants —',
        choice1: 'consume food and give off oxygen',
        choice2: 'consume food and give off carbon dioxide',
        choice3: 'produce food and give off oxygen',
        choice4: "produce food and give off carbon dioxide",
        answer: 3,
    },
    {
        question: 'Snakes feed on mice. The mice eat grain crops. When the crops are plentiful, what will happen?',
        choice1: 'The mouse population will decrease.',
        choice2: 'The snake population will increase.',
        choice3: 'The snake population will decrease.',
        choice4: "The mouse population will not change.",
        answer: 2,
    },
    {
        question: 'Which is the best method for a student to identify a solution as an acid or a base?',
        choice1: 'Use litmus paper.',
        choice2: 'Taste the solution.',
        choice3: 'Dilute in water',
        choice4: "Heat the solution",
        answer: 1,
    },
    {
        question: 'Most of the chemical energy of the gasoline burned in a car is not used to move the car but is changed into —',
        choice1: 'electricity',
        choice2: 'heat',
        choice3: 'magnetism',
        choice4: "sound",
        answer: 2,
    },
    {
        question: 'What property of light waves can be observed as light waves pass from one medium to another and change speed?',
        choice1: 'Diffraction',
        choice2: 'Refraction',
        choice3: 'Reflection',
        choice4: "Separation",
        answer: 2,
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