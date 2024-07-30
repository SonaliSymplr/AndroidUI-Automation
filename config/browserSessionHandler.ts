import { ChromeCapabilities } from "../config/chromeCapabilities";
import { remote, RemoteOptions } from "webdriverio";
import { cucumberWorld, executionPlatform } from "./wdio.master.conf";

export let browserDriver;

export class BrowserSessionHandler {
  async launchBrowser() {
    const remoteOptions: RemoteOptions =
      ChromeCapabilities.chromeCapabilities();
    browserDriver = await remote(remoteOptions);
    if (executionPlatform == "browserstack") {
      await browserDriver.execute(
        `browserstack_executor: {"action": "setSessionName", "arguments": {"name": "${cucumberWorld.pickle.name}"}}`
      );
    }
  }
}
