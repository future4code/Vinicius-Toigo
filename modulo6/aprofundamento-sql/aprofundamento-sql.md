USE `joy-420035-vinicius-toigo`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

CREATE TABLE Movies (
 id VARCHAR(25) PRIMARY KEY,
 nomefilme VARCHAR(255) NOT NULL,
 sinopse TEXT NOT NULL,
 release_date DATE NOT NULL,
 avaliação INT NOT NULL 
);

#Nomes das colunas
DESCRIBE Actor; 
DESCRIBE Movies; 

#Nomes presentes nas colunas
SELECT * FROM Actor;
SELECT * FROM Movies; 

### 1 - a)

ALTER TABLE Actor DROP COLUMN salary;

### Este comando excluiria a coluna salary.

### 1 - b)

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

### Este comando muda o nome da coluna "gender" para "sex".

### 1 - c)

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

### Este comando altera a quantidade de caracteres na string gender.

### 2 - a)

UPDATE Actor
SET name = "Moacyr Franco", birth_date = 1995-05-23
WHERE id = "003";

### 2 - b) 

UPDATE Actor
SET name = "JULIANA PAES", 
WHERE name ="Juliana Paes";           

### 2 - c) 

UPDATE Actor
SET name = "Marina Ruy Barbosa", salary = "300000", birth_date = "1997-02-18", gender = "female"
WHERE id = "005";      

### 2 - d) 

UPDATE Actor
SET name = "Marina Ruy Barbosa", salary = "3000000", birth_date = "1997-02-18", gender = "female"
WHERE id = "999";

### A mudança não acontece ao utilizar um id inválido.  

### 3 - a) 

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

### 3 - b)  

DELETE FROM Actor WHERE gender ="male" AND salary >1000000;

### 4 - a)  

SELECT MAX(salary) FROM Actor;

### 4 - b) 

SELECT MIN(salary) FROM Actor WHERE gender ="female"; 

### 4 - c)

SELECT COUNT(*) FROM Actor WHERE gender = "female";

### 4 - d)
 
SELECT SUM(salary) FROM Actor;

### 5 - a)

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;          

### Retornou a quantidade de atores no gênero masculino e feminino. 

### 5 - b) 

SELECT * FROM Actor
ORDER BY name ASC;

### 5 - c) 

SELECT * FROM Actor
ORDER BY salary;

### 5 - d)  

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

### 5 - e)  

SELECT AVG(salary) , gender FROM Actor
GROUP BY gender;

### 6 - a) 

ALTER TABLE Movies ADD playing_limit_date DATE;

### 6 - b) 

ALTER TABLE Movies CHANGE avaliação avaliação FLOAT;

### 6 - c) 

UPDATE Movies
SET playing_limit_date = "2020-12-31"
WHERE id = "010";

### 6 - d) 

DELETE FROM Movies WHERE id = "014"