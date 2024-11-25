import { db } from "../config/db.config.js";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

//register function
export const register = async (req,res) => {
    try{
        db.query('SELECT * FROM users WHERE email = ? OR username = ?',[req.body.email, req.body.username],async (err,data)=>{
            if(err) res.json(err);
            if(data.length) {
                return res.status(409).json('user already exists');
            }

            //hash password and create new user
            const hash= await argon2.hash(req.body.password);
            const values =[
                req.body.username,
                req.body.email,
                hash
            ];
            console.log(values);
            db.query("INSERT INTO users(`username`,`email`,`password`) VALUES(?)",[values],(error,results)=>{
                if(error) return res.json(error);
                return res.status(200).json("user is created successfully");
            });
        });
    }catch(err){
        console.log("error during register: ",err);
        return res.status(500).json('Internal server error')
    }
}

//login function
export const logIn = async (req,res) => {
    try{
        //check user
        db.query("SELECT * FROM users WHERE username = ?",[req.body.username],async (err,data)=>{
            if(err) {
                return res.json(err);
            }
            if(data.length === 0) {
                return res.status(404).json('user not found!');
            }
            
            const user = data[0];
            const secret = process.env.ACCESS_TOKEN_KEY;
            //check password
            try{
                if(await argon2.verify(user.password,req.body.password)){
                    const token = jwt.sign({ id: user.id }, secret);
                    const { password, ...other } = user;
                    res.cookie("access_token", token ,{
                        httpOnly:true,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'strict',
                        maxAge: 3600000
                    }).status(200).json(other);
                }
                else{
                    return res.json(400).json('Wrong username or password');
                }
            }catch(error){
                return res.json(error)
            }
            
        })
    }catch(err){
        return res.status(500).json('internal server error');
    }
}

//logout function
export const logOut = async (req,res) => {
    try{
        await res.clearCookie("access_token",{
            sameSite:'none',
            secure:true
        }).status(200).json('User has been logged out');
    }catch(err){
        return await res.status(500).json('server issue during logout');
    }
}