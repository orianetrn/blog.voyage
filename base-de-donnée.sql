CREATE DATABASE message ; 

CREATE TABLE formulaire (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(64),
    prenom VARCHAR(64),
    email VARCHAR(64),
    message VARCHAR(64)
);