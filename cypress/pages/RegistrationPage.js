// LOCATORS

// const firstName = "#customer.firstName";
// const lastName = "#customer.lastName";
// const address = "#customer.address.street";
// const city = "#customer.address.city";
// const state = "#customer.address.state";
// const zipCode = "#customer.address.zipCode";
// const phoneNum = "#customer.phoneNumber";
// const ssn = "#customer.ssn";
// const username = "#customer.username";
// const password = "#customer.password";
// const confirmPass = "#repeatedPassword";
// const registerBtn = 'input[value="Register"]';

export function launchParaBankSite() {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
}

export function registerUser(
  fName,
  lName,
  add,
  cit,
  sta,
  zip,
  phone,
  ss,
  uName,
  pass,
  cPass
) {
  cy.xpath('//a[contains(text(), "Register")]').click();
  cy.xpath('//input[@name="customer.firstName"]').type(fName);
  cy.xpath('//input[@name="customer.lastName"]').type(lName);
  cy.xpath('//input[@name="customer.address.street"]').type(add);
  cy.xpath('//input[@name="customer.address.city"]').type(cit);
  cy.xpath('//input[@name="customer.address.state"]').type(sta);
  cy.xpath('//input[@name="customer.address.zipCode"]').type(zip);
  cy.xpath('//input[@name="customer.phoneNumber"]').type(phone);
  cy.xpath('//input[@name="customer.ssn"]').type(ss);
  cy.xpath('//input[@name="customer.username"]').type(uName);
  cy.xpath('//input[@name="customer.password"]').type(pass);
  cy.xpath('//input[@name="repeatedPassword"]').type(cPass);
  // cy.xpath('//input[@class="button" and @value="Register"]').click();
}
