let cotiza = 0
let cotizarD1 = 0
let cotizarD2 = 0
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

//campos ingresados
boton.addEventListener('click', respuestaClick)

for (const money of moneda) {
  if (money.nombre===divisa1.value){
  exc.innerHTML= `<p>${money.signo} ${cantidad.value} = `
  }
}  
for (const money of moneda) {
  if (money.nombre===divisa2.value){
  exc.innerHTML+= `<p><strong>${money.signo} cotizar(cantidad.value)</strong></p>`;
  }
}


mostrar();

// ** FUNCIONES **
function respuestaClick(){
  temp=divisa1.value
  divisa1.value=divisa2.value
  divisa2.value=temp
  for (const money of moneda) {
    if (money.nombre===divisa1.value){
      exc.innerHTML= `<p>${money.signo} ${cantidad.value} = `
    }
  }    
  for (const money2 of moneda) {
      if (money2.nombre===divisa2.value){
        let resultado=cotizar(cantidad.value)
        exc.innerHTML+= `<p><strong>${money.signo} cotizar(cantidad.value)</strong></p>`;
    }
  }
}

function mostrar() {
  cantidad.onchange = () =>{ 
    for (const money of moneda) {
      if (money.nombre===divisa1.value){
      exc.innerHTML= `<p>${money.signo} ${cantidad.value} = `
      }
    }  
    for (const money of moneda) {
      if (money.nombre===divisa2.value){
      exc.innerHTML+= `<p><strong>${money.signo} cotizar(cantidad.value)</strong></p>`;
      }
    }
  }
  divisa1.onchange = () =>{
    for (const money of moneda) {
      if (money.nombre===divisa1.value){
      exc.innerHTML= `<p>${money.signo} ${cantidad.value} = `
      }
    }  
    for (const money of moneda) {
      if (money.nombre===divisa2.value){
      exc.innerHTML+= `<p><strong>${money.signo} cotizar(cantidad.value)</strong></p>`;
      }
    }
  }
  divisa2.onchange = () =>{
    for (const money of moneda) {
      if (money.nombre===divisa1.value){
      exc.innerHTML= `<p>${money.signo} ${cantidad.value} = `
      }
    }  
    for (const money of moneda) {
      if (money.nombre===divisa2.value){
      exc.innerHTML+= `<p><strong>${money.signo} cotizar(cantidad.value)</strong></p>`;
      }
    }
  }
}  



// function cotizarD(monto) {
//      return monto/=compro
// }

function cotizar(cantidad) {
  for (const money1 of moneda) {
    if (money1.nombre===divisa1.value){
    cotizarD1=money1
    }
    for (const money2 of moneda) {
      if (money2.nombre===divisa2.value){
        cotizarD2=money2
      }
      return cantidad.value*(cotizarD1.compra/cotizarD2.compra)
      console.log("pasooooo")
      //return cantidad.value*cotizacion
    }
  
  }  
  
  // for (const money of moneda) {
  //   compro = money.compra;
  //   alert("Compra "+cotizarD1(cantidad.value)+" "+money.nombre+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percep(cantidad.value)+"\n 30% de Impuesto Pais son $"+imp(cantidad.value));
  // }

  
  // const resultado =cantidad*(moneda.find((moneda) => (moneda.nombre == divisa1.value.toUpperCase()))/moneda.find((moneda) => (moneda.nombre == divisa2.value.toUpperCase())))
  // monto=cantidad*resultado.compra
  // return(`El Signo para ${resultado.nombre} es ${resultado.signo}.`)
  // "Compra "+cotizarD(monto)+" "+resultado.nombre+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percep(monto)+"\n 30% de Impuesto Pais son $"+imp(monto)
  // //             }
  //   return monto*=compro
}

function asignarOperacion(op) {
    if (op == "percepcion") {
        return (monto) => monto*=0.35
    } else if (op == "imppais") {
        return (monto) => monto*=0.30
    }
}