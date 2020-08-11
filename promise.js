var idade = 17;

var minhaPromise = function () {
  return new Promise((resolve, reject) => {
    console.log("idade: " + idade);
    if (idade > 18) {
      resolve(idade);
    }

    reject(idade);
  }, idade);
};

minhaPromise()
  .then((response) => {
    console.log("then " + response);
  })
  .catch((error) => {
    console.warn("catch " + error);
  });
