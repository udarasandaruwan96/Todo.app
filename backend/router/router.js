// const express = require("express");
// const router = express.Router();
const router = require("express").Router()
const controller = require('../controller/controller');
const auth = require('../middleware/auth');

router.post('/register',controller.registerUser);
router.post('/login', controller.login);
router.delete('/delete',auth,controller.delete);

// 92 video (req,res)=>{
//     res.json({ message:"router is Working"})
// });


module.exports=router;