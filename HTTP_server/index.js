const http = require("http")
const fs = require('fs')

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()} \n`
fs.appendFile("./HTTP_server/log.txt",log,(err,data)=>{
    switch(req.url){
        case '/' : res.end("Home Page")
        break;
        case '/about' : res.end("About Page")
        break;
        case '/social' : res.end("Social Page")
    }


})
})

myServer.listen(8000,()=>{
console.log("server listening at port : http://localhost:8000");
})
