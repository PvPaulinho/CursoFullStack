// Carne - 400 g por pessoa + de 6 horas - 650 g
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua 1000 ml por pessoa + 6 horas 1500 ml

// crianças valem po 0,5

let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("crianças");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duracao = inputDuracao.value;

    let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * crianças);
    let qntTotalCerveja = cervejaPP(duracao) * adultos;
    let qntTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * crianças);

    resultado.innerHTML = `<p>${qntTotalCarne / 1000} kg de carne`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja / 355)} latas de cerveja`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas / 2000)} garrafas 2L de bebidas`
}

function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
