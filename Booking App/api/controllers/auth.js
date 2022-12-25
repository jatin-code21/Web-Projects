import User from '../models/User.js'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) =>{
    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            // username: req.body.username,
            // email: req.body.email,
            ...req.body,
            password: hash,
        })
        await newUser.save()
        res.status(200).send("User has been created")
    }catch(err){
        next(err)
    }
}

export const login = async (req, res, next) =>{
    try{
        const user = await User.findOne({username: req.body.username})
        if (!user) return next(createError(404, "User not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username"))

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT) // its a secret key generated using openssl rand -base64 32 command and then saved in .env file

        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true, // doesnt allow any client side to reach this cookie
        }).status(200).json({...otherDetails}, isAdmin) // sending details without the password and isAdmin
    }catch(err){
        next(err)
    }
}

// jwt is a token that is used to sent cookies rather than direct password for security purpose during verification