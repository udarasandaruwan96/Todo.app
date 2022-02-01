// const express = require("express");
// const router = express.Router();
const router = require("express").Router()

router.get('/',(req, res)={

    res.json({message:"router Request"})

});

module.exports =router;