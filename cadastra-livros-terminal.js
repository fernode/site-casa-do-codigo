let http = require('http');

let configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

let cliente = http.request(configuracoes, (res) => {
    console.log(res.statusCode);
    res.on('data', (body) => {
        console.log('corpo' + body);
    })
})

let produto = {
    titulo: "Mais sobre node js",
    descricao: "Um livro maneiro sobre node js",
    preco: 100
}

cliente.end(JSON.stringify(produto));