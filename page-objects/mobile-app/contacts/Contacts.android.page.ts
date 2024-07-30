import { NativeBasePage } from "../../base/nativeBase.page";
import { ContactsAndroiControls } from "./Contacts.Android.controls";

export class ContactsScreen extends NativeBasePage {
  private _driver: any;
  private contactsAndroiControls: ContactsAndroiControls;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.contactsAndroiControls = new ContactsAndroiControls();
  }

  public async TapMessageIcon(): Promise<void> {
    await super.clickElement(this.contactsAndroiControls.composeIcon);
  }

  public async TapEditGroupIcon(): Promise<void> {
    await super.clickElement(this.contactsAndroiControls.editGroupIcon);
  }

  public async EnterGroupName(groupName: string): Promise<void> {
    await super.enterText(this.contactsAndroiControls.editGroupTbx, groupName);
  }

  public async TapSaveBtn(): Promise<void> {
    await super.clickElement(this.contactsAndroiControls.saveBtn);
  }

  public async TapCancelIcon(): Promise<void> {
    await super.clickElement(this.contactsAndroiControls.cancelIcon);
  }

  public async GetGroupName(): Promise<string> {
    return await super.getElementText(this.contactsAndroiControls.editGroupTbx);
  }

  public async AreSearchResultsDisplayed(): Promise<Boolean> {
    try {
      return !(
        (await super.getElementText(
          this.contactsAndroiControls.noresultsTextView
        )) === "No Results"
      );
    } catch (error) {
      return true;
    }
  }

  public async TapNewIcon(): Promise<void> {
    await super.clickElement(this.contactsAndroiControls.newIcon);
  }

  public async AddGroupMember(member: string): Promise<Boolean> {
    try {
      await super.clickElement(this.contactsAndroiControls.groupMember(member));
      return true;
    } catch (error) {
      return false;
    }
  }

  public async SelectAddContactMenuOption(): Promise<void> {
    await super.clickElement(
      this.contactsAndroiControls.menuOption("Add Contact")
    );
  }

  public async SelectCreateGroupMenuOption(): Promise<void> {
    await super.clickElement(
      this.contactsAndroiControls.menuOption("Create Group")
    );
  }

  public async NavigateBack(): Promise<void> {
    await super.clickElement(this.contactsAndroiControls.navigateBack);
  }

  public async GetResultGroupName(): Promise<string> {
    return await super.getElementText(
      this.contactsAndroiControls.noresultsTextView
    );
  }

  public async DeleteGroup(): Promise<void> {
    return await super.clickElement(this.contactsAndroiControls.deleteGroup);
  }
}
