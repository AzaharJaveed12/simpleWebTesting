
const express = require("express");


app = express();
app.use(express.static('public'));
const port = process.env.PORT || 8080;

app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname,"public/index.html"));
});

app.listen(port,() =>{
    console.log('listining to port 8080');
});