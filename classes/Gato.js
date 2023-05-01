const Animal = require('./Animal');

class Gato extends Animal {
    maullar(nombre) {
      console.log(`El gato ${nombre} está maullando`);
    }
  }

module.exports = Gato;