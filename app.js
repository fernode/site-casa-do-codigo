const app = require('./config/express')();
/*const rotasProdutos = require('./app/rotas/produtos')(app);
    Não há mais necessidade de ser carregado, porquê estou usando o express-load
    para carregar os arquivos.
*/
const server = app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});