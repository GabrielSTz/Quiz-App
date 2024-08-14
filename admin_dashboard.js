// Função para carregar os dados da leaderboard do localStorage
function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('highScores')) || [];
    const tbody = document.querySelector('#leaderboard tbody');
    tbody.innerHTML = ''; // Limpa a tabela

    leaderboard.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="text" value="${entry.name}" data-index="${index}" class="edit-name"></td>
            <td><input type="number" value="${entry.score}" data-index="${index}" class="edit-score"></td>
            <td><button data-index="${index}" class="delete-entry">Deletar</button></td>
        `;
        tbody.appendChild(row);
    });

    // Adiciona os event listeners para edição e exclusão
    document.querySelectorAll('.edit-name').forEach(input => input.addEventListener('input', editEntry));
    document.querySelectorAll('.edit-score').forEach(input => input.addEventListener('input', editEntry));
    document.querySelectorAll('.delete-entry').forEach(button => button.addEventListener('click', deleteEntry));
}

// Função para editar um nome ou pontuação na leaderboard
function editEntry(event) {
    const index = event.target.dataset.index;
    const leaderboard = JSON.parse(localStorage.getItem('highScores')) || [];

    if (event.target.classList.contains('edit-name')) {
        leaderboard[index].name = event.target.value;
    } else if (event.target.classList.contains('edit-score')) {
        leaderboard[index].score = parseInt(event.target.value, 10);
    }

    localStorage.setItem('highScores', JSON.stringify(leaderboard));
}

// Função para deletar uma entrada da leaderboard
function deleteEntry(event) {
    const index = event.target.dataset.index;
    let leaderboard = JSON.parse(localStorage.getItem('highScores')) || [];

    leaderboard.splice(index, 1);
    localStorage.setItem('highScores', JSON.stringify(leaderboard));

    loadLeaderboard(); // Recarrega a tabela atualizada
}

// Função para adicionar um novo jogador
function addPlayer(event) {
    event.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const playerScore = parseInt(document.getElementById('playerScore').value, 10);

    const leaderboard = JSON.parse(localStorage.getItem('highScores')) || [];

    // Adiciona o novo jogador à leaderboard
    leaderboard.push({ name: playerName, score: playerScore });

    localStorage.setItem('highScores', JSON.stringify(leaderboard));

    // Limpa o formulário
    document.getElementById('addPlayerForm').reset();

    // Recarrega a leaderboard
    loadLeaderboard();
}

// Adiciona o event listener para o formulário de adicionar jogador
document.getElementById('addPlayerForm').addEventListener('submit', addPlayer);




document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = 'index.html'});

// Carrega a leaderboard quando a página é carregada
window.onload = loadLeaderboard;
