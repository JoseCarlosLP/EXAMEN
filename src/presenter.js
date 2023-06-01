import calculadorCambio  from "./calculadorCambio";

const montoVenta = document.querySelector("#monto_venta");
const efectivo = document.querySelector("#efectivo");
const form = document.querySelector("#tienda-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(montoVenta.value=="" || efectivo.value=="") div.innerHTML="<h2>Ingrese ambos datos por favor!</h2>";
  else{
    const precio = Number.parseInt(montoVenta.value);
    const pagado = Number.parseInt(efectivo.value);
    div.innerHTML = "<p>El cambio a devolver es:<b>" + calculadorCambio(precio, pagado) + "</b></p>";
  }
});
