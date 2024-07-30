import { DateTimeHelper } from "../utils/DateTimeHelper";

/**
 * DTO to hold the Message data
 */
export class MessageAndroidDto {
  public PreMessage: string;
  public ActualMessage: string;
  public PostMessage: string;
  public IsUrgent: boolean;
  public get PostMessageTimeStamp(): string {
    return DateTimeHelper.ExtractDate(this.PreMessage);
  }
  public get PreMessageTimeStamp(): string {
    return DateTimeHelper.ExtractDate(this.PreMessage);
  }
  public MessageSatus: string;
}
