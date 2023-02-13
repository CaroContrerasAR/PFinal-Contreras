let cotizacionD = 0
let cotizacionP = 0
let compro = 0
let percep = asignarOperacion("percepcion")
let imp = asignarOperacion("imppais")

class Monedas {
  constructor(id, nombre, signo, compra, venta) {
    this.id  = parseInt(id);
    this.nombre  = nombre.toUpperCase();
    this.signo = signo.toUpperCase();
    this.compra  = parseFloat(compra);
    this.venta  = parseFloat(venta);
  }
}

//Declaramos un array de Monedas para almacenar
const moneda = [];
moneda.push(new Monedas(1, "Dolar", "u$s" , 179.31, 187.99));
moneda.push(new Monedas(2, "Euros", "€" , 191.71, 200.45));
moneda.push(new Monedas(3, "Uruguayos", "$u" , 4.210, 4.410));
moneda.push(new Monedas(4, "Reales", "r$" , 33.600, 34.800));

// Declaro variables para DOM
let formulario = document.getElementsByName("form")
let cantidad = document.getElementById("formCantidad")
let divisa1 = document.getElementById("formDivisas1")
let boton = document.getElementById("formBtn")
let divisa2 = document.getElementById("formDivisas2")

//Defino los Eventos de Boton
boton.addEventListener('click', respuestaClick)

// Con esto capturo el div del html donde se van a mostrar la convesion de divisas  (puede ser por el ID, class, name)
let contenedor = document.getElementById("contenedor");

// Acá llamo a la función que esta mas abajo
//mostrar(moneda);

// functions
function respuestaClick(){
  temp=divisa1.value
  divisa1.value=divisa2.value
  divisa2.value=temp
}
function validar(){
  if(cantidad.value > 0){
    respuestaClick()
    mostrar ()
  }else{contenedor.innerHTML ="la cantidad debe ser mayor que cero"}
}

function mostrar(moneda) {
  contenedor.innerHTML = "";
  for (const money of moneda) {
    let contenedorBody = document.createElement("div");
    //contenedorBody.className = "col-lg-6";
    compro = money.compra;
    contenedorBody.innerHTML = `
    <div class="conversion">
      <div class="conversion-from">
        <p class="conversion-from-text">"Compra "+cotizarD(monto)+" "+money.nombre+"con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $ "+percep(monto)+"\n 30% de Impuesto Pais son $"+imp(monto)"
        </p>
        <!--Compra cotizarD(monto) money.nombre con $monto\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $percep(monto)\n 30% de Impuesto Pais son $ {imp(monto)}-->
      </div>
    </div>
    <div class="conversion-to">
      <p class="precio"><strong> - ${cotizo(divisa1.value,divisa2.value).toFixed(2)}</strong></p>  
    </div>`;         
    contenedor.append(contenedorBody);
  }
}

// // PreEntrega Anterior
// let entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra de Monedas Extranjeras\n 6 - Simular Venta de Monedas Extranjeras\n 7 - Conoce el Signo de las Monedas Extranjeras");

// while (entrada != 'ESC') {
//     
//     switch (entrada) {
//         case "1":
//             alert("Cotizacion "+moneda[entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta) 
//             break;
//         case "2":
//             alert("Cotizacion "+moneda[entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta) 
//             break;
//         case "3":
//             alert("Cotizacion "+moneda[entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta)
//             break;
//         case "4":
//             alert("Cotizacion "+moneda[entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta)
//             break;
//         case "5":
//             monto=prompt("Cuantos Pesos va cambiar a Moneda Extranjera ")
//             if(monto > 0){
//                 for (const money of moneda) {
//                     compro = money.compra;
//                     alert("Compra "+cotizarD(monto)+" "+money.nombre+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percep(monto)+"\n 30% de Impuesto Pais son $"+imp(monto));
//                 }
//             }
//             break;
//         case "6":
//             monto=prompt("Cuanto en Moneda Extranjera desea cambiar a Pesos")
//             if(monto > 0){
//                 for (const money of moneda) {
//                     compro = money.venta;
//                     alert("Recibe $"+cotizarP(monto)+" al Vender "+monto+" "+money.nombre);
//                 }
//             }
//             break;
//         case "7":
//             buscar=prompt("Queres saber como es el signo para cada Moneda Extranjera\n (Dolar, Euros, Uruguayos, Reales)\n Ingresa la Moneda")
//             if (buscar != 'ESC'){
//                 const resultado = moneda.find((moneda) => moneda.nombre === buscar.toUpperCase())
//                 alert(`El Signo para ${resultado.nombre} es ${resultado.signo}.`)
//             }
//             break;    
//         default:
//             alert("Ingrese un Codigo valido o ESC para Salir");
//             break;
//     }
//     entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra de Monedas Extranjeras\n 6 - Simular Venta de Monedas Extranjeras\n 7 - Conoce el Signo de las Monedas Extranjeras");
// }

function cotizarD(monto) {
     return monto/=compro
}
function cotizarP(monto) {
    return monto*=compro
}
function asignarOperacion(op) {
    if (op == "percepcion") {
        return (monto) => monto*=0.35
    } else if (op == "imppais") {
        return (monto) => monto*=0.30
    }
}