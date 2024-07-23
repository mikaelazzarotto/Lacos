/*1) Implemente um programa que converta valores entre diferentes moedas. O usuário deve inserir o valor, a moeda de origem e a moeda de destino.
As moedas deverão ser: Won sul-coreano, Dirham marroquino, Dólar e Real.*/

let valor = Number (prompt ("Digite o valor que deseja converter:"))
let moedaOrigem = prompt ("Digite a moeda de origem:")
let moedaDestino = prompt ("Digite a moeda de destino:")
let conta


switch (moedaOrigem) {
    case "Won sul coreano":
        if (moedaDestino === "Dirham marroquino") {
            conta = valor * 0.0071
            console.log (conta.toFixed(2))
        } else if (moedaDestino === "Dólar") {
            conta = valor * 0.0072
            console.log ( conta.toFixed(2) )
        } else if (moedaDestino === "Real") {
            conta = valor * 0.0040
            console.log ( conta.toFixed(2) )
        } else {
            console.log ("Digite uma moeda válida")
        }
        break;
        
    case "Dirham marroquino":
        if (moedaDestino === "Won sul coreano") {
            conta = valor * 140.85
            console.log (conta.toFixed(2))
        } else if (moedaDestino === "Dólar") {
            conta = valor * 0.10
            console.log (conta.toFixed(2))
        } else if (moedaDestino === "Real") {
            conta = valor * 0.57
            console.log (conta.toFixed(2))
        } else {
            console.log ("Digite uma moeda válida")
        }
        break;

    case "Dólar":
        if (moedaDestino === "Won sul coreano") {
            conta = valor * 1385.90
            console.log (conta.toFixed(2))
        } else if (moedaDestino === "Dirham marroquino") {
            conta = valor * 9.85
            console.log (conta.toFixed(2))
        } else if (moedaDestino === "Real") {
            conta = valor * 5.59
            console.log (conta.toFixed(2))
        } else {
            console.log ("Digite uma moeda válida")
        }
        break;

    case "Real":
        if (moedaDestino === "Won sul coreano") {
            conta = valor * 248.11
            console.log (conta.toFixed(2))
        } else if (moedaDestino === "Dirham marroquino") {
            conta = valor * 1.76
            console.log (conta.toFixed(2))
        } else if (moedaDestino === "Dólar") {
            conta = valor * 0.18
            console.log (conta.toFixed(2))
        } else {
            console.log ("Digite uma moeda válida")
        }
        break;
}

alert ( `Você converteu ${moedaOrigem} para ${moedaDestino}.
Sendo: ${valor} para ${conta}.`)
