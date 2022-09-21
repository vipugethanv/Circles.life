const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
app.listen(port,()=>{
    console.log("Server Connected");
})

const email="admin@circles.asia";
const password="circles111";

app.post('/user-service/login',(req,res)=>{
    const usermail=req.body.usermail;
    const userpassword=req.body.userpassword;
    
        if(email==usermail && password==userpassword)
    {
        
        return res.status(200).send("Login Success");
        
    }else{
        
        return res.sendStatus(400);
    }
  
 
})

app.get('/user-service/user-details',(req,res)=>{

    
    const details=req.body;
    return res.status(200).json(details)

})