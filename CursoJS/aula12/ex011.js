var idade = 67

console.log(`Você tem ${idade} anos!\n`)

if (idade < 16) {
    console.log('Não vota!\n')
} else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opcional!\n')
} else {
    console.log('Voto obrigatório!\n')
}