import { NativeBasePage } from "../../base/nativeBase.page";
import { RemovePatientConfirmDialog } from "../dialogs/RemovePatientConfirm.dialog";
import { PatientDetailsMenu } from "./PatientDetails.menu";
import { PatientsControls } from "./Patients.Android.controls";

export class PatientScreen extends NativeBasePage {
  private _driver: any;
  private patientControls: PatientsControls;
  private patientDetailsMenu: PatientDetailsMenu;
  private removePatientConfirmDialog: RemovePatientConfirmDialog;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.patientControls = new PatientsControls();
  }

  public get RemovePatientConfirmDialog(): RemovePatientConfirmDialog {
    if (this.removePatientConfirmDialog == undefined) {
      this.removePatientConfirmDialog = new RemovePatientConfirmDialog(
        this._driver
      );
    }
    return this.removePatientConfirmDialog;
  }

  public get PatientDetailRightMenu(): PatientDetailsMenu {
    if (this.patientDetailsMenu == undefined) {
      this.patientDetailsMenu = new PatientDetailsMenu(this._driver);
    }
    return this.patientDetailsMenu;
  }

  /**
   *select patient from list
   * @param user is used as patientname
   */

  public async SelectUser(user?: string): Promise<void> {
    if (user === undefined || user === null) {
      user = "";
    }

    await super.clickElement(`${this.patientControls.searchResults(user)}`);
  }

  /**
   * Add patient into the list
   *
   * @param user is used as new patient to be added
   */
  public async AddUserToList(user: string): Promise<void> {
    await super.clickElement(this.patientControls.searchResults(user));
    await this.PatientDetailRightMenu.OpenMenu();
    await this.PatientDetailRightMenu.AddToMyList();
  }

  /**
  Removes a user from the list.
  @param user - The user to be removed.
  @returns A promise that resolves to a boolean indicating whether the user was successfully removed.
  */
  public async RemoveUserToList(user: string): Promise<boolean> {
    await super.clickElement(this.patientControls.searchResults(user));
    await this.PatientDetailRightMenu.OpenMenu();
    if (
      (await this.PatientDetailRightMenu.GetMenuItems()).includes(
        "Remove from My List"
      )
    ) {
      await this.PatientDetailRightMenu.RemoveFromMyList();
      return true;
    }
    return false;
  }

  /**
   * Enter the patient name in serach field
   *
   * @param user is used to search
   */
  public async SearchUser(user: string): Promise<void> {
    await super.enterText(this.patientControls.searchArea, user);
  }

  /**
   * Click on the search result
   *
   */
  public async TapSearchIcon(): Promise<void> {
    await super.clickElement(this.patientControls.searchIcon);
  }

  /**
   * Navigate to back page
   */
  public async NavigateBack(): Promise<void> {
    await super.clickElement(this.patientControls.navigateBack);
    await super.clickElement(this.patientControls.NavigateToList);
  }

  /**
   * Check patient is added into the list
   *
   * @param patientName is used to as name of the patient
   */
  public async IsPatientadded(patientName: string): Promise<boolean> {
    try {
      await super.isDisplayed(this.patientControls.searchResults(patientName));
    } catch (error) {
      return false;
    }
    await super.clickElement(this.patientControls.searchResults(patientName));
  }
}
