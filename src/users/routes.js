const { Router } = require("express");
const userRouter = Router();

const { register, login, getAllUsers} = require ("./controllers");


userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.get("/getAllUser", getAllUsers);

module.exports = userRouter

