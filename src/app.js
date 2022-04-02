const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require("./routes/indexRouter");

const port = process.env.PORT || 3000;


app.use(express.static(path.join (__dirname, "../", "public")));
app.use('/', mainRouter);


app.set("view engine", "ejs");
app.set("views", "src/views");





app.listen(port, () => console.log("Servidor funcionando"));



