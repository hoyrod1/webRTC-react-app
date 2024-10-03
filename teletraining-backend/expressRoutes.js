// This is where all the routes for the web site will run
//--------------------------------------------------------//
// Create an instance of the express app from server.js
const app = require("./server").app;
//--------------------------------------------------------//

//--------------------------------------------------------//
// require (JWT) Json Web Token
const jwt = require("jsonwebtoken");
const secretLink = "ihadhdfH283JWT";
//--------------------------------------------------------//

//--------------------------------------------------------//
// This user route will be for CLIENT 1 to make a "offer"
// Calender/scheduling  APP will email this link to CLIENT 2
app.get("/user-link", (req, res) => {
  // personal data for the end-users appointment //
  const apptData = {
    professionalFullName: "Kaden St. Cloud Full Stack Web Developer",
    apptDate: Date.now(),
  };

  // personal data needs to be encoded for the url //
  const token = jwt.sign(apptData, secretLink);
  res.send("https://localhost:3000/join-video?token=" + token);

  // Test response json output //
  // res.json("This is a test route");
});
//--------------------------------------------------------//

//--------------------------------------------------------//
app.get("/validate-link", (req, res) => {
  const token = req.query.token;
  const decodedData = jwt.verify(token, secretLink);
  res.json(decodedData);
});
//--------------------------------------------------------//
