var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 10 || peso > 250){
    tdPeso.textContent = "Peso inválido";
    pesoEhValido = false;
}

if (altura < 0 || altura > 2){
    tdAltura.textContent = "Altura inválida";
    alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
}