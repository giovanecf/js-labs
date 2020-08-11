function Dog(name, race) {
  this.name = name;
  this.race = race;

  this.escolherLatir = (latido) => {
    return latido;
  };
}

const d = new Dog("Melzinha", "Verdadeira Melzinha");

var latido = "Ruff Ruff";
console.log(d.escolherLatir);
console.log(latido);

//Brincadeira
// Digamos...

function Dog() {} // Uma função é um objeto em JS,
// então quer dizer que eu user a sintaxe de criação de função
// pra criar um obj. Não acredita?

// Dog.prototype.name = ""; Na verdade, vamos fazer de outra forma
Dog.prototype.setName = function (name) {
  this.name = name;
};

const m = new Dog();

m.setName("Melzinha");

console.log(m.name); // Advinha...
// Resultado:
// Melzinha

// Vamos dar deixar eles latirem

Dog.prototype.latir = function () {
  return "Au Au Au";
};

console.log(m.latir());
// Resultado:
// Au Au Au

// E o que estamos fazenod ali? Estamos modificando o modelo do
// objeto pelo seu prototype. E, mesmo que, já tenhamos instanciado
// mais de 1k Dogs, essas atualizações serão implementadas
// nos objetos já criados.
