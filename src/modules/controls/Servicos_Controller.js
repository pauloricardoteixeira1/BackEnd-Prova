const servicos = require('../models/servico');
const prod = require('../models/produto');

class Servicos_Controller{
    async novo(req,res){
        if(!req.body.nome|| !req.body.produto || ! req.body.empresa){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            if(req.body.nome.length>3){
                const data = await servicos.create(req.body);
                await prod.findOneAndUpdate(
                    {"_id": req.body.produto},
                    {
                        $push:{
                            "servicos": [data._id],
                        },
                    }
                );
                return res.json({data});
            }else{
                return res.status(400).json({erro:"400 - Um ou mais campos incoerentes"}); 
            }
            
            
            
        } 
    }
    
    async listarTodos(req,res){
        if(!req.userId){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await servicos.find({})
            return res.json(data);
        }
        
    }

    async listarUnico(req,res){
        if(!req.body.id){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const data = await servicos.find({_id:req.body.id})
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
        if(!req.params.id || !req.params.produto){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;
        }else{
            const id = req.params.id;
            await prod.findOneAndUpdate(
                {"_id": req.params.produto},
                {
                    $pull:{
                        "servicos": id,
                    },
                }
            );
            const data = await servicos.deleteOne({_id:id});
            res.status(200).json(data)
            return;
        }
    }

}

module.exports = new Servicos_Controller()