const express  = require('express');
const db       = require('./src/shared/database/mongo');
const rotas    = require('./src/modules/routes/routes');
const routeAuth = require('./src/modules/controls/Auth/route_Auth');
const mongoose = require('mongoose');
//const jwt      = require('jsonwebtoken');

const app = express();
const porta = 3000;

mongoose.connect(db.uri);
app.use(express.json());
app.use(rotas);
app.use(routeAuth);

app.listen(process.env.PORT || porta, function() {
    console.log('App de Exemplo escutando na porta 3000!');
});


