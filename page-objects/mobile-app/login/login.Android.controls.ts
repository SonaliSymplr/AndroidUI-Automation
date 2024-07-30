import { BaseControls } from "../../base/base.controls";

export class LoginControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath locator for usernametext field
   */
  public get usernameField() {
    return '//*[@resource-id="com.dochalo.dochalo:id/login_username_edittext"]';
  }

  /**
   * Xpath locator for password text field
   */
  public get passwordField() {
    return '//*[@resource-id="com.dochalo.dochalo:id/login_password_edittext"]';
  }

  /**
   * Xpath locator for continue button after entering username
   */
  public get usernameContinueButton() {
    return "//*[@resource-id='com.dochalo.dochalo:id/login_username_continue_button']";
  }

  /**
   * Xpath locator for continue button after entering password
   */
  public get passwordContinueButton() {
    return '//*[@resource-id="com.dochalo.dochalo:id/login_password_login_button"]';
  }

  /**
   * Xpath locator for logout button
   */
  public get logout() {
    return "//*[@resource-id='com.dochalo.dochalo:id/logout_button']";
  }

  /**
   * Xpath locator for usernamefield for microsoft authentication page
   */
  public get usernameFieldForMicrosoft() {
    return "//*[@class='android.widget.EditText']";
  }

  /**
   * Xpath locator for next button on microsoft authentication page
   */
  public get clickNext() {
    return "//*[@text='Next']";
  }

  /**
   * Xpath locator for password for microsoft authentication page
   */
  public get passwordFieldForMicrosoft() {
    return "//*[@class='android.widget.EditText']";
  }

  /**
   * Xpath locator for sign in for microsoft authentication page
   */
  public get signIn() {
    return "//*[@text='Sign in']";
  }
}
