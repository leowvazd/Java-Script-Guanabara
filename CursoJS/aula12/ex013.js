var agora = new Date()
var diaSem = agora.getDay()

/*
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sabado = 6
*/

console.log(diaSem +'\n')

switch(diaSem) {
    case 0:
        console.log('Domingo! \n')
        break;
    
    case 1:
        console.log('Segunda! \n')
        break;

    case 2:
        console.log('Terça! \n')
        break;
    
    case 3:
        console.log('Quarta! \n')
        break;

    case 4:
        console.log('Quinta! \n')
        break;

    case 5:
        console.log('Sexta! \n')
        break;

    case 6:
        console.log('Sabado! \n')
        break;

    default:
        console.log('[ERRO] Dia inválido! \n')
        break;
}
