alert('Bienvenido al simulador para crear historias clinicas')

// objeto
class Person {
    // Caracteristicas de historias clinicas
    constructor(name, secondName, lastName, dni, fecha, obraSocial, numeroHistoria) {
        this.name = name
        this.secondName = secondName
        this.lastName = lastName
        this.dni = dni
        this.fecha = fecha
        this.obraSocial = obraSocial
        this.numeroHistoria = numeroHistoria
    }

    // Metodos, proximamente porque aun no me da la cabeza para que usarlo
    /* saludar() {
        console.log(``)
    } */
}

// arrays con listado de historias clinicas
let pacientes = []


/* let cargarDatos = document.getElementById('cargarDatos')
cargarDatos.onclick = (event) =>{
    let name = document.getElementById('nombre').value;
    let secondName = document.getElementById('segundoNombre').value
    let lastName = document.getElementById('apellido').value
    let dni = document.getElementById('dni').value
    let fecha = document.getElementById('fecha').value;
    let obraSocial = document.getElementById('obraSocial').value
    let numeroHistoria = pacientes.length+1
    let person = new Person (name, secondName, lastName, dni, fecha, obraSocial, numeroHistoria);
                pacientes.push(person);
} */

// ingresando datos para crear objetos
do {
    let name = prompt('Ingrese nombre');
    let secondName = prompt('Ingrese segundo nombre')
    let lastName = prompt('Ingrese Apellido: ')
    let dni = prompt('Ingrese Dni: ');
    let fecha = prompt('Ingrese Fecha de Nacimiento: ');
    let obraSocial = prompt('Ingrese Obra Social')
    let numeroHistoria = pacientes.length+1
    let person = new Person (name, secondName, lastName, dni, fecha, obraSocial, numeroHistoria);
    pacientes.push(person);
} while ( confirm ('¿Desea crear historia?') )

// listado de historias clinicas
pacientes.forEach(element => console.log(`Nombre: ${element.name}, Segundo Nombre: ${element.secondName}, Apellido: ${element.lastName}, DNI: ${element.dni}, Fecha de Nacimiento: ${element.fecha}, Obra Social: ${element.obraSocial}, Historia Clinica Nº: ${element.numeroHistoria}`));


// buscador de historias clinicas
if (confirm('¿Desea usar el buscador de historial clínico?')) {

    // repasando listado
    pacientes.forEach( (element, index) => {

        // introducir el dato
        let buscar = prompt('Introdusca algun dato correspondiente')

        // obteniendo resultados en if
        /* if ( element.name == buscar || element.lastN == buscar || element.dni == buscar || element.fecha == buscar ) {
            console.log (element)
        } else (alert('Resultado no existe')) */

        // obtendiendo resultado en switch
        switch (buscar) {
            case element.name:
                console.log(element);
                break;
            case element.secondName:
                console.log(element);
                break;
            case element.lastName:
                console.log(element);
                break;
            case element.dni:
                console.log(element);
                break;
            case element.fecha:
                console.log(element);
                break;
            case element.obraSocial:
                console.log(element);
                break;
            case element.numeroHistoria:
                console.log(element);
                break;
            default:
                console.log('Resultado no existente')
        }
    })
} else(alert('Gracias'))

// TABLA DE HISTORIAS CLINICAS EN PANTALLA
const createTable = ( clase, arr ) => {
    let insertTableDom = document.getElementById('dataInfoTable')
    // creacion de tabla
    let createTable = document.createElement('table')
    let createTableHead = document.createElement('thead')
    let createTableBody = document.createElement('tbody')
    // atributos de tabla
    createTable.setAttribute('class', `table pacientes mb-5 table-dark table-striped`)
    createTable.setAttribute('id', `tablaPacientes`)
    createTableHead.setAttribute('class', `pacientes`)
    createTableBody.setAttribute('class', `pacientes`)
    // insertando tabla
    insertTableDom.append(createTable)
    // creamos etiqueta p el listado
    let infoTable = document.createElement('p')
    /* infoTable.innerText = `Primer producto ${arr[0].name} | Ultimo ${arr[pacientes.length-1].name}` */
    let tabla1 = document.getElementById('tablaPacientes')
    tabla1.after(infoTable)
    // juntamos variables tabla y cuerpo
    let groupTable = [createTableHead, createTableBody]
    groupTable.forEach((element, index)=>{
        element.setAttribute('class', `pacientes-${index}`)
        tabla1.append(element)
    })
    // seleccionamos head y body
    let infoThead = document.querySelector(`.pacientes-0`)
    let infoTbody = document.querySelector(`.pacientes-1`)
    infoThead.innerHTML = `<tr>
    <th scope="col">Nombre</th>
    <th scope="col">Segundo Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">DNI</th>
    <th scope="col">Fecha</th>
    <th scope="col">Obra Social</th>
    <th scope="col">Numero de Historia</th>
    </tr>`

    arr.forEach((element, index) =>{
        infoTbody.innerHTML += `<tr>
        <td>${element.name}</td>
        <td>${element.secondName}</td>
        <td>${element.lastName}</td>
        <td>${element.dni}</td>
        <td>${element.fecha}</td>
        <td>${element.obraSocial}</td>
        <td>${element.numeroHistoria}</td>
    </tr>`
    })
}
createTable('pacientes', pacientes)

let errorNombre = document.getElementById('errorNombre')
let errorSegundoNombre = document.getElementById('errorSegundoNombre')
let errorApellido = document.getElementById('errorApellido')
let errorDni = document.getElementById('errorDni')
let errorFecha = document.getElementById('errorFecha')
let errorObraSocial = document.getElementById('errorObraSocial')
errorNombre.style.display = 'none'
errorSegundoNombre.style.display = 'none'
errorApellido.style.display = 'none'
errorDni.style.display = 'none'
errorFecha.style.display = 'none'
errorObraSocial.style.display = 'none'

// Funcion de Validar
const checkLetra = (val)=>{
    if(/[a-zA-Z]+$/.test(val) && val.length >= 1){
        return true
    }
    return false
}
const checkNumero = (val)=>{
    let number = parseInt(val)
    if(/^[0-9]/g.test(number) && typeof number==='number'){
        return true
    }
    return false
}
// Eventos de Inputs y Validacion
nombre.addEventListener('input', (event)=>{
    let validaNombre = checkLetra(event.target.value)
    if(validaNombre){
        errorNombre.style.display = 'none'
        errorNombre.innerHTML = ``
    }else{
        errorNombre.style.display = 'block'
        errorNombre.innerHTML = `Debe ingresar solo letras`
    }
})
segundoNombre.addEventListener('input', (event)=>{
    let validaSegundoNombre = checkLetra(event.target.value)
    if(validaSegundoNombre){
        errorSegundoNombre.style.display = 'none'
        errorSegundoNombre.innerHTML = ``
    }else{
        errorSegundoNombre.style.display = 'block'
        errorSegundoNombre.innerHTML = `Debe ingresar solo letras`
    }
})
apellido.addEventListener('input', (event)=>{
    let validaApellido = checkLetra(event.target.value)
    if(validaApellido){
        errorApellido.style.display = 'none'
        errorApellido.innerHTML = ``
    }else{
        errorApellido.style.display = 'block'
        errorApellido.innerHTML = `Debe ingresar solo letras`
    }
})
dni.addEventListener('input', (event)=>{
    let validaDni = checkNumero(event.target.value)
    if(validaDni){
        errorDni.style.display = 'none'
        errorDni.innerHTML = ``
    }else{
        errorDni.style.display = 'block'
        errorDni.innerHTML = `Debe ingresar solo numeros`
    }
})
fecha.addEventListener('input', (event)=>{
    let validaFecha = checkNumero(event.target.value)
    if(validaFecha){
        errorFecha.style.display = 'none'
        errorFecha.innerHTML = ``
    }else{
        errorFecha.style.display = 'block'
        errorFecha.innerHTML = `Debe ingresar solo numeros`
    }
})
obraSocial.addEventListener('input', (event)=>{
    let validaObraSocial = checkLetra(event.target.value)
    if(validaObraSocial){
        errorObraSocial.style.display = 'none'
        errorObraSocial.innerHTML = ``
    }else{
        errorObraSocial.style.display = 'block'
        errorObraSocial.innerHTML = `Debe ingresar solo numeros`
    }
})
//...

// Eventos de Formulario
if(typeof window === 'object'){
    // Inicio del DOMContentLoader
    window.addEventListener('DOMContentLoaded',()=>{
        let formulario = document.getElementById('formulario')
        formulario.addEventListener('submit', (event)=>{
            event.preventDefault()
            let nombre = document.getElementById('nombre').value
            let segundoNombre = document.getElementById('segundoNombre').value
            let apellido = document.getElementById('apellido').value
            let dni = document.getElementById('dni').value
            let fecha = document.getElementById('fecha').value
            let obraSocial = document.getElementById('obraSocial').value

            if (nombre && segundoNombre && apellido && dni && fecha && obraSocial || nombre && apellido && dni && fecha && obraSocial){
                alert('cargado')
            }else{
                alert('datos no ingresados')
            }
        })
        
    })
}
