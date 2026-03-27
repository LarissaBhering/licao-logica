
let horaInicio = Number(prompt("Digite a hora de início do jogo (0-23):"));
let horaFim = Number(prompt("Digite a hora de fim do jogo (0-23):"));


let duracao;

if (horaFim > horaInicio) {

    duracao = horaFim - horaInicio;
} else if (horaFim < horaInicio) {
  
    duracao = (24 - horaInicio) + horaFim;
} else {
  
    duracao = 24;
}

console.log("A duração do jogo foi de " + duracao + " hora(s).");