const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {host: process.env.DB_HOST, dialect:"mysql"},
);

sequelize.authenticate()
.then(function () {
    console.log("Successfully connected to database");
})
.catch(function (error) {
    console.log("Unable to connect to database");
    console.log(error);
});

module.exports = sequelize;