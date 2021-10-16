CREATE TABLE  employees(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL ,
    email VARCHAR(200),
    number VARCHAR(14),
    active BOOLEAN NOT NULL DEFAULT 0,
    level ENUM('manager','teamlead','seniordev','dev','juniordev') NOT NULL,
    c_id int,
    FOREIGN KEY (c_id) REFERENCES companies(id)
    );
