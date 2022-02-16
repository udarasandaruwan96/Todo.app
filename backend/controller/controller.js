const bcrypt = require('bcrypt');
//const User = require("./model/schema");
const User = require("../model/schema");
const jwt = require("jsonwebtoken");


//controller for register
exports.registerUser = async(req,res)=>{
    try{

        //validate request
    if(!req.body){
        res.status(406).json({err: "You have to fill the registration form"})
        return;
    }
        
    let{email,password, passwordCheck, username}= req.body
        //check empty fields
    if(!email || !password || !passwordCheck)
       return res.status(406).json({err:"Not all fielsds have been entered"})
       //check password length
    if(password.length<8)
        return res.status(406).json({err: "The password need to be at least 8 charascters long"})
        //chek password is same
    if(password !== passwordCheck)
        res.status(406).json({err: "Password must be same for varification"})   
        
       // hashing Password
      const hash = await bcrypt.hashSync(password, 10)

      // using document structure
    const newUser = new User({
          email,
          password : hash,
          username
      })
      newUser
      .save(newUser)
      .then(register => {
          res.json(register)
      })
      .catch(error => {
        // res.status(406).json({error: error.message || "Something went wrong while registration"})
      })


    res.json({email,hash, passwordCheck, username});
    }catch(error){
        res.status(500).json({err:error.message || "Error while registration"})
    }
};



        //controller for login
exports.login =  async(req, res)=>{
    
    try{
      
        //validate request
        if(!req.body){
            res.status(406).json({err:"You have to fill email and password"})
            return;
        }

       //get user data
    const {email, password} = req.body

     //validate request
    if(!email || !password)
      return res.status(406).json({err:"Not all fielsd have been entered"})
    
    const user = await User.findOne({email});
    if(!user)
     return res.status(406).json({err:"No account with yhis email."})

      //const user = "$2b$10$VMiGB/rUR6oivkdhtupOOOU/aikBjXujGTtmFk2eJGG0bxpXeMUj."
    //compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch)return res.status(406).json({err:"Invalid Credentials"})
    
    // creat jwt token
    const token = jwt.sign ({id : user._id}, process.env.JWT_SECRET)

    res.json({token,username: user.username , email: user.email})

    }catch (error){
        res.status(500).json({err: error.message || "Error while Login"})
    }
    };

    // delete user controller
    exports.delete = async(req,res)=>{
      try{
        await User.findByIdAndDelete(req.user_id)
        res.json({msg:"User Deleted Successfully..!"});
      }catch(error){
          res.status(500).json({err: error.message || "Error while deleting user"})
      }
    }