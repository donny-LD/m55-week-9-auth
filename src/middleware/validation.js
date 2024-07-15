// const messages = require("dote/src/messages")

const isData = async ( req, res , next) => {
    console.log("isData middleware hit and usrname: ", req.body.username);
    try {

        if (!req.body.username) {
            res.status(422).json ({ message: "data is incomplete"});
            return;
        }
        next ();

    } catch (error) {
        res.status(500).json ({message: error.message, error:error})
    }

};
// check if string is lowercase and makes cover 
const isLowerCase = async ( req, res, next) => {
    try{
//code here
req.body.username = req.body.username.toLowerCase();

    // const lowerCase = new String (reg.body.username)   ;
    // if (lowerCase !== req.body.username.toLowerCase()){
    //     req.body.username= req.body.username.toLowerCase();
    // }

    next();
    }catch (error) {
        res.status(500).json ({message: error.message, error:error})
}
};

const isValidEmail = async (req, res, next) => {

   
  try {
     const checkEmail = newRegExp(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/);
    
    if (!checkEmail.test(req.body.email)) {
     res.status(422).json({ message: "Invalid email" });
      return; 
    }
    // Check if the email already exists in the database
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: "Email already exists" });
    // }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
module.exports = {
    isData,
    isLowerCase,
    isValidEmail
}
