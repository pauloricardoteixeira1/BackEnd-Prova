const produtos = require('../models/produto');
const empresa_father = require('../models/empresa');
class Produtos_Controller{
    async novo(req,res){
        if(!req.body.nome|| !req.body.empresa){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const nome = req.body.nome;
            const empresa = req.body.empresa;
            const data = await produtos.create({nome:nome,empresa:empresa});
            await empresa_father.findOneAndUpdate(
                {"_id": empresa},
                {
                    $push:{
                        "produtos": data._id,
                    },
                }
            );
            return res.json({data});
        } 
    }
    
    async listarTodos(req,res){
        const data = await produtos.find({})
        return res.json(data);
    }

    async listarServicos(req,res){
        if(!req.body.id){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const data = await produtos.find({_id:req.body.id}).populate('servicos')
            return res.json(data); 
        }
        
    }

    async atualizar(req,res){
        if(!req.body.id || !req.body.empresa){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const id    = req.body.id;
            const nome  = req.body.nome;
            const empresa  = req.body.empresa;
            const data  = await produtos.updateOne({_id:id},{
                $set: {
                    nome: nome,
                    empresa: empresa,
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
            const data = await produtos.deleteOne({_id:id});
            res.status(200).json(data)
            return;
        }
    }

}

module.exports = new Produtos_Controller()