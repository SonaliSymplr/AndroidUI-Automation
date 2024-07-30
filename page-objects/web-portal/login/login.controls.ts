import { BaseControls } from "../../base/base.controls";

export class LoginControls extends BaseControls {
  constructor() {
    super();
  }

  get usernameField() {
    return '//input[@id="usernameTextBox"]';
  }

  get passwordField() {
    return '//input[@id="passwordTextBox"]';
  }

  get continueButton() {
    return '//input[@id="continueButton"]';
  }
}
