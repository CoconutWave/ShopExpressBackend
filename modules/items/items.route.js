const { getAllItems, getItemById, getAllDistributor, searchItem, createItem, createDistributor, getDistributorById, getAllCategory, getCategoryById, createCategory, updateItem } = require('./items.controller');

const router = require('express').Router();

//CATEGORY================
//get
router.get("/cat", getAllCategory);
router.get("/cat/:id", getCategoryById);
//post
router.post("/cat", createCategory);


//DISTRIBUTOR================
//get
router.get("/dist", getAllDistributor);
router.get("/dist/:id", getDistributorById);
//post
router.post("/dist", createDistributor);


//ITEMS================
//get
router.get("/", getAllItems);
router.get("/search", searchItem);
router.get("/:id", getItemById);
//post
router.post("/", createItem);
//patch
router.patch("/",updateItem);

module.exports = router;