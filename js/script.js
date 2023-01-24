let cotizacionD = 0
let cotizacionP = 0

let entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra Dolares U$S \n 6 - Simular Venta Dolares U$S\n 7 - Simular Compra Euros €\n 8 - Simular Venta Euros €\n 9 - Simular Compra Uruguayos $U \n10 - Simular Venta Uruguayos $U\n11 - Simular Compra Reales R$\n12 - Simular Venta Reales R$");
while (entrada != 'ESC') {
    class Monedas {
        constructor(id, nombre, compra, venta) {
            this.id  = parseInt(id);
            this.nombre  = nombre.toUpperCase();
            this.compra  = parseFloat(compra);
            this.venta  = parseFloat(venta);
        }
    }
    //Declaramos un array de Monedas para almacenar
    const moneda = [];
    moneda.push(new Monedas(1, "Dolar", 179.31, 187.99));
    moneda.push(new Monedas(2, "Euros", 191.71, 200.45));
    moneda.push(new Monedas(3, "Uruguayos", 4.210, 4.410));
    moneda.push(new Monedas(4, "Reales", 33.600, 34.800));

// for (const money of moneda) {
//     //console.log(money.nombre),console.log("Precio de Compra "+money.compra), console.log("Precio de Venta "+money.venta);
//     alert(money.nombre+" Compra "+money.compra+" / Venta "+money.venta)
// }

    switch (entrada) {
        case "1":
            alert("Cotizacion "+moneda[entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta) 
            break;
        case "2":
            alert("Cotizacion "+moneda[entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta) 
            break;
        case "3":
            alert("Cotizacion "+moneda[entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta)
            break;
        case "4":
            alert("Cotizacion "+moneda[entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta)
            break;
        case "5": //DOLAR: Compra 179.31 / Venta 187.99
            cotizacionD = 179.31
            monto=prompt("Cuantos Pesos va cambiar a U$S ")
            if(monto > 0){
            alert("Compra U$S "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "6":
            cotizacionP = 187.99
            monto=prompt("Cuantos U$S desea Vender")
            if(monto > 0){
            alert("Recibe $"+cotizarP(monto)+" al Vender U$S "+monto);
            }
            break;
        case "7": //EUROS: Compra 191.71 / Venta 200.45
            cotizacionD = 191.71
            monto=prompt("Cuantos Pesos va cambiar a € ")
            if(monto > 0){
            alert("Compra € "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "8":
            cotizacionP = 200.45
            monto=prompt("Cuantos € desea Vender")
            if(monto > 0){
                alert("Recibe $"+cotizarP(monto)+" al Vender € "+monto);
            }
            break;
        case "9": //URUGUAYOS: Compra 4.210 / Venta 4.410
            cotizacionD = 4.210
            monto=prompt("Cuantos Pesos va cambiar a $U ")
            if(monto > 0){
                alert("Compra $U "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "10":
            cotizacionP = 4.410
            monto=prompt("Cuantos $U desea Vender")
            if(monto > 0){
                alert("Recibe $"+cotizarP(monto)+" al Vender $U "+monto);
                }
            break;   
        case "11": //REALES: Compra 33.600 / Venta 34.800
            cotizacionD = 33.600
            monto=prompt("Cuantos Pesos va cambiar a R$ ")
            if(monto > 0){
                alert("Compra R$ "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "12":
            cotizacionP = 34.800
            monto=prompt("Cuantos R$ desea Vender")
            if(monto > 0){
                alert("Recibe $"+cotizarP(monto)+" al Vender R$ "+monto);
                }
            break;
        default:
            alert("Ingrese un Codigo valido o ESC para Salir");
            break;
    }
    entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra Dolares U$S \n 6 - Simular Venta Dolares U$S\n 7 - Simular Compra Euros €\n 8 - Simular Venta Euros €\n 9 - Simular Compra Uruguayos $U \n10 - Simular Venta Uruguayos $U\n11 - Simular Compra Reales R$\n12 - Simular Venta Reales R$");
}

function cotizarD(monto) {
    return monto/=cotizacionD
}
function cotizarP(monto) {
    return monto*=cotizacionP
}
function percepcion(monto){
    return monto*=0.35    
}
function impPais(monto){
    return monto*=0.30
}


// function asignarOperacion(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     } else if (op == "restar") {
//         return (a, b) => a - b
//     }
// }

// let suma = asignarOperacion("sumar")
// let resta = asignarOperacion("restar")

// console.log( suma(4, 6) )  //  10
// console.log( resta(5, 3) )  //  2    