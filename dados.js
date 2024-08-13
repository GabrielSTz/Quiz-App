const BIN_ID = '66bbc32ae41b4d34e41fe6a9'; // Substitua com o seu BIN_ID
const API_KEY = '$2a$10$bLaXmFZNO/rfSqqdxXj/t.0XQYfArewbq5XbJY1T2M4F.9jDB.tQK'; // Substitua com a sua API_KEY
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

const highScoresList = document.querySelector('#highScoresList');

// Função para obter os highscores do JSONBin
async function fetchHighScores() {
    const response = await fetch(BIN_URL, {
        headers: {
            'X-Master-Key': API_KEY
        }
    });
    const data = await response.json();
    return data.record.highScores || [];
}

// Função para salvar os highscores no JSONBin
async function saveHighScores(highScores) {
    const response = await fetch(BIN_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY
        },
        body: JSON.stringify({ highScores })
    });
    return await response.json();
}

// Função para renderizar os highscores na página
function renderHighScores(highScores) {
    highScoresList.innerHTML = highScores.map((score, index) => {
        return `
            <li class="high-score">
                ${score.name} - ${score.score}
                <button onclick="editScore(${index})">Editar</button>
                <button onclick="deleteScore(${index})">Excluir</button>
            </li>`;
    }).join('');
}

// Função para editar um score específico
function editScore(index) {
    const newName = prompt('Digite o novo nome:');
    const newScore = prompt('Digite a nova pontuação:');
    if (newName && newScore) {
        highScores[index].name = newName;
        highScores[index].score = parseInt(newScore, 10);
        saveHighScores(highScores).then(() => renderHighScores(highScores));
    }
}

// Função para excluir um score específico
function deleteScore(index) {
    highScores.splice(index, 1);
    saveHighScores(highScores).then(() => renderHighScores(highScores));
}

// Carregar e exibir os highscores ao carregar a página
let highScores = [];

fetchHighScores().then(scores => {
    highScores = scores;
    renderHighScores(highScores);
});
