import { MessageType } from "../../Constants/MessageTypes";
import { BaseControls, locatorsPlaceHolder } from "../../base/base.controls";

export class MessagesControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath locator for + sige on message page
   */
  public get addIcon(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/compose_button']`;
  }

  /**
   * Xpath locator for + sige on message page
   */
  public get composeMessageButton(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/compose_button']`;
  }

  /**
   * Xpath locator for search field on message page
   */
  public get recipientSearchBox(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/contact_autocomplete_text_view']`;
  }

  /**
   *locator for message text field on message page
   */
  public get messageTextField(): string {
    return `//*[@resource-id="com.dochalo.dochalo:id/message_content_edittext"]`;
  }

  /**
   * Xpath locator for send button on message page
   */
  get sendButton(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_content_send_button']`;
  }

  /**
   * Xpath locator for Message from menu items
   */
  public get messagesView(): string {
    return "//*[@text='Messages']";
  }

  /**
   * Xpath locator for Message from menu items
   */
  public get toUsers(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/name_textview']`;
  }

  /**
   * Xpath locator to open the message by message text
   */
  public openMessage(message: string): string {
    const locator = super.getLocator(
      `//*[contains(@text, '${locatorsPlaceHolder}') and @resource-id='com.dochalo.dochalo:id/msg_preview']`,
      message
    );
    return locator;
  }

  /**
   * Xpath locator to open the message by index
   */
  public openMessageByIndex(index: number = 1): string {
    const locator = `(//*[@resource-id='com.dochalo.dochalo:id/msg_preview'])[${index}]`;
    return locator;
  }

  public get attachedPatient(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/name_textview']`;
  }

  /**
   * Xpath locator to get message text
   */
  public get message(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_thread_bubble_text_textview']`;
  }

  /**
   * Xpath locatorto get user name
   */
  public contactByName(userName: string): string {
    const locator = super.getLocator(
      `//*[@text='${locatorsPlaceHolder}' and @resource-id='com.dochalo.dochalo:id/contact_name_textview']`,
      userName
    );
    return locator;
  }

  /**
   * Xpath locatorto get user name by providing partial text
   */
  public contactByPartialName(userName: string): string {
    const locator = super.getLocator(
      `//*[contains(@text, '${locatorsPlaceHolder}') and @resource-id='com.dochalo.dochalo:id/contact_name_textview']`,
      userName
    );
    return locator;
  }

  /**
   * Xpath locator of paperclip on message page
   */
  public get messageTypeMenu(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_content_options_button']`;
  }

  /**
   * Xpath locator to select the particular message type from paperclip icon
   */
  public messageType(messageType: MessageType): string {
    return super.getLocator(
      `//*[@text = '${locatorsPlaceHolder}' and @resource-id='com.dochalo.dochalo:id/text']`,
      messageType
    );
  }

  /**
   * Xpath locator to get status of user
   */
  public get getStatusOfUser(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/messaging_status_textview']`;
  }

  /**
   * Xpath locator get message on pop up screen
   */
  public get getPopMessage(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/textSpacerNoTitle']/following-sibling::*";
  }

  /**
   * Xpath locator for send button on pop up screen
   */
  public get clickOnsendButton(): string {
    return `//*[@text='SEND']`;
  }

  /**
   * Xpath locator for cancel button on pop up screen
   */
  public get clickOnCancelButton(): string {
    return `//*[@text='CANCEL']`;
  }

  /**
   * Xpath locator i icon present on message
   */
  public get iIcon(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_thread_bubble_details_imageview']`;
  }

  /**
   * Xpath locator to get recepientname
   */
  public membersName(membersName: string) {
    return super.getLocator(`//*[@text='${locatorsPlaceHolder}']`, membersName);
  }

  /**
   * Xpath locator to get text above the message
   */
  public get checkUrgentText(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_thread_urgent_textview']`;
  }

  /**
   * Xpath locator to allow permission on pop up message
   */
  public get allowPermission(): string {
    return `//*[@text='Allow']`;
  }

  /**
   * Xpath locator to image attache in the message thread
   */
  public get isImageAttached(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_thread_attachment_image_thumbnail_imageview']`;
  }

  /**
   * Xpath locator to click Sub menu on Gallary page
   */
  public get clickOnsubMenu(): string {
    return `//*[@content-desc='List view']`;
  }

  /**
   * Xpath locator for image
   */
  public get clickPhotoForAttachment(): string {
    return `//*[@text='s8-tweet.jpg']`;
  }

  /**
   * Xpath locator to click on forward button
   */
  public get forwardMessage(): string {
    return `//*[@text='Forward']`;
  }

  /**
   * Xpath locator to click menu on Gallary page
   */
  public get clickOnMenuforImage(): string {
    return `//*[@content-desc='Show roots']`;
  }

  /**
   * Xpath locator to click Imgaes folder on Gallary page
   */
  public get clickOnImages(): string {
    return `//*[@text='Images']`;
  }

  /**
   * Xpath locator to click Pitures folder on Gallary page
   */
  public get clickOnPitcures(): string {
    return `//*[@text='Pictures']`;
  }

  /**
   * Xpath locator to click quick note
   */
  public selectQuicknote(index: number = 1): string {
    const locator = `(//*[@resource-id='com.dochalo.dochalo:id/notes_textview'])[${index}]`;
    return locator;
  }

  /**
   * Xpath locator for Date/Text locator before message for a recevied message
   */
  public get preMessage(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_thread_timestamp_textview']`;
  }

  /**
   * Xpath locator for status locator after message for a recevied message
   */
  public get postMessage(): string {
    return "//*[@resource-id='com.dochalo.dochalo:id/message_thread_status_textview']";
  }

  /**
   * Xpath locator to get text when select notify me
   */
  public get notifyMeText(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/message_content_notify_me']`;
  }

  /**
   * Xpath locator for forward thread arrow
   */
  public get forwardThread(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/action_forward']`;
  }

  /**
   * Xpath locator for checking attachment for thread
   */
  public get attachment(): string {
    return `//*[@resource-id='com.dochalo.dochalo:id/msg_attachment_icon']`;
  }
}
