const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const usersModel = sequelize.define(
    "shop_users",
    {
        user_id:{
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement:true
        },
        user_first_name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        user_last_name:{
            type: DataTypes.STRING,
        },
        user_email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        user_password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        refresh_token:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        created_at:{
            type: DataTypes.DATE,
        },
        updated_at:{
            type: DataTypes.DATE,
        },
        deleted_at:{
            type: DataTypes.DATE
        }
    },
    {
        sequelize,
        freezeTableName:true,
        timestamps: true,
        createdAt:"created_at",
        updatedAt:"updated_at",
        deletedAt:"deleted_at"
    }
);

module.exports = {usersModel}