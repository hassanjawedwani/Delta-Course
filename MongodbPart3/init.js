const mongoose = require('mongoose');

const Chat = require('./Models/chat');

main().then(()=>{
  console.log("Connection of Server with database at port 27017 is established")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsap");
}

const allChats = [
  {
    from: "iqra",
    to: "smina",
    message: "send your cv",
    createdAt: new Date("2023-01-01T10:00:00")
  },
  {
    from: "john",
    to: "jane",
    message: "please review the document",
    createdAt: new Date("2023-02-15T12:30:00")
  },
  {
    from: "alice",
    to: "bob",
    message: "meeting rescheduled to 3 PM",
    createdAt: new Date("2023-03-20T14:00:00")
  },
  {
    from: "charlie",
    to: "dave",
    message: "can you send the report?",
    createdAt: new Date("2023-04-05T09:45:00")
  },
  {
    from: "eve",
    to: "frank",
    message: "let's catch up for lunch",
    createdAt: new Date("2023-05-10T13:15:00")
  },
  {
    from: "grace",
    to: "heidi",
    message: "project deadline extended",
    createdAt: new Date("2023-06-25T16:00:00")
  },
  {
    from: "ivan",
    to: "judy",
    message: "happy birthday!",
    createdAt: new Date("2023-07-30T08:00:00")
  },
  {
    from: "ken",
    to: "laura",
    message: "can you join the call at 4?",
    createdAt: new Date("2023-08-18T11:30:00")
  },
  {
    from: "mallory",
    to: "nancy",
    message: "please approve the request",
    createdAt: new Date("2023-09-22T15:00:00")
  },
  {
    from: "oscar",
    to: "peggy",
    message: "check out this link",
    createdAt: new Date("2023-10-05T17:45:00")
  }
];

Chat.insertMany(allChats).then(()=>console.log("chats uploaded successfully"));