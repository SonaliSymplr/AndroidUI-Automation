import { NativeBasePage } from "../../base/nativeBase.page";
import { ToastControls } from "./Toast.controls";

export class Toast extends NativeBasePage {
  private toastControls: ToastControls;
  private _driver: any;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.toastControls = new ToastControls();
  }

  public async GetToastMessage(): Promise<string> {
    return await super.getElementText(this.toastControls.toastMessage);
  }

  public async IsToastVisible(): Promise<boolean> {
    try {
      await super.waitTillElementDisplayed(
        this.toastControls.toastMessage,
        5000
      );
      return true;
    } catch (e) {
      return false;
    }
  }
}
