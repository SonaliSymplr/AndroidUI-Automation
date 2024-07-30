export const locatorsPlaceHolder = "_PLACEHOLDER_";

export class BaseControls {
  constructor() {}

  getLocator(locator: string, value: string) {
    locator = locator.replace(locatorsPlaceHolder, value);
    return locator;
  }

  get textPartialXpath() {
    return "//*[contains(text()," + '"' + locatorsPlaceHolder + '")]';
  }
}
