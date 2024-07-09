const express = require("express");
const ExpressError = require("./expressError");

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

app.get("/admin", (err, req, res, next) => {
  throw new ExpressError(403, "admin don't have access");
})


app.get("/err", (req, res) => {
  abcd = abcd;
  res.send("abcddddd error");
})


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
  throw new ExpressError(401, "motherfucker Access Denied");
}

app.get("/api", checkToken,  (req, res) => {
  res.send("here is api data");
})


// app.use("/*", (req, res) => {
//   res.send("error 404")
// })

// app.use((err, req, res, next) => {
//   console.log("------Error-------")
//   let {status=500, message="some error occured"} = err;
//   res.status(status).send(message);
// });

// app.use((err, req, res, next) => {
//   console.log("-------Error 2----------");
//   next(err);
// })

