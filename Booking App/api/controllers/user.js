import User from "../models/User.js"

export const updatedUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser) // res is data sent back to the user
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req,res,next) =>{
    try{
        const updatedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted") // res is data sent back to the user
    }catch(err){
        next(err)
    }
}

export const getUsers = async(req,res,next) =>{
    // const failed = true
    // if (failed) return next(createError(401, "You are not authenticated"))

    // console.log("Hi I am a User route");
    // return next() // here return is very important else when the request is made the next middleware will not be called and the server will be crashed


    try{
        const Users = await User.find()
        res.status(200).json(Users) // res is data sent back to the user
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}

export const getUser = async(req,res,next) =>{
    try{
        const User = await User.findById(req.params.id)
        res.status(200).json(User) // res is data sent back to the user
    }catch(err){
        // res.status(500).json(err)
        next(err)
    }
}