const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  console.log("Connected to Database");
}

main().catch(err => console.log("Error occured in connection with database: ", err));

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number
});

const Order = mongoose.model("Order", orderSchema);

// const addOrders = async() => {
//   await Order.deleteMany({});
//   const res = await Order.insertMany([
//     { item: "Samosa", price: 40 },
//     { item: "Chips", price: 50 },
//     { item: "Chocolate", price: 100 }
//   ]);
//  console.log(res);
// }

// addOrders().catch(err => console.log(err));

module.exports = Order;