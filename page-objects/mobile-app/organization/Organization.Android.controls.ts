// <copyright file='Organization.android.controls.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BaseControls, locatorsPlaceHolder } from "../../base/base.controls";

export class OrganizationAndroiControls extends BaseControls {
  constructor() {
    super();
  }
  /**
   * Xpath locator for select a perticular tab
   * @param tabName to find the tab
   *
   */

  public tabName(tabName: string) {
    return super.getLocator(`//*[@text='${locatorsPlaceHolder}']`, tabName);
  }
  /**
   * Xpath locator for select a role
   * @param entryName to find the Role name
   *
   */
  public calendarEntry(entryName: string) {
    return super.getLocator(`//*[@text='${locatorsPlaceHolder}']`, entryName);
  }
  /**
   * Xpath locator to select My scheduel tab
   */
  public tab(tabName: string) {
    return `//*[@text='${tabName}']`;
  }
  /**
   * Xpath locator for perticular day
   */
  public get selectedDay() {
    return "//*[@resource-id='com.dochalo.dochalo:id/selected_today_background']/preceding-sibling::*[@resource-id='com.dochalo.dochalo:id/day_textview']";
  }

  /**
   * Xpath locator for timezone on schedule page
   */
  public get timezone() {
    return "//*[@resource-id='com.dochalo.dochalo:id/timezone_textview']";
  }

  /**
   * Xpath locator the day of the week,check selected date is current day.
   */
  public get selectedDayOfWeek() {
    return "//*[@resource-id='com.dochalo.dochalo:id/selected_day_of_week_textview']";
  }

  /**
   * Xpath locator the date,check selected date is current date.
   */
  public get selectedDate() {
    return "//*[@resource-id='com.dochalo.dochalo:id/selected_date_textview']";
  }

  /**
   * Xpath locator for calenderdetalis for current date
   */
  public get todayDateCalendarDetails() {
    return "//*[@resource-id='com.dochalo.dochalo:id/timezone_textview']";
  }

  /**
   * Xpath locator to select today
   */
  public get resetCalender() {
    return "~Jump to Today";
  }
  /**
   * Xpath locator to navigate to previous month arrow
   */
  public get previousMonth() {
    return "~Previous Month";
  }
  /**
   * Xpath locator to navigate to next month arrow
   */
  public get nextMonth() {
    return "~Next Month";
  }
  /**
   * Xpath locator to navigate back tab
   */
  public get navigateBack() {
    return "~Navigate up";
  }
  /**
   * Xpath locator for message compose icon
   */
  public get messageIcon() {
    return "//*[@resource-id='com.dochalo.dochalo:id/action_compose']";
  }

  /**
   * Xpath locator for search  icon
   */
  public get searchIcon() {
    return `//*[@resource-id='com.dochalo.dochalo:id/action_search']`;
  }

  /**
   * Xpath locator for search plate
   */
  public get searchPlate() {
    return `//*[@resource-id='com.dochalo.dochalo:id/search_src_text']`;
  }

  /**
   * Xpath for selecting Schedule
   */
  public schedule(scheduleName: string) {
    return `//*[@resource-id='com.dochalo.dochalo:id/label_textview' and @text='${scheduleName}']`;
  }

  /**
   * Select schedule from list of schedule display for day
   */
  public scheduleForDay(scheduleName: string) {
    return `//*[@resource-id='com.dochalo.dochalo:id/name_textview' and @text='${scheduleName}']`;
  }
  /**
   *
   */
  public get scheduleInScheduDetails() {
    return `//*[@resource-id='com.dochalo.dochalo:id/header_background']/following-sibling::*[1][@resource-id='com.dochalo.dochalo:id/name_textview']`;
  }

  /**
   * Xpath locator for entering Lastname
   */
  public get lastName() {
    return `//*[@resource-id='searchAllLastNameTextBox']`;
  }

  /**
   * Xpath locator for enetring FirstName
   */
  public get firstName() {
    return `//*[@resource-id='searchAllFirstNameTextBox']`;
  }

  /**
   * Xpath locator for  find button
   */
  public get find() {
    return `//*[@resource-id='bSearch']`;
  }

  /**
   * Xpath locator to select the user
   */
  public get selectUser() {
    return `//*[@resource-id='searchAllUsers_results_list']`;
  }

  /**
   * Xpath locator to add user into the list
   */
  public get adduser() {
    return `//*[@text='Add selected to my contacts']`;
  }
}
