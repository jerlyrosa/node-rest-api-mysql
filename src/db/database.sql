create database companydb;

 create table employee(
    id INT(11) NOT NUll AUTO_INCREMENT,
    name VARCHAR(40) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
 );


DECRIBE employee;



INSERT INTO employee VALUES 
(1, 'John',1000),
(2, 'Pedro',900),
(3, 'Juan',1500),
(4, 'Jose',2200);


