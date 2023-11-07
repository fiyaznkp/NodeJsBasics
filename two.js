const http =require("http")
const port = 8000

const server = http.createServer(function(req,res){
    res.write('hello')
    res.end()
})

server.listen(port, function(error){
    if(error){
        console.log("something went wrong", error)
    }
    else{
        console.log("server is listening to" + port)
    }
})