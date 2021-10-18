const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CargoSchema = new Schema({
    nome: {
        type: String,
        min:3,
        max:16, 
        required:true
    }
});

module.exports = mongoose.model('CargoModel',CargoSchema);