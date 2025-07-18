function valores (x, y){
    return parseFloat((x *(y/100)).toFixed(2))
    //parseFloat é pra transformar uma string ou outro tipo de dado em um número com casas decimais. 
    // Já toFIxed serve para formatar um número com um número fixo de casas decimais
}
console.log (valores(100, 10))
console.log (valores(150, 8.5))
console.log (valores(250, 0))
console.log (valores(0, 20))