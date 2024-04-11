const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");
const { itemCategoryModel } = require("./itemCategory.model");
const { distributorModel } = require("./distributor.model");

const itemsModel = sequelize.define(
    "shop_item",
    {
        item_id:{
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement:true
        },
        item_name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        item_price:{
            type: DataTypes.DECIMAL,
        },
        item_stock:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        item_desc:{
            type: DataTypes.TEXT
        },
        item_cat:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull:false
        },
        item_dist:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull:false
        },
        created_at:{
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        freezeTableName:true,
        timestamps: false,
        createdAt:"created_at"
    }
);

itemCategoryModel.hasMany(itemsModel,{
    as:"category",
    foreignKey: "item_cat"
});
itemsModel.belongsTo(itemCategoryModel,{
    as:"category",
    foreignKey: "item_cat"
});
distributorModel.hasMany(itemsModel,{
    as:"distributor",
    foreignKey: "item_dist"
});
itemsModel.belongsTo(distributorModel,{
    as:"distributor",
    foreignKey: "item_dist"
});

module.exports = {itemsModel}