// This is where all the socketServer logic rins

// Call our socket io from server.js
const io = require("./server").io;

io.on("connection", (socket) => {
  console.log(socket.id, " has connected!");
});
