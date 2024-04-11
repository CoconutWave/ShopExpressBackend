const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const distributorModel = sequelize.define(
    "shop_distributor",
    {
        dist_id:{
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement:true
        },
        dist_name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dist_address:{
            type: DataTypes.STRING,
            allowNull:false
        },
        dist_phone:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        freezeTableName:true,
        timestamps: false
    }
);

module.exports = {distributorModel}