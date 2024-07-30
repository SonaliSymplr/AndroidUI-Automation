import { NativeBasePage } from "../../base/nativeBase.page";
import { PasswordChangedDialog } from "../dialogs/PasswordChanged.dialog";
import { SettingsControls } from "./Settings.Android.controls";
import { AndroidManager } from "../AndroidManager";
import { appEnvironmentInFull } from "../../../config/wdio.master.conf";

let superadmin: any;
export class SettingsScreen extends NativeBasePage {
  private settingsControls: SettingsControls;
  private _driver: any;
  private passwordChangedDialog: PasswordChangedDialog;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.settingsControls = new SettingsControls();
  }

  public get PasswordChangedDialog(): PasswordChangedDialog {
    if (this.passwordChangedDialog == undefined) {
      this.passwordChangedDialog = new PasswordChangedDialog(this._driver);
    }
    return this.passwordChangedDialog;
  }

  /**
   * Click the security on settings page
   *
   */
  public async TapSecurity(): Promise<void> {
    await super.clickElement(this.settingsControls.security);
  }

  /**
   * Click the Account on settings page
   *
   */
  public async TapAccount(): Promise<void> {
    await super.clickElement(this.settingsControls.account);
  }

  /**
   * Click the passcode on settings page
   *
   */
  public async TapPasscode(): Promise<void> {
    await super.clickElement(this.settingsControls.passcode);
  }

  /**
   * Click the passcode toggle on/off button on passcode page
   *
   */
  public async TapPasscodeRadioButton(): Promise<void> {
    await super.clickElement(this.settingsControls.passcodeRadioButton);
  }

  /**
   * Enter the passcode
   *
   */
  public async TapDigit(digit: number): Promise<void> {
    if (digit < 0 || digit > 9) {
      throw new Error("Halo: Digits between 0-9 are only accepted");
    }
    await super.clickElement(this.settingsControls.numberLocator(digit));
  }

  /**
   * Click the Required passcode button on passcode page
   *
   */
  public async TapRequiredPasscode(): Promise<void> {
    await super.clickElement(this.settingsControls.requiredPasscode);
  }

  /**
   * Click the select time on passcode page
   *
   */
  public async SelectTimeout(timeout: string): Promise<void> {
    await super.clickElement(this.settingsControls.setTimeoutOption(timeout));
  }

  public async GetOfficeAddress(): Promise<string> {
    return await super.getElementText(this.settingsControls.officeAddressLine1);
  }

  /**
   * Enter the new office address on Account page
   *
   */
  public async ChangeOfficeAddress(address: string): Promise<void> {
    await super.enterText(this.settingsControls.officeAddressLine1, address);
    // Change focus to save
    await super.clickElement(this.settingsControls.password);
  }

  /**
   * change the password On account page
   *
   */
  public async ChangePassword(newPassword: string): Promise<void> {
    await super.enterText(this.settingsControls.password, newPassword);
    await super.enterText(this.settingsControls.verifyPassword, newPassword);
    await super.clickElement(this.settingsControls.changePasswordBtn);
  }

  /**
   * Click on the logout
   *
   */
  public async ClickOnLogout(): Promise<void> {
    await super.clickElement(this.settingsControls.clickOnLogout);
  }

  /**
   * Click the Ok after hitting the logout button
   *
   */
  public async ClickOK(): Promise<void> {
    await super.clickElement(this.settingsControls.clickOk);
  }

  /**
   * Change the enternal setting for env change
   *
   */
  public async ChangeEnv(env: string): Promise<void> {
    await super.clickElement(this.settingsControls.currentEnv);
    await super.clickElement(this.settingsControls.ChangeEnv(env));
  }

  /**
   * Click the setting menu option
   *
   */
  public async ClickOnMenuOption(option: string): Promise<void> {
    await super.clickElement(this.settingsControls.menuOption(option));
  }

  /**
   * Select message handling tab
   *
   */
  public async SelectMessageHandling(): Promise<void> {
    await super.clickElement(this.settingsControls.messageHandling);
  }

  /**
   * Select option from message handling pop-up
   *
   */
  public async OptionFromMessageHandlingPopUp(option: string): Promise<void> {
    await super.clickElement(
      this.settingsControls.messageHandlingPopUp(option)
    );
  }

  /**
   * Click on save button
   *
   */
  public async ClickOnSave(): Promise<void> {
    await super.clickElement(this.settingsControls.saveForMessageHandlingPop);
  }

  /**
   * Click on back button
   *
   */
  public async ClickOnBackButton(): Promise<void> {
    await super.waitTillElementDisplayed(this.settingsControls.backButton);
    await super.clickElement(this.settingsControls.backButton);
  }

  /**
   * Select recipient from auto forward
   *
   */
  public async SelectRecipient(recipient: string): Promise<void> {
    await super.clickElement(this.settingsControls.forwardingTo);
    await super.clickElement(this.settingsControls.searchBox);
    await super.enterText(this.settingsControls.searchBox, recipient);
    await super.clickElement(this.settingsControls.recipientName(recipient));
  }

  /**
   * Get status from message screen
   *
   */
  public async StatusMessage(): Promise<string> {
    return await super.getElementText(
      this.settingsControls.messageScreenStatus
    );
  }

  /**
   * Get status from message handling option
   *
   */
  public async MessageHandlingStatus(): Promise<string> {
    const status = await super.getElementText(this.settingsControls.status);
    return status;
  }

  /**
   *select user from list whom user want to be gatekeeper
   *
   */
  public async SelectUserFromList(user: string): Promise<void> {
    await super.clickElement(this.settingsControls.userAddIcon);
    await super.clickElement(this.settingsControls.userSearch);
    await super.enterText(this.settingsControls.userSearch, user);
    await super.clickElement(this.settingsControls.userFromList(user));
  }
  /**
   *Switch toggle on/off for user in gatekeeper
   *
   */
  public async ClickOnGatekeeperToggle(): Promise<void> {
    await super.clickElement(this.settingsControls.gatekeeperToggle);
  }

  /**
   *Status for message when message screening in on for any user
   *
   */
  public async StatusMessageForGatekeeper(): Promise<string> {
    return await super.getElementText(this.settingsControls.screeningMessage);
  }

  /**
   *Xpath for delete icon for user in gatekeeper
   *
   */
  public async ClickOnDeleteIcon(): Promise<void> {
    await super.clickElement(this.settingsControls.deleteIcon);
  }
  /**
   *Xpath for delete  for user in gatekeeper
   *
   */
  public async ClickOnDeleteBtn(): Promise<void> {
    await super.clickElement(this.settingsControls.deleteButton);
  }

  /*
   * Check the status of passcode button
   *
   */
  public async PassCodeButtonOffStatus(): Promise<boolean> {
    return await super.isEnabled(this.settingsControls.passcodeRadioButton);
  }

  /**
   * Check the status of change passcode button
   *
   */
  public async ChangePasscode(): Promise<boolean> {
    return await super.isEnabled(this.settingsControls.changePasscodeBtn);
  }

  /**
   * To change the envirnment from setting page
   *
   */
  public async SwitchEnv() {
    let androidManager: AndroidManager = new AndroidManager(mobileApp);
    await androidManager.Navigation.NavigateToSettings();
    await androidManager.Login.scrollUp();
    await androidManager.Settings.ChangeEnv(appEnvironmentInFull);
  }
}
