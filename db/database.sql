mysql://b6b68d3688aa15:3fd70966@us-cdbr-east-06.cleardb.net/heroku_e378c1a8b576162?reconnect=true

HostName: us-cdbr-east-06.cleardb.net
Username: b6b68d3688aa15
Password: 3fd70966
Database: heroku_e378c1a8b576162


-- VALUES

USE heroku_e378c1a8b576162;

DROP TABLE IF EXISTS user_info;

CREATE TABLE user_info (
	id INTEGER AUTO_INCREMENT NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO user_info (username, password)
VALUES ('dustyman', 'password123');
    
INSERT INTO user_info (username, password)
VALUES ('larryboy', 'password111');

INSERT INTO user_info (username, password)
VALUES ('robert', 'example1');
    
SELECT * FROM user_info;