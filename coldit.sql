/*
 Navicat Premium Data Transfer

 Source Server         : LOCAL
 Source Server Type    : MySQL
 Source Server Version : 100408
 Source Host           : localhost:3306
 Source Schema         : coldit

 Target Server Type    : MySQL
 Target Server Version : 100408
 File Encoding         : 65001

 Date: 17/04/2020 21:55:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item`  (
  `Producto` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cantidad` int(11) NULL DEFAULT NULL,
  `valorTotal` int(15) NULL DEFAULT NULL COMMENT 'valor de producto por la cantidad'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES ('A111', 3, 234);
INSERT INTO `item` VALUES ('A333', 2, 30000);
INSERT INTO `item` VALUES ('A222', 2, 20000);
INSERT INTO `item` VALUES ('A111', 2, 40000);

-- ----------------------------
-- Table structure for producto
-- ----------------------------
DROP TABLE IF EXISTS `producto`;
CREATE TABLE `producto`  (
  `codigo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `valor` int(20) NULL DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of producto
-- ----------------------------
INSERT INTO `producto` VALUES ('A111', 20000, 'producto 1');
INSERT INTO `producto` VALUES ('A222', 10000, 'producto 2');
INSERT INTO `producto` VALUES ('A333', 15000, 'producto 3');

SET FOREIGN_KEY_CHECKS = 1;
