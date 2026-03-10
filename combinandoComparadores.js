const idade = 18

const maiorDeIdade = idade >= 18

const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH // AND - E(&&)

console.log('Pode dirigir?', podeDirigir)

const podeViajarSozinha = maiorDeIdade || possuiCNH // OR - OU(||)

console.log('Pode viajar sozinha?', podeViajarSozinha)

const precisaDeAcompanhante = !maiorDeIdade // NOT - NÃO(!)

console.log('Precisa de acompanhante?', precisaDeAcompanhante)
