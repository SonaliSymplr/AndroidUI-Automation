import { AppConfigDataProvider } from "../../../configDataProvider/appConfigDataProvider";
import { LoginControls } from "./Login.Android.controls";
import { NativeBasePage } from "../../base/nativeBase.page";

export class MicrosoftLoginPage extends NativeBasePage {
  private appConfig: AppConfigDataProvider;
  private _driver: WebdriverIO.Browser;
  private loginControls: LoginControls;

  constructor(driver: any) {
    super();
    this._driver = driver;
    this.loginControls = new LoginControls();
  }

  public async MicrosoftLogin(user: string) {
    this.appConfig = new AppConfigDataProvider(user);
    await this.MicrosoftLoginAs(
      this.appConfig.userLogin,
      this.appConfig.userPassword
    );
  }

  public async MicrosoftLoginAs(userName: string, password: string) {
    await super.enterText(
      this.loginControls.usernameFieldForMicrosoft,
      userName
    );
    await super.clickElement(this.loginControls.clickNext);
    await super.enterText(
      this.loginControls.passwordFieldForMicrosoft,
      password
    );
    await super.clickElement(this.loginControls.signIn);
    await this.driverObj.pause(3000);
    await this.tapbutton(503, 872);
    await this.driverObj.pause(3000);
  }
}
