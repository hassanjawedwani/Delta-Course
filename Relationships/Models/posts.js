const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  console.log("Connection Successful");
}

main().catch(err => console.log("Error in connection with database: ", err));


const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

const User = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema ({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

});

const Post = mongoose.model("Post", postSchema);



// const addData = async() => {
//   const user = new User({
//     username: "hassanjawedwani",
//     email: "hassanjawedwani@gmail.com"
//   }); 

//   const post = new Post({
//     content: "Hello World",
//     likes: 7,
//   });

//   post.user = user;
//   await post.save();
//   await user.save();
// };

// addData().catch(err => console.log("Error in addData function: ", err));


// const addData = async() => {
//   const user =await User.findOne({username: 'hassanjawedwani'});

//   const post = new Post({
//     content: "fucking World",
//     likes: 0,
//   });

//   post.user = user;
//   await post.save();
// };

// addData().catch(err => console.log("Error in addData function: ", err));


const showPosts = async() => {
  const posts = await Post.find({}).populate("user");
  console.log(posts);
}

showPosts().catch(err => console.log("Error in showPosts: ", err));