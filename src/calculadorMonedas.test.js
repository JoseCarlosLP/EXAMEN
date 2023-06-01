import calculadorCambio  from "./calculadorCambio";
import { calculadorMonedasMinimas } from "./calculadorMonedas";

describe("Calculador de cantidad minima de monedas para cambio", () => {
  it("No se espera recibir ninguna moneda de cambio", () => {
    expect(calculadorMonedasMinimas(calculadorCambio(2,2))).toEqual("[]");
  });
  it("Se espera recibir una unica moneda de cambio en centavos", () => {
    expect(calculadorMonedasMinimas(calculadorCambio(2,2.2))).toEqual("[0.2]");
    expect(calculadorMonedasMinimas(calculadorCambio(2,2.5))).toEqual("[0.5]");
  });
  it("Se espera recibir una unica moneda de cambio en enteros", () => {
    expect(calculadorMonedasMinimas(calculadorCambio(2,3))).toEqual("[1]");
  });
  it("Se espera recibir mas de dos monedas de cambio", () => {
    expect(calculadorMonedasMinimas(calculadorCambio(2,8))).toEqual("[5,1]");
    expect(calculadorMonedasMinimas(calculadorCambio(1,20))).toEqual("[5,5,5,2,2]");
    expect(calculadorMonedasMinimas(calculadorCambio(0.5,20))).toEqual("[5,5,5,2,2,0.5]");
  });
});
