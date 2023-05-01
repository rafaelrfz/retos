class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    comer(nombre) {
      console.log(`El animal ${nombre} está comiendo`);
    }
  }

module.exports = Animal;