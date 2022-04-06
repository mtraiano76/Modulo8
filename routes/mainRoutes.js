const express = require('express');
const router = express.Router();


const mainController = require ("../controllers/mainController.js")

/* GET home page. */
router.get("/",mainController.index);
router.get("/contacto",mainController.contact);

module.exports = router;
