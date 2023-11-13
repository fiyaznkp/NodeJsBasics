//1.how to create a server

// const http = require("http") 

// const server = http.createServer((req,res)=>{
//     res.write("hello")
//     res.end()
// })

// server.listen("3000",()=>{
//     console.log("hai")
// })

// const http = require("http")


// http.createServer((req,res)=>{
//     res.write("hello")
//     res.end()
// })
// .listen("3000")

//2. how to read a file synchronously

// const fs = require("fs")

// const readfile = fs.readFileSync("./file.text","utf-8")

// console.log(readfile)

//3.how to read a file asynchronously

// const fs = require("fs")

//  fs.readFile("./file.text","utf-8", (error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

//4.how to write in a file synchronously

// const fs = require("fs")

//  fs.writeFileSync("./file.text","i am a man")

//5.how to write a file asynchronously

// const fs = require("fs")

// fs.writeFile("./file.text", "hi am fiyaz", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("writen sucessfuly")
//     }
// })

// const fs = require("fs")

// fs.writeFile("./file.text","hii am fiyaz ", (err)=>{
//     if(err){
//         console.log(err)
//     }
// })

//6.how to update a file without removing the already written text synchronously

// const fs = require("fs")

// fs.writeFileSync("./file.text" ,"hii i am tony",{flag:"a"})

//7. how to write in asynchronous way

// const fs = require("fs")

// fs.writeFile("./file.text","hii i love you",{flag:"a"}, (err)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log("written sucessfully")
//   }
// })

//8.how to create an event synchronously

//9. how to create a append file in asynchronous way

// const fs = require("fs")

// fs.writeFile("./file.text","i am from koduvally",{flag:"a"},(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

//10. for deleting a file 

// const fs = require("fs")

// fs.unlink("./files1.text",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })