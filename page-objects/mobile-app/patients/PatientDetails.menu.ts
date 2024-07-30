import { NativeBasePage } from "../../base/nativeBase.page";
import { PatientDetailsMenuControls } from "./PatientDetails.menu.controls";

export class PatientDetailsMenu extends NativeBasePage {
  private _driver: any;
  private patientDetailsMenuControls: PatientDetailsMenuControls;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.patientDetailsMenuControls = new PatientDetailsMenuControls();
  }

  public async GetMenuItems(): Promise<string[]> {
    const menuItems = await super.findElements(
      this.patientDetailsMenuControls.menuItems
    );
    const menuTexts: string[] = [];

    for (const menuItem of menuItems) {
      const text = await menuItem.getText();
      menuTexts.push(text);
    }

    return menuTexts;
  }

  public async AddToMyList(): Promise<void> {
    await super.clickElement(
      this.patientDetailsMenuControls.menuItemByName("Add to My List")
    );
  }

  public async AttachPatient(): Promise<void> {
    await super.clickElement(
      this.patientDetailsMenuControls.menuItemByName("Attach Patient")
    );
  }

  public async CreatePatientMessage(): Promise<void> {
    await super.clickElement(
      this.patientDetailsMenuControls.menuItemByName("Create Patient Message")
    );
  }

  public async MarkForFollowUp(): Promise<void> {
    await super.clickElement(
      this.patientDetailsMenuControls.menuItemByName("Mark for Follow Up")
    );
  }

  public async UnMark(): Promise<void> {
    await super.clickElement(
      this.patientDetailsMenuControls.menuItemByName("Unmark")
    );
  }

  public async RemoveFromMyList(): Promise<void> {
    await super.clickElement(
      this.patientDetailsMenuControls.menuItemByName("Remove from My List")
    );
  }

  public async OpenMenu(): Promise<void> {
    await super.clickElement(this.patientDetailsMenuControls.menuIcon);
  }
}
