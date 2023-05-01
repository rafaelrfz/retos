const Perro = require('./classes/Perro');
const Gato = require('./classes/Gato');

const miPerro = new Perro("Pekis", 14);
const miGato = new Gato("Tommy", 7);

miPerro.comer(miPerro.nombre);
miPerro.ladrar(miPerro.nombre);

miGato.comer(miGato.nombre);
miGato.maullar(miGato.nombre);