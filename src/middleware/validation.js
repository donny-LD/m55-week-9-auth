const isData = async (req, res, next) => {
  console.log("isData middleware hit and usrname: ", req.body.username);
  try {
    if (!req.body.username) {
      res.status(422).json({ message: "data is incomplete" });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// check if string is lowercase and makes cover
const isLowerCase = async (req, res, next) => {
  try {
    
    if (!req.body.username) {
      return res.status(400).json({ message: "Username is required" });
    }

   
    req.body.username = req.body.username.toLowerCase();

   
    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};



const isValidEmail = async (req, res, next) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  try {
    const { email } = req.body;

   
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

   
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  isData,
  isLowerCase,
  isValidEmail,
};
