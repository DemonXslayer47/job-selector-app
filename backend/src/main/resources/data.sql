INSERT INTO skill (name) VALUES
('Java'), ('Python'), ('React'), ('SQL'), ('AWS'), ('Spring Boot'),
('HTML'), ('CSS'), ('Node.js');

INSERT INTO job (title, company, location, description) VALUES
('Full Stack Developer', 'Google', 'Remote', 'Develop both front and backend systems.'),
('Backend Engineer', 'Amazon', 'USA', 'Responsible for Java-based backend services.'),
('Frontend Developer', 'Meta', 'USA', 'Work on modern UI using React.');

INSERT INTO job_skill_mapping (job_id, skill_id, importance) VALUES
-- Full Stack
(1, 1, 5), (1, 3, 5), (1, 4, 4), (1, 5, 4),

-- Backend
(2, 1, 5), (2, 6, 5), (2, 4, 4), (2, 5, 4),

-- Frontend
(3, 3, 5), (3, 7, 4), (3, 8, 4);

INSERT INTO course (title, provider, link, difficulty, duration, rating) VALUES
('Java Advanced', 'Coursera', 'https://coursera.org/java', 'Intermediate', '6 weeks', 4.5),
('AWS Basics', 'Udemy', 'https://udemy.com/aws', 'Beginner', '4 weeks', 4.3),
('React Pro', 'EDX', 'https://edx.org/react', 'Advanced', '8 weeks', 4.7),
('Full Stack Web Development', 'Pluralsight', 'https://pluralsight.com/fullstack', 'Intermediate', '10 weeks', 4.6);
