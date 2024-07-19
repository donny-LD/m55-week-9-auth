const bcrypt = require("bcrypt");
const User = require ("../users/model")




const saltRounds = parseInt(process.env.SALT_ROUNDS)


const hashPass = async (req, res, next) =>{
    try {
        console.log("plaintextpassword before hash", req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log("hashedpassword:", hashedPassword)
    req.body.password = hashedPassword 
    next()
    }catch (error) {
        res.status(500).json({message: error.message, error})
    }
};

// const comparePass = async (req, res, next) => {
//     try {


//         const user = await User.findOne ({where: {username:req.body.username}});
//         req.user = user
//         next()
//     }catch(error) {
//          res.status(500).json({ message: error.message, error });
//     }
// }
const comparePass = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};
module.exports ={
    hashPass,
    comparePass,
}