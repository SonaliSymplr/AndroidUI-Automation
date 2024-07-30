import { masterconfig as sharedConfig } from "./wdio.master.conf";
import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  ...sharedConfig,
  services: ["appium"],
  port: 4723,
  maxInstances: 1,
  capabilities: {
    mobileApp: {
      capabilities: {
        platformName: "Android",
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        "appium:deviceName": "moto g(7)",
        "appium:udid": "ZY225DGNCM",
        "appium:platformVersion": "10.0",
        // 'appium:orientation': 'PORTRAIT',
        "appium:automationName": "UiAutomator2",
        // The path to the app
        "appium:appPackage": "com.dochalo.dochalo",
        // @ts-ignore
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        "appium:noReset": true,
        "appium:newCommandTimeout": 240,
        "appium:appActivity":
          "com.dochalo.dochalo.feature.splash.ui.SplashActivity",
      },
    },
  },
};
