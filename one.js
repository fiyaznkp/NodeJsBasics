// const http = require('http')
// const port = 8000

// const server =http.createServer((req,res)=>{
//     res.setHeader('Content-Type', 'text/plain')
//   res.write("hello")
//   res.end()
// })

// server.listen(port,((error)=> {
//     if (error){
//         console.log("something went wrong",error)
//     }else{
//         console.log("server is listening in port", port)
//     }
// }))

// var http = require("http");

// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');