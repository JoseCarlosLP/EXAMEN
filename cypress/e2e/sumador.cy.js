describe("Calculador de Cambios", () => {
  it("Muestra el cambio que deberia devoler el cajero de la tienda", () => {
    cy.visit("/");
    cy.get("#monto_venta").type(55);
    cy.get("#efectivo").type(100);
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "El cambio a devolver es:45");
  });

  it("Muestra un mensaje de error cuando no se ingresan los datos correctamente", () => {
    cy.visit("/");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "Ingrese ambos datos por favor!");
  });
});
