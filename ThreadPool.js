// libuv's thread pool has size of maximum  4 threads as default if a 5th thread is there it must wait for the completion of first one 

// we can increase the size of thread pool 

// syntax => process.env.UV_THREADPOOL_SIZE = wanted size 

// process.env.UV_THREADPOOL_SIZE 

// asynchronous
// const fs = require("fs")

// console.log("start")

// fs.readFile("./file.text" , "utf-8", (err,data)=>{
//     console.log("file reading")
// })

// console.log("end")

// it helps the main thread to run efficiently without any delay

//synchronous


// const fs = require("fs")

// const file = fs.readFileSync("./file.text" ,'utf-8')


// console.log(file)

