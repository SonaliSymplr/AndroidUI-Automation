import { AppConfigDataProvider } from "../../../configDataProvider/appConfigDataProvider";
import { NativeBasePage } from "../../base/nativeBase.page";
import { NewFeatureDialog } from "../dialogs/NewFeature.dialog";
import { LoginControls } from "./Login.Android.controls";

export class LoginPage extends NativeBasePage {
  private loginControls: LoginControls;
  private appConfig: AppConfigDataProvider;
  private _driver: WebdriverIO.Browser;
  private newFeatureDialog: NewFeatureDialog;

  constructor(driver: any) {
    super();
    this._driver = driver;
    this.loginControls = new LoginControls();
  }

  public async Login(user: string) {
    this.appConfig = new AppConfigDataProvider(user);
    await this.LoginAs(this.appConfig.userLogin, this.appConfig.userPassword);
  }

  public async LoginAs(userName: string, password: string) {
    await super.enterText(this.loginControls.usernameField, userName);
    await super.clickElement(this.loginControls.usernameContinueButton);
    await super.enterText(this.loginControls.passwordField, password);
    await super.clickElement(this.loginControls.passwordContinueButton);

    if (await this.NewFeatureDialog.IsDialogDisplayed()) {
      await this.NewFeatureDialog.Close();
    }
  }

  public async Logout(): Promise<void> {
    await super.clickElement(this.loginControls.logout);
  }

  public async IsOnLoginScreen(): Promise<boolean> {
    return await super.isDisplayed(this.loginControls.usernameField);
  }

  public async EnterPassword(password: string) {
    await super.enterText(this.loginControls.usernameField, password);
    await super.clickElement(this.loginControls.usernameContinueButton);
  }

  /**
   * Pauses the execution for 3 seconds
   */
  public async pause(): Promise<void> {
    await this.driverObj.pause(3000);
  }

  /**
   * New Feature Dialog functionality
   */
  public get NewFeatureDialog(): NewFeatureDialog {
    if (this.newFeatureDialog == undefined) {
      this.newFeatureDialog = new NewFeatureDialog(this._driver);
    }
    return this.newFeatureDialog;
  }

  /**
   * Enter the user name in the text box
   */
  public async EnterUserName(userName: string) {
    this.appConfig = new AppConfigDataProvider(userName);
    await this.EnterUserNameAs(this.appConfig.userLogin);
  }

  public async EnterUserNameAs(userName: string) {
    await super.enterText(this.loginControls.usernameField, userName);
  }

  /**
   * Click continue button
   */
  public async ClickContinueBtn() {
    await super.clickElement(this.loginControls.usernameContinueButton);
  }
}
