var express = require('../config/express')();
let request = require('supertest')(express);

describe("#ProdutosController", () => {
  it("#Resposta JSON", (done) => {
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})
//Testes com o assert
/* let http = require('http');
let assert = require('assert');
describe("#ProdutosController", () => {
  it("#Resposta json", (done) => {
    let configuracoes = {
      hostname: "localhost",
      port: 3000,
      path: '/produtos',
      headers: {
        'Accept': 'application/json'
      }
    }

    http.get(configuracoes, (res) => {
      //assert.equal(res.statusCode == 200);
      //assert.equal(res.headers['content-type'] == 'application/json; charset=utf-8')
      if (res.statusCode == 200) {
        console.log("Resposta OK");
      }
      if (res.headers['content-type'] == 'application/json; charset=utf-8') {
        console.log("Content type ok");
      } else {
        console.log("Ocorreu algum erro");
      }
    })

    done();
  })
}) */