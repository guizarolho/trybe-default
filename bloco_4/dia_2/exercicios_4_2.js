let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

let indexOfPortfolio = menu.indexOf("Portfólio");
console.log(indexOfPortfolio);

menu.push("Contato")

console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nomes of names) {
    console.log(nomes);
}

//Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Exercício 2
let soma = 0
for (let i = 0; i < numbers.length; i++) {
    soma = soma += numbers[i];
}

//Exercício 3
let mediaAritmetica = soma / numbers.length

console.log(soma);
console.log(mediaAritmetica);

//Exercício 4
if (mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20");
}

//Exercício 5
let maiorNumero = [0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorNumero[0]) {
        maiorNumero[0] = numbers[i];
    } else {
        //ignorar e prosseguir
    }
} 
console.log(maiorNumero[0]);

//Exercício 6
let quantidadeImpares = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0){
        quantidadeImpares++;
    }
}

if (quantidadeImpares != 0) {
    console.log(quantidadeImpares);
} else {
    console.log("nenhum valor ímpar encontrado");
}

//Exercício 7

let menorNumero = [maiorNumero[0]]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menorNumero[0]) {
        menorNumero[0] = numbers[i];
    }
}
console.log(menorNumero[0]);

//Exercício 8
let array = [1]
for (let i = 2; i <= 25; i++) {
    array.push(i);
}
console.log(array);

//Exercício 9
let arrayMetade = []
for (let i = 1; i <= array.length; i++) {
    arrayMetade.push(i/2);
}
console.log(arrayMetade);

//Bônus
//Tarefa 1
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
function compararNumeros(a, b) {
    return a - b;
}
console.log(numbers.sort(compararNumeros));

//Tarefa 2
function compararDecrescente(a, b) {
    return b - a;
}
console.log(numbers.sort(compararDecrescente));

//Tarefa 3
let numbersMultiplos = []
for (let i = 0 ; i < numbers.length; i++) {
    if (i !== (numbers.length - 1)) {
        numbersMultiplos.push(numbers[i]*numbers[i+1]);
    } else {
        numbersMultiplos.push(numbers[i]*2);
    }
}
console.log(numbersMultiplos);
