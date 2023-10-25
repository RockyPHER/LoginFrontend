const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function() {
  const password = passwordInput.value;
  if (password === '1002') {
    window.location.href = 'site aonde vou subir a imagem';
  } else {
    alert('Senha incorreta. Tente novamente.');
  }
});