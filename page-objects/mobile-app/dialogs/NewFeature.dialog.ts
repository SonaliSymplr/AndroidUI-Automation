import { NewFeatureDialogControls } from "./NewFeatureDialog.controls";
import { DialogBase } from "./dialogBase";

export class NewFeatureDialog extends DialogBase {
  private _driver: WebdriverIO.Browser;
  private newfeatureDialogControls: NewFeatureDialogControls;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.newfeatureDialogControls = new NewFeatureDialogControls();
  }

  /**
   * Checks if the dialog is displayed.
   * @returns A Promise that resolves to a boolean indicating the display status of the dialog.
   */
  public async IsDialogDisplayed(): Promise<boolean> {
    let displayStatus: boolean;
    try {
      displayStatus = await super.isDisplayed(
        this.newfeatureDialogControls.dialogTitle
      );
    } catch {
      displayStatus = false;
    }

    return displayStatus;
  }

  /*
   * Taps on the Close button to dismiss the dialog
   * @returns A Promise that resolves to void.
   */
  public async Close(): Promise<void> {
    await super.clickElement(this.newfeatureDialogControls.closeButton);
  }

  /**
   * Taps on the Sounds button.
   * @returns A Promise that resolves to void.
   */
  public async Sounds(): Promise<void> {
    await super.clickElement(this.newfeatureDialogControls.soundsButton);
  }

  /**
   * Overrides the TapCancel method.
   * Throws an error indicating that the operation is invalid
   * because there is no Cancel button to click.
   * @returns A Promise that resolves to void.
   */
  public override async TapCancel(): Promise<void> {
    throw new Error("Invalid operation: No Cancel button to click.");
  }

  /**
   * Click allow for notification
   */
  public async AllowNotification(): Promise<void> {
    await super.clickElement(this.newfeatureDialogControls.allowNotification);
  }

  /**
   * Checks if the pop up for Notification is displayed.
   * @returns A Promise that resolves to a boolean indicating the display status of the dialog.
   */
  public async IsNotificationDisplayed(): Promise<boolean> {
    let displayStatus: boolean;
    try {
      displayStatus = await super.isDisplayed(
        this.newfeatureDialogControls.popupforNitication
      );
    } catch {
      displayStatus = false;
    }

    return displayStatus;
  }
}
