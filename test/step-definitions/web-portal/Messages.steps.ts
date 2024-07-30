import { Given, Then } from "@wdio/cucumber-framework";
import { MessagesPage } from "../../../page-objects/web-portal/messages/messages.page";
import { browserDriver } from "../../../config/browserSessionHandler";

let messagesPage: MessagesPage;

Given("the Halo webportal is launched", async () => {});

Then(
  "the admin {string} sends the following message",
  async (user: string, messageData: string) => {
    messagesPage = new MessagesPage(webPortal);
    await messagesPage.sendMessage(messageData);
  }
);

Then(
  "the admin {string} ensures the following message is received",
  async (user: string, messageData: any) => {
    messagesPage = new MessagesPage(browserDriver);
    messageData = await messagesPage.getLastReceivedMessage();
    console.log("\n\n\n SENDER ", messageData[0]);
    console.log("\n\n\n MESSAGE TEXT ", messageData[1]);
  }
);
