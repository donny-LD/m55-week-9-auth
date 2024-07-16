require ("dotenv").config()
const express = require("express")
const user = require ("./users/model")

const testRouter = require("./test/routes");

const userRouter = require("./users/routes");

const port = process.env.PORT || 5001;


const app = express ();

app.use(express.json());

app.use("/test", testRouter);

app.use("/user", userRouter)

app.get("/health", (req,res) => {
    res.status(200).json({message:"API is healthy"});
});

app.listen (port, () => {
    console.log (`Server is listening on port ${port}`);
});


