

let totalEleitores = Number(prompt("Digite o total de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));

let percentBrancos = (votosBrancos / totalEleitores) * 100;
let percentNulos = (votosNulos / totalEleitores) * 100;
let percentValidos = (votosValidos / totalEleitores) * 100;

console.log("Percentual de votos:");
console.log("Brancos: " + percentBrancos.toFixed(2) + "%");
console.log("Nulos: " + percentNulos.toFixed(2) + "%");
console.log("Válidos: " + percentValidos.toFixed(2) + "%");