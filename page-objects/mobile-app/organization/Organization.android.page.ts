import { NativeBasePage } from "../../base/nativeBase.page";
import { OrganizationAndroiControls } from "./Organization.Android.controls";

export class OrganizationScreen extends NativeBasePage {
  private organizationAndroiControls: OrganizationAndroiControls;
  private _driver: any;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.organizationAndroiControls = new OrganizationAndroiControls();
  }

  /**
   * click on the perticular Tab onorganization page
   *
   * @param menu is used as tab name
   */
  public async ClickOnTab(menu: string): Promise<void> {
    await super.clickElement(this.organizationAndroiControls.tab(menu));
  }

  /**
   * Get the  details of selected date
   */
  public async SelectedCalendarDetails(): Promise<string> {
    return await super.getElementText(
      this.organizationAndroiControls.todayDateCalendarDetails
    );
  }

  /**
   * Check the current date is selected or not
   */
  public async IsTodaySelectedInCalendar(): Promise<boolean> {
    let day = await super.getElementText(
      this.organizationAndroiControls.selectedDay
    );
    const today = new Date().getDate();
    return +day == today;
  }

  /**
   * check the details of  today's calender
   */
  public async IsItTodaysCalender(): Promise<boolean> {
    const dayName = await super.getElementText(
      this.organizationAndroiControls.selectedDayOfWeek
    );
    const monthDate = await super.getElementText(
      this.organizationAndroiControls.selectedDate
    );
    const timezone = await super.getElementText(
      this.organizationAndroiControls.timezone
    );

    const dateObj = new Date();
    const formattedToday = dateObj.toLocaleString("default", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    return (
      `${dayName}, ${monthDate}` == formattedToday &&
      timezone.includes("Eastern") &&
      timezone.includes("Time")
    );
  }

  /**
   * Go back to today on calender
   */
  public async ResetCalendar(): Promise<void> {
    await super.clickElement(this.organizationAndroiControls.resetCalender);
  }

  /**
   * Navigate to next month by clicking on next arrow
   */
  public async NavigateToNextMonth(): Promise<void> {
    await super.clickElement(this.organizationAndroiControls.nextMonth);
  }

  /**
   * Navigate to previous month by clicking on previous arrow
   */
  public async NavigateToPreviousMonth(): Promise<void> {
    await super.clickElement(this.organizationAndroiControls.previousMonth);
  }

  /**
   * Check the arrow or next month is enable or not
   */
  public async IsNextMonthEnabled(): Promise<boolean> {
    return await super.isEnabled(this.organizationAndroiControls.nextMonth);
  }

  /**
   * Check the arrow or previous month is enable or not
   */
  public async IsPreviousMonthEnabled(): Promise<boolean> {
    return await super.isEnabled(this.organizationAndroiControls.previousMonth);
  }

  /**
   * Navigate back to organization page
   */
  public async NavigateBackToOrganization(): Promise<void> {
    await super.clickElement(this.organizationAndroiControls.navigateBack);
  }

  /**
   * Click on particular schedule role
   */
  public async TapCalendarEntry(entryName: string): Promise<void> {
    await super.clickElement(
      this.organizationAndroiControls.calendarEntry(entryName)
    );
  }

  /**
   * check the schedule role is present or not
   */
  public async IsCalendarEntryPresent(entryName: string): Promise<boolean> {
    return await super.isDisplayed(
      this.organizationAndroiControls.calendarEntry(entryName)
    );
  }

  /**
   * Click on compose button from role detail page
   */
  public async TapComposeMessage(): Promise<void> {
    await super.clickElement(this.organizationAndroiControls.messageIcon);
  }

  /**
   * Check for tab is displyed correctly or not
   */
  public async IsTabDisplayed(tabName: string): Promise<boolean> {
    try {
      await super.isDisplayed(this.organizationAndroiControls.tabName(tabName));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Search sechdeule by click on serach icon and entering schedule name
   */
  public async SearchSchedule(scheduleName: string) {
    await super.clickElement(this.organizationAndroiControls.searchIcon);
    await super.enterText(
      this.organizationAndroiControls.searchPlate,
      scheduleName
    );
  }

  /**
   * Select schedule from search list
   */
  public async SelectSchedule(scheduleName: string) {
    await super.clickElement(
      this.organizationAndroiControls.schedule(scheduleName)
    );
  }
  /**
   * Select today date
   */
  public async SelectTodayDate() {
    await super.getElementText(this.organizationAndroiControls.selectedDay);
  }
  /**
   * Select schedule from schedule list after clicking date on Calender
   */
  public async SelectScheduleForDay(scheduleName: string) {
    await super.clickElement(
      this.organizationAndroiControls.scheduleForDay(scheduleName)
    );
  }
  /**
   *Get the schedule role detail
   */
  public async ScheduleInScheduleDetails(): Promise<string> {
    return super.getElementText(
      this.organizationAndroiControls.scheduleInScheduDetails
    );
  }

  /**
   * Enter the lastname in community user serach
   */
  public async LastName(lastName: string) {
    await super.enterText(this.organizationAndroiControls.lastName, lastName);
  }

  /**
   * Enter the firstname in community user serach
   */
  public async FirstName(firstName: string) {
    await super.enterText(this.organizationAndroiControls.firstName, firstName);
  }

  /**
   *Click on serach for user
   */
  public async ClickOnFind() {
    await super.clickElement(this.organizationAndroiControls.find);
  }

  /**
   * Select the contact
   */
  public async SelectUser() {
    await super.clickElement(this.organizationAndroiControls.selectUser);
  }

  /**
   * Add the contact into the list
   */
  public async Adduser() {
    await super.clickElement(this.organizationAndroiControls.adduser);
  }
}
