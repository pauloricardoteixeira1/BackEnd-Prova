const express = require('express')
const router = express.Router()
  
const authMiddleware = require('../middleware/auth');
const Usuario_Controller = require("../controls/Usuario_Controller")


// root
router.get('/',authMiddleware, function(req,res){ res.send("Raiz do projeto")});

//listar
router.get('/usuarioReadAll',authMiddleware, Usuario_Controller.listarTodos);

//inserir novo
router.post('/usuarioCreate',authMiddleware, Usuario_Controller.novo);

// atualizar
router.post('/usuarioUpdate',authMiddleware, Usuario_Controller.atualizar);

// atualizar
router.post('/usuarioRemover',authMiddleware, Usuario_Controller.remover);


module.exports = router