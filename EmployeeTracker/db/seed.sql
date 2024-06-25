INSERT INTO department (id, name) VALUES (1,'Sales');
INSERT INTO department (id, name) VALUES (2,'Engineering');
INSERT INTO department (id, name) VALUES (3,'Finance');
INSERT INTO department (id, name) VALUES (4,'Legal');


INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Sales Lead', 100000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Salesperson', 80000, 1),
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Lead Engineer', 150000, 2),
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Software Engineer', 120000, 2),
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Accountant', 125000, 3),
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Legal Team Lead', 250000, 4),
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'John', 'David', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Micheal', 'Sanders', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Sarah', 'Jane', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Wes', 'Smith', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'James', 'Brown', 5, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Laura', 'Jones', 6, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Charlotte', 'Hall', 7, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Paul', 'Parker', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, 'Tom', 'Davies', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, 'Chloe', 'Adams', 7, 6);
