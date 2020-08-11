function fn() {
  return "Code Here em function!";
}
const arrowFn = () => "Code Here!";
const arrowFn2 = () => {
  // Mais de um expressão
  return "Code Here2!";
};

const passParam = (param) => console.log(param);

fn.prop = "Alguma propriedade";
console.log(fn());
console.log(fn.prop);
