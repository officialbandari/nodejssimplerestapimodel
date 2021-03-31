import express from 'express';
import bodyparser from 'body-parser';
import userRouters from './routes/users.js'


const app = express();
const PORT = 8000;


app.use(bodyparser.json());


app.use("/users", userRouters)


app.listen(PORT,()=>{console.log(`The server is Running on :http://localhost:${PORT}`);})

