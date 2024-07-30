import { NativeBasePage } from "../../base/nativeBase.page";
import { MessagesControls } from "./Messages.Android.controls";
import { MessageType } from "../../Constants/MessageTypes";
import { MessageAndroidDto } from "../../../Dtos/MessageAndroidDto";

export class MessagesPage extends NativeBasePage {
  private messagesControls: MessagesControls;
  private _driver: any;

  constructor(driver: any) {
    super(driver);
    this._driver = driver;
    this.messagesControls = new MessagesControls();
  }

  /**
   * Send the Message to recepient
   *
   * @param messageData is used as message text
   * @param receiverName is used as recepient
   */
  public async SendMessageToUser(
    messageData: string,
    receiverName: string
  ): Promise<void> {
    await super.enterText(
      this.messagesControls.recipientSearchBox,
      receiverName
    );
    await super.tapUserFromList();
    await this.SendMessage(messageData);
  }

  /**
   * Search and search for Recepient
   *
   * @param receverUser is used to search
   */
  public async SearchAndSelectUser(receverUser: string): Promise<void> {
    await super.enterText(
      this.messagesControls.recipientSearchBox,
      receverUser
    );
    await super.tapUserFromList();
  }

  /**
   * Click on + icon to compose a new message
   */
  public async TapAddIcon(): Promise<void> {
    await super.clickElement(this.messagesControls.addIcon);
  }

  /**
   * Check the Item present on the  page or not
   *
   */
  public async IsOnScreen(): Promise<boolean> {
    let screenName: ElementAsync[] = [];
    try {
      screenName = await super.findElements(this.messagesControls.messagesView);
    } catch (error) {}
    return screenName.length == 1;
  }

  /**
   * Get the user/recepient list
   *
   * @param receverUser is used to search
   */
  public async GetToUsers(): Promise<string[]> {
    const toUsersElements = await super.findElements(
      this.messagesControls.toUsers
    );
    const toUsers = await Promise.all(
      toUsersElements.map(async (element) => {
        return await element.getText();
      })
    );
    return toUsers;
  }

  /**
   * Get the message text
   */
  public async GetMessage(): Promise<string> {
    return await super.getElementText(this.messagesControls.message);
  }

  /**
   * Get the detail of patient
   */
  public async GetAttachedPatient(): Promise<string> {
    return await super.getElementText(this.messagesControls.attachedPatient);
  }

  /**
   * Open the message while clicking on it
   */
  public async OpenMessage(message: string): Promise<void> {
    await super.clickElement(this.messagesControls.openMessage(message));
  }

  /**
   * Search and search for Recepient
   *
   * @param receverUser is used to search
   */
  public async SelectUser(userName: string): Promise<void> {
    await super.clickElement(this.messagesControls.contactByName(userName));
  }

  /**
   * Select and send the message
   *
   * @param messageData is used as a message text
   */
  public async SendMessage(messageData: string): Promise<void> {
    await super.enterText(this.messagesControls.messageTextField, messageData);

    await super.clickElement(this.messagesControls.sendButton);
  }

  /**
   * Open the message from message thread list, Default opens the first message
   *
   * @param index is used to select the message
   */

  public async OpenMessageByIndex(index: number = 1): Promise<void> {
    await super.clickElement(
      `${this.messagesControls.openMessageByIndex(index)}`
    );
  }

  /**
   * Search and search for Recepient
   *
   * @param partialName is used to search
   */
  public async SelectUserByPartialName(partialName: string) {
    await super.clickElement(
      this.messagesControls.contactByPartialName(partialName)
    );
  }

  /**
   * Click on paperclip icon while composing a message
   */
  public async OpenPaperClipMenu(): Promise<void> {
    await super.clickElement(this.messagesControls.messageTypeMenu);
  }

  /**
   * Select the message type
   *
   * @param messageType is used check for message type when click on paperclip icon
   */
  public async SelectMessageType(messageType: MessageType): Promise<void> {
    if (!Object.values(MessageType).includes(messageType)) {
      throw new Error(
        `Invalid MessageType: ${messageType}, Check messageType.ts for valid values`
      );
    }
    await super.clickElement(this.messagesControls.messageType(messageType));
  }

  /**
   * Check the status of the recepient when add user in 'To' field
   */
  public async GetStatusOfuser(): Promise<string> {
    return await super.getElementText(this.messagesControls.getStatusOfUser);
  }

  /**
   *Get the pop up screen message
   */
  public async GetPopUpMessage(): Promise<string> {
    return await super.getElementText(this.messagesControls.getPopMessage);
  }

  /**
   * Enter the text in message area field
   *
   * @param message is used as a message text
   */
  public async EnterTextMessage(message: string): Promise<void> {
    await this.SendMessage(message);
  }

  /**
   * Click on send button on pop up screen
   */
  public async ClickOnSendButton(): Promise<void> {
    await super.clickElement(this.messagesControls.clickOnsendButton);
  }

  /**
   * Click on cancel button on pop up screen
   */
  public async ClickOnCancelButton(): Promise<void> {
    await super.clickElement(this.messagesControls.clickOnCancelButton);
  }

  /**
   * Click on "i" icon present message to show the details of recepients
   */

  public async OpenMessageDetails(): Promise<void> {
    await super.clickElement(this.messagesControls.iIcon);
  }

  /**
   * Checking for member is display or not
   *
   * @param MembersName is used to search
   */

  public async IsMembersDisplayed(MembersName: string): Promise<boolean> {
    try {
      await super.isDisplayed(this.messagesControls.membersName(MembersName));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Enter the message into message text area
   *
   * @param message is used to as text
   */

  public async EnterMessageForUrgent(message: string): Promise<void> {
    await super.enterText(this.messagesControls.messageTextField, message);
  }

  /**
   * Add the recepient in To field
   *
   * @param receiverName is used as user
   */
  public async AddToRecepient(receiverName: string): Promise<void> {
    await super.enterText(
      this.messagesControls.recipientSearchBox,
      receiverName
    );
    await super.tapUserFromList();
  }

  /**
   * Used to click on send button
   *
   */
  public async ClickOnSendMessage(): Promise<void> {
    await super.clickElement(this.messagesControls.sendButton);
  }

  /**
   * Check the text displayed above the message
   */
  public async CheckUrgentText(): Promise<string> {
    return await super.getElementText(this.messagesControls.checkUrgentText);
  }

  /**
   * Select the image from gallary
   */
  public async ClickPhotoForAttachment(): Promise<void> {
    await this.tapbutton(200, 800);
  }

  /**
   * Allow permission to attach image from gallary
   */
  public async AllowPermission(): Promise<void> {
    await super.clickElement(this.messagesControls.allowPermission);
    await super.clickElement(this.messagesControls.clickOnMenuforImage);
    await super.clickElement(this.messagesControls.clickOnImages);
    await super.clickElement(this.messagesControls.clickOnPitcures);
  }

  /**
   * Checking image is added as attachment
   */
  public async IsImageAttached(): Promise<Boolean> {
    try {
      await super.isDisplayed(this.messagesControls.isImageAttached);
      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Click forward link to forward the message
   */
  public async ForwardMessage(): Promise<void> {
    await super.clickElement(this.messagesControls.forwardMessage);
  }

  /**
   * get the quick note text as message
   * */
  public async SelectQuickNote(index: number = 1): Promise<string> {
    return await super.getElementText(
      this.messagesControls.selectQuicknote(index)
    );
  }

  /**
   * select the quick note as message
   * */
  public async ClickOnQuickNote(index: number = 1): Promise<void> {
    await super.clickElement(this.messagesControls.selectQuicknote(index));
  }

  /**
   * Get last message details in existing thread
   *
   * @returns {MessageDto} received message
   */
  public async GetLastMessageInExistingThread(): Promise<MessageAndroidDto> {
    const message = new MessageAndroidDto();
    const element = super.findLastElement(this.messagesControls.message);
    const fullMsg = await super.findInPromiseElement(
      element,
      this.messagesControls.message
    );
    if (fullMsg) {
      message.ActualMessage = await fullMsg.getText();
    }

    const preMsgElement = super.findLastElement(
      this.messagesControls.preMessage
    );
    const preMsg = await super.findInPromiseElement(
      preMsgElement,
      this.messagesControls.preMessage
    );
    if (preMsg) {
      message.PreMessage = await preMsg.getText();
    }

    return message;
  }

  /**
   * check the text displayed when select the notify me from paper clip
   *
   */
  public async GetNotifyMeText(): Promise<string> {
    return await super.getElementText(this.messagesControls.notifyMeText);
  }

  /**
   * Click on arrow for forward the thead
   *
   */
  public async ForwardThreadWithAttchment(): Promise<void> {
    return await super.clickElement(this.messagesControls.forwardThread);
  }

  /**
   * Checking thread has the attachment
   */
  public async VerifyThreadHasAttachment(): Promise<Boolean> {
    try {
      await super.isDisplayed(this.messagesControls.attachment);
      return false;
    } catch (error) {
      return false;
    }
  }
}
