USE `joy-420035-vinicius-toigo`;

CREATE TABLE Actors (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#Nomes das colunas
DESCRIBE Actors; 

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES (
	"1",
    "Tony Ramos",
    400000,
    "1984-08-25",
    "male"
), (
	"2",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
    
),(
  "3", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
),(
  "4", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
), (
  "5", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"
),(
	"6",
    "Fábio Assunção",
    400000,
    "1984-08-25",
    "male"
);


#Nomes presentes nas colunas
SELECT * FROM Actors;

### 3 - a) 

SELECT * FROM Actors WHERE gender = "female";

### 3 - b) 

SELECT salary FROM Actors WHERE name = "Tony Ramos";

### 3 - c)

SELECT * FROM Actors WHERE gender = "invalid";

### 3 - d)

SELECT id, name, salary FROM Actors WHERE salary <= 500000;

### 3 - e)

SELECT id, name from Actors WHERE id = "002";

### 4 -a)
###Seleciona todos o atores da tabela Ator desde que o nome se inicie com a letra A ou J e o salário seja maio que 300000.
SELECT * FROM Actors WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

### 4 - b)
SELECT * FROM Actors
WHERE (name NOT LIKE "%A%") AND salary > 350000;

### 4 - c)
SELECT * FROM Actors
WHERE (name LIKE "%G%" OR "%g%");

### 4 - d)
SELECT * FROM Actors
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

### 5 

CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    nome_filme VARCHAR (255) NOT NULL,
    sinopse TEXT(500),
    release_date DATE NOT NULL,
    avaliação  INT NOT NULL
);

DESCRIBE Movies;

INSERT INTO Movies(id,nome_filme, sinopse, release_date, avaliação)
VALUES (
"014",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
"7"

),(
"011",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
"10"

),(
"012",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
"8"

);

SELECT * FROM Movies;

### 6 - a)

SELECT id, nome_filme, avaliação FROM Movies WHERE id = "014"; 

### 6 - b)

SELECT * FROM Movies WHERE nome_filme = "Se Eu Fosse Você";

### 6 - c)

SELECT id, nome_filme, avaliação FROM Movies WHERE avaliação >=7;

### 7 - a)

SELECT * FROM Movies WHERE nome_filme="vida";

### 7 - b)

SELECT * FROM Movies WHERE nome_filme LIKE "%Dona%" OR sinopse LIKE "%Dona%";

### 7 - c)

SELECT * FROM Movies WHERE release_date < "2022-04-15";

### 7 - d)

SELECT * FROM Movies WHERE release_date < "2022-04-15" AND avaliação >7;
