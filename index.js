import bodyParser from 'body-parser';
import express from 'express';
import {dirname} from "path"
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;

app.listen(port ,()=>{
    console.log(`Server is running on ${port}`);
})