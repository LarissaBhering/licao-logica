

let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));

let media = (n1 + n2) / 2;

if (media >= 6) {
    alert("Aprovado! Média: " + media.toFixed(2));
} else {
    alert("Reprovado! Média: " + media.toFixed(2));
}