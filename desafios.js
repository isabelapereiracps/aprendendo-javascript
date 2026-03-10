//1
let nome = 'Isabela';

console.log ("Olá,"+nome+"! Seja bem-vinda ao curso da JavaScript!")

//2
let anoAtual = 2026;
let anoNascimento = 2005;
let idade = anoAtual - anoNascimento;

console.log("Você tem"+ idade + "anos.")

//3
let cidade = 'Campinas';
let estado = 'São Paulo';
let pais = 'Brasil';

console.log('Você está em ' + cidade + " - " +estado+ " - " +pais+ ".");

//4
let temCarteira = false;

console.log(typeof temCarteira);;

//5
let saldo = 0;
let deposito = 200;
let saque = 50;

console.log ('Seu saldo é de', saldo);
console.log ('Seu saldo atual é de', deposito - saque);

//6
let matematica = 6;
let portugues = 8;
let ciencias = 8;
let nota = (matematica + portugues + ciencias) / 3;

console.log('Sua nota média final é', nota);

//7
let salario = 3000;
let reajuste = salario * 1.10;

console.log('Seu salário era de', salario, 'e teve um aumento de 10%, assim agora seu salário é de', reajuste);

//8
let cliques = 0;

cliques++;
cliques++;
cliques++;

console.log("O botão foi clicado" +cliques+ "vezes.");

//9
const PI = 3.14;

console.log('O número de PI é uma constante e não pode ser alterada', PI);

//10
let nomeMeu = 'Isa';
let idadeMinha = 20;

console.log(typeof nomeMeu);
console.log(typeof idadeMinha);