CREATE TABLE  cer(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    c_id int,
    FOREIGN KEY (c_id) REFERENCES companies(id) ON DELETE CASCADE ON UPDATE CASCADE,
    e_id int,
    FOREIGN KEY (e_id) REFERENCES employees(id)
    );
