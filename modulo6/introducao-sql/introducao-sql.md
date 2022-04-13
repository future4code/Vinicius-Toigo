USE `database-joy-420035-vinicius-toigo`;

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
	"001",
    "Tony Ramos",
    400000,
    "1984-08-25",
    "male"
), (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
    
), (
  "005", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"

);

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

### 4 

SELECT * FROM Actors WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;