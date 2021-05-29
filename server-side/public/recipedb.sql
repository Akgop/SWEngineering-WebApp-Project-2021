-- MySQL dump 10.13  Distrib 8.0.23, for osx10.16 (x86_64)
--
-- Host: localhost    Database: recipedb
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_admin`
--

DROP TABLE IF EXISTS `tbl_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_admin` (
  `admin_id` int unsigned NOT NULL AUTO_INCREMENT,
  `admin_email` varchar(50) NOT NULL,
  `admin_pwd` varchar(200) NOT NULL,
  `admin_name` varchar(50) NOT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `admin_email_UNIQUE` (`admin_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_admin`
--

LOCK TABLES `tbl_admin` WRITE;
/*!40000 ALTER TABLE `tbl_admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_basket`
--

DROP TABLE IF EXISTS `tbl_basket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_basket` (
  `customer_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `basket_quantity` int unsigned NOT NULL,
  `basket_price` int NOT NULL,
  PRIMARY KEY (`customer_id`,`product_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `tbl_basket_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `tbl_customer` (`customer_id`),
  CONSTRAINT `tbl_basket_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `tbl_product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_basket`
--

LOCK TABLES `tbl_basket` WRITE;
/*!40000 ALTER TABLE `tbl_basket` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_basket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_name_UNIQUE` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_category`
--

LOCK TABLES `tbl_category` WRITE;
/*!40000 ALTER TABLE `tbl_category` DISABLE KEYS */;
INSERT INTO `tbl_category` VALUES (27,'계란'),(1,'고추장'),(2,'고춧가루'),(15,'국간장'),(32,'김치'),(16,'다진마늘'),(3,'당근'),(4,'대파'),(22,'대패 삼겹살'),(5,'돼지고기 앞다리살'),(33,'된장'),(21,'두부'),(17,'들기름'),(30,'라면사리'),(6,'마늘'),(7,'맛술'),(18,'배추김치'),(26,'부침가루'),(31,'삼겹살'),(25,'새우'),(34,'새우젓'),(8,'생강'),(9,'설탕'),(29,'소세지'),(20,'쌈장'),(10,'양파'),(24,'오징어'),(11,'올리고당'),(12,'진간장'),(13,'참기름'),(23,'청양고추'),(14,'통깨'),(28,'햄'),(19,'호박');
/*!40000 ALTER TABLE `tbl_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_company`
--

DROP TABLE IF EXISTS `tbl_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_company` (
  `company_id` int unsigned NOT NULL AUTO_INCREMENT,
  `company_email` varchar(50) NOT NULL,
  `company_pwd` varchar(200) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_tel` varchar(14) NOT NULL,
  `company_income` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`company_id`),
  UNIQUE KEY `company_email_UNIQUE` (`company_email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_company`
--

LOCK TABLES `tbl_company` WRITE;
/*!40000 ALTER TABLE `tbl_company` DISABLE KEYS */;
INSERT INTO `tbl_company` VALUES (2,'dw@dw.ac.kr','dw123','dongwon','010-8765-4321',20),(3,'kw@kw.ac.kr','kw123','kwangwoon','010-1234-5678',10),(5,'cj@cj.ac.kr','cj123','cj','010-1234-5678',0),(9,'hj@hj.ac.kr','hj123','hj','010-1234-5678',0);
/*!40000 ALTER TABLE `tbl_company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_customer`
--

DROP TABLE IF EXISTS `tbl_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_customer` (
  `customer_id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_email` varchar(50) NOT NULL,
  `customer_pwd` varchar(200) NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `customer_phone` varchar(14) NOT NULL,
  `customer_destination` varchar(100) NOT NULL,
  `customer_point` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `customer_email_UNIQUE` (`customer_email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_customer`
--

LOCK TABLES `tbl_customer` WRITE;
/*!40000 ALTER TABLE `tbl_customer` DISABLE KEYS */;
INSERT INTO `tbl_customer` VALUES (1,'qwer@qwer','1234','akgop','010-1234-1234','kw 123',0);
/*!40000 ALTER TABLE `tbl_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ingredient`
--

DROP TABLE IF EXISTS `tbl_ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ingredient` (
  `menu_id` int unsigned NOT NULL,
  `category_name` int unsigned NOT NULL,
  `ingredient_image` varchar(200) DEFAULT NULL,
  `ingredient_content` varchar(50) NOT NULL,
  PRIMARY KEY (`menu_id`,`category_name`),
  KEY `tbl_ingredient_ibfk_2` (`category_name`),
  CONSTRAINT `tbl_ingredient_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `tbl_menu` (`menu_id`),
  CONSTRAINT `tbl_ingredient_ibfk_2` FOREIGN KEY (`category_name`) REFERENCES `tbl_product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ingredient`
--

LOCK TABLES `tbl_ingredient` WRITE;
/*!40000 ALTER TABLE `tbl_ingredient` DISABLE KEYS */;
INSERT INTO `tbl_ingredient` VALUES (1,1,'고추장.jpg','고추장 1큰 술'),(1,2,'고춧가루.jpg','고춧가루 1큰 술'),(1,4,'대파.jpg','대파 1쪽'),(1,9,'설탕.jpg','설탕 2큰 술'),(1,10,'양파.jpg','양파 1개'),(1,15,'국간장.jpg','국간장 1큰 술'),(1,16,'다진마늘.jpg','다진마늘 1작은 술'),(1,28,'통조림 햄.jpg','햄 많이'),(1,29,'소세지.jpg','소세지 많이'),(1,30,'라면 사리.jpg','라면사리 1개'),(1,32,'김치.jpg','김치 1/4 포기'),(2,2,'고춧가루.jpg','고춧가루 3큰 술'),(2,4,'대파.jpg','대파 1쪽'),(2,9,'설탕.jpg','설탕 2큰 술'),(2,10,'양파.jpg','양파 1개'),(2,15,'국간장.jpg','국간장 1큰 술'),(2,16,'다진마늘.jpg','다진마늘 2작은 술'),(2,17,'들기름.jpg','들기름 1스푼'),(2,23,'청양고추.jpg','청양고추 3개'),(2,31,'삼겹살.jpg','삼겹살 한 근'),(2,32,'김치.jpg','김치 1/2 포기'),(2,33,'된장.jpg','된장 조금'),(2,34,'새우젓.jpg','새우젓 조금'),(3,1,'고추장.jpg','고추장 1큰 술'),(3,2,'고춧가루.jpg','고춧가루 1큰 술'),(3,3,'당근.jpg','당근 1/3'),(3,4,'대파.jpg','대파 1쪽'),(3,5,'돼지고기 앞다리살.jpg','한 근'),(3,6,'마늘.jpg','마늘 5쪽'),(3,7,'맛술.jpg','맛술 1큰 술'),(3,8,'생강.jpg','생강 1덩이'),(3,9,'설탕.jpg','설탕 1큰 술'),(3,10,'양파.jpg','양파 1개'),(3,11,'올리고당.jpg','1/2 큰 술'),(3,12,'진간장.jpg','진간장 1작은 술'),(3,13,'참기름.jpg','참기름 1보통 술'),(3,14,'통깨.jpg','통깨 살짝 뿌리기'),(4,4,'대파.jpg','대파 1개'),(4,23,'청양고추.jpg','청양고추 2개'),(4,24,'오징어.jpg','오징어 많이'),(4,25,'새우.jpg','새우 많이'),(4,26,'부침가루.jpg','부침가루 1인분'),(4,27,'계란.jpg','계란 6개'),(5,2,'고춧가루.jpg','고춧가루 1큰술'),(5,4,'대파.jpg','대파 반 쪽'),(5,10,'양파.jpg','양파 반 개'),(5,16,'다진마늘.jpg','다진마늘 1작은 술'),(5,19,'호박.jpg','호박 적당히'),(5,20,'쌈장.jpg','쌈장 2큰 술'),(5,21,'두부.jpg','두부 한 모'),(5,22,'대패 삼겹살.jpg','대패 삼겹살 200g'),(5,23,'청양고추.jpg','청양고추 3개'),(5,33,'된장.jpg','된장 2큰 술');
/*!40000 ALTER TABLE `tbl_ingredient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_menu`
--

DROP TABLE IF EXISTS `tbl_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_menu` (
  `menu_id` int unsigned NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(50) NOT NULL,
  `menu_image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`menu_id`),
  UNIQUE KEY `menu_name_UNIQUE` (`menu_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_menu`
--

LOCK TABLES `tbl_menu` WRITE;
/*!40000 ALTER TABLE `tbl_menu` DISABLE KEYS */;
INSERT INTO `tbl_menu` VALUES (1,'부대찌개','부대찌개.jpg'),(2,'김치찌개','김치찌개.png'),(3,'고추장 돼지불백','고추장 돼지불백.jpg'),(4,'해물파전','해물파전.jpeg'),(5,'된장찌개','된장찌개.jpg');
/*!40000 ALTER TABLE `tbl_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_notice`
--

DROP TABLE IF EXISTS `tbl_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_notice` (
  `notice_id` int unsigned NOT NULL AUTO_INCREMENT,
  `notice_content` varchar(500) NOT NULL,
  `notice_image` mediumblob,
  `admin_id` int unsigned NOT NULL,
  `notice_time` datetime NOT NULL,
  PRIMARY KEY (`notice_id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `tbl_notice_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `tbl_admin` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_notice`
--

LOCK TABLES `tbl_notice` WRITE;
/*!40000 ALTER TABLE `tbl_notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_order`
--

DROP TABLE IF EXISTS `tbl_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_order` (
  `order_id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `order_quantity` int unsigned NOT NULL,
  `order_price` int unsigned NOT NULL,
  `order_time` datetime NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_order`
--

LOCK TABLES `tbl_order` WRITE;
/*!40000 ALTER TABLE `tbl_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_product`
--

DROP TABLE IF EXISTS `tbl_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_product` (
  `product_id` int unsigned NOT NULL AUTO_INCREMENT,
  `company_id` int unsigned NOT NULL,
  `product_image` varchar(200) DEFAULT NULL,
  `product_price` int unsigned NOT NULL,
  `product_flag` tinyint(1) NOT NULL,
  `product_avg_score` int unsigned NOT NULL,
  `product_item_name` varchar(45) NOT NULL,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_product`
--

LOCK TABLES `tbl_product` WRITE;
/*!40000 ALTER TABLE `tbl_product` DISABLE KEYS */;
INSERT INTO `tbl_product` VALUES (1,2,'고추장2.jpg',1000,0,5,'동원고추장','고추장'),(2,3,'고추장3.jpg',8000,0,4,'광운고추장','고추장'),(3,5,'고춧가루2.jpg',3000,0,5,'CJ고춧가루','고춧가루'),(4,9,'고춧가루3.jpg',5000,0,5,'HJ고춧가루','고춧가루'),(5,2,'당근2.jpg',1000,0,5,'동원당근','당근'),(6,5,'당근3.jpg',1000,0,5,'CJ당근','당근'),(7,3,'대파2.jpg',1000,0,5,'광운대파','대파'),(8,9,'대파3.jpg',1000,0,5,'HJ대파','대파'),(9,3,'돼지고기 앞다리살2.jpg',1000,0,5,'광운돼지고기 앞다리살','돼지고기 앞다리살'),(10,5,'돼지고기 앞다리살3.jpg',1000,0,5,'CJ돼지고기 앞다리살','돼지고기 앞다리살'),(11,2,'마늘2.jpg',1000,0,5,'동원마늘','마늘'),(12,9,'마늘3.jpg',1000,0,5,'HJ마늘','마늘'),(13,2,'맛술2.jpg',1000,0,5,'동원맛술','맛술'),(14,3,'맛술3.jpg',1000,0,5,'광운맛술','맛술'),(15,5,'생강2.jpg',1000,0,5,'CJ생강','생강'),(16,9,'생강3.jpg',1000,0,5,'HJ생강','생강'),(17,2,'설탕2.jpg',1000,0,5,'동원설탕','설탕'),(18,3,'설탕3.jpg',1000,0,5,'광운설탕','설탕'),(19,5,'양파2.jpg',1000,0,5,'CJ양파','양파'),(20,9,'양파3.jpg',1000,0,5,'HJ양파','양파'),(21,2,'올리고당2.jpg',1000,0,5,'동원올리고당','올리고당'),(22,3,'올리고당3.jpg',1000,0,5,'광운올리고당','올리고당'),(23,5,'진간장2.jpg',1000,0,5,'CJ진간장','진간장'),(24,9,'진간장3.jpg',1000,0,5,'HJ진간장','진간장'),(25,2,'참기름2.jpg',1000,0,5,'동원참기름','참기름'),(26,3,'참기름3.png',1000,0,5,'광운참기름','참기름'),(27,5,'통깨2.jpg',1000,0,5,'CJ통깨','통깨'),(28,9,'통깨3.jpg',1000,0,5,'HJ통깨','통깨'),(29,2,'국간장2.jpg',1000,0,5,'동원국간장','국간장'),(30,3,'국간장3.jpg',1000,0,5,'광운국간장','국간장'),(31,5,'다진마늘2.jpg',1000,0,5,'CJ다진마늘','다진마늘'),(32,9,'다진마늘3.jpg',1000,0,5,'HJ다진마늘','다진마늘'),(33,2,'된장2.jpg',1000,0,5,'동원된장','된장'),(34,3,'된장3.jpg',1000,0,5,'광운된장','된장'),(35,5,'들기름2.jpg',1000,0,5,'CJ들기름','들기름'),(36,9,'들기름3.jpg',1000,0,5,'HJ들기름','들기름'),(37,2,'배추김치2.jpg',1000,0,5,'동원배추김치','배추김치'),(38,3,'배추김치3.jpg',1000,0,5,'배추김치','배추김치'),(39,5,'삼겹살2.jpg',1000,0,5,'CJ삼겹살','삼겹살'),(40,9,'삼겹살3.jpg',1000,0,5,'HJ삼겹살','삼겹살'),(41,5,'새우젓2.jpg',1000,0,5,'CJ새우젓','새우젓'),(42,9,'새우젓3.jpg',1000,0,5,'HJ새우젓','새우젓'),(43,2,'대패 삼겹살2.jpg',1000,0,5,'동원대패삼겹살','대패 삼겹살'),(44,3,'대패 삼겹살3.jpg',1000,0,5,'광운대패삼겹살','대패 삼겹살'),(45,2,'두부2.jpg',1000,0,5,'동원두부','두부'),(46,3,'두부3.jpg',1000,0,5,'광운두부','두부'),(47,5,'쌈장2.jpg',1000,0,5,'CJ쌈장','쌈장'),(48,9,'쌈장3.jpg',1000,0,5,'HJ쌈장','쌈장'),(49,5,'호박2.jpg',1000,0,5,'CJ호박','호박'),(50,9,'호박3.jpg',1000,0,5,'HJ호박','호박'),(51,2,'계란2.jpg',1000,0,5,'동원계란','계란'),(52,3,'계란3.jpg',1000,0,5,'광운계란','계란'),(53,2,'부침가루2.jpg',1000,0,5,'동원부침가루','부침가루'),(54,3,'부침가루3.jpg',1000,0,5,'광운부침가루','부침가루'),(55,5,'새우2.jpg',1000,0,5,'CJ새우','새우'),(56,9,'새우3.jpg',1000,0,5,'HJ새우','새우'),(57,2,'오징어2.jpg',1000,0,5,'동원오징어','오징어'),(58,3,'오징어3.jpg',1000,0,5,'광운오징어','오징어'),(59,2,'청양고추2.jpg',1000,0,5,'동원청양고추','청양고추'),(60,3,'청양고추3.jpg',1000,0,5,'광운청양고추','청양고추'),(61,5,'라면 사리2.jpg',1000,0,5,'CJ라면사리','라면사리'),(62,9,'라면 사리3.jpg',1000,0,5,'HJ라면사리','라면사리'),(63,5,'소세지2.jpg',1000,0,5,'CJ소세지','소세지'),(64,9,'소세지3.jpg',1000,0,5,'HJ소세지','소세지'),(65,5,'통조림 햄2.jpg',1000,0,5,'CJ햄','햄'),(66,9,'통조림 햄3.jpg',1000,0,5,'HJ햄','햄');
/*!40000 ALTER TABLE `tbl_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_qna`
--

DROP TABLE IF EXISTS `tbl_qna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_qna` (
  `qna_id` int unsigned NOT NULL,
  `customer_id` int unsigned NOT NULL,
  `qna_content` varchar(500) NOT NULL,
  `qna_image` mediumblob,
  `qna_time` datetime NOT NULL,
  PRIMARY KEY (`qna_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `tbl_qna_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `tbl_customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_qna`
--

LOCK TABLES `tbl_qna` WRITE;
/*!40000 ALTER TABLE `tbl_qna` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_qna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_reply`
--

DROP TABLE IF EXISTS `tbl_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_reply` (
  `reply_id` int unsigned NOT NULL,
  `qna_id` int unsigned NOT NULL,
  `reply_content` varchar(500) NOT NULL,
  `reply_time` datetime NOT NULL,
  PRIMARY KEY (`reply_id`),
  KEY `qna_id` (`qna_id`),
  CONSTRAINT `tbl_reply_ibfk_1` FOREIGN KEY (`qna_id`) REFERENCES `tbl_qna` (`qna_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_reply`
--

LOCK TABLES `tbl_reply` WRITE;
/*!40000 ALTER TABLE `tbl_reply` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_review`
--

DROP TABLE IF EXISTS `tbl_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_review` (
  `review_id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int unsigned NOT NULL,
  `review_image` mediumblob,
  `review_content` varchar(500) DEFAULT NULL,
  `product_id` int unsigned NOT NULL,
  `product_score` int unsigned NOT NULL,
  `review_time` datetime NOT NULL,
  PRIMARY KEY (`review_id`),
  KEY `customer_id` (`customer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `tbl_review_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `tbl_customer` (`customer_id`),
  CONSTRAINT `tbl_review_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `tbl_product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_review`
--

LOCK TABLES `tbl_review` WRITE;
/*!40000 ALTER TABLE `tbl_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-29 14:16:14
