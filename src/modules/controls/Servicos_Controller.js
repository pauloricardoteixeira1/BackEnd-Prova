const servicos = require('../models/servico');

class Servicos_Controller{
    async novo(req,res){
        if(!req.body.nome|| !req.body.produto){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await servicos.create(req.body);
            return res.json({data});
        } 
    }
    
    async listarTodos(req,res){
        if(!req.body.usuarioId || !req.body.id  ){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await servicos.find({_id:req.body.id})
            return res.json(data);
        }
        
    }

    async listarUnico(req,res){
        if(!req.body.id){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const data = await servicos.find({_id:id})
            return res.json(data); 
        }
        
    }

    async atualizar(req,res){
        if(!req.body.id || !req.body.produto){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const id    = req.body.id;
            const nome  = req.body.nome;
            const produto  = req.body.produto;
            const data  = await servicos.updateOne({_id:id},{
                $set: {
                    nome: nome,
                    produto: produto,
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
            const data = await servicos.deleteOne({_id:id});
            res.status(200).json(data)
            return;
        }
    }

}

module.exports = new Servicos_Controller()