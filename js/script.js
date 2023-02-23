// let cotiza = 0
// let d1 = 0
// let d2 = 0
// let compro = 0
// let percep = asignarOperacion("percepcion")
// let imp = asignarOperacion("imppais")

class Monedas {
  constructor(id, nombre, signo, compra, venta) {
    this.id  = parseInt(id);
    this.nombre  = nombre;
    this.signo = signo;
    this.compra  = parseFloat(compra);
    this.venta  = parseFloat(venta);
  }
}

const moneda = [];
moneda.push(new Monedas(1, "Pesos", "ar$" , 1, 1));
moneda.push(new Monedas(2, "Dolar", "u$s" , 179.31, 187.99));
moneda.push(new Monedas(3, "Euros", "€" , 191.71, 200.45));
moneda.push(new Monedas(4, "Uruguayos", "$u" , 4.210, 4.410));
moneda.push(new Monedas(5, "Reales", "r$" , 33.600, 34.800));


let cantidad = document.getElementById("formCantidad")
let divisa1 = document.getElementById("formDivisas1")
let boton = document.getElementById("formBtn")
let divisa2 = document.getElementById("formDivisas2")
let exc = document.getElementById("exchange");
let exc1 = document.getElementById("exchange");
let exc2 = document.getElementById("exchange");

mostrarMonedas()

// ** FUNCIONES **

function mostrarMonedas(){
  moneda.forEach((moneda) => {
    const option = document.createElement("option")
    option.text = moneda.nombre
    option.value = moneda.compra
    const nameD1 = moneda.nombre
    divisa1.appendChild(option)
  })
  moneda.forEach((moneda)=>{
    const option = document.createElement("option")
    option.text = moneda.nombre
    option.value = moneda.compra
    const nameD2 = moneda.nombre
    divisa2.appendChild(option)
  })
}

cantidad.onchange = () =>{console.log("change cantidad");
   calcular(divisa1,divisa2)
}
divisa1.onchange = () =>{console.log("change div1");
  calcular(divisa1,divisa2)
  // if (divisa1.text == "Pesos"){exc.innerHTML = `<p> El Cambio es <strong>${(resultado).toFixed(4)}</strong>\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $ ${percep(cantidad.value)}\n 30% de Impuesto Pais son $ ${imp(cantidad.value)}</p>`}
}

divisa2.onchange = () =>{ console.log("change div2");
  calcular(divisa1,divisa2)
}

const calcular=(divisa1,divisa2)=>{
  console.log("calculo")
  let resultado = cantidad.value * (divisa1.value / divisa2.value)
  exc.innerHTML = `<p> El Cambio es <strong>${(resultado).toFixed(4)}</strong></p>`
}
  // if(divisa1.text!="Pesos"){
  // exc.innerHTML = `<p> El Cambio es <strong>${(resultado).toFixed(4)}</strong></p>`
  // }else{
  //   exc.innerHTML = `<p> El Cambio es <strong>${(resultado).toFixed(4)}</strong>\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $ ${percep(cantidad.value)}\n 30% de Impuesto Pais son $ ${imp(cantidad.value)}</p>`
  // }

boton.addEventListener('click',()=>respuestaClick())

function respuestaClick(){
  console.log("resp Click")
  temp=divisa1.value
  divisa1.value=divisa2.value
  divisa2.value=temp
  calcular(divisa1,divisa2)
  }

//   // for (const money of moneda) {
//   //   compro = money.compra;
//   //   alert("Compra "+cotizarD1(cantidad.value)+" "+money.nombre+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percep(cantidad.value)+"\n 30% de Impuesto Pais son $"+imp(cantidad.value));
//   // }

  
//   // const resultado =cantidad*(moneda.find((moneda) => (moneda.nombre == divisa1.value.toUpperCase()))/moneda.find((moneda) => (moneda.nombre == divisa2.value.toUpperCase())))
//   // monto=cantidad*resultado.compra
//   // return(`El Signo para ${resultado.nombre} es ${resultado.signo}.`)
//   // "Compra "+cotizarD(monto)+" "+resultado.nombre+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percep(monto)+"\n 30% de Impuesto Pais son $"+imp(monto)
//   // //             }
//   //   return monto*=compro
// }

function asignarOperacion(op) {
    if (op == "percepcion") {
        return (monto) => monto*=0.35
    } else if (op == "imppais") {
        return (monto) => monto*=0.30
    }
}