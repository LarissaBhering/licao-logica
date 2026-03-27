

let anos = Number(prompt("Digite a idade em anos:"));
let meses = Number(prompt("Digite a idade em meses:"));
let dias = Number(prompt("Digite a idade em dias:"));

let totalDias = (anos * 365) + (meses * 30) + dias;

alert("A idade em dias é: " + totalDias);