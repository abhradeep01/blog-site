import express from 'express';
import postRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
const app = express();

//format json
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts",postRouter);
app.use("/api/auth",authRouter);
app.use("/api/users",postRouter);

//localhost port
const port = process.env.PORT ;

app.listen(port,()=>{
    console.log(`port ${port} connected!`);
})