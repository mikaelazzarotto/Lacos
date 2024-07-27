/* 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. 
Um resumo das funcionalidades são:
a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
- O número chutado, com a mensagem: `O número chutado foi: <número>`
- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>*/

let numeroPensado = Number(prompt ("Jogador 1: Digite o número pensado, de 0 a 100:"))
alert("Vamos jogar!")
let numeroChutado = Number(prompt ("Jogador 2: Digite um chute entre 0 a 100:"))
let contador = 1

while (numeroChutado !== numeroPensado) {
    console.log(" O número chutado foi:" , numeroChutado);
    if (numeroChutado > numeroPensado) {
        console.log("Errrrou! o número escolhido é menor!")
    } else {
        console.log("Errrrou! o número escolhido é maior!")}
    contador ++
    numeroChutado = Number(prompt ("Jogador 2: Digite outro chute entre 0 a 100:"))
}

numeroPensado == numeroChutado
console.log( "O número chutado foi:" , numeroChutado , "\nAcertoooou!", "\nO número de tentativas foi:" , contador)
