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
    }catch (error) {
        res.status(500).json ({message: error.message, error:error})
}
};
// check if email is valid using regex
const isValidEmail = async (req, res, next) => {

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  try {

    //code here 
       if (!emailRegex.test(email)) {
         return res.status(400).json({ message: "Invalid email format" });
       }


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
