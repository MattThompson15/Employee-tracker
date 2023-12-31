-- Description: SQL script to create the schema for the employee_db database

-- Create the database if not exists, using the employee_db database
CREATE DATABASE IF NOT EXISTS employee_db;
USE employee_db;

--Creating the department table
CREATE TABLE IF NOT EXISTS department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

-- Creating the role table
CREATE TABLE IF NOT EXISTS role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);


-- Creating the employee table
CREATE TABLE IF NOT EXISTS employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);