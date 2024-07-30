import { BaseControls, locatorsPlaceHolder } from "../../base/base.controls";

export class RolesControls extends BaseControls {
  constructor() {
    super();
  }
  /**
   * Xpath locator to Role tab
   */
  public roleTab(tabName: string): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/tablayout']//*[@text='${tabName}']`;
  }

  /**
   * Xpath locator to Content present in Role tab
   */
  public get contentList(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/itemlist']`;
  }

  /**
   * Xpath locator to Toggle in Roles/Teams
   */
  public get toggle(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/toggle']`;
  }
}
