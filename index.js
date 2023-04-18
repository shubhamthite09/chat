const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");
const httpServer = http.createServer(app);

const io = new Server(httpServer);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/ui_files/index.html")
})

io.on("connection",(socket)=>{
    socket.on("chat1",(msg)=>{
        io.emit("chat2",msg)
    })
})

httpServer.listen(7890,()=>{
    console.log(7890)
})