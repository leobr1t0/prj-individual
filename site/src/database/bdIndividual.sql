CREATE DATABASE bdPrjIndividual;
USE bdPrjIndividual;

CREATE TABLE IF NOT EXISTS tbUsuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(50) NOT NULL,
    emailUsuario VARCHAR(100) NOT NULL, 
		CONSTRAINT chkEmail CHECK (emailUsuario LIKE ('%@%')),
    senhaUsuario VARCHAR(100) NOT NULL, 
		CONSTRAINT chkSenha CHECK (length(senhaUsuario) > 5)
);

CREATE TABLE IF NOT EXISTS tbQuiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    nomeQuiz VARCHAR(45),
    qtdPerguntas INT
);

CREATE TABLE IF NOT EXISTS tbPontuacao(
	idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT,
    perPontuacao FLOAT, 
    fkUsuario INT, 
		FOREIGN KEY (fkUsuario) REFERENCES tbUsuario(idUsuario),
    fkQuiz INT, 
		FOREIGN KEY (fkQuiz) REFERENCES tbQuiz(idQuiz)
);

INSERT INTO tbQuiz VALUES
(NULL, 'Quiz 1', 10),
(NULL, 'Quiz 2', 10),
(NULL, 'Quiz 3', 10);

