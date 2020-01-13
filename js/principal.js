var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso < 10 || peso > 250){
    tdPeso.textContent = "Peso inválido";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
    }

    if (altura < 0 || altura > 2){
    tdAltura.textContent = "Altura inválida";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida){
    tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}