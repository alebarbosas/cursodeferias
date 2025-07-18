const somar = (x,y) => x + y

const operacoes = ["somar", "subtrair", "multiplicar", "dividr"]

const dividir = (x,y) => {
    if(y===0){
        throw new Error('Não é possível dividir por zero')
    }else{
        return x/y
    }
    x/y}

module.exports= {somar, operacoes, dividir}

