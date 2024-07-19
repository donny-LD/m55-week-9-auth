const { DataTypes } = require("sequelize");
const sequelize = require ("../db/connection");

const User = sequelize.define(
    "user",{
        username:{
            type: DataTypes.STRING,
            Unique: true,
            allowNull: false,
        },

        email:{
            type: DataTypes.STRING,
            Unique: true,
            allowNull: false,
        },

        password:{
            type: DataTypes.STRING,
            Unique: true,
            allowNull: false,
        }
    },
    {timeStamps: false, indexed: [{Unique: true,  fields: ["username"]}]}
)

module.exports =  User; 