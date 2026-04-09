import genToken from "../config/token.js";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email} = req.body
        let(!user){
            user = await User.create({name, email})
        }
        let token = await genToken(user._id)
        res.status(200).json({token})
    } catch (error) {
        
    }
}