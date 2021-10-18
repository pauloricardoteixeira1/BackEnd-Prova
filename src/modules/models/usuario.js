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

    },
    cargo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CargoModel',
        required: true
    }
});

module.exports = mongoose.model('UserModel',UsuarioSchema);