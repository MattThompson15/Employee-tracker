-- Description: SQL script to see initial data into the employee_db database.

-- Inserting departments
INSERT INTO department (id, name) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'HR');

-- Inserting roles
INSERT INTO role (id, title, salary, department_id) VALUES

(1, 'Sales Manager', 60000, 1),
(2, 'Software Engineer', 80000, 2),
(3, 'Accountant', 50000, 3),
(4, 'Head Engineer', 70000, 4);

-- Inserting employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Bob', 'Johnson', 3, NULL),
('Matt', 'Thompson', 4, 2);