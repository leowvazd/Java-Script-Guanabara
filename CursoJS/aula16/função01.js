function parimpar (n) {
    if (n % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let resultado = parimpar(220)

console.log(`Resultado: ${resultado}`)