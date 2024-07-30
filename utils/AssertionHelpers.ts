// <copyright file='AssertionHelpers.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

export class AssertionHelpers {
  constructor() {}

  /**
   * Retruns formatted expeted and actual value
   *
   * @param actualValue from the application
   * @param expectedValue for the test
   * @returns the formatted message
   */
  public static formatErrorMessage(
    actualValue: any,
    expectedValue?: any
  ): string {
    let formattedErrorMessage = `Actual-Value: ${actualValue.toString()}`;
    if (expectedValue !== undefined && expectedValue != null) {
      formattedErrorMessage = `${formattedErrorMessage}\nExpected-Value: ${expectedValue}`;
    }

    return formattedErrorMessage;
  }
}
