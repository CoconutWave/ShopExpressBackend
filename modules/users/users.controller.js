const {usersModel} = require("../../models/users.model");


exports.getAllUsers = function(req, res) {
    const {active} = req.query;
    
    var users = usersModel.findAll({
        paranoid: active === "true" ? true : false,
        order:[["created_at","DESC"]]
    })
    .then((result)=>{
        return res.status(200).send({
            response: result
        })
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}

exports.getUserById = function(req, res) {    
    const {id} = req.params;

    var users = usersModel.findByPk(id, {
        paranoid: true
    })
    .then((result)=>{
        return res.status(200).send({
            response: result
        })
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}