import { BaseControls } from "../../base/base.controls";

export class ToastControls extends BaseControls {
  constructor() {
    super();
  }

  public get toastMessage(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/snackbar_text']";
  }
}
