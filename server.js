const path = require('path')
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://sigma:202020@cluster0-vexsd.mongodb.net/test?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => console.log("mongodb is connected"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", require("./route/user"));
const PORT = process.env.PORT;
//serves all our static files from the build directory.
app.use(express.static(path.join(__dirname, "build")));
// After all routes
// This code essentially serves the index.html file on any unknown routes.
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT);
