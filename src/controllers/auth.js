import userModel from "../models/user.js"; 
import { Sequelize, DataTypes } from "sequelize";
import { createToken } from "../util/auth.js";

/**
 * Register new User
 * @controller registerUser
 * @param body: {fullName, email, username, password}
 * @return staus, token, data, message
 */

export const registerUser = async (req, res)=>{
    try {
        const{password, email} = req.body
        console.log(email, password);
       
        const token = createToken(email)
        return res.json({status: 200, token, message: `This is the body with email ${email}`});
    } catch (error) {
        
    }
}

/**
 * Login controller
 * @controller loginUser
 * @param body: {email, password}
 * @return status, token, data, message
 */

export const loginUser = async (req, res)=>{
    try {
        const{password, email} = req.body
        console.log(email, password);
       
        const token = createToken(email)
        return res.json({status: 200, token, message: `This is the body with email ${email}`});
    } catch (error) {
        
    }
}

