function calculadorCambio(montoVenta, efectivo) {
  let cambio = efectivo-montoVenta;
  return cambio.toFixed(1);
}

export default calculadorCambio;
