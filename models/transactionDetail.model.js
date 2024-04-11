const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelizeConfig')

const transactionDetailModel = sequelize.define(
    "shop_transaction_d",
    {
        trdetail_id:{
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        transaction_id:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        item_id:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        trdetail_qty:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        trdetail_total:{
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }
);

module.exports={transactionDetailModel}
