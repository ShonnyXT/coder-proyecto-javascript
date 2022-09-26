
let num = parseInt(prompt('Ingrese el monto del prestamo','100000'));
let cuotas = parseInt(prompt('Ingrese cantidad de cuotas','12'))
let mensaje;

const verificar = (numero) => {
    num = numero
    if ( !isNaN(num) ) {
        if (num >= 10000 && num <= 100000) {
            /* resultado final */
            mensaje = alert (Math.floor((num * 2) / cuotas))
        }else{
            while (10000 > num < 100000) {
                mensaje = alert ('El prestamo esta fuera de rango')
                num = parseInt(prompt('Ingrese un monto entre 10.000 y 100.000','10000'))
            }
        }
    }else{
        mensaje = alert ('Debes ingresar solo numeros')
        num = parseInt(prompt('Ingrese el monto de prestamo','100000'))
        verificar (num)
    }
}
verificar (num)