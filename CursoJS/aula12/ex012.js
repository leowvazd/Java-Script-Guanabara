// var hora = 16

// hora atual:
var agora = new Date()
var hora = Math.floor(agora.getHours())

console.log(`Agora são exatamente ${hora} horas!\n`)

if (hora >= 0 && hora < 6) {
    console.log('Boa Madrugada! :)\n')
} else if (hora >= 6 && hora < 12) {
    console.log('Bom dia! :)\n')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde! :)\n')
} else {
    console.log('Boa Noite! :)\n')
}