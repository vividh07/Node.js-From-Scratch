  const express = require("express")


const app = express()

app.get('/',(req,res)=>{
     res.send("Hello Welcome to the Home Page")
})

app.get('/about',(req,res)=>{
     res.send("Hello Welcome to the About Page")
})


app.listen(8000,()=>{
    console.log("started");
   
})


// const myServer  = http.createServer(app)

// myServer.listen(8000,()=>{
//     console.log("started");
    
// })