DROP DATABASE IF EXISTS content_management_systems;
CREATE DATABASE content_management_systems;

\c content_management_systems;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name: VARCHAR(30) NOT NULL 
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  salary DECIMAL NOT NULL,
  department_id  INTEGER NOT NULL;
--   FOREIGN KEY (book_price)
--   REFERENCES book_prices(id)
--   ON DELETE SET NULL
);

CREATE TABLE name (
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER NOT NULL,
    manager_id INTEGER
--   id SERIAL PRIMARY KEY,
--   salary DECIMAL NOT NULL,
--   department_id  INTEGER NOT NULL;
-- --   FOREIGN KEY (book_price)
-- --   REFERENCES book_prices(id)
-- --   ON DELETE SET NULL
);

