// LOCATORS

export function login(uname, pass) {
  cy.xpath('//input[@name="username"]').type(uname);
  cy.xpath('//input[@name="password"]').type(pass);
  cy.xpath('//input[@type="submit"]').click();
}
export function assertAccountsOverviewHeading(uname) {
  cy.xpath('//h1[contains(text(), "Accounts Overview")]').should("be.visible");
}

export function assertErrorMsg() {
  cy.xpath(
    '//p[contains(text(), "The username and password could not be verified.")]'
  ).should("be.visible");
}
