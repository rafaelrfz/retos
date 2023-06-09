import Animal = require('./Animal');

class Perro extends Animal {
    ladrar(nombre:string) {
      console.log(`El perro ${nombre} está ladrando.`);
    }
}

export = Perro;