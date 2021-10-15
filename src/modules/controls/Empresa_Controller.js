const empresa = require('../models/empresa');

class Empresa_Controller{
    async novo(){
        if(!req.body.nome|| !req.body.cnpj || !req.body.usuarioId ){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await empresa.create({...req.body, usuarioId: req.body.usuarioId});
            return res.json({data});
        } 
    }
    
    async listarTodos(req,res){
        const data = await empresa.find({}).populate('usuarioID');
        return res.json(data);
    }

    async listarUnico(req,res){
        if(!req.body.id){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await empresa.find({_id:req.body.id});
            return res.json(data);
        }
        
    }

    async listarProdutos(req,res){
        if(!req.body.id){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const data = await empresa.find({_id:req.body.id})
            return res.json(data); 
        }
        
    }

    async atualizar(req,res){
        if(!req.body.id || !req.body.nome|| !req.body.cnpj ){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const id    = req.body.id;
            const nome  = req.body.nome;
            const cnpj  = req.body.cnpj;
            const data  = await empresa.updateOne({_id:id},{
                $set: {
                    nome: nome,
                    cnpj: cnpj,
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
            const data = await empresa.deleteOne({_id:id});
            res.status(200).json(data)
            return;
        }
    }

}

module.exports = new Empresa_Controller()