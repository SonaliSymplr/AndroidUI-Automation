// <copyright file='Menu.component.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { NativeBasePage } from "../../base/nativeBase.page";
import { MenuControls } from "./Menu.controls";

export class MenuComponent extends NativeBasePage {
  private menuControls: MenuControls;
  private _driver: WebdriverIO.Browser;

  /**
   * Constructor to initiate the class
   *
   * @param driver is the webdriver of type WebdriverIO.Browser
   */
  constructor(driver: WebdriverIO.Browser) {
    super(driver);
    this._driver = driver;
    this.menuControls = new MenuControls();
  }

  /**
   * Opens the Hamburger menu on the left side
   * If it is already open does not do anything
   */
  public async OpenMenu(): Promise<void> {
    if (await this.IsMenuOpen()) {
      return;
    }
    await super.clickElement(`${this.menuControls.hamBurger}`);
  }

  /**
   * Navigates to the Messages menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToMessages(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.messages);
  }

  /**
   * Navigates to the Contacts menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToContacts(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.contacts);
  }

  /**
   * Navigates to the Roles/Teams menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToRolesTeams(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.rolesTeams);
  }

  /**
   * Navigates to the Schedules menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToSchedules(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.schedules);
  }

  /**
   * Navigates to the Distribution List menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToDistributionLists(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.distributionList);
  }

  /**
   * Navigates to the Department Directory menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToDepartmentalDirectory(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.deplartmentDirectory);
  }

  /**
   * Navigates to the Reports item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToReports(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.reports);
  }

  /**
   * Navigates to the Gatekeeper menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToGatekeeper(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.gatekeeper);
  }

  /**
   * Navigates to the Blast menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToBlast(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.blast);
  }

  /**
   * Navigates to the Patients menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToPatients(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.patients);
  }

  /**
   * Navigates to the Admin Console menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToAdminConsole(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.adminConsole);
  }

  /**
   * Navigates to the Organization
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToOrganization() {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.organization);
  }

  /**
   * Navigates to the Handoff menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToHandoff(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.handoff);
  }

  /**
   * Navigates to the Handoff menu item under Hamburger menu
   * If Hamburger menu is not open it opens it
   */
  public async NavigateToSettings(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(`${this.menuControls.settings}`);
  }

  /**
   * Closes the Hamburger menu on the left side
   * If it is already open does not do anything
   */
  public async CloseMenu(): Promise<void> {
    if (this.IsMenuOpen()) {
      await super.clickElement(`${this.menuControls.closeHamBurger}`);
    }
  }

  /**
   * Gets the unread messages count
   *
   * @return a number from the Hamburger menu
   */
  public async GetMessageBubbles(): Promise<number> {
    await this.OpenMenu();
    return +(await super.getElementText(this.menuControls.messagesBubble));
  }

  /**
   * Gets the unread messages count
   * Opens the Hamburger menu on the left side
   *
   * @return a number from the Messages menu item
   */
  public async GetMenuBubbles(): Promise<number> {
    await this.OpenMenu();
    return +(await super.getElementText(
      this.menuControls.hamburgerMessagesBubble
    ));
  }

  /**
   * Opens the Hamburger menu on the left side
   * If it is already open no action is taken
   *
   * @returns true of menu is open and false if it is closed
   */
  private async IsMenuOpen(): Promise<boolean> {
    return await super.exists(`${this.menuControls.closeHamBurger}`);
  }

  /**
   * Logout of the application
   */
  public async Logout(): Promise<void> {
    await this.OpenMenu();
    await super.clickElement(this.menuControls.logout);
  }

  public async PlaceSettingsAppInFocus(): Promise<void> {
    await super.placeAppInFocus(
      "com.android.settings",
      "com.android.settings.Settings"
    );
  }

  public async PlaceHaloAppInFocus(): Promise<void> {
    // await super.placeAppInFocus('com.dochalo.dochalo', 'com.dochalo.dochalo.feature.passcode.ui.PinActivity');
    await super.switchApp();
  }

  public async PlaceHaloAppInBackground(): Promise<void> {
    await super.background();
  }
}
