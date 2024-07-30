import { WebBasePage } from "../../base/webBase.page";
import { MessagesControls } from "./messages.controls";

export class MessagesPage extends WebBasePage {
  private messagesControls: MessagesControls;

  constructor(driver: any) {
    super(driver);
    this.messagesControls = new MessagesControls();
  }

  public async sendMessage(messageData: any) {
    const messages = messageData.rows();
    for (let row = 0; row < messages.length; row++) {
      await super.clickElement(this.messagesControls.newMessageButton);
      await super.clickElement(this.messagesControls.recepientSearchBox);
      await super.enterText(
        this.messagesControls.recepientSearchBox,
        messages[row][0]
      );
      await super.clickElement(
        this.messagesControls.recepientFromList.replace(
          "_PLACEHOLDER_",
          messages[row][0]
        )
      );
      await super.clickElement(this.messagesControls.messageField);
      await super.enterText(
        this.messagesControls.messageField,
        messages[row][1]
      );
      await super.clickElement(this.messagesControls.sendButton);
    }
  }

  public async getLastReceivedMessage() {
    const messageData = new Array(2);
    messageData[0] = await super.getElementText(
      this.messagesControls.lastReceivedMessageSender
    );
    messageData[1] = await super.getElementText(
      this.messagesControls.lastReceivedMessageText
    );
    return messageData;
  }
}
