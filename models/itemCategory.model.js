const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const itemCategoryModel = sequelize.define(
    "shop_item_category",
    {
        category_id:{
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement:true
        },
        category_name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        category_desc:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        created_at:{
            type: DataTypes.DATE,
        }
    },
    {
        sequelize,
        freezeTableName:true,
        timestamps: false,
        createdAt:"created_at"
    }
);

module.exports = {itemCategoryModel}