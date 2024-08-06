const fs = require("fs")

// to write in a file

// fs.writeFileSync("./File_handling/test.txt","hey there how are you")   //it is for sync
// fs.writeFileSync("./File_handling/test.txt","hello ",(err)=>{})       // for async


// to read a file 

//   const result =  fs.readFileSync("./File_handling/test.txt","utf-8")  //for sync
//   console.log(result);

// fs.readFile("./File_handling/test.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("there is an error");
//     }
//     else{                                                              // for async
//         console.log(result);
//     }
// })


// to write data in a file wihtout overwriting 
// fs.appendFileSync("./File_handling/test.txt"," hi this is appended")    // sync
// fs.appendFile("./File_handling/test.txt","this is for async append",()=>{})    // async



// to make a copy of a file to another file

// fs.cpSync("./File_handling/test.txt","./File_handling/copy.txt")    // sync



// to delete a file

// fs.unlinkSync("file name")   // sync



