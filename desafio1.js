const people = [
    {name: "Breno", idade: 22},
    {name: "Marcus", idade: 21},
    {name: "Bruna", idade: 24},
    {name: "Erick", idade: 23},
    {name: "Rafael", idade: 20},
    {name: "Rafaella", idade: 25}
]

let inicialLetter = "R";

var sameInicial = people.filter(person => person.name.substring(0,1) === inicialLetter);

var soma = 0;

const result = sameInicial.map(person => {
    soma += person.idade;
    return person.name;
});

let media = soma / sameInicial.length;

console.log(result);
console.log("média: ", media);