const UserModel = require("../Models/User");
const bcrypt = require('bcrypt');
const signup =  async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user) {
            return res.status(400).json({message:"user is already exist, you can login",success:false});
        }
        const userModel = new UserModel({name,email,password});
        userModel.password = await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201).json({
            message:"Signup Successfully",
            success:true
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal server errors",
            success:false
        })
    }
}
const login =  async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        const errorMessage = "Auth Failed email and password are Invalid."
        if(!user) {
            return res.status(403).json({message:errorMessage,success:false});
        }
        const isPassEqual = await bcrypt.compare(password,user.password);
        if(!isPassEqual) {
            return res.status(403).json({message:errorMessage,success:false});
        }
        res.status(201).json({
            message:"Signup Successfully",
            success:true
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal server errors",
            success:false
        })
    }
}

module.exports = {signup};