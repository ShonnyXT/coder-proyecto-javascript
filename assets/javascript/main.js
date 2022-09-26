/* confirm ('¿Eres mayor de edad?')

let edad1 = 18;
let edad2 = parseInt ( prompt ('Ingrese su edad') )

if (edad2 >= edad1) {
    alert ('Bienvenidos a Perritos Cachondos Online')
    
}
else {
    alert ('Usted aún es un cachorro')
} */

/* let robar = 1
let quedarse = 2

let jugada = parseInt (prompt ('Ingrese 1 para Robar o 2 para quedarse', '1'))

// dealer barajador
function random (min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

console.log (random ( 17 , 22 )) */
/* const random2 = ( min , max) => {
    return Math.floor((Math.random() * (max-min)) +min);
}


console.log (random2 ( 17 , 22 )) */


/* if( jugada = 1 || 2 ) {
    if (jugada = 1) {
        const random = ( min , max) => {
            return Math.floor((Math.random() * (max-min)) +min);
        }
        resultado = random ( 1 , 11 )
        console.log (resultado)
    }
}else {
    alert ('Introduce el valor correcto')
} */

let num = parseInt(prompt('Ingrese el monto del prestamo','100000'));
let cuotas = parseInt(prompt('Ingrese cantidad de cuotas','12'))
let mensaje;

// calculadora de prestamos
const verificar = (numero) => {
    num = numero
    if ( !isNaN(num) ) {
        if (num >= 10000 && num <= 100000) {
            /* intereses */
            if (cuotas <= 12) {
                mensaje = alert (Math.floor((num * (1.5)) / cuotas))
            }else{
                if (cuotas >= 13 && cuotas <= 24 ) {
                    mensaje = alert (Math.floor((num * 2) / cuotas))
                }else{
                    if (cuotas >= 25 && cuotas <= 36) {
                        mensaje = alert (Math.floor((num * 3) / cuotas))
                    }else{
                        alert ('Solo se financia hasta 36 cuotas')
                        verificar (num)
                    }
                }
            }
            // Switch de cuotas //
            /* switch (cuotas) {
                case (12 , 11):
                    mensaje = alert (Math.floor((num * 2) / cuotas))
                break;
                case (10 , 9):
                    mensaje = alert (Math.floor((num * 2) / cuotas))
                break;
                case (8 , 7):
                    mensaje = alert (Math.floor((num * 2) / cuotas))
                break;
                case (6 , 5):
                    mensaje = alert (Math.floor((num * (1.5)) / cuotas))
                break;
                case (4 , 3):
                    mensaje = alert (Math.floor((num * (1.5)) / cuotas))
                break;
                case (2 , 1):
                    mensaje = alert (Math.floor((num * (1.5)) / cuotas))
                break;
                default: alert ('Solo se financia hasta 12 cuotas')
                    break;
            } */
        }else{
            if (num < 10000) {
                mensaje = alert ('El prestamo esta fuera de rango')
                num = parseInt(prompt('Ingrese un monto entre 10.000 y 100.000','100000'))
                cuotas = parseInt(prompt('Ingrese cantidad de cuotas','12'))
            }else{
                while (num > 100000) {
                    mensaje = alert ('El prestamo esta fuera de rango')
                    num = parseInt(prompt('Ingrese un monto entre 10.000 y 100.000','100000'))
                    cuotas = parseInt(prompt('Ingrese cantidad de cuotas','12'))
                }
                verificar (num)
            }
            verificar (num)
        }
    }else{
        mensaje = alert ('Debes ingresar solo numeros')
        num = parseInt(prompt('Ingrese el monto de prestamo','100000'))
        cuotas = parseInt(prompt('Ingrese cantidad de cuotas','12'))
        verificar (num)
    }
}
verificar (num)