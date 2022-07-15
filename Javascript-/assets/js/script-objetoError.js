function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parametros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo OBJECT");

        if (typeof num !== 'number') throw new TypeError("Numero precisa ser do tipo numero");
        if (arr.length !== num) throw new RangeError("Tamanho invalido!");
        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("este erro é um reference error!")
            console.log(e.message)
        }
        else if (e instanceof TypeError) {
            console.log("este erro é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("este erro é um RangeError!")
            console.log(e.message)
        } else {
            console.log("Ocorreu um tipo de erro nao esperado" + e)
        }
    }
}

console.log(validaArray());