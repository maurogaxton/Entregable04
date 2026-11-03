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

const calcularCostoTotal = (importe, cuotasRecargo) => importe * cuotasRecargo

let pagar = true
while(pagar) {
    
    let importe = parseFloat(prompt("Ingrese el importe de la compra"))
    let menu = parseInt(prompt("Ingrese una opcion de pago: 1 VISA, 2 MASTERCARD, 3 AMERICAN EXPRESS, 4 MERCADOPAGO o 5 EFECTIVO"))
    let cuotasRecargo
    let importeCuota
    let porcentaje
    let costoTotalFinanciado

    switch(menu) {
        case 1:
            let cuotasVisa = parseInt(prompt("Ingrese la cantidad de cuotas: de 1 a 12"))
            cuotasRecargo = recargarCuotas(cuotasVisa)
            importeCuota = calcularValorCuota (importe, cuotasRecargo, cuotasVisa)
            porcentaje = calcularPorcentaje(cuotasRecargo)
            costoTotalFinanciado = calcularCostoTotal (importe, cuotasRecargo)
            alert("Por su compra de $ " + importe + " con Visa, abonara un recargo de " + porcentaje + " %: \n" + cuotasVisa + " cuotas de $ " + importeCuota +  "\nCosto total financiado: $ " + costoTotalFinanciado.toFixed(2))
            break
        case 2:
            let cuotasMaster = parseInt(prompt("Ingrese la cantidad de cuotas: de 1 a 12"))
            cuotasRecargo = recargarCuotas(cuotasMaster)
            importeCuota = calcularValorCuota(importe, cuotasRecargo, cuotasMaster)
            porcentaje = calcularPorcentaje(cuotasRecargo)
            costoTotalFinanciado = calcularCostoTotal(importe, cuotasRecargo)
            alert("Por su compra de $ " + importe + " con Mastercard, abonara un recargo de " + porcentaje + " %: \n" + cuotasMaster + " cuotas de $ " + importeCuota +  "\nCosto total financiado: $ " + costoTotalFinanciado.toFixed(2))
            break
        case 3:
            let cuotasAmerican = parseInt(prompt("Ingrese la cantidad de cuotas: de 1 a 12"))
            cuotasRecargo = recargarCuotas(cuotasAmerican)
            importeCuota = calcularValorCuota(importe, cuotasRecargo, cuotasAmerican)
            porcentaje = calcularPorcentaje(cuotasRecargo)
            costoTotalFinanciado = calcularCostoTotal (importe, cuotasRecargo)
            alert("Por su compra de $ " + importe + " con American Express, abonara un recargo de " + porcentaje + " %: \n" + cuotasAmerican + " cuotas de $ " + importeCuota +  "\nCosto total financiado: $ " + costoTotalFinanciado.toFixed(2))
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