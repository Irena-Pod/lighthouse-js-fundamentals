/*Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1 */

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


let facebookProfile = {
  name: "Irena",
  friends: 300,
  messages: ["My first post.", "My second post.", "My third post."],
  postMessage: function (msg) {
     this.messages.push(msg);
     console.log(this.messages);
  },
  deleteMessage: function (index) {
    this.messages.splice(index, 1);
    console.log(this.messages);
    },
  addFriend: function () {
    this.friends += 1;
    console.log(this.friends);
    },
  removeFriend: function () {
    this.friends -= 1;
    console.log(this.friends);
  }
};


facebookProfile.postMessage("Post 5.");
facebookProfile.deleteMessage(0);
facebookProfile.addFriend();
facebookProfile.removeFriend();
