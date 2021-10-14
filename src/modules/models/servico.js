const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServicoSchema = new Schema({

    nome:{
        type: String,
        required: true,
    },
    produto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProdutosModel',
        required: true
    },
    valor:{
        type:Number,
    }
})
module.exports = mongoose.model('ServicoModel',ServicoSchema)