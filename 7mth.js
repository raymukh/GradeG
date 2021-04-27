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
        question: '360 miles in 6 hrs ___',
        choice1: '70 mi/h',
        choice2: '60 mi/h',
        choice3: '60 min',
        choice4: "83 mi/h",
        answer: 2,
    },
    {
        question: '7x+9=23',
        choice1: '2',
        choice2: '3',
        choice3: '0.2',
        choice4: "-2",
        answer: 1,
    },
    {
        
        question: '5x+7=42',
        choice1: '7.9',
        choice2: '7',
        choice3: '-7',
        choice4: "8",
        answer: 2,

    },
    {
        
        question: '4x+3=51',
        choice1: '9',
        choice2: '-12',
        choice3: '12',
        choice4: "0.12",
        answer: 3,
    },
    {
        
        question: '1+6x=19',
        choice1: '3',
        choice2: '-3',
        choice3: '0.3',
        choice4: "3/3",
        answer: 1,
    },
    {
        
        question: '9+7x=30',
        choice1: '4',
        choice2: '7',
        choice3: '-7',
        choice4: "3",
        answer: 4,
    },
    {
        question: '3+2x=17',
        choice1: '7',
        choice2: '-7',
        choice3: '0.7',
        choice4: "2",
        answer: 1,
    },
    {
        question: '4x-1=31',
        choice1: '6',
        choice2: '9',
        choice3: '8',
        choice4: "-8",
        answer: 3,
    },
    {
        question: '3x-4=29',
        choice1: '13',
        choice2: '11',
        choice3: '-11',
        choice4: "12",
        answer: 2,
    },
    {
        question: '6x-5=31',
        choice1: '7',
        choice2: '-6',
        choice3: '0.6',
        choice4: "6",
        answer: 4,
    },
    {
        question: 'x-3=-2',
        choice1: '1',
        choice2: '-1',
        choice3: '0.11',
        choice4: "1/2",
        answer: 1,
    },
    {
        question: 'x-5=-1',
        choice1: '-4',
        choice2: '4/4',
        choice3: '4',
        choice4: "0.4",
        answer: 3,
    },
    {
        question: 'x-6=-4',
        choice1: '3',
        choice2: '2',
        choice3: '-2',
        choice4: "4",
        answer: 2,
    },
    {
        question: '5-x=2',
        choice1: '3',
        choice2: '5',
        choice3: '4',
        choice4: "-3",
        answer: 1,
    },
    {
        question: '9-x=5',
        choice1: '-4',
        choice2: '4/4',
        choice3: '4',
        choice4: "0.4",
        answer: 3,
    },
    {
        question: '6-x=3',
        choice1: '3/3',
        choice2: '4',
        choice3: '7',
        choice4: "3",
        answer: 4,
    },
    {
        question: '3x-1=14',
        choice1: '5',
        choice2: '6',
        choice3: '-45',
        choice4: "10",
        answer: 1,
    },
    {
        question: 'x-4=-3',
        choice1: '9/3',
        choice2: '3/3',
        choice3: '1',
        choice4: "-1",
        answer: 3,
    },
    {
        question: '3+2x=17',
        choice1: '-7',
        choice2: '7',
        choice3: '4',
        choice4: "9",
        answer: 2,
    },
    {
        question: '7x-6=50',
        choice1: '-8',
        choice2: '6',
        choice3: '-7',
        choice4: "8",
        answer: 4,
    },
    {
        question: '11+5x=71',
        choice1: '12',
        choice2: '14',
        choice3: '-12',
        choice4: "21",
        answer: 1,
    },
    {
        question: '4x+2=34',
        choice1: '-8',
        choice2: '9',
        choice3: '-7',
        choice4: "8",
        answer: 4,
    },
    {
        question: '8x-2=46',
        choice1: '-6',
        choice2: '6',
        choice3: '7',
        choice4: "9",
        answer: 2,
    },
    {
        question: '5+3x=32',
        choice1: '8',
        choice2: '-9',
        choice3: '7',
        choice4: "9",
        answer: 4,
    },
    {
        question: 'x+3=2',
        choice1: '3',
        choice2: '1',
        choice3: '-1',
        choice4: "2",
        answer: 3,
    },
    {
        question: 'x+9=4',
        choice1: '-5',
        choice2: '5',
        choice3: '3',
        choice4: "4",
        answer: 1,
    },
    {
        question: 'x+10=-5',
        choice1: '15',
        choice2: '-15',
        choice3: '14',
        choice4: "8",
        answer: 2,
    },
    {
        question: '4+5x=44',
        choice1: '-8',
        choice2: '9',
        choice3: '7',
        choice4: "8",
        answer: 4,
    },
    {
        question: '8-x=14',
        choice1: '4',
        choice2: '6',
        choice3: '-6',
        choice4: "8",
        answer: 3,
    },
    {
        question: '2x-7=21',
        choice1: '14',
        choice2: '13',
        choice3: '-14',
        choice4: "12",
        answer: 1,
    },
    {
        question: '1-x=6',
        choice1: '-5',
        choice2: '5',
        choice3: '7',
        choice4: "9",
        answer: 1,
    },
    {
        question: '8+5x=63',
        choice1: '-11',
        choice2: '13',
        choice3: '17',
        choice4: "11",
        answer: 4,
    },
    {
        question: '7x-3=18',
        choice1: '-6',
        choice2: '3',
        choice3: '7',
        choice4: "4",
        answer: 2,
    },
    {
        question: '10x+2=72',
        choice1: '10',
        choice2: '6',
        choice3: '7',
        choice4: "8",
        answer: 3,
    },
    {
        question: '12x-9=39',
        choice1: '4',
        choice2: '-4',
        choice3: '5',
        choice4: "3",
        answer: 1,
    },
    {
        question: '23=x+8',
        choice1: '15',
        choice2: '-15',
        choice3: '13',
        choice4: "14",
        answer: 1,
    },
    {
        question: '5x-1=64',
        choice1: '14',
        choice2: '12',
        choice3: '-13',
        choice4: "13",
        answer: 4,
    },
    {
        question: '9x-4=32',
        choice1: '6',
        choice2: '-4',
        choice3: '4',
        choice4: "5",
        answer: 3,
    },
    {
        question: '2x-18=-20',
        choice1: '-1',
        choice2: '1',
        choice3: '3',
        choice4: "5",
        answer: 1,
    },
    {
        question: '2x-3=-9',
        choice1: '5',
        choice2: '3',
        choice3: '-3',
        choice4: "8",
        answer: 3,
    },
    {
        question: '2x-10=-2',
        choice1: '4',
        choice2: '5',
        choice3: '6',
        choice4: "9",
        answer: 1,
    },
    {
        question: '3-2x=5',
        choice1: '1',
        choice2: '4',
        choice3: '-1',
        choice4: "3",
        answer: 3,
    },
    {
        question: '5-2x=15',
        choice1: '3',
        choice2: '4',
        choice3: '7',
        choice4: "-5",
        answer: 4,
    },
    {
        question: '34=-6+5x',
        choice1: '4',
        choice2: '8',
        choice3: '7',
        choice4: "6",
        answer: 2,
    },
    {
        question: '6+11x=-5',
        choice1: '1',
        choice2: '-1',
        choice3: '2',
        choice4: "4",
        answer: 2,
    },
    {
        question: '-29=3+4x',
        choice1: '-8',
        choice2: '8',
        choice3: '9',
        choice4: "3",
        answer: 1,
    },
    {
        question: '6x+13=25',
        choice1: '3',
        choice2: '-4',
        choice3: '2',
        choice4: "1",
        answer: 3,
    },
    {
        question: '8-2x=12',
        choice1: '4',
        choice2: '-2',
        choice3: '3',
        choice4: "5",
        answer: 2,
    },
    {
        question: '28=3x+1',
        choice1: '-9',
        choice2: '8',
        choice3: '7',
        choice4: "9",
        answer: 4,
    },
    {
        question: '53=8x+5',
        choice1: '7',
        choice2: '6',
        choice3: '4',
        choice4: "3",
        answer: 2,
    },
    {
        question: '7x+3=52',
        choice1: '5',
        choice2: '6',
        choice3: '7',
        choice4: "8",
        answer: 3,
    },
    {
        question: '16-2x=40',
        choice1: '-12',
        choice2: '12',
        choice3: '13',
        choice4: "15",
        answer: 1,
    },
    {
        question: '6x+5=17',
        choice1: '6',
        choice2: '4',
        choice3: '3',
        choice4: "2",
        answer: 4,
    },
    {
        question: '34=6-4x',
        choice1: '6',
        choice2: '-7',
        choice3: '7',
        choice4: "8",
        answer: 2,
    },
    {
        question: '2-x=15',
        choice1: '12',
        choice2: '-13',
        choice3: '13',
        choice4: "14",
        answer: 2,
    },
    {
        question: '7-x=21',
        choice1: '13',
        choice2: '15',
        choice3: '-14',
        choice4: "18",
        answer: 3,
    },
    {
        question: '3-2x=5',
        choice1: '4',
        choice2: '3',
        choice3: '2',
        choice4: "-1",
        answer: 4,
    },
    {
        question: '8x+42=-54',
        choice1: '-14',
        choice2: '-13',
        choice3: '12',
        choice4: "-12",
        answer: 4,
    },
    {
        question: '6x-16=-70',
        choice1: '9',
        choice2: '-9',
        choice3: '8',
        choice4: "6",
        answer: 2,
    },
    {
        question: '-9-4x=-53',
        choice1: '11',
        choice2: '13',
        choice3: '14',
        choice4: "16",
        answer: 1,
    },
    {
        question: '11x+3=36',
        choice1: '7',
        choice2: '5',
        choice3: '3',
        choice4: "4",
        answer: 3,
    },
    {
        question: '2z-1=9',
        choice1: '5',
        choice2: '7',
        choice3: '4',
        choice4: "3",
        answer: 1,
    },
    {
        question: '8=(z+4)/5',
        choice1: '26',
        choice2: '41',
        choice3: '37',
        choice4: "36",
        answer: 4,
    },
    {
        question: '7-4m=1',
        choice1: '1 1/2',
        choice2: '2 1/3',
        choice3: '1 1/3',
        choice4: "1.6",
        answer: 1,
    },
    {
        question: '4k+7=9',
        choice1: '0.555',
        choice2: '3.3',
        choice3: '1',
        choice4: "1/2",
        answer: 4,
    },
    {
        question: '7x+3=4',
        choice1: '1/3',
        choice2: '1/6',
        choice3: '1/7',
        choice4: "1/9",
        answer: 3,
    },
    {
        question: '3=(y-1)/3',
        choice1: '5',
        choice2: '8',
        choice3: '9',
        choice4: "10",
        answer: 4,
    },
    {
        question: '(9-c)/4=5',
        choice1: '-11',
        choice2: '-13',
        choice3: '-14',
        choice4: "15",
        answer: 1,
    },
    {
        question: '8=7m-7',
        choice1: '-2 1/7',
        choice2: '2/7',
        choice3: '2 1/7',
        choice4: "22 2/7",
        answer: 3,
    },
    {
        question: '–8(x+6)+0=–7x+8',
        choice1: '46',
        choice2: '47',
        choice3: '56',
        choice4: "-56",
        answer: 4,
    },
    {
        question: '–9(k+1)–4=–8k–9',
        choice1: '3',
        choice2: '-4',
        choice3: '5',
        choice4: "7",
        answer: 2,
    },
    {
        question: '6c–10=10–8(c–6)',
        choice1: '5 5/7',
        choice2: '4 6/7',
        choice3: '-4 6/7',
        choice4: "3 5/7",
        answer: 2,
    },
    {
        question: '–(k+7)–12=6k+10',
        choice1: '-4 1/7',
        choice2: '4 1/7',
        choice3: '9 1/7',
        choice4: "4 4/7",
        answer: 1,
    },
    {
        question: '3(t+7)+6=–6t+9',
        choice1: '2',
        choice2: '5',
        choice3: '7',
        choice4: "-2",
        answer: 4,
    },
    {
        question: '–7(a+6)–7=–2a–9',
        choice1: '8',
        choice2: '7',
        choice3: '-8',
        choice4: "6",
        answer: 3,
    },
    {
        question: '-0.6 x 0.11',
        choice1: '-0.066',
        choice2: '0.066',
        choice3: '0.067',
        choice4: "0.0066",
        answer: 1,
    },
    {
        question: '0.02 x (-0.09)',
        choice1: '-0.0016',
        choice2: '0.0018',
        choice3: '-0.0018',
        choice4: "0.018",
        answer: 3,
    },
    {
        question: '-0.03 × (-0.1)',
        choice1: '0.0003',
        choice2: '-0.003',
        choice3: '0.03',
        choice4: "0.003",
        answer: 4,
    },
    {
        question: '-0.09 × (-0.9)',
        choice1: '0.081',
        choice2: '0.0081',
        choice3: '-0.0082',
        choice4: "0.087",
        answer: 1,
    },
    {
        question: '-0.2 × 0.008',
        choice1: '0.0017',
        choice2: '0.0016',
        choice3: '-0.0016',
        choice4: "-0.00016",
        answer: 3,
    },
    {
        question: '0.05 x 0.7',
        choice1: '0.035',
        choice2: '0.0035',
        choice3: '-0.035',
        choice4: "0.004",
        answer: 1,
    },
    {
        question: '0.011 × 0.1',
        choice1: '0.0012',
        choice2: '0.00111',
        choice3: '0.011',
        choice4: "0.0011",
        answer: 4,
    },
    {
        question: '-0.04 x (-0.06)',
        choice1: '-0.0024',
        choice2: '0.0024',
        choice3: '0.024',
        choice4: "0.00024",
        answer: 2,
    },
    {
        question: '0.04 × (-0.3)',
        choice1: '0.014',
        choice2: '-0.012',
        choice3: '0.12',
        choice4: "0.012",
        answer: 2,
    },
    {
        question: '0.9 × 0.003',
        choice1: '0.0027',
        choice2: '0.027',
        choice3: '0.00027',
        choice4: "-0.027",
        answer: 1,
    },
    {
        question: '0.9 × (-0.7)',
        choice1: '0.63',
        choice2: '-0.063',
        choice3: '-0.63',
        choice4: "0.73",
        answer: 3,
    },
    {
        question: '0.9 × 0.04',
        choice1: '0.37',
        choice2: '-0.036',
        choice3: '0.0036',
        choice4: "0.036",
        answer: 4,
    },
    {
        question: '0.1 × 0.11',
        choice1: '0.011',
        choice2: '0.17',
        choice3: '0.0011',
        choice4: "-0.011",
        answer: 1,
    },
    {
        question: '-0.4 × (-0.02)',
        choice1: '0.008',
        choice2: '0.0008',
        choice3: '0.08',
        choice4: "-0.008",
        answer: 1,
    },
    {
        question: '-0.06 × 0.009',
        choice1: '-0.0054',
        choice2: '-0.00054',
        choice3: '0.10054',
        choice4: "0.00054",
        answer: 2,
    },
    {
        question: '-0.07 × 0.01',
        choice1: '-0.000009',
        choice2: '0.08',
        choice3: '0.0007',
        choice4: "-0.0007",
        answer: 4,
    },
    {
        question: '-0.04 × 0.7',
        choice1: '0.028',
        choice2: '-0.28',
        choice3: '-0.0028',
        choice4: "-0.028",
        answer: 4,
    },
    {
        question: '-0.04 × (-0.01)',
        choice1: '-0.0004',
        choice2: '0.0003',
        choice3: '0.0004',
        choice4: "0.034",
        answer: 3,
    },
    {
        question: '-4 – (-1.1) – 4',
        choice1: '-6.9',
        choice2: '6.9',
        choice3: '6.7',
        choice4: "9.6",
        answer: 1,
    },
    {
        question: '-1.2 – 0.9 – 1.2',
        choice1: '-3.33',
        choice2: '-3.3',
        choice3: '3.3',
        choice4: "3.33",
        answer: 2,
    },
    {
        question: '-3.7 – 5 – 2',
        choice1: '11.8',
        choice2: '12.7',
        choice3: '10.7',
        choice4: "-10.7",
        answer: 4,
    },
    {
        question: '-2 – 0.2 – 2',
        choice1: '4.2',
        choice2: '-4.2',
        choice3: '3.1',
        choice4: "5.3",
        answer: 2,
    },
    {
        question: '4.4 – (-0.5) – 3.2',
        choice1: '1.7',
        choice2: '7.1',
        choice3: '-1.7',
        choice4: "1/7",
        answer: 1,
    },
    {
        question: '5 – (-1.5) – 6',
        choice1: '0.6',
        choice2: '5',
        choice3: '0.5',
        choice4: "50",
        answer: 3,
    },
    {
        question: '-4.4 – 5.5 – (-1.6)',
        choice1: '-8.3',
        choice2: '8.4',
        choice3: '-8.4',
        choice4: "8.3",
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
