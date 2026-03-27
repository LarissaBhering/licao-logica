let salarioAtual = Number(prompt("Digite o salário atual do funcionário:")); // Entrada
let percentualReajuste = Number(prompt("Digite o percentual de reajuste:")); // Entrada
let novoSalario = salarioAtual * (1 + percentualReajuste / 100); // Processamento
alert("O novo salário é: R$ " + novoSalario.toFixed(2)); // Saída