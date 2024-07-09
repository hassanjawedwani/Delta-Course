const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const Chat = require('./Models/chat');

const methodOverride= require('method-override');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"))

const mongoose = require('mongoose');
const { name } = require('ejs');
const ExpressError = require('./ExpressError');

main().then(()=>{
  console.log("Connection of Server with database at port 27017 is established")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsap");
}

app.listen(port, () => {
  console.log("Server is listening at port 8080")
});

// wrap


function asyncWrap(fn) {
  return function(req, res, next) {
    fn(req, res, next).catch(err => next(err));
  }
}

// Routes

app.get("/", (req, res) => {
  res.send("root directory");
})

app.get("/chats",asyncWrap(async (req, res, next) => {
  const chats = await Chat.find();
  res.render("chats", {chats});
}));

app.get("/chats/new", (req, res) => {
  res.render("new");
})

app.post("/chats", asyncWrap(async (req, res) => {
  const {from, to, message} = req.body;
  const newChat = new Chat({
    from: from,
    to: to,
    message: message,
    createdAt: new Date(),
  });
  newChat.save().then(()=>res.redirect("/chats")).catch(err=>console.log(err));
}));


app.get("/chats/:id/edit", asyncWrap(async (req, res, next)=>{
  const {id} = req.params;
  const chat = await Chat.findById(`${id}`);
  if (!chat) {
    next(new ExpressError(402, "chat not found"));
  }
  res.render("edit", {chat});
}));


app.put("/chats/:id",asyncWrap(async(req, res, next)=>{
  const {id} = req.params;
  const {from, to, message} = req.body;
  const updatedChat = {
    from: from,
    to: to,
    message: message,
    createdAt: new Date(),
  };
  Chat.findByIdAndUpdate(`${id}`, updatedChat, {runValidators: true} ).then(()=>res.redirect("/chats")).catch(err=>console.log(err));
}))

app.delete("/chats/:id",asyncWrap(async (req, res)=>{
  const {id} = req.params;
  Chat.findByIdAndDelete(`${id}`).then(()=>res.redirect("/chats"));
}));



// Error handler middleware

app.use((err, req, res, next) => {
  if(err.name === "CastError") {
  console.log("fuck you");
  }
  next(err);
})

app.use((err, req, res, next) => {
  const {status = 500, message = "some error occured"} = err;
  res.status(status).send(message);
})