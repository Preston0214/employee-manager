DELETE IF EXISTS company_db
CREATE DATABASE company_db

CREATE TABLE employees(
    id INT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE SET NULL
);

CREATE TABLE roles(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE department(
    id INT PRIMARY KEY,
    name VARCHAR(20)
);


