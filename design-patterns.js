// São jeitos de voce fazer uma mesma coisa. Construir uma classe
// e passa parametros, por exemplo
// Não entendeu nada? Tudo bem.
// Vamos pra um Desgin Pattern de Criação chamado Factory
// Pra um objeto ser chamado de Factory ela não pode precisar do
// "new" pra instanciação de um objeto.

function DogF() {
  return { name: "Melzinha" };
}

const d = DogF; // OK - Uma Factory

function DogNF() {
  this.name = "Melzinha";
}

const dNF = new DogNF(); // PEEM! - Não é uma Factory

// Tá, e o que tem de mais?
// O que tem demais/ vou te mostrar o que tem de mais!

function DogTemDeMais(propriedades) {
  return { name: "Vira-Lata", ...propriedades };
}

const dogTemDeMais = DogTemDeMais({
  name: "Melzinha",
  idade: 12,
  cor: "Beje",
  latido: "Au Au Au",
});

console.log(dogTemDeMais);
// Resultado:
// { name: 'Melzinha', idade: 12, cor: 'Beje', latido: 'Au Au Au' }

// Funciona porque por exemplo, isso:
// return { name: "Vira-Lata", ...propriedades };
// Fica assim:
// return { name: "Vira-Lata", idade: idade, cor: cor, latido: latido };
// Ou só
// return { name: "Vira-Lata", idade, cor, latido };

// SINGLETON
// A idade desse é usar sempre a mesma intancia do objeto. Se liga

function Dog() {
  if (!Dog.instance) {
    Dog.instance = this;
  }

  return Dog.instance;
}

const d1 = Dog.call({ name: "Melzinha" });
const d2 = Dog.call({ name: "Cat" });

console.log(d1);
console.log(d2);
// Resultado:
// { name: 'Melzinha' }
// { name: 'Melzinha' }

// DECORATOR
// Uma função DECORATOR recebe uma função como parametro e estende
// o seu comportamento. Vejamos
// Vou criar uma função DECORATOR fn() que só vai rodar a função soma()
// se uma variavel for true

let exect = false;

function fn(anyFn) {
  return !!exect && anyFn();
}

function soma(a, b) {
  return a + b;
}

console.log(fn(() => soma(2, 3)));
exect = true;
console.log(fn(() => soma(2, 3)));
// Resultado:
// false
// 5
