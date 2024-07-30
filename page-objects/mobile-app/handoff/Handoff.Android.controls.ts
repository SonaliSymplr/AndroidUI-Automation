// <copyright file='Organization.android.controls.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BaseControls, locatorsPlaceHolder } from "../../base/base.controls";

export class HandoffAndroidControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath locator for taking first patient
   */
  public patientCheckBox(patientName:string): string {
    return `//*[@text='${patientName}']/ancestor::*[3]/preceding-sibling::*/descendant::*`;
  }

  /**
   * Xpath locator to identify Pending handoff text
   */
  public get clickOnAction(): string {
    return '//*[@resource-id="ImageButton1"] ';
  }

  /**
   * Xpath locator to identify Pending handoff text
   */
  public get handOffConfirmation(): string {
    return `//*[@text='Hand-Off Pending']`;
  }

  /**
   * Xpath locator for Handoff button
   */
  public get handOff(): string {
    return `//*[@resource-id='lbHandOff']`;
  }

  /**
   * Xpath locator to selct provider for hand off
   */
  public get clickhprovider(): string {
    return `//*[@resource-id='ho132156']`;
  }

  /**
   * Xpath locator for Takeback button
   */
  public get takeBack(): string {
    return `//*[@resource-id='lbTakeBack']`;
  }

  /**
   * Xpath locator for patient for take back action
   */
  public get patientForTakeBack(): string {
    return `//*[@resource-id='tk248839']`;
  }

  /**
   * Xpath to identify the user from dropdown list
   */
  public checkForProvider(user: string): string {
    return super.getLocator(`//*[@text ='${locatorsPlaceHolder}']`, user);
  }

  /**
   * Xpath locator to send Hand off
   */
  public get sendToProviderBtn(): string {
    return `//*[@resource-id='bSend']`;
  }
  /**
   * Xpath locator for yes button to confirm take back
   */
  public get confirmTakeBack(): string {
    return `//*[@resource-id='bYes']`;
  }
}
