const { Router } = require("express");
const userRouter = Router();

const { register, login, getAllUsers} = require ("./controllers");
const { hashPass, comparePass} = require ("../middleware/auth");

userRouter.post("/register",hashPass, register);
userRouter.post("/login", comparePass, login);

userRouter.get("/getAllUser", getAllUsers);

module.exports = userRouter;

