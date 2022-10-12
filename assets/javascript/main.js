alert('Bienvenido al simulador para crear historias clinicas')

// objeto
class Person {
    // Caracteristicas de historias clinicas
    constructor(name,lastN, dni, fecha) {
        this.name = name
        this.lastN = lastN
        this.dni = dni
        this.fecha = fecha
    }

    // Metodos, proximamente porque aun no me da la cabeza para que usarlo
    /* saludar() {
        console.log(``)
    } */
}

// arrays con listado de historias clinicas
let pacientes = []

// ingresando datos para crear objetos
do {
    let name = prompt('Ingrese Nombre: ');
    //                                         cambios
    let lastN = prompt('Ingrese Apellido: ')
    let dni = prompt('Ingrese Dni: ');
    let fecha = prompt('Ingrese Fecha de Nacimiento: ');
    let person = new Person (name, lastN, dni, fecha);
    pacientes.push(person);
} while ( confirm ('¿Desea crear otra?'))

// listado de historias clinicas
pacientes.forEach(element => console.log(`Nomnre: ${element.name}, Apellido: ${element.lastN}, DNI: ${element.dni}, Fecha de Nacimiento: ${element.fecha}`));


// buscador de historias clinicas
if (confirm('¿Desea usar el buscador de historial clínico?')) {

    // repasando listado
    pacientes.forEach( (element, index) => {

        // introducir el dato
        let buscar = prompt('Introdusca algun dato correspondiente')

        // obteniendo resultados en if
        if ( element.name == buscar || element.lastN == buscar || element.dni == buscar || element.fecha == buscar ) {
            console.log (element)
        } else (alert('Resultado no existe'))

        // obtendiendo resultado en switch
        /* switch (buscar) {
            case element.name:
                console.log(element);
                break;
            case element.lastN:
                console.log(element);
                break;
            case element.dni:
                console.log(element);
                break;
            case element.fecha:
                console.log(element);
                break;
            default:
                console.log('Resultado no existente')
        } */
    })
} else(alert('Gracias'))
