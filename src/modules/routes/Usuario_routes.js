const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth');
const Usuario_Controller = require("../controls/Usuario_Controller");
const Cargo_Controller = require("../controls/Cargo_Controller");




router.post('/cargoCreate', authMiddleware, Cargo_Controller.novo);

//listar
router.get('/usuarioReadAll', authMiddleware, Usuario_Controller.listarTodos);

//inserir novo
router.post('/usuarioCreate', authMiddleware, Usuario_Controller.novo);

// atualizar
router.put('/usuarioUpdate', authMiddleware, Usuario_Controller.atualizar);

// atualizar
router.delete('/usuarioRemover/:id', authMiddleware, Usuario_Controller.remover);


module.exports = router