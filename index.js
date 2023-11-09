const express = require("express");


const app = express();

app.get("/", (req, res) => {
  res.send("<p>Docker-node-funap.prod-no</p>");

});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(` port- ${port}`))


