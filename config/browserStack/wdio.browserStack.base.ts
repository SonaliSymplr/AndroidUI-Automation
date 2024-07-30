// <copyright file='wdio.browserStack.base.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import moment from "moment";
import dotenv from "dotenv";
import { masterconfig as sharedConfig } from "../wdio.master.conf";
import { Options } from "@wdio/types";

const uniqueName = "Halo-Web-" + moment().format("YY-MM-DD_hh-mm-ss");
dotenv.config();

export const browserStackBase: Options.Testrunner = {
  ...sharedConfig,

  user: process.env.BS_USERNAME,
  key: process.env.BS_PASSWORD,
  hostname: "hub.browserstack.com",
  services: ["browserstack"],
  capabilities: {
    mobileApp: {
      capabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
        "bstack:options": {
          idleTimeout: 300,
          projectName: "Halo-Mobile-Android",
          buildName: uniqueName,
          os: "Windows",
          osVersion: "10",
        },
      },
    },
  },
};

export const config: Options.Testrunner = {
  ...browserStackBase,
};