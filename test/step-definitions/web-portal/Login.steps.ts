import { Given, When, Then } from "@wdio/cucumber-framework";
import { LoginPage } from "../../../page-objects/web-portal/login/Login.page";
import {
  browserDriver,
  BrowserSessionHandler,
} from "../../../config/browserSessionHandler";

let loginPage: LoginPage;
let browserSessionHandler: BrowserSessionHandler;

Given("the Halo webportal is launched", async () => {});

Then("the admin {string} logs into webportal", async (user: string) => {
  browserSessionHandler = new BrowserSessionHandler();
  await browserSessionHandler.launchBrowser();
  loginPage = new LoginPage(browserDriver);
  await loginPage.login(user);
});
