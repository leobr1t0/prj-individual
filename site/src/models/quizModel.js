var database = require("../database/config")

function listarPlacares() {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPlacares()");
    var instrucao = `
    SELECT nomeUsuario AS nome, ROUND(AVG(pontuacao),2) AS pontuacao, ROUND(AVG(perPontuacao),2) AS perPontuacao FROM tbUsuario
	JOIN tbPontuacao ON idUsuario = fkUsuario
		GROUP BY nomeUsuario
        ORDER BY pontuacao DESC, perPontuacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuario(id) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT * FROM tbPontuacao 
	JOIN tbQuiz ON idQuiz = fkQuiz
		WHERE fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarPontuacao(pontos, perPontos, usuario, id) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPontuacao():", pontos, perPontos, usuario, id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO tbPontuacao (pontuacao, perPontuacao, fkUsuario, fkQuiz) VALUES (${pontos}, ${perPontos}, ${usuario}, ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarPontuacao,
    listarUsuario,
    listarPlacares
};