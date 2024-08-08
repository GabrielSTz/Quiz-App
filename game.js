const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#choices-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressbarFull = document.querySelector('#progressbarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Quantos é 7 + 6?',
        choice1: '5',
        choice2: '10',
        choice3: '21',
        choice4: '13',
        answer: 13,
    },
    {
        question: 'Quantos é 19 + 23?',
        choice1: '32',
        choice2: '21',
        choice3: '42',
        choice4: '43',
        answer: 42,
    },
    {
        question: 'Quantos é 25 + 30 x 2?',
        choice1: '90',
        choice2: '95',
        choice3: '71',
        choice4: '85',
        answer: 85,
    },
    {
        question: 'Quantos é 95 x 32 ÷ 4?',
        choice1: '620',
        choice2: '844',
        choice3: '1049',
        choice4: '760',
        answer: 760,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS)
        localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
}

    qustionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressbarFull.style.width = `${(questionCounter/MAX_QUESTIONS) = 100}%`

    const questionsIndex = Math.floor(Math.random() = availableQuestions.length)
    currentQuestion = availableQuestions(questionsIndex)
    question.innerText = currentQuestion.question

    

