const usuario = require("../models/usuario");
const jwt = require("jsonwebtoken");
const authConfig = require('../../../config/auth');
const cargo = require("../controls/Cargo_Controller");


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    })
}

class Usuario_Controller {
    async novo(req,res){
        if(!req.body.nome|| !req.body.cpf || !req.body.senha || !req.body.cargo){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const existe = await usuario.findOne({nome: req.body.nome, cpf: req.body.cpf});
            if(!existe){
                const cg = await cargo.listarUnicoByName(req.body.cargo);
                const data = await usuario.create({...req.body, cargo: cg._id});
                
                data.senha = "";
                const token =generateToken({id: data.id});
    
                return res.json({data,token});
            }else{
                return res.status(400).json({erro:"Usuário já se encontra cadastrado"}); 
            }            
        }
        
    }

    async listarTodos(req,res){
        if(req.cargo=="Administrador"){
            const data = await usuario.find({});
            return res.json(data);
        }else{
            return res.status(401).json({erro:"401 - Sem permisão para essa ação"});
        }
    }


    async listaUnico(req,res){
        if(!req.body.id || req.cargo!="Administrador"){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await usuario.find({_id:req.body.id});
            return res.json(data);
        }
        
    }

    async atualizar(req,res){
        if(!req.body.id || !req.body.nome|| !req.body.cpf || !req.body.senha||!req.body.cargo || req.cargo!="Administrador"){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const id    = req.body.id;
            const nome  = req.body.nome;
            const cpf   = req.body.cpf;
            const senha = req.body.senha;
            const cg = await cargo.listarUnicoByName(req.body.cargo);
            const data  = await usuario.findOneAndUpdate({_id:id},{
                $set: {
                    nome: nome,
                    cpf: cpf,
                    senha: senha,
                    cargo: cg
                }
            },
            {
                new:true
            })
            res.status(200).json(data)
            return;
        }   
    }


    async remover(req,res){
        if(!req.params.id || req.cargo!="Administrador" ){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;
        }else{
            const id = req.params.id;
            const data = await usuario.deleteOne({_id:id});
            res.status(200).json(data)
            return;
        }
    }

   
}

module.exports = new Usuario_Controller()