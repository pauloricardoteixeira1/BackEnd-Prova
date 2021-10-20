const empresa = require('../models/empresa');
const prods =require('../models/produto');
const servs = require('../models/servico');

class Empresa_Controller{
    async novo(req,res){
        if(!req.body.nome|| !req.body.cnpj || !req.userId ){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{

            if(req.body.nome.length<= 100 && req.body.cnpj.length<= 14){
                const existe = await empresa.findOne({nome: req.body.nome, cnpj: req.body.cnpj});
                if(!existe){
                    const data = await empresa.create({...req.body, usuario: req.userId});
                    return res.json({data});
                }else{
                    return res.status(400).json({erro:"Empresa já cadastrado"});
                }
                
            }else{   
                return res.status(400).json({erro:"400 - Um ou mais campos incoerentes"});;    
            }
            
        } 
    }
    
    async listarTodos(req,res){
        if(!req.userId ){
            res.status(401).json({erro:"401 - Não autorizado"}); 
            return;    
        }else{
            const data = await empresa.find({usuario:req.userId}).populate('usuario');
            return res.json(data);
        } 
        
    }

    async listarUnico(req,res){
        if(!req.params.id || !req.userId){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await empresa.find({_id:req.params.id,usuario:req.userId });
            return res.json(data);
        }
        
    }

    async listarProdutos(req,res){
        if(!req.params.id || !req.userId){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const data = await empresa.find(
                {
                    _id:req.params.id,
                    usuario:req.userId
                }).populate('produtos');
            return res.json(data); 
        }
    }

    async listarServicos(req,res){
        if(!req.params.id || !req.userId, !req.params.produtoId){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const data = await servs.find(
                {
                    usuario:req.userId,
                    empresa:req.params.empresaId,
                    produtos:req.params.produtoId
                });
            return res.json(data); 
        }
    }

    async atualizar(req,res){
        if(!req.userId ||!req.body.empresaId || !req.body.nome|| !req.body.cnpj ){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const id    = req.body.empresaId;
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
        if(!req.params.id ){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;
        }else{
            const id = req.params.id;
            
            await prods.deleteMany({empresa:id});
            await servs.deleteMany({empresa:id});
            const data = await empresa.deleteOne({_id:id});
            res.status(200).json(data)
            return;
        }
    }

}

module.exports = new Empresa_Controller()