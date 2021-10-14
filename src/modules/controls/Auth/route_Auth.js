const express = require('express')
const router = express.Router()
  
const Auth_Controller = require("./Auth_Controller")

router.use(express.json()); 
router.post('/login', Auth_Controller.login);


module.exports = router