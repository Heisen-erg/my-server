const express = require("express");
const Data = require("./schema")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();

app.use(cors({credentials:true,origin:"https://heisenberg.in.net"}));
app.use(express.json());

app.get("/",(req,res) => {
  res.json({yoyo:"yiyiyi"})
})
app.post("/r", async (req,res) => {
  await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    try{const{ name,email} = req.body
   if(!name){
     res.json({error:"name cannot be empty"})
   }
    const exist = await Data.findOne({email})
   if(exist){
    res.json({error:"email is already registered"})
   }
   const user = Data.create(req.body)
   res.json({message:"successfully registered"})
  }catch(error) { console.log(error)}
})



app.listen(4000,() => console.log("running"));