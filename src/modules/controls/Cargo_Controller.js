const cargo = require('../models/cargo');

class cargo_Controller{
    async novo(req,res){
        if(!req.body.nome){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const existe = await cargo.findOne({nome: req.body.nome});
            if(!existe){
                const data = await cargo.create({nome: req.body.nome});
                return res.json({data});
            }else{
                return res.status(401).json({erro:"Já existe cargo com este nome"}); 
            }
           
            
        } 
    }
    
    async listarTodos(req,res){
        const data = await cargo.find({});
        return res.json(data);        
    }

    async listarUnico(req,res){
        if(!req.body.id){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"}); 
            return;    
        }else{
            const data = await cargo.find({_id:req.body.id });
            return res.json(data);
        }
        
    }

    async listarUnicoByName(nome){
        if(!nome){
            return {};
        }else{
            const data = await cargo.findOne({nome:nome });
  
            return data;
        }
        
    }

    async deletarCargo(req,res){
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

module.exports = new cargo_Controller()