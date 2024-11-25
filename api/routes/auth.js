import express from 'express';
import { logIn, logOut, register } from '../controllers/auth.controller.js';

const authRouter = express.Router();

//register route
authRouter.post('/register',register);

//login route
authRouter.post('/login',logIn);

//logout route
authRouter.post('/logout',logOut);

export default authRouter;