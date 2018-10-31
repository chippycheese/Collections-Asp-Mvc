CREATE DATABASE my_collection;
use my_collection;

CREATE TABLE `collections` (
  `CollectionId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Total` int(11) DEFAULT NULL,
  `Collected` int(11) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`CollectionId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

CREATE TABLE `items` (
  `ItemId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Price` decimal(11,2) DEFAULT NULL,
  `Collected` tinyint(1) DEFAULT NULL,
  `CollectionId` int(10) unsigned NOT NULL,
  `Active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`ItemId`),
  KEY `collection_id` (`CollectionId`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`CollectionId`) REFERENCES `collections` (`CollectionId`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

INSERT INTO collections (CollectionId, Name, Collected, Total, Active) VALUES ( 1,'Tools'         , 2, 7, 1);
INSERT INTO collections (CollectionId, Name, Collected, Total, Active) VALUES ( 2,'Baseball Cards', 1, 2, 0);

INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 1,'Hammer'        ,  9.99, 1, 1, 1);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 2,'Screwdriver'   ,  4.99, 1, 1, 1);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 3,'Wrench'        ,  4.99, 0, 1, 1);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 4,'Tape Measure'  ,  9.99, 0, 1, 1);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 5,'Pliers'        ,  4.99, 0, 1, 1);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 6,'Power Drill'   , 24.99, 0, 1, 1);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 7,'Power Saw'     , 34.99, 0, 1, 1);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 8,'Pencil'        ,  2.99, 0, 1, 0);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES ( 9,'Albert Pujols' ,  3.99, 0, 2, 0);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES (10,'Babe Ruth'     , 12.99, 1, 2, 1);
INSERT INTO items (ItemID,Name,Price,Collected,CollectionID,Active)    VALUES (11,'Hank Aaron'    , 24.99, 0, 2, 1);