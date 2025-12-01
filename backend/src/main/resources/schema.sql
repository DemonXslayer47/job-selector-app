DROP TABLE IF EXISTS job_skill_mapping;
DROP TABLE IF EXISTS user_skill;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS skill;
DROP TABLE IF EXISTS job;

CREATE TABLE skill (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE job (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    company VARCHAR(255),
    location VARCHAR(255),
    description VARCHAR(2000)
);

CREATE TABLE job_skill_mapping (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    skill_id INT,
    importance INT,
    FOREIGN KEY (job_id) REFERENCES job(id),
    FOREIGN KEY (skill_id) REFERENCES skill(id)
);

CREATE TABLE course (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    provider VARCHAR(255),
    link VARCHAR(255),
    difficulty VARCHAR(50),
    duration VARCHAR(50),
    rating DOUBLE
);

CREATE TABLE user_skill (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skill_id INT,
    FOREIGN KEY (skill_id) REFERENCES skill(id)
);
