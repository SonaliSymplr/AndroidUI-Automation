import uploadFile from "../../../node_modules/webdriverio/build/commands/browser/uploadFile";
import { WebBasePage } from "../../base/webBase.page";
import { DashboardControls } from "./dashboard.controls";

export enum dashboardMenu {
  Messages,
  Contacts,
  RolesOrTeams,
  Schedules,
  DistributionList,
  DepartmentalDirectory,
  Reports,
  GateKeeper,
  HaloBlast,
  Patients,
  AdminConsole,
}

export class DashboardPage extends WebBasePage {
  private dashboardControls: DashboardControls;
  constructor(driver: any) {
    super(driver);
    this.dashboardControls = new DashboardControls();
  }

  public async selectMenu(menu: dashboardMenu) {
    await super.clickElement(this.dashboardControls.menuButton);
    switch (menu) {
      case dashboardMenu.AdminConsole:
        await super.clickElement(this.dashboardControls.menuItemAdminConsole);
        break;
      default:
        throw new TypeError("Invalid menu passed. Please pass a valid menu");
    }
  }
}
