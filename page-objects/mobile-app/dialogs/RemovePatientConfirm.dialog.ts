import { DialogBase } from "./dialogBase";

export class RemovePatientConfirmDialog extends DialogBase {
  private _driver: WebdriverIO.Browser;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
  }

  public async TapYes(): Promise<void> {
    await super.TapOk();
  }

  public async TapNo(): Promise<void> {
    await super.TapCancel();
  }

  public override async TapCancel(): Promise<void> {
    throw new Error("Invalid operation: No Cancel button to click.");
  }
}
