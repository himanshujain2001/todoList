//jshint esversion:6

const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const port=3000;

let items=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req,res){
  let options = { weekday: 'long', month: 'long', day: 'numeric' };
  let date=new Date();
  let day=date.toLocaleDateString("en-US",options);

res.render("list",{kindOfDay:day,listItems:items});
});

app.post("/",function(req,res){
  let item=req.body.newitem;
  items.push(item);
 res.redirect("/");
});

app.listen(port,function(){
  console.log("Server is running on port 3000");
});
