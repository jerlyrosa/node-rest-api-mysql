create database companydb;

 create table employee(
    id INT(11) NOT NUll AUTO_INCREMENT,
    name VARCHAR(40) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
 );
