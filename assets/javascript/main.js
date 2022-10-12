
// crear varios objetos con prompt

/* var nombre = prompt("Indique su nombre");
var edad = prompt("Indique su edad");

function Usuario (nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
};

var nuevoUsuario = new Usuario(nombre, edad);

console.log(nuevoUsuario.nombre);
console.log(nuevoUsuario.edad);

var nombre2 = prompt("Indique su nombre");
var edad2 = prompt("Indique su edad");

var nuevoUsuario2 = new Usuario(nombre2, edad2);

console.log(nuevoUsuario2);

//*VARIAS PROMPT EN UNA VARIABLE

var usuario = {
      nombre: prompt ("Indique su nombre"),
      edad: prompt ("Indique su edad")
}

console.log() */






// objeto
class Person {
    // Caracteristicas de historias clinicas
    constructor(name, dni, fecha) {
        this.name = name
        this.dni = dni
        this.fecha = fecha
    }

    // Metodos
    saludar() {
        console.log(`Hola, soy ${this.name}`)
    }
}

Person.saluda()

let pacientes = []

// ingresando datos para crear objetos
do {
    let name = prompt('Ingrese nombre y apellido: ');
    let dni = prompt('Ingrese Dni: ');
    let fecha = prompt('Ingrese fecha de nacimiento: ');
    let person = new Person (name, dni, fecha);
    pacientes.push(person);
} while ( confirm ('¿Desea crear otra?'))

// listado de historias clinicas
pacientes.forEach(element => console.log(`Nomnre y Apellido: ${element.name} DNI: ${element.dni} Fecha de Nacimiento: ${element.fecha}`));



// buscador de historias clinicas
