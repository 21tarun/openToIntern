const express= require('express')
const app=express()
const mongoose=require('mongoose')
const route=require('./routes/route')


app.use(express.json())
mongoose.set('strictQuery',true)  // to handle deprication error of mongodb

mongoose.connect("mongodb+srv://tarun21:tarun1616@cluster0.h0l8mir.mongodb.net/group11Database",{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err.message))


app.use('/',route)


app.listen(3000,function(){
    console.log("server is running on "+3000)
})