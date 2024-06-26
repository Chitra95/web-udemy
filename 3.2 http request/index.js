import express from "express"
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("<h1> Heyyloo </h1> ");
    // console.log(req);

});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});