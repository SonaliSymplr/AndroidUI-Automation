import { BaseControls } from "../../base/base.controls";

export class NewFeatureDialogControls extends BaseControls {
  constructor() {
    super();
  }

  //currently Not using this element, in future if needed this element make sure to update the locator as universal
  /**
   * Dilaog title element identifier
   * @returns a string that represents the element identifier.
   */
  public get dialogTitle(): string {
    return "//*[@resource-id='android:id/alertTitle']";
  }

  //currently Not using this element, in future if needed this element make sure to update the locator as universal
  /**
   * Close button element identifier
   * @returns a string that represents the element identifier.
   */
  public get closeButton(): string {
    return "//*[@resource-id='android:id/button2']";
  }

  //currently Not using this element, in future if needed this element make sure to update the locator as universal
  /**
   * Sounds button element identifier
   * @returns a string that represents the element identifier.
   */
  public get soundsButton(): string {
    return "//*[@resource-id='android:id/button1']";
  }

  /**
   * Xpath for allow notification
   */
  public get allowNotification(): string {
    return "//*[@text='Allow']";
  }

  /**
   *
   * Xpath locator for notification pop up
   */
  public get popupforNitication(): string {
    return "//*[@resource-id='com.android.permissioncontroller:id/grant_dialog']";
  }
}
