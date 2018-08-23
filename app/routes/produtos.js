module.exports = app => {
    app.get("/produtos", (req, res) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.lista((err, results) => {
            res.format({
                html: () => {
                    res.render("produtos/lista", {
                        livros: results
                    });
                },
                json: () => {
                    res.json(results);
                }
            });
        });

        connection.end();
    });

    app.get("/produtos/form", (req, res) => {
        res.render("produtos/form.ejs", {
            errosValidacao: {},
            produto: {}
        });
    });

    app.post("/produtos", (req, res) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        let produto = req.body;

        //let validadarTitulo = req.assert("titulo", "Titulo é obrigatório");
        //validarTitulo.notEmpty();

        req.assert("titulo", "Titulo é obrigatório").notEmpty();
        req.assert("preco", "Coloque um preço válido").isFloat();
        req.assert("descricao", "Adicione uma descrição").notEmpty();

        var erros = req.validationErrors();

        if (errors) {
            res.status(400);
            res.format({
                html: function () {
                    res.render("produtos/form", {
                        validationErrors: errors,
                        produto: produto
                    });
                },
                json: function () {
                    res.send(errors);
                }
            });
            return;
        }

        produtosDAO.salva(produto, (err, results) => {
            if (results) {
                res.redirect("/produtos");
            } else {
                console.log(err);
            }
        });
    });
};