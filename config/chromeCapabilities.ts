import { RemoteOptions } from "webdriverio";
export class ChromeCapabilities {
  private static user: string = "svcspvdtestsado_SbEV5L";
  private static key: string = "dqbKFFW84xKMvZh8UDK1";

  static chromeCapabilities(): RemoteOptions {
    const desiredCapabilities = {
      browserName: "chrome",
      acceptInsecureCerts: true,
      "bstack:options": {
        idleTimeout: 300,
        projectName: "Halo Mobile UI Tests",
        buildName: "Halo web app",
      },
    };
    return {
      user: this.user,
      key: this.key,
      capabilities: desiredCapabilities,
    };
  }
}
