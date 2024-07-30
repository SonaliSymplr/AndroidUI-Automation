import { NativeBasePage } from "../../base/nativeBase.page";
import { RolesControls } from "./Roles.Android.controls";

export class RolesPage extends NativeBasePage {
  private rolecontrols: RolesControls;
  private _driver: any;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.rolecontrols = new RolesControls();
  }

  /**
   * Verify Role tab present or not
   */
  public async IsTabPresent(tabName: string): Promise<boolean> {
    await super.clickElement(this.rolecontrols.roleTab(tabName));
    return await super.isDisplayed(this.rolecontrols.contentList);
  }

  /**
   * Click on MY role tab
   */
  public async ClickOnMyRoleTab(tabName: string): Promise<void> {
    await super.clickElement(this.rolecontrols.roleTab(tabName));
  }
  /**
   * Click on toggle in my role tab
   */
  public async ClickOnToggle(): Promise<void> {
    await super.waitTillElementDisplayed(this.rolecontrols.toggle);
    await super.clickElement(this.rolecontrols.toggle);
  }
}
