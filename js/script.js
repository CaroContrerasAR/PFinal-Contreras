const moneda = [{
  id: "1",
  nombre: "PESOS",
  signo: "AR$",
  compra: 1,
  venta: 1
},
  {
  id: "2",
  nombre: "DOLAR",
  signo: "U$S",
  compra: 179.31,
  venta: 187.99
},
{
  id: "3",
  nombre: "EUROS",
  signo: "€",
  compra: 191.71,
  venta: 200.45
},
{
  id: "4",
  nombre: "URUGUAYOS",
  signo: "$U",
  compra: 4.210,
  venta: 4.410
},
{
  id: "5",
  nombre: "REALES",
  signo: "R$",
  compra: 33.600,
  venta: 34.800
},
]

let cotiza = 0
let cotizacionD = 0
let cotizacionP = 0
let compro = 0
let percep = asignarOperacion("percepcion")
let imp = asignarOperacion("imppais")

let formulario = document.getElementsByName("form")
let cantidad = document.getElementById("formCantidad")
let divisa1 = document.getElementById("formDivisas1")
let boton = document.getElementById("formBtn")
let divisa2 = document.getElementById("formDivisas2")


boton.addEventListener('click', respuestaClick)

let contenedor = document.getElementById("contenedor");
contenedor.innerHTML="----------------Aqui va la Cotizacion :)"
//console.log(contenedor)
mostrar(moneda);

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
  cantidad.onchange = () =>{contenedor.innerHTML = `<p>${cantidad.value} ${divisa1.value} - cotizar(cantidad.value) ${divisa2.value} </p>`}
  // contenedor.innerHTML = `<p>${cantidad.value}</p>
  // <p> ID: ${moneda.id}</p> <h3>  Cotiza: ${moneda.nombre}</h3>
  // <b> $ ${moneda.precio}</b>`;


  // contenedor.innerHTML = "";
  // for (const money of moneda) {
  //   let contenedorBody = document.createElement("div");
  //   contenedorBody.className = "col-lg-6";
  //   compro = money.compra;
  //   contenedorBody.innerHTML = `
  //   <div class="conversion">
  //     <div class="conversion-from">
  //       <p class="conversion-from-text">"Compra "+cotizarD(divisa2.value)+" "+money.nombre+"con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $ "+percep(monto)+"\n 30% de Impuesto Pais son $"+imp(monto)"
  //       </p>
  //       <!--Compra cotizarD(monto) money.nombre con $monto\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $percep(monto)\n 30% de Impuesto Pais son $ {imp(monto)}-->
  //     </div>
  //   </div>
  //   <div class="conversion-to">
  //     <p class="precio"><strong> - ${cotizarP(divisa1.value).toFixed(4)}</strong></p>  
  //   </div>`;         
  //   contenedor.append(contenedorBody);
  // }
}

// // PreEntrega Anterior
// let entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra de Monedas Extranjeras\n 6 - Simular Venta de Monedas Extranjeras\n 7 - Conoce el Signo de las Monedas Extranjeras");

// while (entrada != 'ESC') {
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
function cotizar(monto) {
  const resultado1 = moneda.find((moneda) => (moneda.nombre == divisa1.value.toUpperCase()))
  const resultado2 = moneda.find((moneda) => (moneda.nombre == divisa2.value.toUpperCase()))
  monto=cantidad*resultado.compra
  return(`El Signo para ${resultado.nombre} es ${resultado.signo}.`)
  "Compra "+cotizarD(monto)+" "+resultado.nombre+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percep(monto)+"\n 30% de Impuesto Pais son $"+imp(monto)
  //             }
    return monto*=compro
}
function asignarOperacion(op) {
    if (op == "percepcion") {
        return (monto) => monto*=0.35
    } else if (op == "imppais") {
        return (monto) => monto*=0.30
    }
}