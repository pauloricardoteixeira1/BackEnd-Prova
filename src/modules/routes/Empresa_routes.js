const express = require('express')
const router = express.Router()
  
const authMiddleware = require('../middleware/auth');
const Empresa_Controller = require("../controls/Empresa_Controller")

router.use(express.json()); 

//listar
router.get('/empresaReadAll',authMiddleware, Empresa_Controller.listarTodos);
router.get('/empresaReadOne',authMiddleware, Empresa_Controller.listarUnico);
router.get('/empresaReadProducts',authMiddleware, Empresa_Controller.listarProdutos);


//inserir novo
router.post('/empresaCreate',authMiddleware, Empresa_Controller.novo);

// atualizar
router.post('/empresaUpdate',authMiddleware, Empresa_Controller.atualizar);

// atualizar
router.post('/empresaRemover',authMiddleware, Empresa_Controller.remover);


module.exports = router