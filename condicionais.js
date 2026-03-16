const idade = 21
//
//if(idade >= 18) {
//    console.log("É maior de idade.")
//} else {
//    console.log("É menor de idade.")
//}

idade >= 18 ? console.log('maior de idade') : console.log('menor de idade')
//operador ternário

//if(idade < 18) {
//    console.log("É menor de idade", idade)
//}

//Entre 9 e 10, excelente
//Entre 7 e 8, bom
//Entre 4 e 6, médio
//Entre 0 e 3, ruim

const notaDoAluno = 6

if( notaDoAluno >= 9) {
    console.log('Nota Excelente')
} else if( notaDoAluno >= 7) {
    console.log('Nota Boa')
} else if( notaDoAluno >= 4) {
    console.log('Nota Médiana')
} else {
    console.log('Nota Ruim')
}


