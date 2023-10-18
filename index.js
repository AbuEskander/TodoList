import bodyParser from 'body-parser';
import express from 'express';
import {dirname} from "path"
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let TodoW =[];
let Work =[];

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.post("/submit",(req,res)=>{
    TodoW.push(req.body.Todo);
    res.render("index.ejs",{Todo:TodoW});
})
app.listen(port ,()=>{
    console.log(`Server is running on ${port}`);
})