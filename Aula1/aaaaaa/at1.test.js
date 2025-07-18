import {somar} from './aaaaaa/at1.js'

let x=2
let y=3
let resultadoEsperado= 5

let resultadoObetido = somar(x,y)

if (resultadoEsperado == resultadoObetido){
    console.log ("Teste passou")
} else {
    console.log ("Teste falhou")
    console.log (`Resultado Esperado = ${resultadoEsperado} e o resultado obtido = ${resultadoObetido}`)
}


let x2=10
let y2=0
let resultadoEsperado2= 10

let resultadoObetido2 = somar(x2, y2)

if (resultadoEsperado2 == resultadoObetido2){
    console.log ("Teste passou")
} else {
    console.log ("Teste falhou")
    console.log (`Resultado Esperado = ${resultadoEsperado2} e o resultado obtido = ${resultadoObetido2}`)
}