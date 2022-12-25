import express from "express"
import { updatedUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("Hello user you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send("Hello user you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("Hello admin you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", verifyUser ,updatedUser)
//DELETE
router.delete("/:id",verifyUser ,deleteUser)
//GET
router.get("/:id", verifyUser,getUser)
//GET ALL
router.get("/", verifyAdmin,getUsers)

// above verifyUser is written that means user or admin anyone can perform the respective operations
// but if we want that only admin can perform the respective operations then we have to write verifyAdmin instead of verifyUser
export default router