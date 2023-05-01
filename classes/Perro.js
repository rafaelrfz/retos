const Animal = require('./Animal');

class Perro extends Animal {
    ladrar(nombre) {
      console.log(`El perro ${nombre} está ladrando`);
    }
}

module.exports = Perro;