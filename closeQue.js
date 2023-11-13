// it is the last que in the event loop 

// const fs = require("fs")

// const file= fs.createReadStream("./file.text")
// file.close()

// file.on("close",()=>{
//     console.log("close")
// })

// const fs = require("fs")

// const readfile = fs.createReadStream("./file.text")
// readfile.close()

// readfile.on("close",()=>{
//     console.log("hello")
// })

const fs= require("fs")

 const readfile = fs.createReadStream("./file.text")
readfile.close()

readfile.on("close",()=>{
    console.log("hai")
})