const express = require('express')
const router = express.Router()
  
const authMiddleware = require('../middleware/auth');
const Servicos_Controller = require("../controls/Servicos_Controller")

router.use(express.json()); 

//listar
router.get('/servicosReadAll',authMiddleware, Servicos_Controller.listarTodos);
router.get('/servicosReadOne',authMiddleware, Servicos_Controller.listarUnico);

//inserir novo
router.post('/servicosCreate',authMiddleware, Servicos_Controller.novo);

// atualizar
router.post('/servicosUpdate',authMiddleware, Servicos_Controller.atualizar);

// atualizar
router.post('/servicosRemover',authMiddleware, Servicos_Controller.remover);


module.exports = router