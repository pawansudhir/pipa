const express = require("express");
var app = express();
var route = require("./routes/routes");
var cors = require("cors");
app.use(cors());
route(app);
app.listen(5000,() => {
    console.log("listening on 5000");
});