const express = require('express');
const ExpressError = require('./ExpressError');

const app = express();         

const port = 8080;

app.listen(port, ()=>{
  console.log(`Server is listening at port ${port}`);
});



// Middlewares
const shieldForApi =  (req, res, next) => { 
  const {token} = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "Api access denied");
};


// Routes
app.get("/api", shieldForApi, (req, res) => {
  console.log("Route: /api path");
  res.send("Here is your api data")
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Admin access denied")
})

app.get("/*", (req, res) => {
  res.send("Error: 404 (page not found)");
});

// Error Hanlder Middlewares

app.use((err, req, res, next) => {
  // console.log("custom error handler found a error generated from class error handler and  is working and fowarding error to express default handler");
  // next(err);

  console.log("custom error handler found a error generated from class error handler and  is working and fowarding error client");
  const {status = 500 , message = "some error occured"} = err;
  res.status(status).send(message);

});