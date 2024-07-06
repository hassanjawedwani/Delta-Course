const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const Chat = require('./Models/chat');

const mongoose = require('mongoose')
main().then(()=>{
  console.log("Connection of Server with database at port 27017 is established")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsap");
}

app.listen(port, () => {
  console.log("Server is listening at port 8080")
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("root directory");
})

app.get("/chats", async (req, res) => {
  const chat = await Chat.find();
  console.log(chat)
  res.send("chat directory");
})