import { BaseControls } from "../../base/base.controls";

export class MessagesControls extends BaseControls {
  constructor() {
    super();
  }

  get newMessageButton() {
    return '//button[@id="new_message_button"]';
  }

  get messageField() {
    return '//*[@id="message_footer_compose_content"]//textarea';
  }

  get sendButton() {
    return '//*[@id="message_send_button"]';
  }

  get recepientSearchBox() {
    return '//*[@id="message_recipient_typeahead_wrapper"]//input';
  }

  get recepientFromList() {
    return '//ul[@class="select2-results__options"]//li//div[contains(text(), "_PLACEHOLDER_")]';
  }

  get lastReceivedMessageSender() {
    return '(//div[@class="msg-name-short"])[1]';
  }

  get lastReceivedMessageText() {
    return '(//ul[@id="message_summary_list"]//li[1])//div[@class="msg_message_text"][2]';
  }
}
