var partes1 = ["cabeça", "orelha", "tronco"];

//juntando com spread partes1 em outro array

var partes2 = ["patas", ...partes1, "rabos"];

partes2.map((parte, index, ar) => {
  console.log(index + " - " + parte);
});

// Resultado:
// 0 - patas
// 1 - cabeça
// 2 - orelha
// 3 - tronco
// 4 - rabos

const calculoTridimencional = (x, y, z) => {
  return x * y + z;
};

const vetorTridimencional = [0.5, 3.7, 4.3];

// Já que a funcção não tá pedindo um aray EXPLICITAMENTE, digo:
// ex: const calculoTridimencional = ([x, y, z]) =>
// mas pedindo IMPLICITAMENTE, digo, uma sequncia de valores de
// mesmo tipo, então podemos usar o spread como visto abaixo

console.log(calculoTridimencional(...vetorTridimencional));

// Resultado:
// 6.15
