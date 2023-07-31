CREATE TABLE people(
       id INT PRIMARY KEY AUTO_INCREMENT, 
       name VARCHAR(60)
);
INSERT INTO people(
       name) 
VALUES(
       "Filipe Machado" 
);

INSERT INTO people(
       name) 
VALUES(
       "Mariana Bedin" 
);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'; 
flush privileges;
