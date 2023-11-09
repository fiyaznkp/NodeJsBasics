// fs refers to file system 


//1 reading file synchronously



 const fs = require("fs")

 const file = fs.readFileSync("./files1.text","utf-8")

 console.log(file)

// const fs = require("fs")

// const file = fs.readFileSync('./file.text')

// console.log(file)  here it gives a output of binary value

// const fs = require("fs")

// const file = fs.readFileSync("./file.text","utf-8")

// console.log(file) now after adding utf-8 it shows the real one

// const fs =require("fs")

// const file = fs.readFileSync("./file.text" , "utf-8")

// console.log(file)

// const fs = require("fs")

// const file = fs.readFileSync("./file.text","utf-8")

// console.log(file)

// const fs = require("fs")

// const file = fs.readFileSync("./file.text","utf-8")

// console.log(file)

// const fs = require("fs")

// const file = fs.readFileSync("./file.text", "utf-8")

// console.log(file)


//2 reading file asynchronously

// const fs = require("fs")

// fs.readFile("./file.text", "utf-8" , (error,data)=> {
//    if (error) {
//     console.log(error)
//    }
//    else{
//     console.log(data)
//    }
// })


// const fs = require("fs")

// fs.readFile("./file.text" , "utf-8" , (error,data) => {
//     if(error) {
//         console.log(error)

//     }else{
//         console.log(data)
//     }
// })


// const fs = require("fs")

// fs.readFile("./file.text", "utf-8" , (error,data)=>{
//     if(error){
//         console.log(error)

//     }else{
//         console.log(data)
//     }
// })


// const fs = require("fs")

// fs.readFile("./file.text" ,"utf-8" ,(error,data) => {
//     if(error) {
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })