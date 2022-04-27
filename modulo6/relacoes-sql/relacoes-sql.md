USE `joy-420035-vinicius-toigo`;

### Exercício 1 

### - a) 

### foreign key é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela.

### - b) 

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movies_id VARCHAR(255),
    FOREIGN KEY (movies_id) REFERENCES Movies(id)
);

INSERT INTO Rating VALUES("010","Filme excelente","8","010");

INSERT INTO Rating VALUES("011","Filme ruim","2","011");

### TABELAS
SELECT * FROM Actors;
SELECT * FROM Movies;
SELECT * FROM Rating;
SELECT * FROM MoviesCast;

### - c) 

INSERT INTO Rating VALUES("000","Filme ruim","2","000");

### Não se pode adicionar ou atualizar a tabela que faça referência a uma tabela com id inexistente ou inválido

### - d) 

ALTER TABLE Movies DROP COLUMN avaliação;

### - e)   

### Não é possível deletar ou atualizar um dado que faça fronteira com a tabela Rating.

### Exercício 2

CREATE TABLE MoviesCast (
		movies_id VARCHAR(255),
		actors_id VARCHAR(255),
    FOREIGN KEY (movies_id) REFERENCES Movies(id),
    FOREIGN KEY (actors_id) REFERENCES Actors(id)
);

### - a) 

### Nesta tabela, possui o id do filme, juntamente com o id do ator e mais suas chaves estrangeiras.

### - b)

INSERT INTO MoviesCast 
VALUES(
	"010",
    "1"
);
INSERT INTO MoviesCast 
VALUES(
	"010",
    "2"
);

#### c)

### Não se pode adicionar ou atualizar a tabela que faça referência a uma tabela com id inexistente ou inválido

#### d)

### Não é possível deletar ou atualizar um dado que faça fronteira com a tabela MovieCast

## Exercício 3

#### a)

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movies_id;

### O operador ON é o que fará a referência de uma tabela em outra "ONDE" a relação existir.

#### b) 

SELECT m.id as movies_id, r.rate as avaliação FROM Movies m
INNER JOIN Rating r ON m.id = r.movies_id;

## Exercício 4

### - a)

SELECT m.id as movies_id, m.nome_filme, r.rate as rating, r.comment as rating_comment
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movies_id;

### - b) 

SELECT m.id as movise_id, m.nome_filme, mc.actors_id FROM Movies m
RIGHT JOIN MoviesCast mc ON mc.movies_id = m.id;

### - c) 

SELECT AVG(r.rate), m.id, m.nome_filme FROM Movies m
LEFT JOIN Rating r ON m.id = r.movies_id
GROUP BY (m.id);