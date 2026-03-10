const idadeVinny = "37"
const idadeMinha = 36

//Operador de Igualdade
//const saoIguais = idadeVinny == idadeMinha
const saoIguais = idadeVinny != idadeMinha

//Maior que
//const saoIguais = idadeVinny > idadeMinha

//Menor que
//const saoIguais = idadeVinny < idadeMinha

console.log('São Diferentes?', saoIguais)

const idade = 21
const idadeIrmao = 18

const souMaiordeIdade = idade >= 18
const irmaoMaiordeIdade = idadeIrmao >= 18

console.log('Sou maior de idade?', souMaiordeIdade)
console.log('Meu irmão é maior de idade?', irmaoMaiordeIdade)

//comparação escrita

const comparacaoEstrita = idadeMinha !== idadeVinny //Não da conversão (===)

console.log('São estritamente iguais?', comparacaoEstrita)
