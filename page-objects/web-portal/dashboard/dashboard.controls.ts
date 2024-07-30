import { BaseControls } from "../../base/base.controls";

export class DashboardControls extends BaseControls {
  constructor() {
    super();
  }

  get menuButton() {
    return '//*[@id="main_navigation_toggle"]';
  }

  get menuItemMessages() {
    return '//li[@id="nav_messages"]';
  }

  get menuItemContacts() {
    return '//li[@id="nav_contacts"]';
  }

  get menuItemRoles() {
    return '//li[@id="nav_teams"]';
  }

  get menuItemSchedules() {
    return '//li[@id="nav_schedules"]';
  }

  get menuItemDistributionList() {
    return '//li[@id="nav_distribution_lists"]';
  }

  get menuItemDirectory() {
    return '//li[@id="nav_directory"]';
  }

  get menuItemReports() {
    return '//li[@id="nav_reports"]';
  }

  get menuItemGatekeeper() {
    return '//li[@id="nav_gatekeeper"]';
  }

  get menuItemHaloblast() {
    return '//li[@id="nav_halo_blast"]';
  }

  get menuItemPatients() {
    return '//li[@id="nav_patient"]';
  }

  get menuItemAdminConsole() {
    return '//li[@id="nav_admin"]';
  }
}
