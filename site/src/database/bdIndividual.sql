CREATE DATABASE bdPrjIndividual;
USE bdPrjIndividual;

CREATE TABLE tbUsuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(50) NOT NULL,
    emailUsuario VARCHAR(100) NOT NULL, 
		CONSTRAINT chkEmail CHECK (emailUsuario LIKE ('%@%')),
    senhaUsuario VARCHAR(100) NOT NULL, 
		CONSTRAINT chkSenha CHECK (length(senhaUsuario) > 5)
);

CREATE TABLE tbQuiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    nomeQuiz VARCHAR(45),
    qtdPerguntas INT
);

CREATE TABLE tbPontuacao(
	idPontuacao INT,
    pontuacao INT,
    perPontuacao FLOAT, 
    fkUsuario INT, 
		FOREIGN KEY (fkUsuario) REFERENCES tbUsuario(idUsuario),
    fkQuiz INT, 
		FOREIGN KEY (fkQuiz) REFERENCES tbQuiz(idQuiz),
    PRIMARY KEY (idPontuacao, fkUsuario, fkQuiz)
);

