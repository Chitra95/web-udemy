import express from "express"
const app=express();
const port=3000;

app.get("/",(req,res)=>{
res.send("<h1> home page </h1>");

});

app.get("/contact",(req,res)=>{
    res.send("<h1> contact page </h1> <p> Phone no:0090909990 </p>");
    
    });

    app.get("/about",(req,res)=>{
        res.send("<h1> about us </h1>   <p> this is about us page </p>");
        
        });

    app.listen(port,()=>{
        console.log(`server is running on ${port}`);

    });