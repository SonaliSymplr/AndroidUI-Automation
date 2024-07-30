import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { AndroidManager } from "../../../page-objects/mobile-app/AndroidManager";
import { forEach } from "lodash";

let androidManager: AndroidManager = new AndroidManager(mobileApp);

Given(/^navigate to Organization by clicking on HamburgerMenu$/i, async () => {
  await androidManager.Navigation.NavigateToOrganization();
});

When(/^click on "([^"]*)"$/i, async (menu: string) => {
  await androidManager.Organization.ClickOnTab(menu);
});

When(/^My schedule display the current day, date and time zone$/i, async () => {
  expect(await androidManager.Organization.IsTodaySelectedInCalendar()).to.be
    .true;
  expect(await androidManager.Organization.IsItTodaysCalender()).to.be.true;
});

Then(
  /^click Prev Month it will display the services for last month$/i,
  async () => {
    await androidManager.Organization.ResetCalendar();
    expect(await androidManager.Organization.IsPreviousMonthEnabled()).to.be
      .true;
    await androidManager.Organization.NavigateToPreviousMonth();
    expect(await androidManager.Organization.IsPreviousMonthEnabled()).to.be
      .false;
    await androidManager.Organization.ResetCalendar();
  }
);

Then(
  /^click Next Month it will display services for next "([^"]*)" month$/i,
  async (numOfMonth: number) => {
    await androidManager.Organization.ResetCalendar();
    for (let i = 0; i < numOfMonth; i++) {
      expect(await androidManager.Organization.IsNextMonthEnabled()).to.be.true;
      await androidManager.Organization.NavigateToNextMonth();
    }
    expect(await androidManager.Organization.IsNextMonthEnabled()).to.be.false;
    await androidManager.Organization.ResetCalendar();
  }
);

Then(
  /^able to see the schedule role "([^"]*)"$/i,
  async (calendarEntry: string) => {
    await androidManager.Pause();
    expect(
      await androidManager.Organization.IsCalendarEntryPresent(calendarEntry)
    ).to.be.true;
  }
);

When(/^click on schedule role "([^"]*)"$/i, async (calendarEntry: string) => {
  await androidManager.Organization.TapCalendarEntry(calendarEntry);
});

Then(/^compose a message for "([^"]*)"$/i, async (user: string) => {
  await androidManager.Organization.TapComposeMessage();
  const toUsers: string[] = await androidManager.Messages.GetToUsers();
  expect(toUsers).to.include(user);
});

Then(/^navigate back to organization$/i, async () => {
  await androidManager.Navigation.NavigateToOrganization();
});

Then(
  /^verify all the following tab displyed correctly$/i,
  async (dataTable: any) => {
    const subMenu: string[] = dataTable.rawTable;
    for (let i = 0; i < subMenu.length; i++) {
      expect(
        await androidManager.Organization.IsTabDisplayed(subMenu[i]),
        subMenu[i] + " is not visible"
      ).to.be.true;
    }
  }
);

Then(/^navigate back to previous page$/i, async () => {
  await androidManager.Organization.NavigateBackToOrganization();
});

Then(/^Search the schedule "([^"]*)"$/i, async (scheduleName: string) => {
  await androidManager.Organization.SearchSchedule(scheduleName);
  await androidManager.Organization.SelectSchedule(scheduleName);
});

Then(/^Click on current date$/i, async () => {
  await androidManager.Organization.SelectTodayDate();
});

Then(
  /^Verify the "([^"]*)" schedule details$/i,
  async (scheduleName: string) => {
    await androidManager.Organization.SelectScheduleForDay(scheduleName);
    const actualScheduleName =
      await androidManager.Organization.ScheduleInScheduleDetails();
    expect(actualScheduleName === scheduleName).to.be.true;
  }
);

Then(
  /^check the service user as "([^"]*)"$/i,
  async (calendarEntry: string) => {
    await androidManager.Pause();
    expect(
      await androidManager.Organization.IsCalendarEntryPresent(calendarEntry)
    ).to.be.true;
  }
);

Then(
  /^enter the last name "([^"]*)" and first name as "([^"]*)"$/i,
  async (lastName: string, firstName: string) => {
    await androidManager.Organization.LastName(lastName);
    await androidManager.Organization.FirstName(firstName);
    await androidManager.Organization.ClickOnFind();
  }
);

Then(/^add user into the contact list$/i, async () => {
  await androidManager.Organization.SelectUser();
  await androidManager.Organization.Adduser();
});
