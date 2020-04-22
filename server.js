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

app.listen(8001, () => console.log("server run on 8001"));
