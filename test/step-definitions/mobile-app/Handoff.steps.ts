import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { AndroidManager } from "../../../page-objects/mobile-app/AndroidManager";

let androidManager: AndroidManager = new AndroidManager(mobileApp);

Given(
  /^navigate to Handoff by clicking on HamburgerMenu from main dropdown menu$/,
  async () => {
    await androidManager.Navigation.NavigateToHandoff();
  }
);


When(/^select the patients "([^"]*)" for Hand Off from the list$/i,async (patientName:string) =>{
  await androidManager.Handoff.ChecktPatientCheckbox(patientName);
} );

When(/^click on Hand Off from header tab$/i, async () => {
  await androidManager.Handoff.ClickOnAction();
  await androidManager.Handoff.HandOff();
  await androidManager.Handoff.CheckForProvider("user , provider2, MD");
  await androidManager.Handoff.SendToProvider();
});

Then(/^the patients are handed off$/i, async () => {
  expect(
    await androidManager.Handoff.AreHandOff(1),
    `The first user has not been handed off`
  ).to.be.true;
});

When(/^click on Take Back from header tab$/i, async () => {
  await androidManager.Handoff.TakeBack();
  await androidManager.Handoff.ConfirmTakeBack();
});

Then(/^the patients are handed back$/i, async () => {
  expect(
    await androidManager.Handoff.AreHandOff(1),
    `There are still some users that have been handed off`
  ).to.be.false;
});

Then(/^select the patients "([^"]*)" for take back from the list$/, async (patientName:string) => {
  await androidManager.Handoff.ChecktPatientCheckbox(patientName);
  await androidManager.Handoff.ClickOnAction();
});
