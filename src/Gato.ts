import Animal from './Animal';

class Gato extends Animal {
    maullar(nombre:string) {
      console.log(`El gato ${nombre} está maullando.`);
    }
  }

export default Gato;