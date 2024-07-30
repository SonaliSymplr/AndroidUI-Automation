import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { AndroidManager } from "../../../page-objects/mobile-app/AndroidManager";
import { faker } from "@faker-js/faker";

let androidManager: AndroidManager = new AndroidManager(mobileApp);
let m_groupName: string;

Given(/^navigate to Contacts by clicking on HamburgerMenu$/i, async () => {
  await androidManager.Navigation.NavigateToContacts();
});

When(
  /^select the contact "([^"]*)" from the search result$/,
  async (userName: string) => {
    await androidManager.Messages.SelectUser(userName);
  }
);

When(/^click on message icon$/, async () => {
  await androidManager.Contacts.TapMessageIcon();
});

When(
  /^select the partial contact "([^"]*)" from the search result$/,
  async (partialName: string) => {
    await androidManager.Messages.SelectUserByPartialName(partialName);
  }
);

When(/^edit the group by click on edit button$/, async () => {
  await androidManager.Contacts.TapEditGroupIcon();
  m_groupName = await androidManager.Contacts.GetGroupName();
});

Then(/^enter new name "([^"]*)" and save it$/, async (partialName: string) => {
  partialName = partialName + faker.person.firstName();
  await androidManager.Contacts.EnterGroupName(partialName);
  await androidManager.Contacts.TapSaveBtn();
});

Then(
  /^verify the renamed group is not displayed in the contact list$/,
  async () => {
    await androidManager.Navigation.NavigateToContacts();
    await androidManager.Patients.TapSearchIcon();
    await androidManager.Patients.SearchUser(m_groupName);
    await androidManager.Pause();
    const resultDisplayed =
      await androidManager.Contacts.AreSearchResultsDisplayed();
    expect(resultDisplayed).to.be.true;
  }
);

When(/^click on add New Icon$/, async () => {
  await androidManager.Contacts.TapNewIcon();
});

When(
  "create a new {string} with the following group members:",
  async (groupName: string, dataTable: any) => {
    groupName = groupName + faker.person.firstName();
    await androidManager.Contacts.SelectCreateGroupMenuOption();
    await androidManager.Contacts.EnterGroupName(groupName);
    await androidManager.HideKeyboard();
    // Extracting the group members from the data table
    const groupMembers: string[] = dataTable.rawTable;
    for (const member of groupMembers) {
      while (true) {
        if (await androidManager.Contacts.AddGroupMember(member)) {
          break;
        }
        await androidManager.ScrollDown();
      }
    }

    await androidManager.Contacts.TapSaveBtn();
  }
);

Then(/^compose a message for the group and sent it$/, async () => {
  await androidManager.Contacts.TapMessageIcon();
});

Then(/^navigate back$/i, async () => {
  await androidManager.Contacts.NavigateBack();
});

Then(
  /^verify the "([^"]*)" present in the list$/,
  async (groupName: string) => {
    async (groupName: string) => {
      let resultGroupName = await androidManager.Contacts.GetResultGroupName();
      expect(groupName === resultGroupName).to.be.true;
    };
  }
);

When(
  /^create a group "([^"]*)" with the following group members:$/,
  async (groupName: string, dataTable: any) => {
    await androidManager.Contacts.SelectCreateGroupMenuOption();
    await androidManager.Contacts.EnterGroupName(groupName);
    await androidManager.HideKeyboard();
    const groupMembers: string[] = dataTable.rawTable;
    for (const member of groupMembers) {
      while (true) {
        if (await androidManager.Contacts.AddGroupMember(member)) {
          break;
        }
        await androidManager.ScrollDown();
      }
    }

    await androidManager.Contacts.TapSaveBtn();
  }
);

Then(/^For Next Run : delete "([^"]*)"$/, async (groupName: string) => {
  await androidManager.Contacts.longPress(200, 300);
  await androidManager.Contacts.DeleteGroup();
});
