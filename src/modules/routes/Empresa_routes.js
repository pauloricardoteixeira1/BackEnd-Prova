const express = require('express')
const router = express.Router()
  
const authMiddleware = require('../middleware/auth');
const Empresa_Controller = require("../controls/Empresa_Controller")


//listar
router.get('/empresaReadAll',authMiddleware, Empresa_Controller.listarTodos);
router.get('/empresaReadOne',authMiddleware, Empresa_Controller.listarUnico);
router.get('/empresaReadProducts',authMiddleware, Empresa_Controller.listarProdutos);
router.get('/empresaReadServices',authMiddleware, Empresa_Controller.listarServicos);

//inserir novo
router.post('/empresaCreate',authMiddleware, Empresa_Controller.novo);

// atualizar
router.post('/empresaUpdate',authMiddleware, Empresa_Controller.atualizar);

// atualizar - realizar deleção em cascada
router.delete('/empresaRemover',authMiddleware, Empresa_Controller.remover);


module.exports = router