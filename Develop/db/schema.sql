-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE category (
    id INT AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
)