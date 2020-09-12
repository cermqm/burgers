-- Drops the movie_planner_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  devoured boolean,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers_db.burgers (burger, devoured) VALUES ('Double Beef with Bacon', false);

UPDATE burgers SET burgers.devoured = false WHERE id = 2;


UPDATE burgers SET devoured = false WHERE id = 1;
UPDATE burgers SET devoured = false WHERE id = 2;
UPDATE burgers SET devoured = false WHERE id = 3;
UPDATE burgers SET devoured = false WHERE id = 4;
UPDATE burgers SET devoured = false WHERE id = 5;
UPDATE burgers SET devoured = false WHERE id = 6;
UPDATE burgers SET devoured = false WHERE id = 7;
UPDATE burgers SET devoured = false WHERE id = 8;


