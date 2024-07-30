import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { AndroidManager } from "../../../page-objects/mobile-app/AndroidManager";

let androidManager: AndroidManager = new AndroidManager(mobileApp);

Given(/^login as "([^"]*)" into Android Halo App$/i, async (user: string) => {
  await androidManager.Login.Login(user);
});

Then(/^message page will open$/i, async () => {
  expect(await androidManager.Messages.IsOnScreen()).to.be.true;
});

Then(/^put the app in Background$/i, async () => {
  androidManager.Navigation.PlaceHaloAppInBackground();
  await androidManager.Pause();
});

Then(/^put the app in Foreground$/i, async () => {
  await androidManager.Navigation.PlaceHaloAppInFocus();
});

Then(/^logout$/i, async () => {
  await androidManager.Navigation.Logout();
  await androidManager.Login.Logout();
  expect(await androidManager.Login.IsOnLoginScreen()).to.be.true;
});

Then(/^verify the user is logged in$/i, async () => {
  expect(await androidManager.Messages.IsOnScreen(), "User is not logged in").to
    .be.true;
});

Then(/^verify login error message prompt is displayed$/i, async () => {
  expect(await androidManager.Messages.IsOnScreen(), "User is logged in").to.be
    .false;
});
When(/^hit the logout button$/i, async () => {
  await androidManager.Settings.ClickOnLogout();
  await androidManager.Settings.ClickOK();
});

When(/^enter the username \"([^\"]*)\"$/i, async (user: string) => {
  await androidManager.Login.EnterUserName(user);
});

Then(/^click on continue button$/i, async () => {
  await androidManager.Login.ClickContinueBtn();
});

When(
  /^login to Microsoft authentication window for \"([^\"]*)\"$/i,
  async (user: string) => {
    await androidManager.MicrosoftLogin.MicrosoftLogin(user);
  }
);

Given(
  /^login as super admin "([^"]*)" into Android Halo App$/i,
  async (user: string) => {
    await androidManager.Login.Login(user);
  }
);

Then(/^check for the new features$/, async () => {
  if (await androidManager.Login.NewFeatureDialog.IsNotificationDisplayed()) {
    await androidManager.Login.NewFeatureDialog.AllowNotification();
  }
});
