INSERT INTO department (id, name) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'):

INSERT INTO role (id, title, salary, department_id) VALUES

(1, 'Sales Manager', 60000, 1),
(2, 'Software Engineer', 80000, 2),
(3, 'Accountant', 50000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Jane', 'Smith', 2, 1),
(3, 'Bob', 'Johnson', 3, NULL);