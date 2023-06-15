const express = require("express");
const router = require("./users/usersRouter");
const server = express();
server.use(express.json());
server.use("/api", router);


server.get("/", (req,res)=>{
    res.send("hello from server");
})

module.exports = server;