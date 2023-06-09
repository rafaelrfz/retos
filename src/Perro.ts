import Animal from'./Animal';

class Perro extends Animal {
    ladrar(nombre:string) {
      console.log(`El perro ${nombre} está ladrando.`);
    }
}

export default Perro;