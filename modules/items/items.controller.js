const { Op } = require("sequelize");
const { itemsModel } = require("../../models/items.model");
const { distributorModel } = require("../../models/distributor.model");
const { itemCategoryModel } = require("../../models/itemCategory.model");

//ITEMS================
exports.getAllItems = function(req, res) {
    const {active} = req.query;
    
    var items = itemsModel.findAll({
        paranoid: active === "true" ? true : false,
        order:[["created_at","DESC"]],
        include:["category", "distributor"]
    })
    .then((result)=>{
        return res.status(200).send(result);
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}

exports.getItemById = function(req, res) {    
    const {id} = req.params;

    var items = itemsModel.findByPk(id,{
        paranoid: true,
        include:["category", "distributor"]
    })
    .then((result)=>{
        if(result == null){
            throw new Error("Item not found");
        }
        return res.status(200).send(result);
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}

exports.searchItem = function(req, res) {    
    const {keyword} = req.query;

    var items = itemsModel.findAll({
        where:{
            item_name: {[Op.like]:`%${keyword}%`}
        },
        include:["category", "distributor"]
    })
    .then((result)=>{
        if(result == null){
            throw new Error("Item not found");
        }
        return res.status(200).send(result);
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}

exports.createItem = async function (req, res) {
    const{item_name, item_price, item_stock, item_desc, item_cat, item_dist}=req.body;

    const category = await itemCategoryModel.findByPk(item_cat)
    .catch((error)=>{
        console.log("A");
        return res.status(400).send({
            error: error.message
        })
    });

    const distributor = await distributorModel.findByPk(item_dist)
    .catch((error)=>{
        console.log("B");
        return res.status(400).send({
            error: error
        })
    });

    if(category == null || distributor == null){
        return res.status(400).send({
            message: "Incorrect "+(category == null ? "category":"distributor")+" code"
        });
    }

    const newItem = await itemsModel.create({
        item_name: item_name,
        item_price: item_price,
        item_stock: item_stock,
        item_desc: item_desc,
        item_cat: item_cat,
        item_dist: item_dist
    })
    .catch((error)=>{
        console.log(error);
        return res.status(500).send({
            message: "Internal server error"
        });
    });
    await newItem.save();
    return res.status(201).send({
        message: item_name+" successfully added",
        item: newItem
    });
    
}

exports.updateItem = async function (req, res) {
    const{item_id, item_name, item_price, item_stock, item_desc, item_cat, item_dist}=req.body;

    const category = await itemCategoryModel.findByPk(item_cat)
    .catch((error)=>{
        console.log("A");
        return res.status(400).send({
            error: error.message
        })
    });

    const distributor = await distributorModel.findByPk(item_dist)
    .catch((error)=>{
        console.log("B");
        return res.status(400).send({
            error: error.message
        })
    });

    const item = await itemsModel.findByPk(item_id)
    .catch((error)=>{
        console.log("C");
        return res.status(400).send({
            error: error.message
        })
    });

    if(category == null || distributor == null || item == null){
        return res.status(400).send({
            message: "Incorrect "+(category == null ? "category":distributor == null ? "distributor":"item")+" code"
        });
    }

    item.item_name = await item_name;
    item.item_price = await item_price;
    item.item_stock = await item_stock;
    item.item_desc = await item_desc;
    item.item_cat = await item_cat;
    item.item_dist = await item_dist;
    await item.save();
    return res.status(201).send({
        message: item_name+" successfully updated",
        item: item
    });
}


//DISTRIBUTOR================
exports.getAllCategory = function(req, res) {
    const {active} = req.query;
    
    var items = itemCategoryModel.findAll({
        paranoid: active === "true" ? true : false,
        order:[["category_id","DESC"]]
    })
    .then((result)=>{
        return res.status(200).send(result)
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}

exports.getCategoryById = function(req, res) {    
    const {id} = req.params;

    var items = itemCategoryModel.findByPk(id,{
        paranoid: true
    })
    .then((result)=>{
        if(result == null){
            throw new Error("Category not found");
        }
        return res.status(200).send(result);
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}

exports.createCategory = async function (req, res) {
    const {category_name, category_desc} = req.body;

    const newCategory = await itemCategoryModel.create({
        category_name: category_name,
        category_desc: category_desc
    })
    .catch((error)=>{
        console.log(error);
        return res.status(500).send({
            message: "Internal server error"
        });
    });
    
    return res.status(201).send({
        message: category_name+" successfully added"
    });
}


//DISTRIBUTOR================
exports.getAllDistributor = function(req, res) {
    const {active} = req.query;
    
    var items = distributorModel.findAll({
        paranoid: active === "true" ? true : false,
        order:[["created_at","DESC"]]
    })
    .then((result)=>{
        return res.status(200).send(result)
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}

exports.getDistributorById = function(req, res) {    
    const {id} = req.params;

    var items = distributorModel.findByPk(id,{
        paranoid: true
    })
    .then((result)=>{
        if(result == null){
            throw new Error("Distributor not found");
        }
        return res.status(200).send(result);
    })
    .catch((error)=>{
        console.log("ERROR:"+error.message);
        return res.status(400).send({
            error: error.message
        });
    });
}

exports.createDistributor = async function (req, res) {
    const {dist_name, dist_address, dist_phone} = req.body;

    const newDistributor = await distributorModel.create({
        dist_name: dist_name,
        dist_address: dist_address,
        dist_phone: dist_phone
    })
    .catch((error)=>{
        console.log(error);
        return res.status(500).send({
            message: "Internal server error"
        });
    });
    
    return res.status(201).send({
        message: dist_name+" successfully added"
    });
}