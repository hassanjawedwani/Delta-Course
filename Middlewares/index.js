const express = require("express");

const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`Server is listening at port ${port}.`);
});

// app.use((req, res, next) => {
//   console.log("Hi i am middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi i am 2nd middleware");
//   next();
// });


// app.use((req, res, next) => {
//   req.time = new Date();
//   console.log(req.method , req.hostname, req.path, req.time );
//   next();
// });
// app.use("/api", (req, res, next) => {
//   const {token} = req.query;
//   if (token === "giveaccess") {
//     next();
//   }
//   res.send("Access Denied");
// })

app.use("/random", (req, res, next) => {
  console.log("hi i'm middleware for random page");
  next();
});

app.get("/", (req, res) => {
  console.log("root directory");
  res.send("Server found a get request from main directory");
});


app.get("/random", (req, res) => {
  console.log("random directory");
  res.send("Server found a get request from random directory");
});

const checkToken = (req, res, next) => {
  const {token} = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new Error("Access Denied");
}

app.get("/api", checkToken,  (req, res) => {
  res.send("here is api data");
})

app.use( (req, res) => {
  res.send("error 404")
})