import { Then, When } from "@wdio/cucumber-framework";
import { faker } from "@faker-js/faker";
import { AndroidManager } from "../../../page-objects/mobile-app/AndroidManager";
import { expect } from "chai";
import { DateTimeHelper } from "../../../utils/DateTimeHelper";
import { MessageType } from "../../../page-objects/Constants/MessageTypes";
import { AssertionHelpers } from "../../../utils/AssertionHelpers";

let androidManager: AndroidManager = new AndroidManager(mobileApp);
let m_sentMessage: string = "";

When("click on PLUS Icon button for message", async () => {
  await androidManager.Messages.TapAddIcon();
});

Then(
  "the user sends the following {string} to {string}",
  async (message: string, receverUser: string) => {
    if (message === undefined || message === null || message === "") {
      message = faker.lorem.sentence();
    }

    if (
      receverUser === undefined ||
      receverUser === null ||
      receverUser === ""
    ) {
      console.error(
        "receverUser is empty, need valid user for sending a message"
      );
    }
    m_sentMessage = message;
    await androidManager.Messages.SendMessageToUser(message, receverUser);
  }
);

Then(
  "the admin {string} sends the following message from app",
  async (receverUser: string, message: string) => {
    await androidManager.Messages.SendMessageToUser(message, receverUser);
  }
);

Then(
  /^receives the message with patient "([^"]*)" attached$/,
  async (patientName: string) => {
    await androidManager.Messages.OpenMessage(m_sentMessage);
    const attachedPatientName =
      await androidManager.Messages.GetAttachedPatient();
    const actualMessage = await androidManager.Messages.GetMessage();
    expect(attachedPatientName).to.equal(patientName);
    expect(actualMessage).to.equal(m_sentMessage);
  }
);

Then(/^verify user received the message$/, async () => {
  await androidManager.Messages.OpenMessage(m_sentMessage);
  const actualMessage = await androidManager.Messages.GetMessage();
  expect(actualMessage).to.equal(m_sentMessage);
});

When(/^compose a time stamped message to contact and sent it$/, async () => {
  const timestampMessage = Date.now();
  await androidManager.Messages.SendMessage(timestampMessage.toString());
});

Then(/^verify user received the time stamped message$/, async () => {
  await androidManager.Messages.OpenMessageByIndex();
  const actualMessage = await androidManager.Messages.GetMessage();
  let result = DateTimeHelper.IsWithinLastMinutes(actualMessage, 3);
  expect(result).to.be.true;
});

When(/^composing a new message for "([^"]*)"$/, async (receiver: string) => {
  await androidManager.Messages.TapAddIcon();
  await androidManager.Messages.SearchAndSelectUser(receiver);
});

When(
  /^select message type "([^"]*)" from the paperclip menu$/,
  async (messageType: MessageType) => {
    await androidManager.Messages.OpenPaperClipMenu();
    await androidManager.Messages.SelectMessageType(messageType);
  }
);

Then(
  /^verify the "([^"]*)" status of "([^"]*)"$/,
  async (status: string, user: string) => {
    const statusOfUser = await androidManager.Messages.GetStatusOfuser();
    expect(statusOfUser).to.equal(status);
  }
);

Then(/^compose a text message "([^"]*)"$/, async (message: string) => {
  if (message === undefined || message === null || message === "") {
    message = faker.lorem.sentence();
  }
  await androidManager.Messages.EnterTextMessage(message);
  m_sentMessage = message;
  await androidManager.Pause();
});

Then(/^click on Send button in pop-up$/, async () => {
  await androidManager.Messages.ClickOnSendButton();
});

Then(/^click on Cancel button in pop-up$/, async () => {
  await androidManager.Messages.ClickOnCancelButton();
});

Then(/^displays members of the team correctly$/i, async (dataTable: any) => {
  const subMenu: string[] = dataTable.rawTable;
  for (let i = 0; i < subMenu.length; i++) {
    expect(
      await androidManager.Messages.IsMembersDisplayed(subMenu[i]),
      subMenu[i] + " is not visible"
    ).to.be.true;
  }
});

Then(/^clicking on \(i\)$/, async () => {
  await androidManager.Messages.OpenMessageDetails();
  await androidManager.Pause();
});

Then(/^add "([^"]*)" as a Recepient$/, async (Recepient: string) => {
  await androidManager.Messages.AddToRecepient(Recepient);
  await androidManager.Pause();
});

Then(/^successfully send message$/, async () => {
  await androidManager.Messages.ClickOnSendMessage();
});

Then(/^"([^"]*)" text displayed above the message$/, async (text: string) => {
  const textToCheck = await androidManager.Messages.CheckUrgentText();
  expect(textToCheck).to.equal(text);
});

Then(/^attach the image$/i, async () => {
  await androidManager.Messages.AllowPermission();
  await androidManager.Pause();
  await androidManager.Messages.ClickPhotoForAttachment();
});

When(/^verify the message receive with attachment$/, async () => {
  await androidManager.Pause();
  await androidManager.Messages.IsImageAttached();
});

Then(/^forward message thread to "([^"]*)"$/, async (userName: string) => {
  await androidManager.Contacts.longPress(200, 300);
  await androidManager.Messages.ForwardMessage();
});

Then(
  /^verify user received the message with "([^"]*)"$/,
  async (MessageText: string) => {
    await androidManager.Messages.OpenMessage(m_sentMessage);
    const actualMessage = await androidManager.Messages.GetMessage();
    expect(actualMessage).to.be.include(MessageText);
  }
);

Then(
  /^able to see the forwarding message for "([^"]*)"$/i,
  async (userName: string) => {
    const msg = await androidManager.Messages.GetPopUpMessage();
    let popupMsg =
      "\n" +
      "The following recipient(s) are forwarding messages" +
      "\n\n" +
      userName +
      " is forwarding to Androidfwd user" +
      "\n\n";
    expect(msg == popupMsg, AssertionHelpers.formatErrorMessage(msg, popupMsg))
      .to.be.true;
  }
);

Then(
  /^able to see the offDuty message for "([^"]*)"$/i,
  async (userName: string) => {
    const msg = await androidManager.Messages.GetPopUpMessage();
    let popupMsg =
      "\n" +
      userName +
      "is off duty and can be overridden." +
      "\n" +
      "Are you sure you want to send? Override for EMERGENCIES ONLY!";
    expect(msg == popupMsg, AssertionHelpers.formatErrorMessage(msg, popupMsg))
      .to.be.true;
  }
);
When(/^select the quick note$/, async () => {
  let message = await androidManager.Messages.SelectQuickNote();
  m_sentMessage = message;
  await androidManager.Messages.ClickOnQuickNote();
});

Then(/^verify user doesnot received the message$/i, async () => {
  await androidManager.Messages.OpenMessageByIndex();
  const actualMessage = await androidManager.Messages.GetMessage();
  expect(actualMessage).not.equal(m_sentMessage);
});

Then(/^Open the message$/i, async () => {
  await androidManager.Messages.OpenMessageByIndex();
});

Then(/^verify user received the message in existing thread$/i, async () => {
  await androidManager.Messages.OpenMessage(m_sentMessage);
  const actualMessage =
    await androidManager.Messages.GetLastMessageInExistingThread();
  expect(actualMessage.ActualMessage).to.equal(m_sentMessage);
});

Then(
  /^receives the message with patient "([^"]*)" attached in existing thread$/i,
  async (patientName: string) => {
    await androidManager.Messages.OpenMessage(m_sentMessage);
    const attachedPatientName =
      await androidManager.Messages.GetAttachedPatient();
    const actualMessage =
      await androidManager.Messages.GetLastMessageInExistingThread();
    expect(attachedPatientName).to.equal(patientName);
    expect(actualMessage.ActualMessage).to.equal(m_sentMessage);
  }
);

Then(/^"([^"]*)" Notify Me message shows up$/, async (text: string) => {
  const textToCheck = await androidManager.Messages.GetNotifyMeText();
  expect(textToCheck).to.equal(text);
});

Then(
  /^Verify the message for "([^"]*)" off duty when it selected with multiple receipient$/i,
  async (receiverName: string) => {
    const msg = await androidManager.Messages.GetPopUpMessage();
    let popupMsg =
      "\n" +
      "The following recipient(s) are currently off duty and can be overridden" +
      "\n" +
      "Are you sure you want to send?" +
      "\n\n" +
      receiverName +
      "\n" +
      "Override for EMERGENCIES ONLY!" +
      "\n\n";
    expect(msg == popupMsg, AssertionHelpers.formatErrorMessage(msg, popupMsg))
      .to.be.true;
  }
);

When(
  /^forward message thread from message list view to "([^"]*)"$/,
  async (user: string) => {
    await androidManager.Messages.longPress(200, 400);
    await androidManager.Messages.ForwardThreadWithAttchment();
    await androidManager.Messages.SearchAndSelectUser(user);
  }
);

Then(/^verify thread has attachment$/i, async () => {
  expect(await androidManager.Messages.VerifyThreadHasAttachment()).to.be.true;
});


Then(/^Verify the message for "([^"]*)" autoforward when it selected with multiple receipient$/i,async ( receiverName: string ) =>{
  const msg = await androidManager.Messages.GetPopUpMessage();
    let popupMsg =
      "\n" +
      "The following recipient(s) are forwarding messages" +
      "\n\n" +
      receiverName +
      " is forwarding to android offdutyconflict" +
      "\n\n";
    expect(msg == popupMsg, AssertionHelpers.formatErrorMessage(msg, popupMsg))
      .to.be.true;
} );


Then(/^Verify the message for "([^"]*)" gatekeeper when it selected with multiple receipient$/i,async ( receiverName: string ) =>{
  const msg = await androidManager.Messages.GetPopUpMessage();
    let popupMsg =
      "This message will also be sent to following users who are currently screening messages: " +
      "\n\n"+ 
      "gatekeeper recipient for " +
       receiverName  +
      "\n";
    expect(msg == popupMsg, AssertionHelpers.formatErrorMessage(msg, popupMsg))
      .to.be.true;
} );


