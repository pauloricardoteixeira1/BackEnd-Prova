const express = require('express')
const router = express.Router()
  
const authMiddleware = require('../middleware/auth');
const Produtos_Controller = require("../controls/Produtos_Controller")


//listar
router.get('/produtosReadAll',authMiddleware, Produtos_Controller.listarTodos);
router.get('/produtosReadServices/:id',authMiddleware, Produtos_Controller.listarServicos);


//inserir novo
router.post('/produtosCreate',authMiddleware, Produtos_Controller.novo);

// atualizar
router.patch('/produtosUpdate',authMiddleware, Produtos_Controller.atualizar);

// remover
router.delete('/produtosRemover/:id/:empresa',authMiddleware, Produtos_Controller.remover);


module.exports = router