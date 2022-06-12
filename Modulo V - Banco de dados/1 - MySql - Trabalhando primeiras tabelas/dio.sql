/* CRIANDO TABELAS E INSERINDO DADOS */

CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas ( nome, nascimento ) VALUES('Matheus', '1996-06-21');
INSERT INTO pessoas ( nome, nascimento ) VALUES('Marianna', '1996-04-16');

/* SELECIONANDO DADOS */

SELECT * FROM pessoas /* mostra todo conteúdo da tabela */

SELECT nome FROM pessoas /* mostra apenas a coluna nomes */

SELECT nascimento FROM pessoas /* mostra apenas a coluna nascimento */

SELECT nome, nascimento FROM pessoas /* não mostra o id */

/* ATUALIZANDO DADOS */

UPDATE pessoas SET nome='Matheus Barcellos' WHERE id=1 /* altera/atualiza o valor */

/* DELETANDO DADOS */

DELETE FROM pessoas WHERE id=1 /* deleta permanentemente a linha do id referenciado */

/* ORDENANDO OS DADOS */

SELECT * FROM pessoas ORDER BY nascimento /* crescente */

SELECT * FROM pessoas ORDER BY nascimento DESC /* decrescente */

/* INSERINDO NOVA COLUNA */

ALTER TABLE pessoas ADD genero VARCHAR(1) NOT NULL AFTER nascimento; 

/* Agrupando dados */

SELECT COUNT(id), genero FROM pessoas GROUP BY genero /* mostra a quantidade de cada genero na tabela */