const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProdutoSchema  = new Schema({
    nome: {
        type: String,
        min:3,
        max:16, 
        required:true
    },
    empresa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmpresaModel',
        required: true
    },
    servicos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'ServicoModel',
    }]

})

module.exports = mongoose.model('ProdutoModel',ProdutoSchema)