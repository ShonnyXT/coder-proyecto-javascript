alert('Bienvenido al simulador para crear historias clinicas')

// objeto
class Person {
    // Caracteristicas de historias clinicas
    constructor(name, dni, fecha) {
        this.name = name
        this.dni = dni
        this.fecha = fecha
    }

    // Metodos
    /* saludar() {
        console.log(`Hola, soy ${this.name}`)
    } */
}

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
pacientes.forEach(element => console.log(`Nomnre y Apellido: ${element.name}, DNI: ${element.dni}, Fecha de Nacimiento: ${element.fecha}`));


// buscador de historias clinicas
if (confirm('¿Desea buscar en el historial?')) {
    let buscar = prompt('Introdusca algun dato')
    if (pacientes == buscar){
        console.log(element)
    } else(alert('No existe'))
} else(alert('Gracias'))
