const mongoose = require("mongoose");
const Order = require("./orders.js")
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  console.log("Connected to Database");
}

main().catch(err => console.log("Error occured in connection with database: ", err));

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
});

const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async() => {
//   const customer = new Customer({
//     name: "Rahul",
//   });
//   const order1 = await Order.findOne({item: "Chips"});
//   const order2 = await Order.findOne({item: "Samosa"});
//   customer.orders.push(order1);
//   customer.orders.push(order2);
//   let res = await customer.save()
//   console.log(res);
// }

// addCustomer().catch(err => console.log(err));


const findCustomer = async() => {
  const customersData = await Customer.find({}).populate("orders");
  console.log(customersData[0]);
}

findCustomer().catch(err => console.log(err));