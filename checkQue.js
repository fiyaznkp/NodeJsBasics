// it works according set immeidate call back function

setImmediate(()=>{
    console.log("hello")
})

const fs = require("fs")

fs.readFile("./file.text",()=>{
    console.log("hai")
})

// here first setImidiate is displayed because in case setImidiate callback executes soon after poll phase