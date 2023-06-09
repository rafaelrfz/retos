class Animal {
  nombre;
  edad;

    constructor(nombre:string,edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    comer(nombre:string, edad:number) {
      console.log(`El animal ${nombre} está comiendo y tiene ${edad} años.`);
    }
  }

export default Animal;