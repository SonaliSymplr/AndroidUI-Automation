// <copyright file='PatientDetails.menu.controls.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BaseControls, locatorsPlaceHolder } from "../../base/base.controls";

export class PatientDetailsMenuControls extends BaseControls {
  constructor() {
    super();
  }

  public get menuItems(): string {
    return "//android.widget.TextView";
  }

  public menuItemByName(menuName: string): string {
    return super.getLocator(
      `//*[@resource-id="com.dochalo.dochalo:id/title" and contains(@text,"${locatorsPlaceHolder}")]`,
      menuName
    );
    return '//*[@resource-id="com.dochalo.dochalo:id/title" and contains(@text,"Add to My List")]';
  }

  public get menuIcon(): string {
    return '//*[@content-desc="More options"]';
  }
}
