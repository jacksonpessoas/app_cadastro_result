async function buscarCepGenerico(cepId, ruaId, bairroId, cidadeId, ufId) {
  const cep = document.getElementById(cepId).value.trim();

  if (!/^\d{8}$/.test(cep)) {
    alert("CEP inválido");
    return;
  }

  const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const endereco = await response.json();

    document.getElementById(ruaId).value = endereco.street || "";
    document.getElementById(bairroId).value = endereco.neighborhood || "";
    document.getElementById(cidadeId).value = endereco.city || "";
    document.getElementById(ufId).value = endereco.state || "";

  } catch (error) {
    alert("Erro ao buscar o CEP");
    console.error(error);
  }
}

window.onload = function () {
  const campoCep = document.getElementById("cep");
  if (campoCep) {
    campoCep.addEventListener("blur", () => {
      buscarCepGenerico("cep", "rua", "bairro", "cidade", "uf");
    });
  }

  const campoCepParentesco = document.getElementById("cep_parentesco");
  if (campoCepParentesco) {
    campoCepParentesco.addEventListener("blur", () => {
      buscarCepGenerico("cep_parentesco", "rua_parentesco", "bairro_parentesco", "cidade_parentesco", "uf_parentesco");
    });
  }
};
