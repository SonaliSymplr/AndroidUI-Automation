import { Then, When } from "@wdio/cucumber-framework";
import { AndroidManager } from "../../../page-objects/mobile-app/AndroidManager";
import { expect } from "chai";

let androidManager: AndroidManager = new AndroidManager(mobileApp);

When(/^navigate to Role by clicking on HamburgerMenu$/i, async () => {
  await androidManager.Navigation.NavigateToRolesTeams();
});

Then(
  /^Verify "([^"]*)", "([^"]*)" and "([^"]*)"  tabs$/i,
  async (roleTab: string, criticalTab: string, myRole: string) => {
    const expectedTabExistence = true;
    const actualtRoleTabExistence = await androidManager.Roles.IsTabPresent(
      roleTab
    );
    expect(actualtRoleTabExistence === expectedTabExistence).to.be.true;
    const actualCriticalTabExistence = await androidManager.Roles.IsTabPresent(
      criticalTab
    );
    expect(actualCriticalTabExistence === expectedTabExistence).to.be.true;
    const actualMyRoleTabExistence = await androidManager.Roles.IsTabPresent(
      myRole
    );
    expect(actualMyRoleTabExistence === expectedTabExistence).to.be.true;
  }
);

Then(/^Click on "([^"]*)" tabs$/i, async (myRole: string) => {
  await androidManager.Roles.ClickOnMyRoleTab(myRole);
});

Then(/^Click on toggle for Role$/i, async () => {
  await androidManager.Roles.ClickOnToggle();
});
