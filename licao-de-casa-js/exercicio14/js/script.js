let quantidade = parseInt(prompt("Quantas maçãs foram compradas?"));
let preco;

if (quantidade < 12) {
    preco = 1.30;
} else {
    preco = 1.00;
}

let total = quantidade * preco;

alert("Total da compra: R$ " + total.toFixed(2));