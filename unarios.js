var partes1 = ["cabeça", "orelha", "tronco"];

partes1.map((parte, index, ar) => {
  console.log(index + " - " + parte);
});

console.log(delete partes1[6]); //Pelos os meis teste, retorna 'true' sempre

partes1.map((parte, index, ar) => {
  console.log(index + " - " + parte);
});

console.log(typeof partes1);
console.log(typeof partes1[1]);
