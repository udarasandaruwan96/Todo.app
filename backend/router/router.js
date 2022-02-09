// const express = require("express");
// const router = express.Router();
const router = require("express").Router()
const controller = require('./controller/controller');

router.post('/register',controller.registerUser);
router.post('/login', controller.login);

// 92 video (req,res)=>{
//     res.json({ message:"router is Working"})
// });


module.exports=router;