const blink = () => {
  console.log("Acesso! ");
};

setInterval(blink, 1000);

setTimeout(() => {
  console.log("Apagado");
}, 5000);
