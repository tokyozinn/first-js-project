var botaoAdiciona = document.querySelector("#adicionar-paciente");

botaoAdiciona.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obterPacienteForm(form);
    var pacienteTr = criaTr(paciente);    

    var erros = validaPaciente(paciente);

    listaErros = document.querySelector("#mensagem-erro");
    listaErros.innerHTML = ""

    if (erros.length > 0) {
        exibeMensagemErro(erros);
    } else {
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        form.reset();
    }
});

function obterPacienteForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function criaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = []

    if (!validaAltura(paciente.altura)) erros.push("Altura inválida!");
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!")
    if (paciente.nome.length == 0) erros.push("Nome não pode estar em branco");
    if (paciente.altura.length == 0) erros.push("Altura não pode estar em branco");
    if (paciente.peso.length == 0) erros.push("Peso não pode estar em branco");
    if (paciente.gordura.length == 0) erros.push("Gordura não pode estar em branco");
    
    return erros;
}

function exibeMensagemErro(erros){
    for (var i = 0; i < erros.length; i++){
        var msg = erros[i];
        var erro = document.createElement("li");
        erro.textContent = msg;
        
        listaErros.appendChild(erro);
    }
}
