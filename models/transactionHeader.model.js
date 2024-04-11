const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelizeConfig')

const transactionHeaderModel = sequelize.define(
    "shop_transaction_h",
    {
        transaction_id:{
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        created_at:{
            type: DataTypes.DATE,
        },
        transaction_desc:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports={transactionHeaderModel}
