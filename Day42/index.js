const express = require('express')
const mysql = require('mysql2');
const path = require('path');

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '123456'
});

const port = 8080;
const app = express();
app.listen(port, () => {
  console.log("Server is Listing...");
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());
app.use(express.raw())




// app.get("/", (req, res) => {
//   const q = "SELECT COUNT(*) FROM user";
//   try {
//     connection.query(q, (err, result) => {
//       res.send(result[0]);
//     })
//   } catch(err) {
//     console.log(`error: ${err} occured`);
//   }
// })

// app.get("/user", (req, res) => {
//   const q = `SELECT id, username, email FROM user`
//   try {
//     connection.query(q, (err, result) => {
//       if(err) throw err;
//       res.render("user", {result});
//     })
//   } catch(err) {
//     console.log(err);
//   }
// });

// app.patch("/user/:id", (req, res) => {
//   const {id} = req.params;
//   const {username} = req.body;
//   const q = `UPDATE user SET username = ? where id = "00b843b9-ed49-4bf7-9381-c5a4ab9a24b4"`;
//   try {
//     connection.query(q, username, (err, result) => {
//       console.log(result)
//       res.send("updated Successfully");
//     })
//   } catch(err) {
//     console.log(err);
//   }
// });

// const {v4: uuidv4} = require('uuid');
// app.post("/user", (req, res) => {
//   const { username, email, password} = req.body;
//   const data = [uuidv4(), username, email, password];
//   const q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
//   try {
//     connection.query(q, data, (err, result) => {
//       if(err) throw err;
//       console.log(result)
//     })
  
//   } catch (err) {
//     console.log(err);
//   }
// });


app.delete("/user/:id", (req, res) => {
  const {id} = req.params;
  const q = `DELETE FROM user Where id = ?`;
  try {
    connection.query(q, id, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send("success");
    })
  } catch(err) {
    console.log(err);
  }
});












// import {faker} from '@faker-js/faker';
// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// }
// const arr = [];
// for (let i = 0; i< 100; i++) {
// arr.push((getRandomUser()))
// }
    

// const q = `INSERT INTO user (id, username, email, password) VALUES ?`;
// connection.query(q, [arr], (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log(result);
// });

// connection.end();