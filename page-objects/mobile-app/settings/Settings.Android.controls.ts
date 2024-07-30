import { BaseControls, locatorsPlaceHolder } from "../../base/base.controls";

export class SettingsControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath selector to open Passcode
   */
  public numberLocator(digit: number): string {
    return super.getLocator(
      `//*[@resource-id='com.dochalo.dochalo:id/pin_dig_${locatorsPlaceHolder}']`,
      digit.toString()
    );
  }

  public setTimeoutOption(option: string): string {
    return super.getLocator(`//*[@text='${locatorsPlaceHolder}']`, option);
  }

  /**
   * Xpath selector to open security item
   */
  public get security(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/settings_main_security_drilldown']";
  }

  /**
   * Xpath selector to open Passcode
   */
  public get passcode(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/passcode_container']";
  }

  /**
   * Xpath selector to open Passcode
   */
  public get passcodeRadioButton(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/passcode_toggle']";
  }

  /**
   * Xpath selector to click on required password field
   */
  public get requiredPasscode(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/passcode_timeout_container']";
  }

  /**
   * Xpath selector to click on account tab
   */
  public get account(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/settings_main_account_drilldown']";
  }

  /**
   * Xpath selector for office adress line1 text area
   */
  public get officeAddressLine1(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/settings_account_et_address']";
  }

  /**
   * Xpath selector for password
   */
  public get password(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/settings_account_et_password']";
  }

  /**
   * Xpath selector for confirm password field
   */
  public get verifyPassword(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/settings_account_et_password_verify']";
  }

  /**
   * Xpath selector for change password button
   */
  public get changePasswordBtn(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/settings_account_bt_change_password']";
  }

  /**
   * Xpath selector for office details
   */
  public get officeDetailsText(): string {
    return `//*[@text='OFFICE DETAILS']`;
  }

  /**
   * Xpath selector for time zone
   */
  public get selectTime(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/passcode_timeout_label']";
  }

  /**
   * Xpath selector for logout tab
   */
  public get clickOnLogout(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/logout_button']";
  }

  /**
   * Xpath selector for OK
   */
  public get clickOk(): string {
    return "//*[@text='OK']";
  }

  /**
   * Xpath selector for change envirnment section at the bottom of page
   */
  public get currentEnv(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/settings_main_current_environment_drilldown']";
  }

  /**
   * Xpath selector for envirment
   */
  public ChangeEnv(env: string): string {
    return super.getLocator(`//*[@text='${locatorsPlaceHolder}']`, env);
  }

  /**
   * Xpath selector for selecting option from menu
   */
  public menuOption(option: string): string {
    return `//*[@text='${option}']`;
  }

  /**
   * Xpath selector for message Handling under OffDuty/Autoforward
   */
  public get messageHandling(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/message_handling_container']";
  }
  /**
   * Xpath selector for message Handling under OffDuty/Autoforward
   */
  public messageHandlingPopUp(option: string): string {
    return `//*[@text='${option}']`;
  }

  /**
   * Xpath selector for save button for message Handling pop-up
   */
  public get saveForMessageHandlingPop(): string {
    return `//*[@resource-id="com.dochalo.dochalo:id/action_save"]`;
  }
  /**
   * Xpath selector for Back button
   */
  public get backButton(): string {
    return `//*[@content-desc='Navigate up']`;
  }

  /**
   * Xpath selector for  Forwarding To
   */
  public get forwardingTo(): string {
    return `//*[@resource-id="com.dochalo.dochalo:id/forwarding_to_container"]`;
  }
  /**
   * Xpath selector for search box
   */
  public get searchBox(): string {
    return `//*[@resource-id="com.dochalo.dochalo:id/search_edittext"]`;
  }
  /**
   * Xpath selector for receipient name
   */
  public recipientName(recipient: string): string {
    return `//*[@resource-id="com.dochalo.dochalo:id/name_textview" and @text='${recipient}']`;
  }

  /**
   * Xpath selector for status on message screen
   */
  public get messageScreenStatus(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_handling_status_textview']`;
  }

  /**
   * Xpath selector for status for message handling
   */
  public get status(): string {
    return `//*[@resource-id="com.dochalo.dochalo:id/message_handling_value_textview"]`;
  }

  /**
   * Xpath selector for User add icon in gatekeeper
   */
  public get userAddIcon(): string {
    return `//*[@content-desc="Add User"]`;
  }

  /**
   * Xpath selector for User search in gatekeeper
   */
  public get userSearch(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/user_search_edittext']`;
  }

  /**
   * Xpath selector for User select from list
   */
  public userFromList(user: string): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/monitorable_user' and @text='${user}']`;
  }
  /**
   * Xpath selector for toggle in gatekeeper
   */
  public get gatekeeperToggle(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/gatekeeper_toggle']`;
  }

  /**
   * Xpath selector for status for screening message
   */
  public get screeningMessage(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/messagethread_monitoring_status']`;
  }

  /**
   * Xpath selector for delete user in gatekeeper tab
   */
  public get deleteIcon(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/action_delete']`;
  }

  /**
   * Xpath selector for change passcode button
   */
  public get changePasscodeBtn() {
    return "//*[@resource-id='com.dochalo.dochalo:id/passcode_change_container']";
  }

  /**
   * Xpath selector for delete button in pop-up for gatekeeper
   */
  public get deleteButton() {
    return "//*[@text='DELETE']";
  }
}
