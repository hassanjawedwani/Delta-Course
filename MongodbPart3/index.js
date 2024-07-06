// setting up server using express

const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log("Server is listening at port 8080")
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setting up paths for server
app.get("/", (req, res) => {
  res.send("Server found get request from home page");
})

// setting up mongoose
const mongoose = require('mongoose');
const Chat = require('./Models/chat');
main().then(()=>{
  console.log("Connection of Server with database at port 27017 is established")
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsap");
}

const chat1 = new Chat({
  from: "iqra",
  to: "smina",
  message: "send your cv",
  createdAt: new Date()
});

chat1.save().then((res) => console.log(res)).catch(err => console.log(err));