// <copyright file='wdio.samsung.conf.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import moment from "moment";
import { browserStackBase } from "./wdio.browserStack.base";
import { Options } from "@wdio/types";

const buildName = "Halo-Android-" + moment().format("YY-MM-DD_hh-mm-ss");
const bsAppAddress = "bs://6bcd376f34edc84e35c215c204bcbd0c84ef5d2f";
export const config: Options.Testrunner = {
  ...browserStackBase,

  maxInstances: 5,
  logLevel: "info",
  capabilities: {
    mobileApp: {
      capabilities: {
        platformName: "Android",
        "appium:app": bsAppAddress,
        "appium:deviceName": "Samsung Galaxy S10",
        "appium:platformVersion": "9.0",
        "appium:automationName": "UiAutomator2",
        "bstack:options": {
          idleTimeout: 300,
          projectName: "Halo-Mobile-Android",
          buildName: buildName,
        },
      },
    },
  },
};
