const http=require("http")
const socketio=require("socket.io")


const server=http.createServer((req,res)=>{
    res.end("I am connected")
})

const io=socketio(server,{cors: {
    origin: '*',
  }})


io.on('connection',(socket,req)=>{

   // ws.send beacuse socket.emit
    socket.emit('welcome',"Welcome to the webSocket server")
    //no change here
    socket.on('message',(msg)=>{
        console.log(msg)  // in native data is an array of buffer
    })
})

server.listen(8000)