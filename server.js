const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/item");
const cors =  require('cors');
const path = require('path');
const app = express();

app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());

// db config
const db = require("./config/keys").mongoURI;

// Connecting to db
mongoose
  .connect(db)
  .then(() => {
    console.log("connected with mongo....");
  })
  .catch((err) => {
    console.log(err);
  });

// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// use routes
app.use("/api/items", items);

//   running server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("S E R V E R R U N N I N G O N 5 0 0 0");
});
