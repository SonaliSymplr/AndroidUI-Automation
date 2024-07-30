import { masterconfig as sharedConfig } from "./wdio.master.conf";
import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  ...sharedConfig,

  user: "svcspvdtestsado_SbEV5L",
  key: "dqbKFFW84xKMvZh8UDK1",
  services: ["browserstack"],

  maxInstances: 2,
  capabilities: {
    mobileApp: {
      capabilities: {
        platformName: "Android",
        "appium:app": "bs://df7f2407888ae11644ad67cfd1b06e2820107aaf",
        "appium:deviceName": "Samsung Galaxy S10",
        "appium:platformVersion": "9.0",
        "bstack:options": {
          idleTimeout: 300,
          projectName: "Halo Mobile Android",
          buildName: "Halo Android",
        },
      },
    },
  },
};
