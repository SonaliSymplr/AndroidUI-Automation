// <copyright file='wdio.samsung.conf.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { browserStackBase } from "./wdio.browserStack.pipeline.base";
import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  ...browserStackBase,

  maxInstances: 5,
  logLevel: "info",
  capabilities: {
    mobileApp: {
      capabilities: {
        platformName: "Android",
        "appium:app": process.env.APPURL,
        "appium:deviceName": "Samsung Galaxy S10",
        "appium:platformVersion": "9.0",
        "appium:automationName": "UiAutomator2",
        "bstack:options": {
          idleTimeout: 300,
          projectName: "Halo-Mobile-Android",
          buildName: process.env.BROWSERSTACK_BUILD_NAME,
        },
      },
    },
  },
};
