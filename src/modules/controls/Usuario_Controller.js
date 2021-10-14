const usuario = require("../models/usuario");
const jwt = require("jsonwebtoken");
const authConfig = require('../../../config/auth');


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    })
}

class Usuario_Controller {
    async novo(req,res){
        if(!req.body.nome|| !req.body.cpf || !req.body.senha){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await usuario.create(req.body);
            data.senha = "";
            const token =generateToken({id: data.id});

            return res.json({data,token});
        }
        
    }

    async listarTodos(req,res){
        const data = await usuario.find({});
        return res.json(data);
    }

    async listaUnico(req,res){
        if(!req.body.id){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await usuario.find({_id:req.body.id});
            return res.json(data);
        }
        
    }

    async atualizar(req,res){
        if(!req.body.id || !req.body.nome|| !req.body.cpf || !req.body.senha){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const id    = req.body.id;
            const nome  = req.body.nome;
            const cpf   = req.body.cpf;
            const senha = req.body.senha;
            const data  = await usuario.updateOne({_id:id},{
                $set: {
                    nome: nome,
                    cpf: cpf,
                    senha: senha
                }
            })
            res.status(200).json(data)
            return;
        }   
    }


    async remover(req,res){
        if(!req.body.id ){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;
        }else{
            const id = req.body.id;
            const data = await usuario.deleteOne({_id:id});
            res.status(200).json(data)
            return;
        }
    }

   
}

module.exports = new Usuario_Controller()