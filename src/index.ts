import Perro from './Perro';
import Gato from './Gato';

const miPerro = new Perro("Pekis", 14);
const miGato = new Gato("Tommy", 7);

miPerro.comer(miPerro.nombre, miPerro.edad);
miPerro.ladrar(miPerro.nombre);

miGato.comer(miGato.nombre, miGato.edad);
miGato.maullar(miGato.nombre);