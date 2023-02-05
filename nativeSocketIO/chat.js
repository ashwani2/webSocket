const express = require("express");
const socketio = require("socket.io");
const app = express();

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

const io = socketio(expressServer, {
  path: "/socket.io",
  serveClient: true,
});

io.on("connection", (socket) => {
  socket.emit("messageFromServer", { data: "This is message from server" });

  socket.on("messageToServer", (dataFromClient) => {
    console.log(dataFromClient);
  });

//   socket.on("ping", () => console.log("ping"));

//   setInterval(() => socket.emit("ping"), 1000);
  socket.on("newMessageToServer",(msg)=>{
    console.log(msg)
    io.emit('messageToClients',{text:msg.text})   // we have used io because we wanted to send this to all clients connected to that socket
  })

});
