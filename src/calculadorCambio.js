function calculadorCambio(montoVenta, efectivo) {
  let cambio = efectivo-montoVenta;
  let cambioRedondeado=cambio.toFixed(1);
  let cadenaCambio=cambioRedondeado.toString();
  if(cadenaCambio[cadenaCambio.length-1]==0) return cambio.toFixed(0);
  else return cambioRedondeado;

}

export default calculadorCambio;
