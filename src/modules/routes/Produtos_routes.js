const express = require('express')
const router = express.Router()
  
const authMiddleware = require('../middleware/auth');
const Produtos_Controller = require("../controls/Produtos_Controller")


//listar
router.get('/produtosReadAll',authMiddleware, Produtos_Controller.listarTodos);
router.get('/produtosReadProducts',authMiddleware, Produtos_Controller.listarServicos);


//inserir novo
router.post('/produtosCreate',authMiddleware, Produtos_Controller.novo);

// atualizar
router.post('/produtosUpdate',authMiddleware, Produtos_Controller.atualizar);

// atualizar
router.post('/produtosRemover',authMiddleware, Produtos_Controller.remover);


module.exports = router