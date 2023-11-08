// fs for writing files

//1 synchronous way
// const fs = require("fs")

// fs.writeFileSync("./files1.text", "hello")

const fs = require('fs')

fs.writeFileSync("./files1.text" , " how are you",{flag:"a"})

//2. asynchronous way

// const fs = require('fs')

// fs.writeFile("./file.text" ,"hai all hello", (error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("written sucessfully")
//     }
// })

// const fs = require("fs")

// fs.writeFile("./files.text","i am fiyaz", (err)=> {
//     if(err) {
//         console.log(err)
//     }else{
//         console.log("written suceesfully")
//     }
// })