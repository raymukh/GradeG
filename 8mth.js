
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
        question: 'What is the value for x in this question: 4x -10 = 18',
        choice1: '2',
        choice2: '4',
        choice3: '7',
        choice4: "8",
        answer: 3,
    },
{
        question: 'What is the smallest number by which 256 may be divided so that the quotient is perfect cube? ',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: "5",
        answer: 3,
    },
  {
        question: 'How many digits are there in the square root of 4456321? ',
        choice1: '2 digits',
        choice2: '4 digits',
        choice3: '3 digits',
        choice4: "5 digits",
        answer: 2,
    },
   {
        question: 'Find the value of 3x^3 - 4x^2 + x - 5 when x = -3 ',
        choice1: '-54',
        choice2: '-71',
        choice3: '-32',
        choice4: "-17",
        answer: 4,
    },
   {
        question: 'The perimeter of a rectangle is 52 cm. If its width is 2 cm more than one-third of its length, find the dimensions of rectangle.',
        choice1: '12 cm x 4 cm',
        choice2: '18 cm x 8 cm  ',
        choice3: '15 cm x 9 cm',
        choice4: "16 cm x 4 cm",
        answer: 2  ,
    },
   {
        question: 'What must be added to each of the numerator and the denominator of the fraction 7/11 to make it equal to 3/4',
        choice1: '9',
        choice2: '5',
        choice3: '12',
        choice4: "19",
        answer: 2 ,
    },
     {
        question: 'In triangle ABC is inscribed in a circle with center O and BC is a diameter, if angle BAC is 50°, find angle ABC.',
        choice1: '50°',
        choice2: '40° ',
        choice3: '48°',
        choice4: "46°",
        answer: 2  ,
    },
{
        question: 'The volume of a right circular cylinder is 1100 cm3 and the radius of its base is 5 cm. Calculate its curved surface area. ',
        choice1: '410 cm^2',
        choice2: '125 cm^2  ',
        choice3: '440 cm^2',
        choice4: "225 cm^2",
        answer: 3 ,
    },
  {
        question: 'What fraction should be added with -4/9 to get 6/17 ?',
        choice1: '104/163',
        choice2: '136/151    ',
        choice3: '122/153',
        choice4: "10/100",
        answer: 3 ,
    },
  {
        question: 'Find for which value of x is the following equation true ? 44x-7  =  4x - 1?',
        choice1: '2',
        choice2: '3  ',
        choice3: '4',
        choice4: "5",
        answer: 1 ,
    },
  {
        question: 'Express 412 x 10-9 in standard form. ',
        choice1: '0.000000412',
        choice2: '412000000 ',
        choice3: '4120000',
        choice4: "41200",
        answer: 1 ,
    },
    {
        question: 'Find the value of 5x - 6y - 8z, if x  =  2, y  =  3 and z  =  -2.',
        choice1: '5',
        choice2: '8 ',
        choice3: '-18',
        choice4: "-16",
        answer:   2,
    },
    {
        question: 'Which of the following is the cube of the even number?',
        choice1: '343',
        choice2: '729 ',
        choice3: '1728',
        choice4: "1258",
        answer:  3,
    },
    {
        question: 'Find the square root of 98464?',
        choice1: '272',
        choice2: '242 ',
        choice3: '212',
        choice4: "199",
        answer: 1  ,
    },
    {
        question: 'The sum of two numbers is 80 and their ratio is 3:5.Find the numbers.',
        choice1: '30 and 50',
        choice2: '18 and 30 ',
        choice3: '21 and 35',
        choice4: "22 and 64",
        answer:  1,
    },
    {
        question: 'Find the value of x° if the lines AB and CD are parallel to each other',
        choice1: '90°  ',
        choice2: '  123° ',
        choice3: ' 57°',
        choice4: "64°",
        answer:  3 ,
    },
    {
        question: '1. Simplify by combining like terms: 5a + 2b - 3a + 4',
        choice1: '8ab',
        choice2: ' 8a + 2b + 4',
        choice3: '4ab + 4',
        choice4: "2a + 2b + 4",
        answer:   4,
    },
    {
        question: '3x - 5x equals?',
        choice1: '2x',
        choice2: '-2x ',
        choice3: '8x',
        choice4: "15x^2",
        answer:  2 ,
    },
    {
        question: 'Simplify the expression: 3x + 2x',
        choice1: '5x',
        choice2: 'x ',
        choice3: '7x',
        choice4: "6x",
        answer: 1 ,
    },
    {
        question: '-r - 10r equals?',
        choice1: '-11r',
        choice2: '-11 ',
        choice3: '9r',
        choice4: "11r",
        answer:  4 ,
    },
    {
        question: 'Simplify the expression: 2x + 1 + 7x ',
        choice1: '10x',
        choice2: '9x + 1 ',
        choice3: '10',
        choice4: "9 + 1x",
        answer:  4,
    },
    {
        question: 'Simplify the expression: 7v + 2 + 12 + 2v',
        choice1: '23',
        choice2: '9 + 14v ',
        choice3: '23v',
        choice4: "9v + 14",
        answer:  4 ,
    },
    {
        question: 'n -10 +9n -3=',
        choice1: '-3',
        choice2: 'n ',
        choice3: '9n-3',
        choice4: "10n -13",
        answer:  4 ,
    },
    {
        question: 'Combine like terms 3x + 2x + 3y - 7y',
        choice1: '5x + 10y',
        choice2: '5x - 4y ',
        choice3: '5x + 4y',
        choice4: "5x -10y",
        answer:  2 ,
    },
    {
        question: 'Simplify the following expression: 3 + 5x + 8 - 2x',
        choice1: '-3x^2 - 11',
        choice2: '11 - 3x ',
        choice3: '3x^2 + 11',
        choice4: "11 + 3x",
        answer:  4 ,
    },
    {
        question: 'Simplify the following expression: -10x + 15 - 3x + 2',
        choice1: '13x^2 + 17',
        choice2: '-13x + 17 ',
        choice3: '-13x^2 + 13',
        choice4: "-7x + 17",
        answer: 2  ,
    },
    {
        question: '20 - 5 x 2',
        choice1: '30',
        choice2: '50 ',
        choice3: '10',
        choice4: "15",
        answer:  3 ,
    },
    {
        question: '7 + (12-^2)',
        choice1: '256',
        choice2: ' 10',
        choice3: '88',
        choice4: "13",
        answer:  3 ,
    },
    {
        question: '90 - 5^2 x 3',
        choice1: '15',
        choice2: '195 ',
        choice3: '240',
        choice4: "10",
        answer:  1 ,
    },
    {
        question: ' (82 ÷  × 3 – 17)',
        choice1: '206',
        choice2: '106 ',
        choice3: '100',
        choice4: "200",
        answer:  3 ,
    },
    {
        question: '(7 + 4 ÷ 2 – 15',
        choice1: '19',
        choice2: ' 25',
        choice3: '9',
        choice4: "3",
        answer:  4 ,
    },
    {
        question: '15 + 7 × 2 – 11 + 35=',
        choice1: '38',
        choice2: '53 ',
        choice3: '251',
        choice4: "50",
        answer:  2 ,
    },
    {
        question: 'What step would I do second ? (4 + 7)9 =',
        choice1: 'multiplication',
        choice2: 'addition ',
        choice3: 'subtraction',
        choice4: "dividing",
        answer:  1 ,
    },
    {
        question: 'What would be my first step? 3 + 4 x 6 - 4 =',
        choice1: 'addition',
        choice2: ' subtraction',
        choice3: 'multiplication',
        choice4: "exponents",
        answer:  3 ,
    },
    {
        question: ' evaluate bc + 5a  when  a = 3, b = 4, and c = -6',
        choice1: '9',
        choice2: '-38 ',
        choice3: '38',
        choice4: "-9",
        answer:  4 ,
    },
  
    {
        question: 'Evaluate the expression for when y = 10    2y - y + 3y ',
        choice1: '40',
        choice2: '50 ',
        choice3: '30',
        choice4: "20",
        answer:  20 ,
    },
    {
        question: 'if a = 3 and b = 7 then 2b - 4a=',
        choice1: '-16',
        choice2: '26 ',
        choice3: '7',
        choice4: "2",
        answer:  4 ,
    },
    {
        question: 'if m = 3 and n = 4 then 2 + 3(mn - =',
        choice1: '14',
        choice2: '25 ',
        choice3: '17',
        choice4: "18",
        answer:   3,
    },
    {
        question: 'if a = 4, b = 2 then -3a + 2b=',
        choice1: '-8',
        choice2: '16 ',
        choice3: '8',
        choice4: "-16",
        answer:  1 ,
    },
    {
        question: 'if x = 2, y = 4, z = 3 then 2xy + 3y - 5z=',
        choice1: '13',
        choice2: '17 ',
        choice3: '12',
        choice4: "14",
        answer:  1 ,
    },
    {
        question: ' if x = 3 then 2x^2 - 5=',
        choice1: '31',
        choice2: ' 7',
        choice3: '12',
        choice4: "13",
        answer:  4 ,
    },
    {
        question: 'Evaluate this expression 5^2 - 4(-(',
        choice1: '49',
        choice2: '-49 ',
        choice3: '1',
        choice4: "-1",
        answer:   1,
    },
  
    {
        question: 'Simplify the following:  -8 + (15 -  ÷ 4',
        choice1: '-5',
        choice2: ' -11',
        choice3: '1',
        choice4: "11",
        answer:  1 ,
    },
    {
        question: 'Simplify the following: (2 + 7 -  ÷ 2^2',
        choice1: '16',
        choice2: '72.25 ',
        choice3: '2',
        choice4: "8.75",
        answer:  3 ,
    },
    {
        question: '2^3=',
        choice1: '8',
        choice2: '9 ',
        choice3: '4',
        choice4: "6",
        answer:   1,
    },
    {
        question: '27 ÷ 9 + 3 =',
        choice1: '6',
        choice2: ' 5',
        choice3: '11',
        choice4: "121",
        answer:   1,
    },
    {
        question: 'If m + 40 = 75, then m =',
        choice1: '35',
        choice2: '42 ',
        choice3: '39',
        choice4: "45",
        answer: 1  ,
    },
    {
        question: 'Write 3 • 3 • 3 • 3 in exponential form.',
        choice1: '3^4',
        choice2: '3^3 ',
        choice3: '3^5',
        choice4: "3^2",
        answer:  1 ,
    },
    {
        question: '8 • 9 =',
        choice1: '72',
        choice2: '64 ',
        choice3: '45',
        choice4: "78",
        answer:  1 ,
    },
    {
        question: '48/6= ',
        choice1: '8',
        choice2: ' 6',
        choice3: '7',
        choice4: "9",
        answer:  1 ,
    },
    {
        question: '1^10 =',
        choice1: '1',
        choice2: '1110 ',
        choice3: '110',
        choice4: "10",
        answer:  1 ,
    },
    {
        question: '5 + 1(12) = ',
        choice1: '17',
        choice2: ' 13',
        choice3: '15',
        choice4: "16",
        answer:  1 ,
    },
    {
        question: '4 times 6',
        choice1: '24',
        choice2: '22 ',
        choice3: '25',
        choice4: "124",
        answer:  1 ,
    },
    {
        question: 'Write 4 • 4 • 4 • 4 • 4 in exponential form',
        choice1: '4^5',
        choice2: '4^7 ',
        choice3: '4^8',
        choice4: "4^2",
        answer:  1 ,
    },
    {
        question: '4 + 6/-3',
        choice1: '2',
        choice2: '1 ',
        choice3: '4',
        choice4: "20",
        answer:  1 ,
    },
    {
        question: '(7times8)+3',
        choice1: '59',
        choice2: '54 ',
        choice3: '52',
        choice4: "58",
        answer:  1 ,
    },
    {
        question: '2(5 +8)  =',
        choice1: '26',
        choice2: ' 24',
        choice3: '226',
        choice4: "266",
        answer:  1 ,
    },
    {
        question: 'Rewrite 4 • 4 • 6 • 4 • 4 • 6 using exponents',
        choice1: '4^4•6^2',
        choice2: '4^3•6^1 ',
        choice3: '4^5•6^3',
        choice4: "4^7•6^3",
        answer: 1  ,
    },
    {
        question: '1(4 - 18/9)',
        choice1: '2',
        choice2: '3 ',
        choice3: '20',
        choice4: "11",
        answer:  1 ,
    },
    {
        question: '3.2 × 10^3',
        choice1: '3200',
        choice2: ' 320000',
        choice3: '320',
        choice4: "32",
        answer: 1  ,
    },
    {
        question: '0.043 × 10^3=',
        choice1: '43',
        choice2: '41 ',
        choice3: '53',
        choice4: "133",
        answer:  1 ,
    },
    {
        question: '5(11+0+0)=',
        choice1: '55',
        choice2: '56 ',
        choice3: '65',
        choice4: "155",
        answer: 1  ,
    },
    {
        question: '3.57 × 10^3=',
        choice1: '3570',
        choice2: '3560 ',
        choice3: '4567',
        choice4: "42",
        answer:  1 ,
    }, 
  {
        question: '2^2•2^3=',
        choice1: '32',
        choice2: '33 ',
        choice3: '43',
        choice4: "34",
        answer:  1 ,
    },
    {
        question: '8+4•3/5=',
        choice1: '4',
        choice2: '34 ',
        choice3: '111',
        choice4: "115",
        answer:  1 ,
    },
    {
        question: '2^–2',
        choice1: '0.25',
        choice2: ' 0.025',
        choice3: '25',
        choice4: "25.025",
        answer:  1 ,
    },
    {
        question: '3^3/3^2=',
        choice1: '3',
        choice2: '4 ',
        choice3: '13',
        choice4: "23",
        answer:  1 ,
    },
    {
        question: 'square root of 25',
        choice1: '5',
        choice2: '6 ',
        choice3: '7',
        choice4: "8",
        answer:  1 ,
    },
    {
        question: '3(4^2 + 3)',
        choice1: '51',
        choice2: '15 ',
        choice3: '151',
        choice4: "515",
        answer:  1 ,
    },
    {
        question: 'square root of 64',
        choice1: '8',
        choice2: '9 ',
        choice3: '2',
        choice4: "7",
        answer:  1 ,
    },
    {
        question: '3[8 + (4 +  ] =',
        choice1: '42',
        choice2: '48 ',
        choice3: '24',
        choice4: "45",
        answer:  1 ,
    },
    {
        question: '2 times the square root of 49',
        choice1: '14',
        choice2: '15 ',
        choice3: '10',
        choice4: "12",
        answer: 1  ,
    },
    {
        question: '2•3•4/2•3=',
        choice1: '4',
        choice2: '6 ',
        choice3: '2',
        choice4: "5",
        answer:  1 ,
    },
     {
        question: 'What is the smallest number by which 256 may be divided so that the quotient is perfect cube? ',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        answer: 3,  },
     {
        question: 'How many digits are there in the square root of 4456321?',
        choice1: '2',
        choice2: '4',
        choice3: '3',
        answer: 2,  },
   {
        question: 'Find the value of 3x3 - 4x2 + x - 5 when x = -3 ',
        choice1: '-54',
        choice2: '-17',
        choice3: '-32',
        answer: 2,  },
    {
        question: 'The perimeter of a rectangle is 52 cm. If its width is 2 cm more than one-third of its length, find the dimensions of rectangle.',
        choice1: '12 cm x 4 cm ',
        choice2: '18 cm x 8 cm  ',
        choice3: '15 cm x 9 cm',
        answer: 2 ,  },
   {
        question: 'What must be added to each of the numerator and the denominator of the fraction 7/11 to make it equal to 3/4',
        choice1: '9',
        choice2: '5',
        choice3: '12',
        answer: 2,  },
          {
        question: 'A line which intersects two or more lines at a distinct points is called a ____________',
        choice1: 'concurrent ',
        choice2: 'Intersecting ',
        choice3: 'Transversal',
        answer: 1,  },
          {
        question: 'The opposite angles of a cyclic quadrilateral are _______________',
        choice1: 'Supplementary ',
        choice2: 'Complementary ',
        choice3: 'None of these',
        answer: 1,  },
          {
        question: 'In triangle ABC is inscribed in a circle with center O and BC is a diameter, if angle BAC is 50°, find angle ABC.',
        choice1: '50° ',
        choice2: '40° ',
        choice3: '48° ',
        answer: 2,  },
          {
        question: 'The circumference of a circle is 44 cm.Find its area (use π=22/7) ',
        choice1: '154 cm2',
        choice2: '130 cm2   ',
        choice3: '145 cm2',
        answer: 1,  },
          {
        question: 'The volume of a right circular cylinder is 1100 cm3 and the radius of its base is 5 cm. Calculate its curved surface area.',
        choice1: '410 cm2 ',
        choice2: '125 cm2    ',
        choice3: '440 cm2',
        answer: 3, }, 
          {
        question: 'Convert the decimal number 365 to binary.',
        choice1: '101101011',
        choice2: '101101101',
        choice3: '101101110',
        choice4: "110101101",
        answer: 2, }, 
          {
        question: 'What is 101011102 in decimal? (In other words, convert the binary number 10101110 to decimal)',
        choice1: '158',
        choice2: '173',
        choice3: '174',
        choice4: "206",
        answer: 3,  },
          {
        question: 'What is 100100111112 in decimal? (In other words, convert the binary number 10010011111 to decimal)',
        choice1: '1119',
        choice2: '1183',
        choice3: '1311',
        choice4: "1423",
        answer: 2,  },
          {
        question: 'Convert the decimal number 3056 to binary.',
        choice1: '101111110000',
        choice2: '101111100100',
        choice3: '101111101000',
        choice4: "10111111000",
        answer: 1,  },
          {
        question: 'What is 110102 in decimal? (In other words, convert the binary number 11010 to decimal)',
        choice1: '25',
        choice2: '26',
        choice3: '27',
        choice4: "28",
        answer: 2,  },
          {
        question: 'Convert the decimal number 729 to binary.',
        choice1: '1011001101',
        choice2: '1011010101',
        choice3: '1010111001',
        choice4: "1011011001",
        answer: 4,  },
          {
        question: 'What is 11011110012 in decimal? (In other words, convert the binary number 1101111001 to decimal)',
        choice1: '761',
        choice2: '885',
        choice3: '889',
        choice4: "890",
        answer: 3,  },
          {
        question: 'Convert the decimal number 1387 to binary.',
        choice1: '10101110011',
        choice2: '10011101011',
        choice3: '10101101011',
        choice4: "11001101011",
        answer: 3,},  
          {
        question: 'Convert the decimal number 1911 to binary.',
        choice1: '11011110111',
        choice2: '11101110101',
        choice3: '11101110110',
        choice4: "11101110111",
        answer: 4,},  
          {
        question: 'What is 11001001012 in decimal? (In other words, convert the binary number 1100100101 to decimal)',
        choice1: '667',
        choice2: '809',
        choice3: '837',
        choice4: "805",
        answer: 4,},  
          {
        question: 'A coin is biased so that the probabilities of throwing  a head and a tail are in the ratio 2 : 3. If the coin is thrown 600 times, how many heads would you expect to get?',
        choice1: '240',
        choice2: '300',
        choice3: '360',
        choice4: "400",
        answer: 1,  },
          {
        question: "Abel, Ben and Charlotte share $6500 in the ratio 2 : 7 : 4. What is Charlotte's share?",
        choice1: '$1000',
        choice2: '$2000',
        choice3: '$2500',
        choice4: "$3500",
        answer: 2,  },
          {
        question: 'Mitch and Madge bought a house together, contributing towards the cost in the ratio 11 : 14. After ten years, the house was sold for $750,000. What proportion of the sale price should Madge take if it is shared in the same ratio as their original contributions?',
        choice1: '$330,000',
        choice2: '$375,000',
        choice3: '$400,000',
        choice4: "$420,000",
        answer: 4}

,  
          {
        question: 'Nate, Nick and Norm all contributed towards a charity, giving in the ratio 3 : 8 : 10. Altogether, they contributed $42,000. How much did Nick contribute?',
        choice1: '$6,000',
        choice2: '$16,000',
        choice3: '$14,000',
        choice4: "$20,000",
        answer: 2,  },
          {
        question: 'Lee and Lil bought a house together, contributing towards the cost in the ratio 7 : 9. After five years, the house was sold for $520,000. What proportion of the sale price should Lee take if it is shared in the same ratio as their original contributions?',
        choice1: '$227,500',
        choice2: '$240,000',
        choice3: '$260,000',
        choice4: "$292,500",
        answer: 1, },
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