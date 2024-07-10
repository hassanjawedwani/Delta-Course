const mongoose = require("mongoose");
// const express = require('express');

// const app = express();
// const port = 8080;
// app.listen(port, () => {
//   console.log(`Server is listening at port ${port}`);
// });



async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  console.log("Connected to Database");
}

main().catch(err => {console.log(err)});

const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String
    }
  ]
});

const User = mongoose.model("User", userSchema);

const addUser = async() => {
  try {
    const user = new User({
      username: "John",
      addresses: [
        { 
          location: "22B street downtown",
          city: "California"
        },
      ],
    });
    user.addresses.push({ location: "22F Road Town", city: "fsintay"});
    const result = await user.save();
    console.log(result);
  } catch(err) {
    console.log("Error occured: ", err);
  }
}

addUser().catch(err => console.log("Error in addUser function: ", err));





// const { Schema } = require("mongoose");
// const mongoose = require("mongoose");

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
//   console.log("Connected to MongoDB");
// }

// main().catch(err => console.log("Error connecting to MongoDB:", err));

// const userSchema = new Schema({
//   username: String,
//   addresses: [
//     {
//       location: String,
//       city: String
//     }
//   ]
// });

// const User = mongoose.model("User", userSchema);

// const addUser = async () => {
//   try {
//     const user = new User({
//       username: "John",
//       addresses: [
//         { 
//           location: "22B street downtown",
//           city: "California"
//         },
//       ],
//     });

//     user.addresses.push({ location: "22F Road Town", city: "fsintay" });
//     const result = await user.save();
//     console.log(result);
//   } catch (err) {
//     console.log("Error adding user:", err);
//   }
// };

// addUser().catch(err => console.log("Error in addUser function:", err));
