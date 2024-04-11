const { getAllUsers, getUserById } = require('./users.controller');

const router = require('express').Router();

//get
router.get("/", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;