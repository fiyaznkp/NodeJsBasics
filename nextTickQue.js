// it is one of the que comes under micro task que

// it is used for handling nexttick callbacks

// process.nextick method is used for queing in nexttick

// syntax process.nextTick(()=>{
   // console anything
//})

// console.log("one")

// process.nextTick(()=>{
//     console.log("two")
// })

// console.log("three")

/* next tick ques are dicouraged it is mainly used in 2 occasions

1. to allow users to handle errors , to cleanup any unneeded resources 

2.to allow a callback to run after the callstack has unwound but before the event loop continues */