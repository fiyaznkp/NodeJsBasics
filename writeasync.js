

// const fs = require("fs")

// fs.writeFile("./file.text","today is monday",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

const fs = require("fs")

fs.writeFile("./file.text"," tommorow is wednesday",{flag:"a"},(err)=>{
    if(err){
        console.log(err)
    }
})