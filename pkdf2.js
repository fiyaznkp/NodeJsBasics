// the primary use of pkdf2 is securely storing the password of users

const crypto = require("crypto")

process.env.UV_THREADPOOL_SIZE = 5

const maxCalls =8

const start = Date.now()

for(let i =0; i<maxCalls ;i++) {
    crypto.pbkdf2("password", "salt", 10000 , 512, "sha1", ()=>{
        console.log(`Hash: ${i+1}`, Date.now()-start)
    })
}