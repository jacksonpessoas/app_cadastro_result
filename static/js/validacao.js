const usuariosAutorizados = [
  { login: 'admin', senha: '123'},
  { login: 'rute', senha: '123' },
  { login: 'vivi', senha: '123' }
];

function logar() {
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  const usuarioValido = usuariosAutorizados.find(usuario => usuario.login === login && usuario.senha === senha);

  if (usuarioValido) {
    alert('Login bem-sucedido!');
    localStorage.setItem('usuarioLogin', login); 

    // Verifica se é admin ou usuário comum
    if (login === 'admin') {
      window.location.href = "templates/home.html";
    } else {
      window.location.href = "home2.html";
    }

    return false;
  // } else {
    alert('Usuário ou senha incorretos');
    return false;
  }
}







document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const formulario = document.getElementById('formulario');
  const splashShown = localStorage.getItem('splashShown');

  if (!splashShown) {
    document.body.classList.add('splash-active'); 
    splash.style.display = 'flex';

    setTimeout(() => {
      splash.style.display = 'none';
      formulario.style.display = 'block';
      document.body.classList.remove('splash-active'); 
      localStorage.setItem('splashShown', 'true');
    }, 5000);
  } else {
    formulario.style.display = 'block';
  }
});



// //VALIDAÇÃO DO FORMULÁRIO

// async function logar() {
//   const login = document.getElementById('login').value;
//   const senha = document.getElementById('senha').value;

//   const response = await fetch('http://localhost:5000/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ login, senha })
//   });

//   const data = await response.json();

//   if (response.ok) {
//     localStorage.setItem('token', data.access_token);
//     localStorage.setItem('usuarioLogin', login);
//     localStorage.setItem('usuarioTipo', data.tipo);

//     if (data.tipo === 'admin') {
//       window.location.href = "CADASTRO_CLIENTES/src/paginas/home.html";
//     } else {
//       window.location.href = "CADASTRO_CLIENTES/src/paginas/home2.html";
//     }
//   } else {
//     alert(data.msg || 'Login inválido');
//   }
// }
