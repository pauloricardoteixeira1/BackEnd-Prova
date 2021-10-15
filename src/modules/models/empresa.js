const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({

    nome: {
        type: String,
        max: 100,
        required:true
    },
    cnpj:{
        type: Number,
        max: 14,
        required:true
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },
    produtos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProdutoModel',
        }
    ]

});

module.exports = mongoose.model('EmpresaModel',EmpresaSchema)