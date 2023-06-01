import calculadorCambio  from "./calculadorCambio";
import { calculadorMonedasMinimas } from "./calculadorMonedas";

describe("Calculador de cantidad minima de monedas para cambio", () => {
  it("No se espera recibir ninguna moneda de cambio", () => {
    expect(calculadorMonedasMinimas(calculadorCambio(2,2))).toEqual("[]");
  });
});
