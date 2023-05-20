import express from 'express'
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>axaxaxDocker is awesome Technology</h1>")
})
app.get('/about',(req,res)=>{
    res.send(process.env.API_KEY)
})

app.listen(5000,()=>{
    console.log("Server running on port 5000");
})