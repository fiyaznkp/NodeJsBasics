/* 
incase of setTimeout if we give zero as timeout there will be no consistancy when running timeout que and i/o que 

in first case i/o eg fs.write comest first and in next the timeout comes first this repeats.

*/

// const fs = require("fs")

setTimeout(()=> console.log("time"),5000)
console.log("hai")

// fs.readFile("./file.text",()=>{
//     console.log("read")
// })