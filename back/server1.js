const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const port=7000

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/sample")

const userSchema = new mongoose.Schema({
    
        username: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
       
    })
const userModel= mongoose.model("user",userSchema)


// create

app.post("/login", async (req,res)=>{
    try{
        const {username,password}=req.body
        const cr=await userModel.create({username,password}) 
        console.log(cr)
        res.status(200).json(cr)
    }
    catch(err){
        console.log(err)
        res.status(500).json("server error")
    }
})




app.listen(port,()=>{
    try{
       console.log(`server running on port ${port} and db created`)
    }
    catch{
        console.log("db not created")
    }
})