const express   = require('express');
const cors      = require('cors');

const db        = require('./src/shared/database/mongo');

const rotas_usuario    = require('./src/modules/routes/Usuario_routes');
const rotas_empresa    = require('./src/modules/routes/Empresa_routes');
const rotas_produto    = require('./src/modules/routes/Produtos_routes');
const rotas_servico    = require('./src/modules/routes/Servicos_routes');

const routeAuth = require('./src/modules/controls/Auth/route_Auth');
const mongoose  = require('mongoose');

const app = express();
const porta = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    app.use(cors());
    next();
});

// root
app.get("/",(req,res) => {
    res.sendFile('./src/modules/views/index.html',{root:__dirname});
});

mongoose.connect(db.uri);
app.use(express.json());
app.use(rotas_usuario);
app.use(rotas_empresa);
app.use(rotas_produto);
app.use(rotas_servico);


app.use(routeAuth);

app.listen(process.env.PORT || porta, function() {
    console.log('App de Exemplo escutando na porta 3000!');
});


