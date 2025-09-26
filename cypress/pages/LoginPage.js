// LOCATORS

const username = '//input[@name="username"]';
const password = '//input[@name="password"]';
const loginBtn = '//input[@type="submit"]';
const accountsOverviewHeading = '//h1[contains(text(), "Accounts Overview")]';
const errorMsg =
  '//p[contains(text(), "The username and password could not be verified.")]';
export function login(uname, pass) {
  cy.xpath(username).type(uname);
  cy.xpath(password).type(pass);
  cy.xpath(loginBtn).click();
}
export function assertAccountsOverviewHeading(uname) {
  cy.xpath(accountsOverviewHeading).should("be.visible");
}

export function assertErrorMsg() {
  cy.xpath(errorMsg).should("be.visible");
}
