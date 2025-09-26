import { launchParaBankSite } from "../pages/RegistrationPage";
import {
  login,
  assertWelcomeHeading,
  assertAccountsOverviewHeading,
  assertErrorMsg,
} from "../pages/LoginPage";

describe("Login Function", () => {
  beforeEach(() => {
    launchParaBankSite();
  });
  it("Login Success", () => {
    cy.fixture("registration").then((data) => {
      login(data.username, data.password);
      assertAccountsOverviewHeading();
    });
  });

  it("Login Failure", () => {
    cy.fixture("registration").then((data) => {
      login(data.username, "sample");
      assertErrorMsg();
    });
  });
});
