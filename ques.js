// nexttick

process.nextTick(()=>{
    console.log('nexttick')
})

// promise

Promise.resolve().then(()=>{
    console.log('promise')
})

setTimeout(()=>{
    console.log("timeout")
})

setImmediate(()=>{
    console.log("check")
})