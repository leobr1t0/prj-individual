
var quizModel = require("../models/quizModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA quizModel");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    quizModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarPontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontosServer;
    var perPontos = req.body.percentualServer;
    var usuario = req.body.usuarioServer;
    var id = req.body.quizServer;

    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Seus pontos está undefined!");
    } else if (perPontos == undefined) {
        res.status(400).send("Seus perPontos está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrarPontuacao(pontos, perPontos, usuario, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    testar,
    cadastrarPontuacao,
    listar
}