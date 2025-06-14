let etapaAtual = 0;
const etapas = document.querySelectorAll('.etapa');
const abas = document.querySelectorAll('.aba');

function mostrarEtapa(index) {
  etapas.forEach((etapa, i) => {
    etapa.classList.toggle('ativa', i === index);
  });
  abas.forEach((aba, i) => {
    aba.classList.toggle('ativa', i === index);
  });
}

function proximaEtapa() {
  if (etapaAtual < etapas.length - 1) {
    etapaAtual++;
    mostrarEtapa(etapaAtual);
  }
}

function voltarEtapa() {
  if (etapaAtual > 0) {
    etapaAtual--;
    mostrarEtapa(etapaAtual);
  }
}

function irParaEtapa(index) {
  etapaAtual = index;
  mostrarEtapa(etapaAtual);

 
  setTimeout(() => {
    switch (index) {
      case 0:
        document.getElementById('nome')?.focus();
        break;
      case 1:
        document.getElementById('grau_parentesco')?.focus();
        break;
      case 2:
        document.getElementById('mae')?.focus();
        break;
      case 3:
        
        break;
    }
  }, 50); 
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarEtapa(etapaAtual);
});

const inputFoto = document.getElementById("foto-upload");
const imgPreview = document.getElementById("foto-preview");

inputFoto.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imgPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

/*
function telaInicial() {
  window.location.href = 'home.html';
}
*/

function telaInicial() {
  const usuario = localStorage.getItem('usuarioLogin');

  if (usuario === 'admin') {
    window.location.href = 'home.html';
  } else {
    window.location.href = 'home2.html';
  }
}








function telaLogin() {
  window.location.href = '../../../index.html';
}



