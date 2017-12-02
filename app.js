const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const imagesRouter = require('./routers/imagesRouter');
// const usersRouter = require('usersRouter');


app.engine("handlebars",exhbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));


app.get('/',(req,res) => {
  res.render("home");
})

app.use('/images',imagesRouter);

app.use(express.static(__dirname+"/public"));

app.listen('1000',(err) => {
  if(err){
    console.error(err);
  } else {
    console.log("welcome to app");
  }
})


mongoose.connect("mongodb://localhost/techkidshotgirl",(err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("welcome to app");
  }
})
