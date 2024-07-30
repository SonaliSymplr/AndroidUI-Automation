import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { AndroidManager } from "../../../page-objects/mobile-app/AndroidManager";

let androidManager: AndroidManager = new AndroidManager(mobileApp);

Given(/^navigate to Patients by clicking on HamburgerMenu$/, async () => {
  await androidManager.Navigation.NavigateToPatients();
});

Then(/^click on search icon$/, async () => {
  await androidManager.Patients.TapSearchIcon();
});

When(/^select the "([^"]*)" to attach to the message$/, async (user: string) => {
  await androidManager.Patients.SelectUser(user);
});

When(/^search for "([^"]*)" in search field$/, async (user: string) => {
  await androidManager.Patients.SearchUser(user);
  await androidManager.Pause();
});

When(
  /^select "([^"]*)" to add to My List from right side menu$/,
  async (user: string) => {
    await androidManager.Patients.AddUserToList(user);
  }
);

Then(/^message toast as patient added to your list$/, async () => {
  const visible = await androidManager.Toast.IsToastVisible();
  expect(visible, `'Patient added to your list' toast is invisble`).to.be.true;
});

Then(/^perform action Mark for Follow Up from right side menu$/, async () => {
  await androidManager.Patients.PatientDetailRightMenu.OpenMenu();
  await androidManager.Patients.PatientDetailRightMenu.MarkForFollowUp();
});

Then(/^perform action Attach Patient from right side menu$/, async () => {
  await androidManager.Patients.PatientDetailRightMenu.OpenMenu();
  await androidManager.Patients.PatientDetailRightMenu.AttachPatient();
});

Then(/^verify the active status of the patient$/, async () => {
  expect(
    await androidManager.Toast.IsToastVisible(),
    "Patient added to your list toast is invisble"
  ).to.be.true;
});

Then(/^clean up : remove patient "([^"]*)"$/, async (user: string) => {
  await androidManager.Navigation.NavigateToPatients();
  await androidManager.Patients.TapSearchIcon();
  await androidManager.Patients.SearchUser(user);
  await androidManager.Pause();
  if (await androidManager.Patients.RemoveUserToList(user)) {
    await androidManager.Patients.RemovePatientConfirmDialog.TapYes();
  }
  await androidManager.Pause();
  mobileApp.launchApp();
});

Then(/^perform action Remove from My List from right side menu$/, async () => {
  await androidManager.Patients.PatientDetailRightMenu.OpenMenu();
  await androidManager.Patients.PatientDetailRightMenu.RemoveFromMyList();
  expect(
    await androidManager.Toast.IsToastVisible(),
    "Remove From My List toast is invisble"
  ).to.be.true;
});

Then(
  /^check "([^"]*)" is added into your list$/,
  async (patientName: string) => {
    await androidManager.Patients.IsPatientadded(patientName);
  }
);

Then(/^click back button$/, async () => {
  await androidManager.Pause();
  await androidManager.Patients.NavigateBack();
});

Then(/^navigate back to patient$/, async () => {
  await androidManager.Login.goBack();
  await androidManager.Contacts.NavigateBack();
});