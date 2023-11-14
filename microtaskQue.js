
/*
working of event loop 

1.in event loop always first priority for microtask ques 

2.among microstask first priority goes for nexttick que then promise 

3.after this it goes to timer que and then again to microtask

4.then it directlt goes to i/o que then again to microtask 

5.then to check que and then again to microque

6.then to close and then again to micro que

here finishes a loop 

*/

// Promise.resolve().then(()=>{
//     console.log("one")
//     console.log("two")
// })

// process.nextTick(()=>{
//     console.log("three")
//     console.log("four")
// })

process.nextTick(()=>{
    console.log("one")
})
process.nextTick(()=>{
    console.log('two')

    process.nextTick(()=>{
      console.log("three")  
    })
}

)

process.nextTick(()=>{
    console.log("four")
})

Promise.resolve().then(()=>{
    console.log("five")
})

Promise.resolve().then(()=>{
    console.log("six")

    Promise.resolve().then(()=>{
        console.log("seven")
    })
})

Promise.resolve().then(()=>{
    console.log("eight")
})