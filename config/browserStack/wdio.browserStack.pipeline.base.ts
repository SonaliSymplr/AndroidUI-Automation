// <copyright file='wdio.browserStack.base.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { masterconfig as sharedConfig } from "../wdio.master.conf";
import { Options } from "@wdio/types";

export const browserStackBase: Options.Testrunner = {
  ...sharedConfig,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  
  hostname: "hub.browserstack.com",
  services: ["browserstack"],  
};

export const config: Options.Testrunner = {
  ...browserStackBase,
};
