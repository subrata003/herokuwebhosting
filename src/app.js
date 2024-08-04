const express=require("express")
const path=require("path")
const hbs=require("hbs")
const app=express()
const port= process.env.PORT || 8000

const staticpath=path.join(__dirname,"../public")
const temp_path=path.join(__dirname,"../templets/views")
const partial_path=path.join(__dirname,"../templets/partials")



app.set("view engine","hbs")
app.set("views",temp_path)
hbs.registerPartials(partial_path)

app.use(express.static(staticpath)) //staic web
app.get("/",(req,res)=>{
 res.render("index")
})
app.get("/about",(req,res)=>{
 res.render("about")
})
app.get("/weather",(req,res)=>{
 res.render("weather")
})
app.get("*",(req,res)=>{
 res.render("404error",{
  error:"Opps! Page Not Found"
 })
})
app.listen(port,()=>{
 console.log("done");
 
})