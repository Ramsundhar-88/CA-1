const express = require('express')
const app = express()
const port = 3000

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.use(express.json())

app.post('/login',(req,res)=>{
    const {username , email , password, dateofbirth} = req.body


    if (!username){
        return res.status(400).json({error:"Email is required"})
    }
    
    if(!email){
        return res.status(400).json({error:"Email is required"})

    }


    if(password.length<8 || password.length >16){
       return res.status(400).json({error:"Password length should be greater than 8 or less than or equal to 16"})

        
    }

    if(!dateofbirth){
        return res.status(400).json({error:"date of birth id cannot be empty"})

    }
    res.json({
        message:"account created sucessfully ",
        data: {username,email,password,dateofbirth}
    })

})










































