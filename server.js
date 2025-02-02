const express = require('express');
const app = express();
const PORT = 4000;

app.get("/read",(req,res)=>{
    console.log("read request received");
    res.send("hello world");
})

app.get("/",(req,res)=>{
   res.send("home page")
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})


