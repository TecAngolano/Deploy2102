//carregar o módulo express
const express = require('express')
//executar o express
const app = express()
//definir a porta do servidor
const porta = process.env.PORT || 3535
//definir a pasta dos assests (css, images,etc)
app.use(express.static('./assets/'))

const consign = require('consign')
consign().include('./routes').into(app)

//exportar as variáveis app e porta
module.exports = {app,porta}