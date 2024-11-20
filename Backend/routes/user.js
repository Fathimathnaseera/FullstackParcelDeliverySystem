const express = require("express");
const { getALLUsers } = require("../controllers/user");
const router = express.Router()

// DELETING USER

router.delete("/:id", this.deleteUser)

// GET ALL USERS

router.get("/",getALLUsers)

module.exports = router;