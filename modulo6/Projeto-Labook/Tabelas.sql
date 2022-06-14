 CREATE TABLE labook_user (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255)
    );

      CREATE TABLE labook_post (
        id VARCHAR(255) PRIMARY KEY,
        photo VARCHAR(255),
        description VARCHAR(255),
        creation_data VARCHAR(255),
        type enum("NORMAL", "EVENT"),
        user_id VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES labook_user(id)
    );

      CREATE TABLE labook_friend (
        user VARCHAR(255),
        make_friendship VARCHAR(255),
        PRIMARY KEY(user,make_friendship),
        FOREIGN KEY(user) REFERENCES labook_user(id),
        FOREIGN KEY(make_friendship) REFERENCES labook_user(id)
    );



