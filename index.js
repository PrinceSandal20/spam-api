const express = require("express");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const contact = require("./routes/contact");
const app = express();

const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/spam-api").then((e)=>console.log("MongoDB Connected"));

app.use(express.json());

app.use("/api/auth",auth);
app.use('/api/contacts',contact);

app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`));