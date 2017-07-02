/*
SQLyog Ultimate v9.63 
MySQL - 5.5.40 : Database - gamesoul
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`gamesoul` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `gamesoul`;

/*Table structure for table `game_info` */

DROP TABLE IF EXISTS `game_info`;

CREATE TABLE `game_info` (
  `appId` varchar(32) NOT NULL,
  `appName` varchar(50) DEFAULT NULL,
  `appVersion` varchar(32) DEFAULT NULL,
  `appURL` varchar(50) DEFAULT NULL,
  `onLineTime` datetime DEFAULT NULL,
  `appDesc` varchar(1000) DEFAULT NULL,
  `isOnLine` char(1) DEFAULT NULL,
  `appType` char(1) DEFAULT NULL,
  `note` varchar(1000) DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`appId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `game_info` */

insert  into `game_info`(`appId`,`appName`,`appVersion`,`appURL`,`onLineTime`,`appDesc`,`isOnLine`,`appType`,`note`,`updatetime`) values ('4028d8f25d03d9cd015d03deb432004a','3333333111','33','applogoMF_1499008513080.apk','2017-07-02 23:14:47','123','1','0','333','2017-07-02 23:15:22');

/*Table structure for table `lk_role_priv` */

DROP TABLE IF EXISTS `lk_role_priv`;

CREATE TABLE `lk_role_priv` (
  `conid` varchar(32) NOT NULL,
  `roleid` varchar(32) DEFAULT NULL,
  `privid` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`conid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `lk_role_priv` */

insert  into `lk_role_priv`(`conid`,`roleid`,`privid`) values ('1','1','1'),('2','1','101'),('3','1','101101'),('4','1','101102'),('5','1','101103'),('6','1','2'),('7','1','201'),('8','1','201101');

/*Table structure for table `lk_user_role` */

DROP TABLE IF EXISTS `lk_user_role`;

CREATE TABLE `lk_user_role` (
  `conid` varchar(32) NOT NULL,
  `roleid` varchar(32) DEFAULT NULL,
  `userid` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`conid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `lk_user_role` */

insert  into `lk_user_role`(`conid`,`roleid`,`userid`) values ('1','1','1');

/*Table structure for table `sys_priv` */

DROP TABLE IF EXISTS `sys_priv`;

CREATE TABLE `sys_priv` (
  `privid` varchar(32) NOT NULL,
  `privname` varchar(50) DEFAULT NULL,
  `privurl` varchar(100) DEFAULT NULL,
  `privimg` varchar(100) DEFAULT NULL,
  `parentid` varchar(32) DEFAULT NULL,
  `ordernum` int(11) DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `notes` varchar(1000) DEFAULT NULL,
  `privlevel` char(1) DEFAULT NULL,
  `privtype` char(1) DEFAULT NULL,
  PRIMARY KEY (`privid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `sys_priv` */

insert  into `sys_priv`(`privid`,`privname`,`privurl`,`privimg`,`parentid`,`ordernum`,`updatetime`,`notes`,`privlevel`,`privtype`) values ('1','系统管理','','xtgl','-1',1,NULL,NULL,'1','1'),('101','系统管理','/system/sysuser','xtgl','1',1,NULL,NULL,'2','1'),('101101','用户管理','/system/sysrole','xtyh','101',1,NULL,NULL,'3','1'),('101102','角色管理','/system/syspriv','xtjs','101',2,NULL,NULL,'3','1'),('101103','权限管理','/cms/cmsplatform','qxgl','101',3,NULL,NULL,'3','1'),('2','游戏管理','/system/sysuser','qyxx_max','-1',2,NULL,NULL,'1','1'),('201','游戏管理','/system/sysuser','qyxx_max','2',1,NULL,NULL,'2','1'),('201101','游戏信息','/game/gameinfo','appbb','201',2,NULL,NULL,'3','1');

/*Table structure for table `sys_role` */

DROP TABLE IF EXISTS `sys_role`;

CREATE TABLE `sys_role` (
  `roleid` varchar(32) NOT NULL COMMENT '角色主键',
  `rolename` varchar(50) DEFAULT NULL COMMENT '角色名称',
  `notes` varchar(1000) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';

/*Data for the table `sys_role` */

insert  into `sys_role`(`roleid`,`rolename`,`notes`) values ('1','系统管理员',NULL),('2','普通用户',NULL);

/*Table structure for table `sys_user` */

DROP TABLE IF EXISTS `sys_user`;

CREATE TABLE `sys_user` (
  `userid` varchar(32) NOT NULL COMMENT '用户id',
  `username` varchar(100) DEFAULT NULL COMMENT '用户名',
  `password` varchar(100) DEFAULT NULL COMMENT '密码',
  `nickname` varchar(50) DEFAULT NULL COMMENT '用户昵称',
  `updatetime` datetime DEFAULT NULL COMMENT '更新时间',
  `notes` varchar(1000) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统用户';

/*Data for the table `sys_user` */

insert  into `sys_user`(`userid`,`username`,`password`,`nickname`,`updatetime`,`notes`) values ('1','admin','e10adc3949ba59abbe56e057f20f883e','系统管理员','2016-06-27 22:30:03',NULL),('1d689d513b8111e6a9f0e0db55b4a7f9','test','1a100d2c0dab19c4430e7d73762b3423','12','2016-06-26 17:34:01',NULL),('2','admin13','e10adc3949ba59abbe56e057f20f883e','12345611','2016-06-26 16:50:01',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
