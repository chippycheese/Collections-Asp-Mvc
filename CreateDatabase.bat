CREATE DATABASE my_collection;
use my_collection;

CREATE TABLE `collections` (
  `CollectionId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `collected` int(11) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`CollectionId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

CREATE TABLE `items` (
  `ItemId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `price` decimal(11,2) DEFAULT NULL,
  `collected` tinyint(1) DEFAULT NULL,
  `CollectionId` int(10) unsigned NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`ItemId`),
  KEY `collection_id` (`CollectionId`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`CollectionId`) REFERENCES `collections` (`CollectionId`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

INSERT INTO collections (CollectionId, name, collected, total, active) VALUES ( 1,'Tools'         , 2, 7, 1);
INSERT INTO collections (CollectionId, name, collected, total, active) VALUES ( 2,'Baseball Cards', 1, 2, 0);

INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 1,'Hammer'        ,  9.99, 1, 1, 1);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 2,'Screwdriver'   ,  4.99, 1, 1, 1);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 3,'Wrench'        ,  4.99, 0, 1, 1);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 4,'Tape Measure'  ,  9.99, 0, 1, 1);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 5,'Pliers'        ,  4.99, 0, 1, 1);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 6,'Power Drill'   , 24.99, 0, 1, 1);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 7,'Power Saw'     , 34.99, 0, 1, 1);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 8,'Pencil'        ,  2.99, 0, 1, 0);

INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES ( 9,'Albert Pujols' ,  3.99, 0, 2, 0);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES (10,'Babe Ruth'     , 12.99, 1, 2, 1);
INSERT INTO items (ItemID,name,price,collected,CollectionID,active)    VALUES (11,'Hank Aaron'    , 24.99, 0, 2, 1);