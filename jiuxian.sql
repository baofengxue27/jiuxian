/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : jiuxian

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-02-19 21:15:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `mess`
-- ----------------------------
DROP TABLE IF EXISTS `mess`;
CREATE TABLE `mess` (
  `user` varchar(50) NOT NULL,
  `content` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mess
-- ----------------------------
INSERT INTO `mess` VALUES ('a', '啊啊阿道夫撒发的阿发啊');
INSERT INTO `mess` VALUES ('asfa', 'a a');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'user1', '123456');
INSERT INTO `user` VALUES ('2', 'user2', '123456');
