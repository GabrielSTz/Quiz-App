const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressbarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Quanto é 2 + 2?',
        choice1: '3',
        choice2: '4',
        choice3: '5',
        choice4: '6',
        answer: 2,
    },
    {
        question: 'Quanto é 5 - 3?',
        choice1: '3',
        choice2: '2',
        choice3: '1',
        choice4: '4',
        answer: 2,
    },
    {
        question: 'Quanto é 3 x 3?',
        choice1: '6',
        choice2: '9',
        choice3: '12',
        choice4: '15',
        answer: 2,
    },
    {
        question: 'Quanto é 16 ÷ 4?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 3,
    },
    {
        question: 'Quanto é 12 + 8?',
        choice1: '20',
        choice2: '19',
        choice3: '18',
        choice4: '21',
        answer: 1,
    },
    {
        question: 'Quanto é 15 - 7?',
        choice1: '6',
        choice2: '7',
        choice3: '8',
        choice4: '9',
        answer: 3,
    },
    {
        question: 'Quanto é 4 x 5?',
        choice1: '15',
        choice2: '20',
        choice3: '25',
        choice4: '30',
        answer: 2,
    },
    {
        question: 'Quanto é 45 ÷ 9?',
        choice1: '3',
        choice2: '4',
        choice3: '5',
        choice4: '6',
        answer: 3,
    },
    {
        question: 'Quanto é 25 + 17?',
        choice1: '40',
        choice2: '41',
        choice3: '42',
        choice4: '43',
        answer: 3,
    },
    {
        question: 'Quanto é 30 - 15?',
        choice1: '12',
        choice2: '13',
        choice3: '14',
        choice4: '15',
        answer: 4,
    },
    {
        question: 'Quanto é 6 x 7?',
        choice1: '42',
        choice2: '40',
        choice3: '44',
        choice4: '48',
        answer: 1,
    },
    {
        question: 'Quanto é 81 ÷ 9?',
        choice1: '7',
        choice2: '8',
        choice3: '9',
        choice4: '10',
        answer: 3,
    },
    {
        question: 'Quanto é 50 + 28?',
        choice1: '76',
        choice2: '77',
        choice3: '78',
        choice4: '79',
        answer: 3,
    },
    {
        question: 'Quanto é 40 - 18?',
        choice1: '22',
        choice2: '21',
        choice3: '23',
        choice4: '24',
        answer: 1,
    },
    {
        question: 'Quanto é 8 x 8?',
        choice1: '56',
        choice2: '60',
        choice3: '64',
        choice4: '72',
        answer: 3,
    },
    {
        question: 'Quanto é 100 ÷ 25?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 3,
    },
    {
        question: 'Quanto é 95 + 37?',
        choice1: '131',
        choice2: '132',
        choice3: '133',
        choice4: '134',
        answer: 2,
    },
    {
        question: 'Quanto é 78 - 34?',
        choice1: '43',
        choice2: '44',
        choice3: '45',
        choice4: '46',
        answer: 2,
    },
    {
        question: 'Quanto é 12 x 9?',
        choice1: '106',
        choice2: '107',
        choice3: '108',
        choice4: '109',
        answer: 3,
    },
    {
        question: 'Quanto é 144 ÷ 12?',
        choice1: '10',
        choice2: '11',
        choice3: '12',
        choice4: '13',
        answer: 3,
    },
    {
        question: 'Quanto é 150 + 75?',
        choice1: '220',
        choice2: '225',
        choice3: '230',
        choice4: '235',
        answer: 2,
    },
    {
        question: 'Quanto é 200 - 89?',
        choice1: '110',
        choice2: '111',
        choice3: '112',
        choice4: '113',
        answer: 2,
    },
    {
        question: 'Quanto é 15 x 11?',
        choice1: '155',
        choice2: '160',
        choice3: '165',
        choice4: '170',
        answer: 3,
    },
    {
        question: 'Quanto é 180 ÷ 15?',
        choice1: '12',
        choice2: '11',
        choice3: '13',
        choice4: '14',
        answer: 1,
    },
    {
        question: 'Quanto é 250 + 125?',
        choice1: '370',
        choice2: '375',
        choice3: '380',
        choice4: '385',
        answer: 2,
    },
    {
        question: 'Quanto é 300 - 147?',
        choice1: '152',
        choice2: '153',
        choice3: '154',
        choice4: '155',
        answer: 2,
    },
    {
        question: 'Quanto é 18 x 14?',
        choice1: '240',
        choice2: '242',
        choice3: '252',
        choice4: '260',
        answer: 3,
    },
    {
        question: 'Quanto é 200 ÷ 8?',
        choice1: '24',
        choice2: '25',
        choice3: '26',
        choice4: '27',
        answer: 2,
    },
    {
        question: 'Quanto é 375 + 256?',
        choice1: '629',
        choice2: '630',
        choice3: '631',
        choice4: '632',
        answer: 3,
    },
    {
        question: 'Quanto é 500 - 275?',
        choice1: '222',
        choice2: '223',
        choice3: '224',
        choice4: '225',
        answer: 4,
    },
];

const SCORE_POINTS = 5;
const MAX_QUESTIONS = 30;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.round(0) * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

        choice.classList.remove('highlight');
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;

    // reseta o comando 
    comando = '';
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

// comando pra mostra resposta
let comando = '';

document.addEventListener('keydown', function(event) {
    // Adiciona a tecla que é o OI
    comando += event.key.toUpperCase();

    // Verifica se o comando é "OI"
    if (comando.endsWith('OI')) {
        // Mostrar a resposta correta da pergunta atual
        choices.forEach(choice => {
            const number = choice.dataset['number'];
            if (number == currentQuestion.answer) {
                choice.classList.add('highlight');
            }
        });

        // Reseta o comando após ativar
        comando = '';
    }

    // Limitar o tamanho do comando a 2 caracteres
    if (comando.length > 2) {
        comando = comando.slice(-2);
    }
});

// Estilo para destacar a resposta correta
const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        background-color: green;
    }
`;
document.head.appendChild(style);

startGame();
