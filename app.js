const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date=require(__dirname+"/date.js");

var items=["Buy Food","Cook Food","Eat Food"];
let workitems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res) {
let day=date.getdate();
  res.render("list", {
    listTitle: day,newListItems:items
  });
});
app.post("/",function(req,res){
  let item=req.body.newItem;
  if(req.body.list==="work"){
    workitems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }


});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"work list ",newListItems:workitems});
});
app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("server is working at port 3000");
});
