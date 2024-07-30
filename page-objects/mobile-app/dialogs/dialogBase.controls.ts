import { BaseControls } from "../../base/base.controls";

export class DialogBaseControls extends BaseControls {
  constructor() {
    super();
  }

  //currently Not using this element, in future if needed this element make sure to update the locator as universal
  public get okButton(): string {
    return "//*[@resource-id='android:id/button1']";
  }

  //currently Not using this element, in future if needed this element make sure to update the locator as universal
  public get cancelButton(): string {
    return "//*[@resource-id='android:id/button2']";
  }

  public get dialogTitle(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/alertTitle']";
  }

  //currently Not using this element, in future if needed this element make sure to update the locator as universal
  public get dialogMessage(): string {
    return "//*[@resource-id='android:id/message']";
  }
}
