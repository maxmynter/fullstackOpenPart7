describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    cy.addUser({ username: "Max", name: "Max", password: "123" });
  });

  it("Cannot log in with wrong credentials", function () {
    cy.get("#usernameInput").type("Max");
    cy.get("#passwordInput").type("212");
    cy.contains("Login").click();
    cy.contains("Wrong credentials");
    cy.contains("Login");
  });

  it("Shows wrong login message in red", function () {
    cy.get("#usernameInput").type("Max");
    cy.get("#passwordInput").type("212");
    cy.contains("Login").click();
    cy.get(".message").should("have.css", "color", "rgb(255, 0, 0)");
  });

  it("Can log in with correct credentials", function () {
    cy.get("#usernameInput").type("Max");
    cy.get("#passwordInput").type("123");
    cy.contains("Login").click();
    cy.contains("Max is logged in");
    cy.contains("Logout");
  });
});
