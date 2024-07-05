const mongoose = require('mongoose');

main().then(() => console.log("connection Established"));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title : {
    type: String,
    required : true,
    maxLength: [8,"fuck lenggt"]
  },
  category: {
    type: String,
    enum: ['fiction', 'non-fiction'],
    required: true
  },
  price : {
    type: Number
  },
  discount : {
    type: Number,
    default: 10
  }
});


const Book = mongoose.model("Book", bookSchema);

// const book3 = new Book({
//   title: "as]2da",
//   category: "fiction",
//   price: 1000
//   })

// book3.save().then(res => {
//   console.log(res);
//   });


Book.findByIdAndUpdate('66881088b7f02694a4547ff6', {title: "asfddddddddhjjd"}, {runValidators: true}).then(res => console.log("hello",res))