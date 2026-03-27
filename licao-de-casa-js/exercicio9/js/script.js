function calcularSalario(){

    let carrosVendidos = parseInt(prompt("Quantos carros foram vendidos?"));
    let valorVendas = parseFloat(prompt("Qual o valor total das vendas?"));
    let salarioFixo = parseFloat(prompt("Qual o salário fixo?"));
    let comissaoPorCarro = parseFloat(prompt("Quanto ganha por carro vendido?"))

    let comissaoTotal = carrosVendidos * comissaoPorCarro;

    let bonus = valorVendas * 0.05;

    let salarioFinal = salarioFixo + comissaoTotal + bonus;

alert("Salário final: R$ " + salarioFinal.toFixed(2));
  




}

