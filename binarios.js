var partes1 = ["cabeça", "orelha", "tronco"];

console.log(0 in partes1); // true
console.log(2 in partes1); // true
console.log(3 in partes1); // false

console.log("cabeça" in partes1); // false - pois deve se especificar o indice, não o valor naquele indice

console.log("length" in partes1); // true - pois length é uma propriedade de ARRAY

console.log("PI" in Math); // true

var parte1 = new String("cabeça");

console.log("length" in parte1); // true

//instanceOf

var dia = new Date(2018, 12, 20);

console.log(dia instanceof Date); // true
console.log(parte1 instanceof Number); // false
