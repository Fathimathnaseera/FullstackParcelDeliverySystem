const User = require("../models/user");
const { deleteParcel } = require("./parcel");

// Deleting user

const deletingUser = async (req,res) =>{
    try {
       await User.findByIdAndDelete(req.params.id);
       res.status(201).json("The user has been deleted successfully")
    }  catch (error) {
       res.status(500).json(error);
    }
};

// Get users

const getALLUsers = async (req,res) =>{
try {
   const users = await User.find.sort({createdAt:-1});
   res.status(200).json(users)
 } catch (error) {
   res.status(500).json(error);
 }
};

module.exports={getALLUsers, deleteUser}