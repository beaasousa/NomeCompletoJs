let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");

let nomeCOmpleto = nome + sobrenome;
alert(`Seu nome completo é: ${nome + " " + sobrenome} \nSeu nome de catálogo é: ${sobrenome.toUpperCase()} ${nome}`);