// LOCATORS

const registerBtnLink = '//a[contains(text(), "Register")]';
const firstName = '//input[@name="customer.firstName"]';
const lastName = '//input[@name="customer.lastName"]';
const address = '//input[@name="customer.address.street"]';
const city = '//input[@name="customer.address.city"]';
const state = '//input[@name="customer.address.state"]';
const zipCode = '//input[@name="customer.address.zipCode"]';
const phoneNum = '//input[@name="customer.phoneNumber"]';
const ssn = '//input[@name="customer.ssn"]';
const username = '//input[@name="customer.username"]';
const password = '//input[@name="customer.password"]';
const confirmPass = '//input[@name="repeatedPassword"]';
const registerBtn = '//input[@class="button" and @value="Register"]';

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
  cy.xpath(registerBtnLink).click();
  cy.xpath(firstName).type(fName);
  cy.xpath(lastName).type(lName);
  cy.xpath(address).type(add);
  cy.xpath(city).type(cit);
  cy.xpath(state).type(sta);
  cy.xpath(zipCode).type(zip);
  cy.xpath(phoneNum).type(phone);
  cy.xpath(ssn).type(ss);
  cy.xpath(username).type(uName);
  cy.xpath(password).type(pass);
  cy.xpath(confirmPass).type(cPass);
  // cy.xpath(registerBtn).click();
}
