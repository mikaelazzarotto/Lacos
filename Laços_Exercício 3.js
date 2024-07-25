/*Desenvolva um jogo em que o computador escolhe um número aleatório e o jogador deve adivinhar qual é. Forneça dicas para o jogador, como "maior" ou "menor", até que ele acerte o número.*/

let numeroAleatorio = parseInt(Math.random() * 100);
let numeroInput = Number (prompt ("Adivinhe qual é o número escolhido pelo computador:"));

while (numeroInput !== numeroAleatorio) {
    if (numeroInput < numeroAleatorio) {
        console.log ("Digite um número maior");
    } else {
        console.log ("Digite um número menor");
    }
    numeroInput = Number(prompt ("Digite outro número:"));
}

console.log ("Parabéns! Você acertou o número:" , numeroAleatorio)

