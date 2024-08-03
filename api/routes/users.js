import express from "express";
import { DeleteUser, GetAllUsers, GetUser, GetUserCount, UpdateUser } from "../controllers/user.js";
import { verifyAdmin,  verifyUser } from "../utils/verifyToken.js";



const router = express.Router(); 

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send(" hello user :) ")
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send(" hello user , you are logged in and you can delete your account ")
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send(" hello admin , you are logged in and you can delete All accounts ")
// });
// userCount
router.get("/count", verifyAdmin, GetUserCount);
//Update
router.put("/:id", verifyUser,  UpdateUser);
//delete
router.delete("/:id",verifyUser, DeleteUser);
//GET
router.get("/:id",verifyUser, GetUser);
//GETAll
router.get("/",verifyAdmin, GetAllUsers);



export default router 