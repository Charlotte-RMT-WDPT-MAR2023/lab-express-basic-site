const express = require("express");

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// ...
// our first Route:
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/Home.html")
);

// about route:
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/About.html")
);
// ...
// works route:
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/Works.html")
);
// gallery route:
app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/Gallery.html")
);

// ... the previously added code
// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000! "));
