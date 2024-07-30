import { DialogBase } from "./dialogBase";

export class PasswordChangedDialog extends DialogBase {
  private _driver: WebdriverIO.Browser;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
  }

  public override async TapCancel(): Promise<void> {
    throw new Error("Invalid operation: No Cancel button to click.");
  }
}
