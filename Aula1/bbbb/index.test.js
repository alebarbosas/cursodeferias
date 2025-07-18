const {somar, operacoes, dividir} = require("./index")

//teste, primeiro parenteses e depois uma função
describe('Funções da calculadra', () => {
    test('Deveria retornar 5 ao retornar 2+3', () => {
        expect(somar(2,2)).toBe(4)
    })

    test('Deveria retornar 5 ao retornar 2+3', () => {
        expect(somar(2,3)).toBe(5)
    })

    test ('Deveria ser null', () => {
        const x = null
        expect(x).toBeNull()
    })
    //se atribuir um valor a y, já deixa de ser undefined, mesmo que seja colocado um 0 no y
    test('Deveria ser undefined', () => {
        let y
        expect(y).toBeUndefined()
    })
    //Se colocar 1 no lugar de true, também funciona porque 0 é falso e 1 é verdadeiro
    test('Deveria ser True', () => {
        expect(true).toBeTruthy()
    })

    test ('Deveria ser False', () =>{
        expect(false).toBeFalsy()
    })

    //vai verificar se um resultado obtido é maior que o resultado esperado
    test('Deveria ser maior que 10', () =>{
        expect(somar(5,10)).toBeGreaterThan(10)
    })
    //O parenteses vazio indica que ele irá executar uma função que nesse caso é a expect
    test('Deveria ser menor do que 10', () =>{
        expect(somar(2,4)).toBeLessThan(10)
    })

    test('Deveria contar o item 2', () => {
        expect([1, 2, 3]).toContain(2)
    })

    test('Deveria conter a operação subtrair', () => {
        expect(operacoes).toContain("subtrair")
    })

    test('Deveria ter 4 itens na lista de operações', () => {
        expect(operacoes).toHaveLength(4)
    })

    test('Deveria retorar 4 ao fazer 8/2', () => {
        expect(dividir(8,2)).toBe(4)
    })

    test('Deveria lançar um erro "Não é possível dividir por zero" ao dividir 8/0', () =>{
        expect(() => dividir(8,0)).toThrow("Não é possível dividir por zero")
    })
})

//espero que quando eu (somar(2,3)), eu tenha 5 

