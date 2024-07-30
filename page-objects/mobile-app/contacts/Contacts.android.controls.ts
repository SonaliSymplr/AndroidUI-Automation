// <copyright file='Organization.android.controls.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BaseControls, locatorsPlaceHolder } from "../../base/base.controls";

export class ContactsAndroiControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath locator for ' + ' to add new contact
   */
  public get newIcon(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/action_add_contact']`;
  }

  /**
   * Xpath locator to check the search result
   */
  public get noresultsTextView(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/status_textview']`;
  }

  /**
   * Xpath locator for compose message icon
   */
  public get composeIcon() {
    return "//*[@resource-id='com.dochalo.dochalo:id/action_compose']";
  }

  /**
   * Xpath locator for contact name
   */
  public contactByName(name: string): string {
    return super.getLocator(
      `//*[contains(@text,"${locatorsPlaceHolder}") and @resource-id='com.dochalo.dochalo:id/contact_name_textview']`,
      name
    );
  }

  /**
   * Xpath locator for edit icon
   */
  public get editGroupIcon() {
    return "//*[@resource-id='com.dochalo.dochalo:id/action_edit_group']";
  }

  /**
   * Xpath locator to edit the group name in group name text area.
   */
  public get editGroupTbx() {
    return "//*[@resource-id='com.dochalo.dochalo:id/createeditgroup_name']";
  }

  /**
   * Xpath locator for save button
   */
  public get saveBtn() {
    return "//*[@resource-id='com.dochalo.dochalo:id/action_save']";
  }

  /**
   * Xpath locator for navigate back to previous page when click on cancel icon
   */
  public get cancelIcon() {
    return "//*[@content-desc='Navigate up']";
  }

  /**
   * Xpath locator to select the menu from rightside add option icon
   */
  public menuOption(menuName: string): string {
    return super.getLocator(
      `//*[@resource-id='com.dochalo.dochalo:id/title' and @text='${locatorsPlaceHolder}']`,
      menuName
    );
  }

  /**
   * Xpath locator to select the group members
   */
  public groupMember(member: string): string {
    return super.getLocator(
      `//*[@resource-id='com.dochalo.dochalo:id/name_textview' and @text ='${locatorsPlaceHolder}']`,
      member
    );
  }

  /**
   *  Xpath locator for navigate back to previous page
   */
  public get navigateBack() {
    return "//*[@content-desc='Collapse']";
  }

  /**
   * Xpath locator for delete icon to delete a group
   */
  public get deleteGroup() {
    return "//*[@text='Delete']";
  }
}
