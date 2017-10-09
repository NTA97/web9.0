const express = require('express');
const path = require('path');
//const outputFileName = "test.json";


  let app = express();
  app.get('/',(req,res) =>{
    console.log(__dirname);
    res.sendFile(__dirname + "/public/index.html")
  });

  app.get('/style.css',(req,res) =>{
    res.sendFile(__dirname +"/public/style.css")
  })

  app.get('/testhtml',(req,res) => {

    let test = 5;
    let es5String = "abc" + test.toString() + "adas";
  //  let es6String = 'abc' + ${test}$ + 'adas';
  })

  app.get('/menu',(req,res) =>{
    console.log(__dirname);
    res.sendFile(__dirname + "/public/cv.html")
  })



  app.get("/about",function(req,res){
    res.send("Iam tu anh");
  })
  app.listen(6969, (err) =>{
    if (err) {
      console.log(err);
    } else {
      console.log("website is up");
    }
  })
