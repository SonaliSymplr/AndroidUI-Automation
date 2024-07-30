import appConfig from "../config/appConfig.json";

export class AppConfigDataProvider {
  private AdminWebPortalUrl: string;
  private Login: string;
  private Password: string;

  /**
   * Constructor takes use as parameter to initalize
   * Login user name and password
   * Can initialize without user name to get the url
   *
   * @param user
   */
  constructor(user?: string) {
    this.AdminWebPortalUrl = appConfig["adminWebPortalUrl"];
    if (user !== undefined) {
      if (appConfig["users"][user] !== undefined) {
        this.Login = appConfig["users"][user].login;
        this.Password = appConfig["users"][user].password;
      } else {
        console.log(`Cannot find user credentials for user : ${user}`);
      }
    }
  }

  /**
   * Gets the App url
   *
   * @returns App Url
   */
  public get adminWebPortalUrl(): string {
    return this.AdminWebPortalUrl;
  }

  /**
   * Gets the UserName
   * @returns userName to login to app
   */
  public get userLogin(): string {
    return this.Login;
  }

  /**
   * Gets the password
   * @returns password to login to app
   */
  public get userPassword(): string {
    return this.Password;
  }
}
