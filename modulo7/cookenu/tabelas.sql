CREATE TABLE cookenu_user {
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
};

CREATE TABLE cookenu_recipe {
id varchar(255) PRIMARY KEY,
title varchar(255) NOT NULL, 
description text NOT NULL,
created_at DATE,
author_id VARCHAR(255),
FOREIGN KEY (author_id) REFERENCES cookenu_user(id)
};
