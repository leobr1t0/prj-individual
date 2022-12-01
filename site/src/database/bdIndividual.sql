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

INSERT INTO tbUsuario VALUES
(NULL, 'Leo', 'leonardo1@gmail.com', '12345678'),
(NULL, 'Rebeca', 'rebeca@gmail.com', '12345678'),
(NULL, 'Samuel', 'samuel@gmail.com', '12345678'),
(NULL, 'Marcelo', 'marcelo@gmail.com', '12345678'),
(NULL, 'Will', 'will@gmail.com', '12345678'),
(NULL, 'Luan', 'luan@gmail.com', '12345678'),
(NULL, 'Tulio', 'tulio@gmail.com', '12345678'),
(NULL, 'Lucas', 'lucas@gmail.com', '12345678'),
(NULL, 'Marcus', 'marcus@gmail.com', '12345678'),
(NULL, 'Vinicius', 'vinicius@gmail.com', '12345678');

INSERT INTO tbPontuacao VALUES
(NULL, 9, 90, 1, 1),
(NULL, 9, 90, 1, 2),
(NULL, 9, 90, 1, 3),
(NULL, 8, 80, 2, 1),
(NULL, 8, 80, 2, 2),
(NULL, 8, 80, 2, 3),
(NULL, 8, 90, 3, 1),
(NULL, 7, 70, 3, 2),
(NULL, 5, 50, 3, 3),
(NULL, 6, 60, 4, 1),
(NULL, 4, 40, 4, 2),
(NULL, 3, 30, 4, 3),
(NULL, 2, 20, 5, 1),
(NULL, 1, 10, 5, 2),
(NULL, 3, 30, 5, 3),
(NULL, 1, 10, 6, 1),
(NULL, 9, 90, 6, 2),
(NULL, 10, 100, 6, 3),
(NULL, 10, 100, 7, 1),
(NULL, 9, 90, 7, 2),
(NULL, 1, 10, 7, 3),
(NULL, 2, 20, 8, 1),
(NULL, 4, 40, 8, 2),
(NULL, 5, 50, 8, 3),
(NULL, 7, 70, 9, 1),
(NULL, 6, 60, 9, 2),
(NULL, 8, 80, 9, 3),
(NULL, 9, 90, 10, 1),
(NULL, 10, 100, 10, 2),
(NULL, 8, 80, 10, 3);



