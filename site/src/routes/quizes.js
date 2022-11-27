var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/", function (req, res) {
    quizController.testar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    quizController.listarPorUsuario(req, res);
});

router.get("/listarTodos", function(req, res) {
    quizController.listarPlacar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrarPontuacao", function (req, res) {
    quizController.cadastrarPontuacao(req, res);
});

module.exports = router;