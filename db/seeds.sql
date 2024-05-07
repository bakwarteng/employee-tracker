INSERT INTO department (department_name) VALUES
('Sales'),
('Engineering'),
('Legal');



INSERT INTO role (role_name, salary, department_id)  
VALUES ('Salesperson', 70000, 1), 
       ('Engineer', 100000, 2), 
       ('Lawyer', 150000, 3);

INSERT INTO employee (first_name, last_name, role_name, department_name, role_id, salary, manager_name, manager_id) 
VALUES
    ('John', 'Doe', 'Salesperson','Sales', 1, 70000,'John Doe', 1),
    ('Jane', 'Plaine',' Engineer', 'Engineering', 2, 10000,'Jane Plaine', 2),
    ('Anita', 'Wine', 'Lawyer', 'Legal', 3, 150000, 'Anita Wine',3);
