var express = require('express');
var router = express.Router();
let {indexController,PATCH,handlePost,PUT,DELETE,GET}=require('../controller/indexcontroller')

/* GET home page. */
router.get('/', GET);
router.post('/',handlePost);
router.put('/', PUT);
router.patch('/', PATCH);
router.delete('/', DELETE);

// const{crudOPERATIONS}= require('../models/indexmodel')
module.exports = router;
