const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        min:3,
        max:16, 
        required:true
    },
    cpf: {
        type: Number,
        min:11,
        required:true
    },
    senha: {
        type:String,
        min:3,
        max:16, 
        required:true,
        select: false,

    }
});

module.exports = mongoose.model('UserModel',UsuarioSchema);