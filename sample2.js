//1. for creating an event

// const events = require("events")

// const event = new events()

// event.on("self introduction",()=>{
//     console.log("he is introducing himself")
// })


// event.emit("self introduction")

//2.for creating a server

// const http = require("http")

// http.createServer((req,res)=>{
//     res.write("hii good morng")
//     res.end()
// })

// .listen("5173",()=>{
//     console.log("server is runing in port number 5173")
// })

//3.for reading a file

// const fs = require("fs")

// fs.readFile("./file.text","utf-8",(err,data)=>{
//   if(err){
//     console.log(err)

//   }
//   else{
//     console.log(data)
//   }   
// })

// const fs = require("fs")

// const read =fs.readFileSync("./file.text","utf-8")
// console.log(read)

//3. for writing a file 

// const fs = require("fs")

// fs.writeFile("./file.text","hii all", (err)=>{
//   if(err){
//     console.log(err)
//   }
// })