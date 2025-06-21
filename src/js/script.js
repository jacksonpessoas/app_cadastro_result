document.getElementById('formPesquisa').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Coleta os dados do formulário
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // Exibe os dados no console (ou envie para um servidor)
  console.log(data);
});



document.addEventListener("DOMContentLoaded", function () {
  const rendaInput = document.getElementById("renda");

  rendaInput.addEventListener("blur", function (e) {
    let value = e.target.value.replace(/\D/g, ""); 

    if (value === "") {
      e.target.value = "";
      return;
    }

    value = (parseInt(value) / 100).toFixed(2); 
    value = value.replace(".", ","); 
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
    e.target.value = "R$ " + value;
  });
});



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



// Envio do formulário de pesquisa
document.getElementById("formPesquisa").addEventListener("submit", function(e) {
    e.preventDefault();

    const token = localStorage.getItem("token"); 
    const formData = {
        nome: document.querySelector("[name='nome']").value,
        idade: document.querySelector("[name='idade']").value,
        sexo: document.querySelector("[name='sexo']").value,
        bairro: document.querySelector("[name='bairro']").value,
        escolaridade: document.querySelector("[name='escolaridade']").value,
        trabalho: document.querySelector("input[name='trabalho']:checked")?.value,
        renda: normalizarRenda(document.querySelector("[name='renda']").value),
        atualGov: document.querySelector("[name='atualGov']").value,
        candidato: document.querySelector("[name='candidato']").value
    };

    fetch("https://app-cadastro-result.onrender.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Descomente a linha abaixo apenas se proteger a rota
            // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Dados enviados com sucesso!");
        console.log(data);
    })
    .catch(err => {
        alert("Erro ao enviar os dados.");
        console.error(err);
    });
});



function normalizarRenda(valor) {
  if (!valor) return "0.00";

  valor = valor.replace("R$", "").replace(/\./g, "").replace(",", ".").trim();
  return parseFloat(valor).toFixed(2);
}
