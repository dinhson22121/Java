var express = require("express");
var app = express();
var port = 1456;
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
});
//-------------------------------------
app.listen(port, () => {
    console.log("Server listen on port : ", port);
  });
  