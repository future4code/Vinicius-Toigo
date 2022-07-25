-- Active: 1653957237277@@35.226.146.116@3306@joy-420035-vinicius-toigo
USE `joy-420035-vinicius-toigo`;

CREATE TABLE IF NOT EXISTS amaro_products (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,    
    tag VARCHAR(64) NOT NULL,
    image_url VARCHAR (255) NOT NULL
    
);

SELECT * FROM amaro_products;

