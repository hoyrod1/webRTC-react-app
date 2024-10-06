// This is where we create the express and socket.io server
const fs = require("fs"); // file system
const https = require("https"); //
const express = require("express"); //
const cors = require("cors"); //
const socketio = require("socket.io"); //
const app = express();

app.use(cors()); // This will open our express API to any domain
app.use(express.static(__dirname + "/public"));
app.use(express.json()); // This will allow the app to parse json in the body with the body parser

const key = fs.readFileSync("./certs/cert.key");
const cert = fs.readFileSync("./certs/cert.crt");

const expressServer = https.createServer({ key, cert }, app);

const io = socketio(expressServer, {
  cors: [
    "https://localhost:3000",
    "https://localhost:3001",
    "https://localhost:3002",
  ],
});

expressServer.listen(8000);
module.exports = { io, expressServer, app };
