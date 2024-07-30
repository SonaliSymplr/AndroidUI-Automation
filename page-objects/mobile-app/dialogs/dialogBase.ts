import { NativeBasePage } from "../../base/nativeBase.page";
import { DialogBaseControls } from "./dialogBase.controls";

export class DialogBase extends NativeBasePage {
  private _baseDialogDriver: WebdriverIO.Browser;
  private dialogBaseControls: DialogBaseControls;

  constructor(driver: any) {
    super(driver);
    this._baseDialogDriver = driver;
    this.dialogBaseControls = new DialogBaseControls();
  }

  public async TapOk(): Promise<void> {
    await super.clickElement(this.dialogBaseControls.okButton);
  }

  public async TapCancel(): Promise<void> {
    await super.clickElement(this.dialogBaseControls.cancelButton);
  }

  public async GetTitle(): Promise<string> {
    return await super.getElementText(this.dialogBaseControls.dialogTitle);
  }

  public async GetMessage(): Promise<string> {
    return await super.getElementText(this.dialogBaseControls.dialogMessage);
  }
}
