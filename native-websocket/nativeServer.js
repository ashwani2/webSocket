const http=require("http")
const webSocket=require("ws")
const server=http.createServer((req,res)=>{
    res.end("I am connected")
})
const wss=new webSocket.WebSocketServer({server})

// wss.on('headers',(headers,req)=>{
//     console.log(headers)             // It will show the headers protocols
// })


wss.on('connection',(ws,req)=>{
    ws.send("Welcome to the webSocket server")
    ws.on('message',(data)=>{
        console.log(data.toString())  // in native data is an array of buffer
    })
})

server.listen(8000)
