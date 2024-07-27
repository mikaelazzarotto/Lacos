/*1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    c) Por fim, imprima o array com os nomes dos bichinhos no console*/

    let quantidadeBichos = prompt ("Quantos pets você tem?")
    let indice = 0
    let arrayNomes = ["  "]

    if (quantidadeBichos == 0) {
        console.log("Que pena! Você pode adotar um pet!")
    } else {
            while (indice < quantidadeBichos) {
            arrayNomes[indice] = prompt ("Digite o nome dos seus pets, um por vez:")
            indice ++}
        indice = 0
        console.log("Os nomes dos seus pets são:")
            while (indice < quantidadeBichos) {
                console.log(arrayNomes[indice])
            indice ++}
    }  
