-- Create the database
CREATE DATABASE IF NOT EXISTS database_name;

-- Use the database
USE database_name;

-- Define your database schema below
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- You can add more table definitions or other schema definitions as needed
