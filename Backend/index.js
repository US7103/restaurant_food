const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
const cors=require('cors');
app.use(cors());

 


  app.get('/',(req,res)=>{
    const fp=path.join(__dirname,"data","data.json");
    
    fs.readFile(fp,"utf-8",(err,jsondata)=>{
      res.json(JSON.parse(jsondata));
    })

  })



app.listen(4000,(err)=>{

  if(err){
    console.log(err); 
  }else{
  console.log("Sever running at port 4000....");
  }
  
})