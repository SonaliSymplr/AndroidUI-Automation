import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { AndroidManager } from "../../../page-objects/mobile-app/AndroidManager";

let androidManager: AndroidManager = new AndroidManager(mobileApp);
let currentPassword: string;
let changedPassword: string;

When(/^navigate to Settings by clicking on HamburgerMenu$/i, async () => {
  await androidManager.Navigation.NavigateToSettings();
});

Given(/^click on security$/i, async () => {
  await androidManager.Settings.TapSecurity();
});

When(/^click on passcode$/i, async () => {
  await androidManager.Settings.TapPasscode();
});

When(/^click on Account$/i, async () => {
  await androidManager.Settings.TapAccount();
});

When(/^change the office address to "([^"]*)"$/i, async (address: string) => {
  await androidManager.Settings.ChangeOfficeAddress(address);
});

Given(
  /^verify the address is "([^"]*)" data setup$/i,
  async (address: string) => {
    const officeAddress: string =
      await androidManager.Settings.GetOfficeAddress();
    if (officeAddress !== address) {
      await androidManager.Settings.ChangeOfficeAddress(address);
    }
  }
);

Then(/^verify the address is "([^"]*)"$/i, async (address: string) => {
  const officeAddress: string =
    await androidManager.Settings.GetOfficeAddress();
  expect(
    officeAddress === address,
    `Office address is not setup correctly, expected '${address}' but got '${officeAddress}'`
  ).to.be.true;
});

Then(/^toggle on the passcode$/i, async () => {
  await androidManager.Settings.TapPasscodeRadioButton();
});

Then(/^enter the passcode$/i, async () => {
  for (let i = 0; i < 4; i++) {
    await androidManager.Settings.TapDigit(1);
  }
});

Then(/^set required passcode as "([^"]*)"$/i, async (timeout) => {
  await androidManager.Settings.TapRequiredPasscode();
  await androidManager.Settings.SelectTimeout(timeout);
});

Then(/^navigate to handoff by clicking on HamburgerMenu$/i, async () => {
  await androidManager.Navigation.NavigateToHandoff();
});

Given(
  /^login as ([^\"]*) and ([^\"]*) ([^\"]*)$/i,
  async (username: string, password: string, newPassword: string) => {
    currentPassword = password;
    changedPassword = newPassword;
    await androidManager.Login.LoginAs(username, currentPassword);
    if (!(await androidManager.Messages.IsOnScreen())) {
      currentPassword = newPassword;
      changedPassword = password;
      await mobileApp.launchApp();
      await androidManager.Login.LoginAs(username, currentPassword);
    }
  }
);

When(/^change the password as ([^\"]*)$/i, async (newPassword: string) => {
  await androidManager.Settings.ChangePassword(changedPassword);
  await androidManager.Settings.PasswordChangedDialog.TapOk();
});

Then(
  /^enter ([^\"]*) and ([^\"]*) login to the application$/i,
  async (username: string, password: string) => {
    mobileApp.launchApp();
    await androidManager.Login.LoginAs(username, currentPassword);
  }
);

Then(
  /^use ([^\"]*) and changed ([^\"]*) to login$/,
  async (username: string, password: string) => {
    mobileApp.launchApp();
    await androidManager.Login.LoginAs(username, changedPassword);
  }
);

Then(/^Click on "([^"]*)" option from menu$/i, async (option: string) => {
  await androidManager.Settings.ClickOnMenuOption(option);
});

Then(/^Click on Message Handling$/i, async () => {
  await androidManager.Settings.SelectMessageHandling();
});

Then(
  /^Select "([^"]*)" from Message Handling pop-up$/i,
  async (option: string) => {
    await androidManager.Settings.OptionFromMessageHandlingPopUp(option);
    await androidManager.Settings.ClickOnSave();
    await androidManager.Settings.ClickOnBackButton();
  }
);

Then(
  /^Select "([^"]*)" from Message Handling pop-up and add recipient as "([^"]*)"$/i,
  async (option: string, recipient: string) => {
    await androidManager.Settings.OptionFromMessageHandlingPopUp(option);
    await androidManager.Settings.SelectRecipient(recipient);
    await androidManager.Settings.ClickOnSave();
    await androidManager.Settings.ClickOnBackButton();
  }
);

Then(/^navigate to message by clicking on HamburgerMenu$/i, async () => {
  await androidManager.Navigation.NavigateToMessages();
});

Then(
  /^Verify "([^"]*)" message in displaying$/i,
  async (expectedMsg: string) => {
    const actualMsg = await androidManager.Settings.StatusMessage();
    expect(actualMsg === expectedMsg).to.be.true;
  }
);

Then(/^Verify "([^"]*)" status of user$/i, async (expectedStatus: string) => {
  const actualStatus = await androidManager.Settings.MessageHandlingStatus();
  expect(actualStatus === expectedStatus).to.be.true;
});

Then(/^Select the user "([^"]*)" from list$/i, async (user: string) => {
  await androidManager.Settings.SelectUserFromList(user);
});

Then(/^Click on toggle for user$/i, async () => {
  await androidManager.Settings.ClickOnGatekeeperToggle();
  await androidManager.Settings.ClickOnBackButton();
});

Then(
  /^Verify "([^"]*)" status is displaying for message$/i,
  async (expectedMsg: string) => {
    await androidManager.Messages.OpenMessageByIndex();
    const actualMsg =
      await androidManager.Settings.StatusMessageForGatekeeper();
    expect(actualMsg === expectedMsg).to.be.true;
  }
);

Then(/^For Next Run : delete user$/i, async () => {
  await androidManager.Messages.longPress(200, 700);
  await androidManager.Settings.ClickOnDeleteIcon();
  await androidManager.Settings.ClickOnDeleteBtn();
});

When(/^Check change passcode is disable$/i, async () => {
  expect(await androidManager.Settings.ChangePasscode()).to.be.false;
});

When(/^check passcode is toggle off$/i, async () => {
  expect(await androidManager.Settings.PassCodeButtonOffStatus()).to.be.true;
});

When(/^Check change passcode is enable$/i, async () => {
  expect(await androidManager.Settings.ChangePasscode()).to.be.true;
});

Then(/^change the environment$/, async () => {
  await androidManager.Settings.SwitchEnv();
});
