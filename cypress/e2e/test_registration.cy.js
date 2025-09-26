import { launchParaBankSite, registerUser } from "../pages/RegistrationPage";
describe("Registration Test", () => {
  beforeEach(() => {
    launchParaBankSite();
  });
  it("Registration Success", () => {
    cy.fixture("registration").then((data) => {
      registerUser(
        data.firstName,
        data.lastName,
        data.address,
        data.city,
        data.state,
        data.zipCode,
        data.phoneNum,
        data.ssn,
        data.username,
        data.password,
        data.password
      );
    });
  });
});
