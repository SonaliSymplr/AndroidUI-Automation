import { NativeBasePage } from "../../base/nativeBase.page";
import { HandoffAndroidControls } from "./Handoff.Android.controls";

export class HandoffScreen extends NativeBasePage {
  private _driver: any;
  private handoffAndroiControls: HandoffAndroidControls;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.handoffAndroiControls = new HandoffAndroidControls();
  }

  /**
   *Select the  patient from the list by patient name
   */
  public async ChecktPatientCheckbox(patientName:string): Promise<void> {
    await super.clickElement(this.handoffAndroiControls.patientCheckBox(patientName));
  }

  /**
   *Select the First patient from the list
   */
  public async PatientForTakeBack(): Promise<void> {
    await super.clickElement(this.handoffAndroiControls.patientForTakeBack);
  }

  /**
   * Click on the HandOff Menu
   */
  public async HandOff(): Promise<void> {
    await super.tapbutton(200, 450);
  }

  /**
   * Click on the HandOff Menu
   */
  public async ClickOnAction(): Promise<void> {
    await super.clickElement(this.handoffAndroiControls.clickOnAction);
  }

  /**
   * Click on the TakeBack action from Hnadoff page
   */
  public async TakeBack(): Promise<void> {
    await super.tapbutton(250,800);
  }

  /**
   *Select the provider from the list
   */
  public async CheckForProvider(user: string): Promise<boolean> {
    try {
      await super.isDisplayed(
        this.handoffAndroiControls.checkForProvider(user)
      );
      return true;
    } catch {
      return false;
    }
  }

  /**
   *Click on Send handoff action
   */
  public async SendToProvider(): Promise<void> {
    await super.clickElement(this.handoffAndroiControls.clickhprovider);
    await super.clickElement(this.handoffAndroiControls.sendToProviderBtn);
  }

  public async AreHandOff(index: number): Promise<boolean> {
    try {
      await super.isDisplayed(this.handoffAndroiControls.handOffConfirmation);
      return true;
    } catch {
      return false;
    }
  }

  /**
   *Click on yes for confirm hand back
   */
  public async ConfirmTakeBack(): Promise<void> {
    await super.clickElement(this.handoffAndroiControls.confirmTakeBack);
  }
}
