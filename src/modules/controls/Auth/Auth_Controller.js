const usuario = require("../../models/usuario");
const jwt = require("jsonwebtoken");
const authConfig = require('../../../../config/auth');


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    })
}

class Auth_Controller {
    async login(req, res){
        if(!req.body.nome || !req.body.senha){
            res.status(400).json({erro:"400 - Um ou mais campos ausentes"});  
            return;
        }else{
            const nome  = req.body.nome;
            const senha = req.body.senha;
            const user = await usuario.findOne({nome}).select('+senha');
            if(!user){
                return res.status(400).send('Error: Usuário não encontrado'); 
            }else{
                if(senha!=user.senha){
                    return res.status(400).send('Error: Senha incorreta'); 
                }else{

                    user.senha = '';
                    const token = generateToken({id:user.id});
                    res.send({user,token});
                }
            }
        }
    }
}

module.exports = new Auth_Controller()