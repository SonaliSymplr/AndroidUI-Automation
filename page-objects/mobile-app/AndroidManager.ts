import { ContactsScreen } from "./contacts/Contacts.Android.page";
import { LoginPage } from "./login/login.Android.page";
import { MessagesPage } from "./messages/messages.Android.page";
import { MenuComponent } from "./navigation/Menu.component";
import { OrganizationScreen } from "./organization/Organization.android.page";
import { PatientScreen } from "./patients/Patients.Android.page";
import { SettingsScreen } from "./settings/Settings.Android.page";
import { Toast } from "./toasts/Toast";
import { HandoffScreen } from "./handoff/Handoff.Android.page";
import { RolesPage } from "./roles/Roles.Android.page";
import { MicrosoftLoginPage } from "./login/MicrosoftLogin.page";

export class AndroidManager {
  private readonly _driver: any;
  private loginScreen: LoginPage;
  private messagesScreen: MessagesPage;
  private menuComponent: MenuComponent;
  private settingsScreen: SettingsScreen;
  private organizationScreen: OrganizationScreen;
  private patientScreen: PatientScreen;
  private toast: Toast;
  private contactsScreen: ContactsScreen;
  private handoffScreen: HandoffScreen;
  private roles: RolesPage;
  private microsoftLoginpage: MicrosoftLoginPage;

  constructor(driver: any = mobileApp) {
    this._driver = driver;
  }

  public get Login(): LoginPage {
    if (this.loginScreen === undefined) {
      this.loginScreen = new LoginPage(this._driver);
    }
    return this.loginScreen;
  }

  public get Messages(): MessagesPage {
    if (this.messagesScreen === undefined) {
      this.messagesScreen = new MessagesPage(this._driver);
    }
    return this.messagesScreen;
  }

  public get Navigation(): MenuComponent {
    if (this.menuComponent === undefined) {
      this.menuComponent = new MenuComponent(this._driver);
    }
    return this.menuComponent;
  }

  public get Organization(): OrganizationScreen {
    if (this.organizationScreen === undefined) {
      this.organizationScreen = new OrganizationScreen(this._driver);
    }
    return this.organizationScreen;
  }

  public get Patients(): PatientScreen {
    if (this.patientScreen === undefined) {
      this.patientScreen = new PatientScreen(this._driver);
    }
    return this.patientScreen;
  }

  public get Settings(): SettingsScreen {
    if (this.settingsScreen === undefined) {
      this.settingsScreen = new SettingsScreen(this._driver);
    }
    return this.settingsScreen;
  }

  public get Contacts(): ContactsScreen {
    if (this.contactsScreen === undefined) {
      this.contactsScreen = new ContactsScreen(this._driver);
    }
    return this.contactsScreen;
  }

  public get Toast(): Toast {
    if (this.toast === undefined) {
      this.toast = new Toast(this._driver);
    }
    return this.toast;
  }

  /**
   * To pause execution for default time in the base page
   */
  public async Pause() {
    await this.Login.pause();
  }

  public async ScrollDown() {
    await this.Login.swipeUp();
  }

  public async HideKeyboard() {
    await this.Login.hideKeyboard();
  }

  public get Handoff(): HandoffScreen {
    if (this.handoffScreen === undefined) {
      this.handoffScreen = new HandoffScreen(this._driver);
    }
    return this.handoffScreen;
  }

  public get Roles(): RolesPage {
    if (this.roles === undefined) {
      this.roles = new RolesPage(this._driver);
    }
    return this.roles;
  }

  public get MicrosoftLogin(): MicrosoftLoginPage {
    if (this.microsoftLoginpage == undefined) {
      this.microsoftLoginpage = new MicrosoftLoginPage(this._driver);
    }
    return this.microsoftLoginpage;
  }
}
