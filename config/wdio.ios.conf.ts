import { masterconfig as sharedConfig } from "./wdio.master.conf";
// import { iosDeviceName, iosDeviceVersion } from "./wdio.master.conf";
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
        platformName: "ios",
        "appium:platformVersion": "15",
        "appium:deviceName": "iPhone 13 Pro Max",
        "appium:app": "bs://39df9a6fa3b994bc4b3c670327cb59791699ae27",
        "appium:language": "en",
        "appium:locale": "en_US",
        "bstack:options": {
          idleTimeout: 300,
          projectName: "Halo Moile iOS",
          buildName: "Halo iOS",
        },
      },
    },
  },
};
