/*
File: sophisticated_code.js
Description: A complex and creative JavaScript code implementing a messaging application with advanced features.
*/

// Message class representing a single message
class Message {
  constructor(sender, recipient, timestamp, body) {
    this.sender = sender;
    this.recipient = recipient;
    this.timestamp = timestamp;
    this.body = body;
  }
}

// Conversation class representing a conversation between two users
class Conversation {
  constructor(user1, user2) {
    this.user1 = user1;
    this.user2 = user2;
    this.messages = [];
  }

  addMessage(message) {
    this.messages.push(message);
  }

  getLatestMessage() {
    return this.messages[this.messages.length - 1];
  }

  unreadMessageCount() {
    let count = 0;
    for (let message of this.messages) {
      if (message.recipient === this.user1 && !message.read) {
        count++;
      }
    }
    return count;
  }
}

// User class representing a user in the messaging application
class User {
  constructor(name) {
    this.name = name;
    this.conversations = [];
  }

  startConversationWith(user) {
    const newConversation = new Conversation(this, user);
    this.conversations.push(newConversation);
    user.conversations.push(newConversation);
    return newConversation;
  }

  sendMessage(conversation, body) {
    const timestamp = new Date();
    const message = new Message(this, conversation.user2, timestamp, body);
    conversation.addMessage(message);
    return message;
  }
}

// Create users
const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

// User1 starts a conversation with User2
const conversation1 = user1.startConversationWith(user2);

// User2 sends message to User1
user2.sendMessage(conversation1, "Hello Alice!");

// User1 sends message to User2
user1.sendMessage(conversation1, "Hi Bob!");

// User2 starts a conversation with User3
const conversation2 = user2.startConversationWith(user3);

// User2 sends message to User3
user2.sendMessage(conversation2, "Hey Charlie!");

// Print the latest message in each conversation
console.log("Latest message in conversation1:", conversation1.getLatestMessage().body);
console.log("Latest message in conversation2:", conversation2.getLatestMessage().body);

// Print the unread message count for User1
console.log("Unread messages for User1:", conversation1.unreadMessageCount());

// User1 marks the latest message as read
conversation1.getLatestMessage().read = true;

// Print the updated unread message count for User1
console.log("Updated unread messages for User1:", conversation1.unreadMessageCount());

// More complex code and logic can be added below...
...
...

// End of the code