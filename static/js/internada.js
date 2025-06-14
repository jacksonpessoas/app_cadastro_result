
//-----------------------Função sim ou nao para Internamento------------------------//
document.addEventListener('DOMContentLoaded', function () {
    const sim = document.getElementById('internada_sim');
    const nao = document.getElementById('internada_nao');
    const campos = document.querySelectorAll('#camposInternacao input');

    function atualizarCamposInternacao() {
        const habilitar = sim.checked;
        campos.forEach(campo => {
            campo.disabled = !habilitar;
        });
    }

    sim.addEventListener('change', atualizarCamposInternacao);
    nao.addEventListener('change', atualizarCamposInternacao);


    atualizarCamposInternacao();
});

// ---------------------------------------------------------------------------------//


//-----------------------Função sim ou nao para Policia----------------------------//

document.addEventListener('DOMContentLoaded', function () {
    const sim = document.getElementById('policia_sim');
    const nao = document.getElementById('policia_nao');
    const campos = document.querySelectorAll('#camposPolicia input');

    function atualizarCamposPolicia() {
        const habilitar = sim.checked;
        campos.forEach(campo => {
            campo.disabled = !habilitar;
        });
    }

    sim.addEventListener('change', atualizarCamposPolicia);
    nao.addEventListener('change', atualizarCamposPolicia);

    atualizarCamposPolicia();
});

// ---------------------------------------------------------------------------------//




//-----------------------Função sim ou nao para Processo----------------------------//

    document.addEventListener('DOMContentLoaded', function () {
        const sim = document.getElementById('processo_sim');
        const nao = document.getElementById('processo_nao');
        const campos = document.querySelectorAll('#camposProcesso input');

        function atualizarCamposProcesso() {
            const habilitar = sim.checked;
            campos.forEach(campo => {
                campo.disabled = !habilitar;
            });
        }

        sim.addEventListener('change', atualizarCamposProcesso);
        nao.addEventListener('change', atualizarCamposProcesso);

        atualizarCamposProcesso();
    });

// ---------------------------------------------------------------------------------//



//-----------------------Função sim ou nao para Saude--------------------------//

document.addEventListener('DOMContentLoaded', function () {
    const sim = document.getElementById('saude_sim');
    const nao = document.getElementById('saude_nao');
    const campos = document.querySelectorAll('#camposSaude input');

    function atualizarCamposSaude() {
        const habilitar = sim.checked;
        campos.forEach(campo => {
            campo.disabled = !habilitar;
        });
    }

    sim.addEventListener('change', atualizarCamposSaude);
    nao.addEventListener('change', atualizarCamposSaude);

    atualizarCamposSaude();
});


//-----------------------Função sim ou nao para Medicação--------------------------//

document.addEventListener('DOMContentLoaded', function () {
    const sim = document.getElementById('medicacao_sim');
    const nao = document.getElementById('medicacao_nao');
    const campos = document.querySelectorAll('#campos_medicacao input');

    function atualizarCamposMedicacao() {
        const habilitar = sim.checked;
        campos.forEach(campo => {
            campo.disabled = !habilitar;
        });
    }

    sim.addEventListener('change', atualizarCamposMedicacao);
    nao.addEventListener('change', atualizarCamposMedicacao);

    atualizarCamposMedicacao();
});

// ---------------------------------------------------------------------------------//


function toggleOutraInput() {
    const checkboxOutra = document.getElementById('checkbox-outra');
    const inputOutra = document.getElementById('outra-input');
    inputOutra.disabled = !checkboxOutra.checked;
    if (!checkboxOutra.checked) {
        inputOutra.value = '';
    }
}