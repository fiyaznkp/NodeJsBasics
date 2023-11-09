// it is a part of libuv

// it is a c program

// it is a pattern that cordinates the execution of  asynchronous operations in node js

// it helps in non blocking of codes in node js

// there are 6 ques in event loop each que has a call back function , the type of call back functions are different for each of them

//1.timer que  eg: setTimeout,setinterval

//2.close que eg: close handlers

//3.I/O que  eg:I/O call backs which has all async operations like fs and http

//4.check que eg setImidiate 

// both nextTick and promise comes under microtask que

//5.nextTick que eg: process.nextTick

//6.promise que eg: promise 

// here other 2 microtasks all others are part of libuv