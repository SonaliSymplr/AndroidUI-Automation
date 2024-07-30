// <copyright file='DateTimeHelper.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import moment from "moment";
import { addDays, format } from "date-fns";

export class DateTimeHelper {
  constructor() {}

  /**
   *
   * @param
   * @returns mm/dd/yyyy
   *
   */
  public PresentDate(): string {
    const today = new Date();
    const date = today.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return date;
  }
  /**
   *
   * @param dateTimePhrase
   * @param dateformat
   * @returns
   */
  getFormattedDateTime(dateTimePhrase, dateformat = "MM/dd/yyyy") {
    const presentDateTime = new Date();
    let computedDateTime;
    let dateSplits;
    const operator: string = this.extractOperator(dateTimePhrase);

    switch (operator) {
      case "+":
        dateSplits = dateTimePhrase.split("+");
        computedDateTime = addDays(presentDateTime, dateSplits[1]);
        break;
      case "-":
        dateSplits = dateTimePhrase.split("-");
        computedDateTime = addDays(presentDateTime, -dateSplits[1]);
        break;
    }
    if (computedDateTime != undefined) {
      computedDateTime = format(computedDateTime, dateformat);
    } else {
      computedDateTime = format(presentDateTime, dateformat);
    }

    return computedDateTime;
  }

  /**
   *
   * @param dateText
   * @returns
   */
  extractOperator(dateText: string) {
    let index = 0;
    if (dateText.includes("+")) {
      index = dateText.indexOf("+");
    } else if (dateText.includes("-")) {
      index = dateText.indexOf("-");
    }

    return dateText.substring(index, index + 1);
  }

  /**
   *
   * @param date
   * @param arithmeticOperator
   * @param daysToAdd
   * @returns
   */
  addOrSubtractDaysToDate(
    date: Date,
    arithmeticOperator: string,
    daysToAdd: number
  ) {
    const processedDate = date;
    switch (arithmeticOperator) {
      case "+":
        break;
      case "-":
        break;
    }
    return processedDate;
  }

  /**
   *
   * @param text
   * @returns
   */
  public static ExtractDate(text: string): string {
    if (text) {
      const matches = text.match(
        /[0-9]*\/[0-9]*\/[0-9]* [0-9]*:[0-9]* [AaPp][Mm]/gm
      );
      if (matches.length == 1) {
        return matches[0];
      }
    }
    return "";
  }

  /**
   *
   * @param date the value of the date that needs to be converted
   * @returns date in following format Dec 23rd, 2023
   */
  public static GetFormattedShortDate(date: Date): string {
    const nth = function (day: number) {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    let formattedDate = `${moment(date).format("MMM")} ${moment(date).format(
      "D"
    )}${nth(+moment(date).format("DD"))}, ${moment(date).year()}`;
    return formattedDate;
  }

  /**
   *
   * @param date the value of the date that needs to be converted
   * @returns date in following format May 23, 2023
   */
  public static GetFormattedDate(date: Date): string {
    let formattedDate = `${moment(date).format("MMM")} ${moment(date).format(
      "D"
    )}, ${moment(date).year()}`;
    return formattedDate;
  }

  /*
  @returns if the timestamp is within the range of mintues it is created
  */
  public static IsWithinLastMinutes(
    timestamp: string,
    minutes: number
  ): boolean {
    // Validate minutes
    if (isNaN(minutes)) {
      throw new Error("Invalid minutes, should be a number : " + minutes);
    }

    // Validate timestamp
    let timestampDate = new Date(parseInt(timestamp, 10));
    if (isNaN(timestampDate.getTime())) {
      throw new Error("Invalid timestamp");
    }
    const currentTime = new Date();
    const thirtyMinutesAgo = new Date();
    thirtyMinutesAgo.setMinutes(currentTime.getMinutes() - minutes);

    return timestampDate >= thirtyMinutesAgo && timestampDate <= currentTime;
  }
}
