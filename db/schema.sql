
DROP DATABASE IF EXISTS content_management_systems;
CREATE DATABASE content_management_systems;

\c content_management_systems;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id  SERIAL PRIMARY KEY,
    role_name VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) 
    REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id  SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    salary DECIMAL NOT NULL,
    manager_name VARCHAR(61),
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)

);



