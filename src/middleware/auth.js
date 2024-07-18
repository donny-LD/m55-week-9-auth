const bcrypt = require("bcrypt");
const user = require ("./")



const saltRounds = parseInt(ptocess.env.SALT_ROUNDS)


const hashPass = async (req, res, next) =>{
    try {
        console.log("plaintextpassword before hash", req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log("hashedpassword:", hashedPassword)
    

    }catch (error) {
        res.status(500).json({message: error.message, error})
    }
};

const comparePass = async (req, res, next) => {
    try {


        const user = await UserActivation.findOne ({where: {username:req.body.username}});
        req.user = user
        next()
    }catch(error) {
         res.status(500).json({ message: error.message, error });
    }
}
module.exports ={
    hashPass,
    comparePass,
}