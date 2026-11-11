//Simulador de modulo de pago 

function recargarCuotas(cantidadCuotas){
    let recargo
    if (cantidadCuotas >= 1 && cantidadCuotas <= 3) {
        recargo = 1.1
    } else if (cantidadCuotas >= 4 && cantidadCuotas <= 6) {
        recargo = 1.5
    } else {
        recargo = 2
    }
    return recargo
}

function calcularValorCuota(importe, cuotasRecargo, cuotas){
    let importeDeCuota = ((importe * cuotasRecargo) / cuotas)
    return importeDeCuota.toFixed(2)
}

function calcularPorcentaje(cuotasConRecargo){
    let valorPorcentaje = ((cuotasConRecargo - 1) * 100)
    return valorPorcentaje.toFixed(2)
}

function calculoPagoConTarjeta(empresa, importe){
    let cuotasRecargo
    let importeCuota
    let porcentaje
    let costoTotalFinanciado
    let mensaje
    let cuotasEmpresa
    let cuotasValido = false
    do {
        cuotasEmpresa = parseInt(prompt("Ingrese la cantidad de cuotas: de 1 a 12"))
        if (cuotasEmpresa >= 1 && cuotasEmpresa <= 12){
            cuotasValido = true
        } else {
            console.log("Ingrese una cantidad de cuotas validas, de 1 a 12")    
        }
    } while (cuotasValido == false)
    cuotasRecargo = recargarCuotas(cuotasEmpresa)
    importeCuota = calcularValorCuota (importe, cuotasRecargo, cuotasEmpresa)
    porcentaje = calcularPorcentaje(cuotasRecargo)
    costoTotalFinanciado = calcularCostoTotal (importe, cuotasRecargo)
    mensaje = "Por su compra de $ " + importe + " con " + empresa + ", abonara un recargo de " + porcentaje + " %: \n" + cuotasEmpresa + " cuotas de $ " + importeCuota +  "\nCosto total financiado: $ " + costoTotalFinanciado.toFixed(2)
    return mensaje 
}

const calcularCostoTotal = (importe, cuotasRecargo) => importe * cuotasRecargo

let pagar = true
while(pagar) {
    let importeValido = false
    let importe
    do {
        importe = parseFloat(prompt("Ingrese el importe de la compra"))
        if (importe > 0){
            importeValido = true
        } else {
            console.log("Ingrese un importe válido, mayor a 0")
        } 
    } while (importeValido == false)

    let menu = parseInt(prompt("Ingrese una opcion de pago: 1 VISA, 2 MASTERCARD, 3 AMERICAN EXPRESS, 4 MERCADOPAGO o 5 EFECTIVO"))
    
    switch(menu) {
        case 1:
            console.log(calculoPagoConTarjeta("Visa", importe))
            break
        case 2:
            console.log(calculoPagoConTarjeta("Mastercard", importe))
            break
        case 3:
            console.log(calculoPagoConTarjeta("American Express", importe))
            break
        case 4:
            let importeMP = importe * 0.85
            alert("Su pago con MercadoPago tiene un 15% de descuento, por su compra de $ " + importe + " abonara $ " + importeMP )
            break
        case 5:
            let importeEfectivo = importe * 0.75
            alert("Su pago con efectivo tiene un 25% de descuento, por su compra de $ " + importe + " abonara $ " + importeEfectivo )
            break
        default:
            alert("Opcion incorrecta")
    }

    let confirmacion = prompt("Desea hacer otro pago? (si/no)").toLowerCase()
    if(confirmacion == "no"){
        pagar = false
        alert("Gracias por su compra!")
    }

}