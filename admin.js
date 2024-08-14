document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;

    if (password === '123') {
        sessionStorage.setItem('authenticated', true); // Marca como autenticado
        window.location.href = 'admin_dashboard.html'; // Redireciona para o painel de administração
    } else {
        alert('Senha incorreta!');
    }
});
