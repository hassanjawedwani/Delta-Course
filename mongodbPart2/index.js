const mongoose = require('mongoose');

main().then(() => {
  console.log("Conection Successful");
}).catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});


const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema); // class|template created 

// const user3 = new Employee({
//   name: "aaaadam",
//   email: "aaadaam@123.com",
//   age: 28
// });

// user3
//   .save()
//   .then(()=> {
//     console.log("success");
//   })
//   .catch(err => {
//     console.log(err);
//   });


// User.insertMany([
//   {
//     name: "hassan",
//     email: "hassan@123.com",
//     age: 28
//   },
//   {
//     name: "numan",
//     email: "numan@123.com",
//     age: 18
//   },
//   {
//     name: "sohail",
//     email: "sohail@123.com",
//     age: 38
//   },
// ]).then(res => {
//   console.log(res);
// });

// User.findById('6687eb727cef8dcdd14eb036').then(res => console.log(res));

// User.updateMany({age: 18}, { name: "SohailJawed"})
//     .then(res =>{
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     });

// User.findByIdAndUpdate({_id: '6687eb727cef8dcdd14eb036'}, {name: "bra brah"}, {new: true})
// .then(res => {
//   console.log(res);
// }). catch(err => console.log(err));

// User.findByIdAndDelete({_id: '6687eb727cef8dcdd14eb034'}).then(res => console.log(res));