const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

var routes = require('./route/routes');

const app = express()
mongoose.set('strictQuery', false);

app.use(cors(
  {
    origin: "http://localhost:4200"
  }

));

mongoose
  .connect("mongodb://localhost:27017/gbs")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(routes);

app.listen(9992,function check(err)
{
    if(err){

      console.log("error")
      console.log("Error Connecting to DB");
    }
    else{

      console.log("started")
      console.log("successfully Connected to DB");
    }
});
