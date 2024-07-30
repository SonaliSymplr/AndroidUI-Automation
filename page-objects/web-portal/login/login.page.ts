import { WebBasePage } from "../../base/webBase.page";
import { LoginControls } from "./login.controls";
import { AppConfigDataProvider } from "../../../configDataProvider/appConfigDataProvider";

export class LoginPage extends WebBasePage {
  private loginControls: LoginControls;
  private appConfig: AppConfigDataProvider;

  constructor(driver: any) {
    super(driver);
    this.loginControls = new LoginControls();
  }

  public async login(user: string) {
    // await super.maximizeWindow();
    this.appConfig = new AppConfigDataProvider(user);
    await super.navigateTo(this.appConfig.adminWebPortalUrl);
    await super.enterText(
      this.loginControls.usernameField,
      this.appConfig.userLogin
    );
    await super.clickElement(this.loginControls.continueButton);
    await super.enterText(
      this.loginControls.passwordField,
      this.appConfig.userPassword
    );
    await super.clickElement(this.loginControls.continueButton);
  }
}
