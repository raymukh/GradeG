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
        question: 'Which is greatest? ',
        choice1: '2/5',
        choice2: '1',
        choice3: '1/5',
        choice4: "3/5",
        answer: 2,
    },
    {
        question: 'Which fraction is equivalent to 2/6?',
        choice1: '1/3',
        choice2: '4/6',
        choice3: '2/10',
        choice4: "5/15",
        answer: 1,
    },  
    {
        question: 'What is 10 - 5 x 2?',
        choice1: '0',
        choice2: '10',
        choice3: '5',
        choice4: "20",
        answer: 1,
    },
    {
        question: 'What is 8 + 2 x 7?',
        choice1: '22',
        choice2: '70',
        choice3: '40',
        choice4: "10",
        answer: 1,
    },
    {
        question: 'Which is an improper fraction? ',
        choice1: '10',
        choice2: '1 1/2',
        choice3: '2/4',
        choice4: "5/6",
        answer: 1,
    },
    {
        question: 'Which is an mixed fraction?',
        choice1: '4 5/6',
        choice2: '9',
        choice3: '4/6',
        choice4: "2/10",
        answer: 1,
    },
    {
        question: 'Whats 12 divided by 4 divided by 3?',
        choice1: '1',
        choice2: '5',
        choice3: '3',
        choice4: "2",
        answer: 1,
    },
    {
        question: 'Which is the greater than symbol?',
        choice1: '>',
        choice2: '-',
        choice3: '_',
        choice4: "<",
        answer: 1,
    },
    {
        question: 'Which is the less than symbol?',
        choice1: '>',
        choice2: '-',
        choice3: '_',
        choice4: "<",
        answer: 4,
    },
    {
        question: 'Which is less than 1/5?',
        choice1: '1/10',
        choice2: '6/10',
        choice3: '4/10',
        choice4: "8/10",
        answer: 1,
    },
    {
        question: 'The sum of (-1 and (-6) is',
        choice1: '-7',
        choice2: '8',
        choice3: '6',
        choice4: "-17",
        answer: 1,
    },
    {
        question: 'The perimeter of the equilateral triangle is 18 cm. Find the length of each side',
        choice1: '6cm',
        choice2: '4cm',
        choice3: '5cm',
        choice4: "8cm",
        answer: 1,
    },
    {
        question: 'How to express 5 ⋅ 5 ⋅ 5 using exponent?',
        choice1: '5^3',
        choice2: '5 X 3',
        choice3: '5 X 5 X 5',
        choice4: "5",
        answer: 1,
    },
    {
        question: 'Which is the least 6 digit number of the given number.',
        choice1: '100050',
        choice2: '100095',
        choice3: '10000',
        choice4: "100000",
        answer: 4,
    },
    {
        question: 'The sum of two integers is 48. If one of the integer is -24, determine the other',
        choice1: '62',
        choice2: '72',
        choice3: '50',
        choice4: "80",
        answer: 2,
    },
    {
        question: 'Every prime number except 2 is an __________ number.',
        choice1: 'Odd',
        choice2: 'Even',
        choice3: 'Fraction',
        choice4: "Composite ",
        answer: 1,
    },
    {
        question: 'Find the ratio of 250 kg to 10 kg',
        choice1: '25:1',
        choice2: '1:25',
        choice3: '1:5',
        choice4: "250:1",
        answer: 1,
    },
    {
        question: '3x - 4 = 4 - (8 + 3x)',
        choice1: '7',
        choice2: '10',
        choice3: '-7',
        choice4: "0",
        answer: 4,
    },
    {
        question: 'A dot gives us an idea of a _____________',
        choice1: 'ray',
        choice2: 'point',
        choice3: 'line',
        choice4: "segment",
        answer: 2,
    },
    {
        question: 'Diameter of the circle is 12 cm. Find its radius?',
        choice1: '3',
        choice2: '12',
        choice3: '6',
        choice4: "24",
        answer: 3,
    },
    {
        question: 'Find the perimeter of the rectangle having length and breadth are 16 cm and 8 cm respectively.',
        choice1: '55 cm',
        choice2: '39 cm',
        choice3: '48 cm',
        choice4: "24 cm",
        answer: 3,
    },
    {
        question: 'x - 3 = 11',
        choice1: '14',
        choice2: '8',
        choice3: '33',
        choice4: "0",
        answer: 1,
    },
    {
        question: 'If the sum of two angles measures 90° then the angles are known as __________ angles.',
        choice1: 'complementary',
        choice2: 'supplementary',
        choice3: 'zero',
        choice4: "straight",
        answer: 1,
    },
    {
        question: 'If you flip a coin 10 times, how many times will it land on heads?',
        choice1: '10',
        choice2: '5',
        choice3: '2',
        choice4: "Impossible to tell",
        answer: 2,
    },
    {
        question: 'Two-fifths',
        choice1: '5/2',
        choice2: '2/5',
        choice3: '25/2',
        choice4: "2/52",
        answer: 2,
    },
    {
        question: '3 x 4 + 4',
        choice1: '12',
        choice2: '24',
        choice3: '16',
        choice4: "4",
        answer: 3,
    },
    {
        question: 'Which operation would you do first in the following equation? 10 - 4 ÷ 1 · 5',
        choice1: 'Subtraction',
        choice2: 'Divison',
        choice3: 'Multiplication',
        choice4: "Addition",
        answer: 2,
    },
    {
        question: 'Evaluate the equation:5 · 2 - (11 - 7)',
        choice1: '10',
        choice2: '4',
        choice3: '6',
        choice4: "11",
        answer: 3,
    },
    {
        question: '15 + 7 × 2 – 11 + 35=',
        choice1: '38',
        choice2: '53',
        choice3: '251',
        choice4: "5",
        answer: 2,
    },
    {
        question: 'Maura drew a square. Each side measures 6 cm. What is the area of the square?',
        choice1: '24 sq cm',
        choice2: '36 sq cm',
        choice3: '42 sq cm',
        choice4: "48 sq cm",
        answer: 2,
    },
    {
        question: 'Put them in order from least to greatest 3.25, 5.1, 6.6, 7.0, 5.3',
        choice1: '5.3, 7.0, 6.6, 5.1, 3.25',
        choice2: '3.25, 5.1, 6.6, 7.0, 5.3',
        choice3: '5.1, 7.0, 5.3, 6.6, 3.25',
        choice4: "None of the above",
        answer: 4,
    },
    {
        question: 'Jenna bought a bag of gummi bears that cost $2.74. She gave the clerk $10. How much money will she get back in change?',
        choice1: '12.74',
        choice2: '7.26',
        choice3: '4.36',
        choice4: "21.39",
        answer: 2,
    },
    {
        question: '0.3 x 0.5',
        choice1: '0.15',
        choice2: '1.5',
        choice3: '15',
        choice4: "150",
        answer: 1,
    },
    {
        question: 'Which is not an integer?',
        choice1: '-28',
        choice2: '5',
        choice3: '0',
        choice4: "3.14",
        answer: 4,
    },
    {
        question: 'Which set of integers are in order from greatest to least',
        choice1: '-15, -16, -19, 17, -18',
        choice2: '-2, -57, 0, 8, -23',
        choice3: '3, 2, 1, 0, -1',
        choice4: "√7, 5.16, 3/4, -8",
        answer: 3,
    },
    {
        question: 'Translate: Four times a number plus six IS 30.',
        choice1: '4 + 6 = 30',
        choice2: '4x + 6 = 30',
        choice3: 'x + 4 times 6 = 30',
        choice4: "30 = 4x",
        answer: 2,
    },
    {
        question: 'Solve for w: -6w + 1 = -11',
        choice1: '2',
        choice2: '12',
        choice3: '1.2',
        choice4: "-2",
        answer: 2,
    },
    {
        question: 'Solve. -2n - 4 = 32',
        choice1: '18',
        choice2: '16',
        choice3: '0',
        choice4: "-18",
        answer: 4,
    },
    {
        question: 'Solve: -11 = 4n + 5',
        choice1: '2',
        choice2: '4',
        choice3: '3',
        choice4: "-4",
        answer: 4,
    },
    {
        question: 'What is 30% of 80?',
        choice1: '30',
        choice2: '2.4',
        choice3: '24',
        choice4: "56",
        answer: 3,
    },
    {
        question: 'What is 20% of 75?',
        choice1: '15',
        choice2: '6',
        choice3: '60',
        choice4: "1.5",
        answer: 1,
    },
    {
        question: 'Shirley spelled 12 of her 15 spelling words correctly on the test.  What percent grade did Shirley get on the test?',
        choice1: '40%',
        choice2: '80%',
        choice3: '50%',
        choice4: "60%",
        answer: 2,
    },
    {
        question: 'A Chicago Cubs baseball cap costs $30.  Michael has a coupon that will save him 30% of the  price. How much money will Michael pay for the cap?',
        choice1: '$9.00',
        choice2: '$21.36',
        choice3: '$22.00',
        choice4: "$21.00",
        answer: 4,
    },
    {
        question: '25 is what percent of 25?',
        choice1: '100%',
        choice2: '50%',
        choice3: '25%',
        choice4: "0%",
        answer: 1,
    },
    {
        question: '10 is what percent of 100?',
        choice1: '10%',
        choice2: '50%',
        choice3: '20%',
        choice4: "25%",
        answer: 1,
    },{
        question: '75 is 15% of what number?',
        choice1: '500',
        choice2: '350',
        choice3: '20',
        choice4: "425",
        answer: 1,
    },
    {
        question: '16 is 25% of what number?',
        choice1: '4',
        choice2: '32',
        choice3: '8',
        choice4: "64",
        answer: 4,
    },
    {
        question: 'Edwin got 95% of the questions right on a quiz. If there were 20 questions on the quiz, how many questions did he MISS?',
        choice1: '1',
        choice2: '15',
        choice3: '5',
        choice4: "19",
        answer: 1,
    },
    {
        question: "Roger bowled 7 games last weekend. His scores are: 155, 165, 138, 172, 127, 193, 142. What is the range of Roger's scores?",
        choice1: '193',
        choice2: '127',
        choice3: '60',
        choice4: "66",
        answer: 4,
    },
    {
        question: 'What is the absolute value of | -7 |?',
        choice1: '-7',
        choice2: '-7 and 7',
        choice3: '7',
        choice4: "none of the above",
        answer: 3,
    },
    {
        question: ' A submarine was 1800 ft below sea level. It dove another 1500 feet deeper. Which integer represents its location? ',
        choice1: '-300',
        choice2: '-3300',
        choice3: '-1300',
        choice4: "300",
        answer: 2,
    },
    {
        question: '3(5x - 8)',
        choice1: '15x + 24',
        choice2: '5x - 8',
        choice3: '15x - 8',
        choice4: "15x - 24 ",
        answer: 4,
    },
    {
        question: 'Solve for x: x - 8 = 30',
        choice1: '22',
        choice2: '38',
        choice3: '3.75',
        choice4: "240",
        answer: 2,
    },
    {
        question: 'What is the area of a traingle with a height of 6 cm and base of 4 cm?',
        choice1: '24cm³',
        choice2: '12cm²',
        choice3: '24cm²',
        choice4: "12cm³",
        answer: 2,
    },
    {
        question: 'What is the opposite of -8?',
        choice1: '-8',
        choice2: '8',
        choice3: '0',
        choice4: "1/8",
        answer: 2,
    },
    {
        question: 'What equation matches this situation? Robyn had some video games then bought 4 more.  Now she has a total of 10 games.',
        choice1: 'v - 4 = 10',
        choice2: '10 - 4 = v',
        choice3: 'v + 4 = 10',
        choice4: "Answer not given ",
        answer: 3,
    },
    {
        question: '2 times the sum of y and 5',
        choice1: '62',
        choice2: '2(6y)',
        choice3: '2(y+5)',
        choice4: "2(x+5)",
        answer: 3,
    },
    {
        question: 'What is the perimeter of a rectangle with the length of 7 feet and a width of 4 feet?',
        choice1: '22 sq. yd',
        choice2: '22 cm',
        choice3: '22',
        choice4: "22 yd",
        answer: 4,
    },
    {
        question: 'How do you find the AREA of a TRIANGLE?',
        choice1: 'Length x Width',
        choice2: '1/3 (Length x width)',
        choice3: '1/2 (Length x width)',
        choice4: "Base x Height",
        answer: 3,
    },
    {
        question: 'What is 75% equal to?',
        choice1: '1/4',
        choice2: '1/2',
        choice3: '1/8',
        choice4: "3/4",
        answer: 4,
    },
    {
        question: '1/2 is equal  to?',
        choice1: '75%',
        choice2: '28%',
        choice3: '100%',
        choice4: "50%",
        answer: 4,
    },
    {
        question: 'Fredrick bought 5 apples for 2.00. What is the unit rate?',
        choice1: '$0.25 per apple',
        choice2: '$1 per apple',
        choice3: '$0.30 per apple',
        choice4: "$0.40 per apple",
        answer: 4,
    },
    {
        question: 'Jodie has a dog. She needed to buy dog food for her. The bag she bought was 100lbs for 15.00. How much would a 35 lbs bag cost?',
        choice1: '$5.25',
        choice2: '$5.21',
        choice3: '$5.20',
        choice4: "$4.25",
        answer: 1,
    },
    {
        question: 'If the ratio of pandas to sloths at the zoo is 21 to 32 then what is the ratio of sloths to pandas?',
        choice1: '32 to 22',
        choice2: '32 to 21',
        choice3: '21 to 32',
        choice4: "32 to 210",
        answer: 2,
    },
    {
        question: 'Billy has 50 pets 20% of them are dogs how many dogs does he have?',
        choice1: '20',
        choice2: '30',
        choice3: '50',
        choice4: "10",
        answer: 4,
    },
    {
        question: 'What is 88% as a decimal?',
        choice1: '0.98',
        choice2: '0.88000009',
        choice3: '8.8',
        choice4: "0.88",
        answer: 4,
    },
    {
        question: 'What is 5/10 as a percent?',
        choice1: '50%',
        choice2: '65%',
        choice3: '105%',
        choice4: "12%",
        answer: 1,
    },
    {
        question: 'What is 0.77 as a percent?',
        choice1: '770%',
        choice2: '7.7%',
        choice3: '0.77%',
        choice4: "77%",
        answer: 4,
    },
    {
        question: 'What is the first part of order of operations',
        choice1: 'multiplication',
        choice2: 'groupings',
        choice3: 'subtraction',
        choice4: "gemdas",
        answer: 2,
    },
    {
        question: '"In a bag of red and green sweets, the ratio of red sweets to green sweets is 3:4. If the bag contains 120 green sweets, how many red sweets are there?',
        choice1: '90',
        choice2: '60',
        choice3: '40',
        choice4: "900",
        answer: 1,
    },
    {
        question: "A recipe calls for butter to sugar is the ratio 2:3. If you're using 6 cups of butter, how many cups of sugar should you use?",
        choice1: '7',
        choice2: '4.9',
        choice3: '8',
        choice4: "9",
        answer: 4,
    },
    {
        question: 'Which is true?',
        choice1: '2 > -2',
        choice2: '-2 < -4',
        choice3: '2 < -4',
        choice4: "-4 > 4",
        answer: 1,
    },

    {
        question: 'Where would -1 be on a number line?',
        choice1: 'To the right of 0',
        choice2: 'One to the left of 0',
        choice3: 'Beside 1',
        choice4: "Two to the left of 0",
        answer: 2,
    },
    {
        question: 'Which of the following temperatures is the COLDEST? P: -13, Q: 59, R: -15, S: 32',
        choice1: 'P',
        choice2: 'R',
        choice3: 'Q',
        choice4: "S",
        answer: 2,
    },
    {
        question: '1/4 of the eggs in an egg carton are cracked. What percent of the eggs are cracked?',
        choice1: '66%',
        choice2: '30%',
        choice3: '33%',
        choice4: "25%",
        answer: 4,
    },
    {
        question: 'During a basketball game, Kylie made 15 out of 25 shots successfully. What was her percent of success?',
        choice1: '10%',
        choice2: '50%',
        choice3: '40%',
        choice4: "60%",
        answer: 4,
    },
    {
        question: 'On a tree farm,15% of the trees planted are pine, 2/5 are oak, 1/4 are maple, and 1/5 are fruit trees. Of these four types of trees, which type has been planted the most?',
        choice1: 'pine',
        choice2: 'maple',
        choice3: 'oak',
        choice4: "fruit",
        answer: 3,
    },{
        question: "Amaya has a rope 0.9 m long. Sierra a rope one and a half times as long as Amaya's. How long is Sierra's rope?",
        choice1: '0.45 m',
        choice2: '1.80 m',
        choice3: '1.35 m',
        choice4: "2.25 m",
        answer: 3,
    },
    {
        question: 'Jamari wants to determine the most popular car in Raleigh. Which plan would give Jamari the best (not biased) results?',
        choice1: 'Conduct a sample survey of the cars in school’s parking lot.',
        choice2: 'Conduct a sample survey of the cars that are advertised in the local newspaper.',
        choice3: 'Conduct a random telephone survey of people who live in NC.',
        choice4: "Conduct a random survey of people entering a large grocery store in Raleigh.",
        answer: 4,
    },
    {
        question: 'Simplify: 6(2x + 3y) + 3(x - y)',
        choice1: '12x + 15y',
        choice2: '12x + 13y',
        choice3: '15x + 15y',
        choice4: "9x",
        answer: 3,
    },
    {
        question: '10 + 2(4 + w)',
        choice1: '2w + 18',
        choice2: 'w + 16',
        choice3: 'w + 18',
        choice4: "2w + 14",
        answer: 1,
    },
    {
        question: 'Which expression is equivalent to 3(n + 2m) + m ',
        choice1: '3n + 2m',
        choice2: '3n + 6m',
        choice3: '3n + 4m',
        choice4: "3n + 7m",
        answer: 4,
    },
    {
        question: '2 + (8 - 4) + 3^2 * 3',
        choice1: '36',
        choice2: '33',
        choice3: '35',
        choice4: "24",
        answer: 3,
    },
    {
        question: '7^2 x (9 - 4) + 10/2 -1 ',
        choice1: '225',
        choice2: '441',
        choice3: '249',
        choice4: "735",
        answer: 3,
    },
    {
        question: 'Evaluate: y + y + c - 10 + x if x = 7, y = 10, and c = 8',
        choice1: '11',
        choice2: '25',
        choice3: '21',
        choice4: "105",
        answer: 2,
    },
    {
        question: 'The distance to the beach is fifty miles more than twice the distance to the mountains. If m represents the distance to the mountains, which expression represents the distance to the beach? ',
        choice1: '50m',
        choice2: '50m + 2',
        choice3: '2m + 50',
        choice4: "100m + 50",
        answer: 3,
    },
    {
        question: 'A triangle has two equal sides that are x cm long. The third side measures 3 cm more than each of the congruent sides. Which expression could be used to represent the perimeter of this triangle?',
        choice1: '4x + 6',
        choice2: '3x + 3',
        choice3: '3x + 6',
        choice4: "2x + 3",
        answer: 3,
    },
    {
        question: "If 7 points were added to Jayden's current math grade, his grade would be higher than 100. Which inequality best represents the possible values for Jane’s current math grade, g?",
        choice1: 'g > 94',
        choice2: 'g < 94',
        choice3: 'g > 107',
        choice4: "g < 107",
        answer: 1,
    },
    {
        question: 'What is the solution of the inequality 3/8x > 9?',
        choice1: 'x > 216',
        choice2: 'x > 24',
        choice3: 'x > 72',
        choice4: "x > 14",
        answer: 2,
    },
    {
        question: 'List all the factors of 12',
        choice1: '1, 2, 3, 4, 6, 12',
        choice2: '1, 12',
        choice3: '1, 2, 4, 12',
        choice4: "1, 2, 3, 4, 5, 6, 12",
        answer: 1,
    },

    {
        question: 'Find the greatest common factor of 20 and 30',
        choice1: '2',
        choice2: '10',
        choice3: '5',
        choice4: "15",
        answer: 2,
    },
    {
        question: 'Find the greatest common factor of 24 and 48',
        choice1: '4',
        choice2: '24',
        choice3: '12',
        choice4: "48",
        answer: 2,
    },
    {
        question: 'Sara had 16 red flowers and 24 yellow flowers. She wants to make bouquets with the same number of each color flower in each bouquet. What is the greatest number of bouquets that she can make?',
        choice1: '4',
        choice2: '48',
        choice3: '2',
        choice4: "8",
        answer: 4,
    },
    {
        question: 'What is the GCF of 20, 44, and 88?',
        choice1: '4',
        choice2: '22',
        choice3: '2',
        choice4: "1",
        answer: 1,
    },
    {
        question: 'Which of these numbers is the least common multiple of 18?',
        choice1: '2',
        choice2: '36',
        choice3: '6',
        choice4: "54",
        answer: 2,
    },
    {
        question: 'What is the least common multiple (LCM) of 4 and 10?',
        choice1: '4',
        choice2: '15',
        choice3: '40',
        choice4: "20",
        answer: 4,
    },
    {
        question: 'Identify the number that is a multiple of 9...',
        choice1: '78',
        choice2: '80',
        choice3: '79',
        choice4: "81",
        answer: 4,
    },
    {
        question: 'What is the least common multiple of 5, 4, and 10?',
        choice1: '20',
        choice2: '10',
        choice3: '40',
        choice4: "30",
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
