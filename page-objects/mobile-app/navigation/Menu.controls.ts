// <copyright file='Menu.controls.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BaseControls } from "../../base/base.controls";

export class MenuControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath selector to open Hamburger menu
   */
  public get hamBurger(): string {
    return "~Open Menu";
  }

  /**
   * Xpath selector to close Hamburger menu
   */
  public get closeHamBurger(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/navigation_header_logo']";
  }

  /**
   * Xpath selector for Settings menu
   */
  public get settings(): string {
    return '//*[@resource-id="com.dochalo.dochalo:id/navigation_item_text" and contains(@text,"Settings")]';
  }

  /**
   * Xpath selector for logout menu
   */
  public get logout(): string {
    return '//*[@resource-id="com.dochalo.dochalo:id/navigation_item_text" and contains(@text,"Logout")]';
  }

  /**
   * Xpath selector for message count on Hamburger menu
   */
  public get hamburgerMessagesBubble(): string {
    return "//span[@id='main_navigation_message_indicator']";
  }

  /**
   * Xpath selector for Messages menu item on Hamburger menu
   */
  public get messages(): string {
    return '//*[@resource-id="com.dochalo.dochalo:id/navigation_item_text" and contains(@text,"Messages")]';
  }

  /**
   * Xpath selector for message count on Messages menu item
   */
  public get messagesBubble(): string {
    return "//span[@id='nav_messages_link_indicator']";
  }

  /**
   * Xpath selector for Contacts menu item on Hamburger menu
   */
  public get contacts(): string {
    return '//*[@resource-id="com.dochalo.dochalo:id/navigation_item_text" and contains(@text,"Contacts")]';
  }

  /**
   * Xpath selector for organization menu item on Hamburger menu
   */
  public get organization(): string {
    return '//*[@resource-id="com.dochalo.dochalo:id/navigation_item_text" and contains(@text,"Organization")]';
  }

  /**
   * Xpath selector for Roles/Teams menu item on Hamburger menu
   */
  public get rolesTeams(): string {
    return '//*[@resource-id="com.dochalo.dochalo:id/navigation_item_text" and contains(@text,"Roles/Teams")]';
  }

  /**
   * Xpath selector for Schedules menu item on Hamburger menu
   */
  public get schedules(): string {
    return "//a[@id='nav_schedules_link']";
  }

  /**
   * Xpath selector for Distribution menu item on Hamburger menu
   */
  public get distributionList(): string {
    return "//a[@id='nav_distribution_lists_link']";
  }

  /**
   * Xpath selector for Directory menu item on Hamburger menu
   */
  public get deplartmentDirectory(): string {
    return "//a[@id='nav_directory_link']";
  }

  /**
   * Xpath selector for Reports menu item on Hamburger menu
   */
  public get reports(): string {
    return "//a[@id='nav_reports_link']";
  }

  /**
   * Xpath selector for Gatekeeper menu item on Hamburger menu
   */
  public get gatekeeper(): string {
    return "//a[@id='nav_gatekeeper_link']";
  }

  /**
   * Xpath selector for Blast menu item on Hamburger menu
   */
  public get blast(): string {
    return "//a[@id='nav_halo_blast_link']";
  }

  /**
   * Xpath selector for Patient menu item on Hamburger menu
   */
  public get patients(): string {
    return '//*[@resource-id="com.dochalo.dochalo:id/navigation_item_text" and contains(@text,"Patients")]';
  }

  /**
   * Xpath selector for Admin Console menu item on Hamburger menu
   */
  public get adminConsole(): string {
    return "//a[@id='nav_admin_link']";
  }

  /**
   * Xpath selector for Handoff menu item on Hamburger menu
   */
  public get handoff(): string {
    return '//*[@resource-id="com.dochalo.dochalo:id/navigation_item_text" and contains(@text,"Handoff")]';
  }
}
