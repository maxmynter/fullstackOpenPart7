describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    /*
    cy.request("POST", "http://localhost:3003/api/testing/user", {
      username: "Max",
      name: "Max",
      password: "123",
    }).then((response) => {
      localStorage.setItem("loggedBlogAppUser", JSON.stringify(response.body));
      cy.visit("http://localhost:3000");
    });*/
    cy.visit("http://localhost:3000");
  });

  it("Login form is shown as default", function () {
    cy.contains("Username");
    cy.contains("Password");
    cy.contains("Login");
  });
});
