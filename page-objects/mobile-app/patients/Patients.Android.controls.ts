import { BaseControls, locatorsPlaceHolder } from "../../base/base.controls";

export class PatientsControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath locator for search patient
   */
  public searchResults(user: string): string {
    if (user === "") {
      return "//*[@resource-id='com.dochalo.dochalo:id/patient_care_summary']";
    }

    return super.getLocator(
      `//*[@text='${locatorsPlaceHolder}' and @resource-id='com.dochalo.dochalo:id/name_textview']/..`,
      user
    );
  }

  /**
   * Xpath locator for serach field text area
   */
  public get searchArea(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/search_src_text']";
  }

  /**
   * Xpath locator for search icon
   */
  public get searchIcon(): string {
    return "~Search";
  }

  /**
   * Xpath locator for navigate back arrow
   */
  public get navigateBack(): string {
    return "//*[@content-desc='Navigate up']";
  }

  /**
   * Xpath locator for navigate to patient list
   */
  public get NavigateToList(): string {
    return "//*[@content-desc='Collapse']";
  }
}
