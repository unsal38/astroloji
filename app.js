const express = require("express")
const app = express()
var path = require('path');
const { PORT } = require("../astroloji/config")
const database = require("../astroloji/db/database")

const indexRouter = require('./routes/index');
//////</ROUTER////////////////////////

//VİEW ENGİNE SETUP //////////////////
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.use("/", indexRouter)

app.listen(PORT, () => {
    console.log(`app listen port:${PORT}`)
    database
})