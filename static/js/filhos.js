const filhosSim = document.getElementById('filhos_sim');
  const filhosNao = document.getElementById('filhos_sao');
  const quantidadeFilhos = document.getElementById('quantidade_filhos');
  const nomesFilhos = document.getElementById('nomes_filhos');

  function toggleCamposFilhos() {
    const habilitar = filhosSim.checked;
    quantidadeFilhos.disabled = !habilitar;
    nomesFilhos.disabled = !habilitar;

    
    quantidadeFilhos.required = habilitar;
    nomesFilhos.required = habilitar;
  }

  filhosSim.addEventListener('change', toggleCamposFilhos);
  filhosNao.addEventListener('change', toggleCamposFilhos);

  
  window.addEventListener('DOMContentLoaded', toggleCamposFilhos);



