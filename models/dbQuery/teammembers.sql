CREATE TABLE  teammembers(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    active BOOLEAN NOT NULL DEFAULT 1,
    role ENUM('teamlead','seniordev','dev','juniordev') NOT NULL,
    e_id int,
    FOREIGN KEY (e_id) REFERENCES employees(id),
    t_id int,
    FOREIGN KEY (t_id) REFERENCES teams(id) ON DELETE CASCADE ON UPDATE CASCADE
    );
