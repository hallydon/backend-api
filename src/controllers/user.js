import userModel from "../models/user.js"; 
import { Sequelize, DataTypes } from "sequelize";
import { createToken } from "../util/auth.js";

export const createUser = async (req, res)=>{
    try {
        const{password, email} = req.body
        console.log(email, password);
       
        const token = createToken(email)
        return res.json({status: 200, token, message: `This is the body with email ${email}`});
    } catch (error) {
        
    }
}

