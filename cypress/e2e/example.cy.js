describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("computes adds and divides", () => {
    cy.contains(".button", 2).click();
    cy.contains(".button", 3).click();
    cy.contains(".operator", "+").click();
    cy.contains(".button", 1).click();
    cy.contains(".button", 9).click();
    cy.contains(".operator", "=").click();
    cy.contains(".display", 42);
    cy.log("**division**");
    cy.contains(".operator", "÷").click();
    cy.contains(".button", 2).click();
    cy.contains(".operator", "=").click();
    cy.contains(".display", 21);
  });
  it("multiplies, resets and subtracts", () => {
    cy.contains(".button", "7").click();
    cy.contains(".operator", "x").click();
    cy.contains(".button", "1").click();
    cy.contains(".operator", "=").click();
    cy.contains(".display", 7);
    cy.log("**reset**");
    cy.contains(".button", "C").click();
    cy.contains(".display", 0);
    cy.log("**subtracts**");
    cy.contains(".operator", "-").click();
    cy.contains(".button", "3").click();
    cy.contains(".operator", "=").click();
    cy.contains(".display", "-3");
  });
  it("changes sign", () => {
    cy.log("**to negative**");
    cy.contains(".button", "7").click();
    cy.contains(".button", "+/-").click();
    cy.contains(".display", "-7");
    cy.log("**to positive**");
    cy.contains(".button", "+/-").click();
    cy.contains(".display", "7");
  });
  it("% operator", () => {
    cy.contains(".button", "3").click();
    cy.contains(".display", "3");
    cy.contains(".button", "%").click();
    cy.contains(".display", "0.03");
  });
  it("decimal", () => {
    cy.contains(".button", "5").click();
    cy.contains(".button", ".").click();
    cy.contains(".display", "5.");
    cy.log("**does not add it twice**");
    cy.contains(".button", ".").click();
    cy.contains(".display", "5.");
  });
});
