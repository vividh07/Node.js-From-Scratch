const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} \n`;
  const myUrl = url.parse(req.url)
  console.log(myUrl);
  
  fs.appendFile("./URL_handling/log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("About Page");
        break;
      case "/social":
        res.end("Social Page");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server listening at port : http://localhost:8000");
});
