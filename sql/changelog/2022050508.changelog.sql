--liquibase formatted sql
--changeset inho:2022050508
--comment mock 데이터 추가

INSERT INTO `simple-ecommerce`.model (id, name, created_at, updated_at) VALUES (1, 'PRODUCT', '2022-05-05 09:40:30', '2022-05-05 09:40:30');
INSERT INTO `simple-ecommerce`.model (id, name, created_at, updated_at) VALUES (2, 'ORDER', '2022-05-05 09:40:30', '2022-05-05 09:40:30');
INSERT INTO `simple-ecommerce`.model (id, name, created_at, updated_at) VALUES (3, 'CUSTOMER', '2022-05-05 09:40:30', '2022-05-05 09:40:30');

INSERT INTO `simple-ecommerce`.store (id, name, created_at, updated_at) VALUES (1, '식스샵', '2022-05-05 09:39:28', '2022-05-05 09:39:28');

INSERT INTO `simple-ecommerce`.attribute (id, model_id, store_id, type, name, created_at, updated_at) VALUES (1, 1, 1, 'STRING', '도서 발행일', '2022-05-05 09:41:06', '2022-05-05 09:41:06');
INSERT INTO `simple-ecommerce`.attribute (id, model_id, store_id, type, name, created_at, updated_at) VALUES (2, 3, 1, 'STRING', '적립금', '2022-05-05 09:42:19', '2022-05-05 09:42:19');
INSERT INTO `simple-ecommerce`.attribute (id, model_id, store_id, type, name, created_at, updated_at) VALUES (3, 1, 1, 'STRING', '유통기한', '2022-05-05 09:42:30', '2022-05-05 09:42:30');
INSERT INTO `simple-ecommerce`.attribute (id, model_id, store_id, type, name, created_at, updated_at) VALUES (4, 3, 1, 'STRING', '전화번호', '2022-05-05 09:42:42', '2022-05-05 09:42:42');
INSERT INTO `simple-ecommerce`.attribute (id, model_id, store_id, type, name, created_at, updated_at) VALUES (5, 3, 1, 'STRING', '성별', '2022-05-05 09:42:47', '2022-05-05 09:42:47');
INSERT INTO `simple-ecommerce`.attribute (id, model_id, store_id, type, name, created_at, updated_at) VALUES (6, 2, 1, 'STRING', '기기 종류', '2022-05-05 09:42:56', '2022-05-05 09:42:56');

INSERT INTO `simple-ecommerce`.customer (id, store_id, entity_id, name, email, password, created_at, updated_at) VALUES (1, 1, null, '홍길동', 'gildong@sixshop.com', '12345qwert', '2022-05-05 09:40:00', '2022-05-05 09:40:00');

INSERT INTO `simple-ecommerce`.entity (id, store_id, model_id, created_at, updated_at) VALUES (1, 1, 1, '2022-05-05 09:43:48', '2022-05-05 09:43:48');
INSERT INTO `simple-ecommerce`.entity (id, store_id, model_id, created_at, updated_at) VALUES (2, 1, 1, '2022-05-05 09:44:08', '2022-05-05 09:44:08');
INSERT INTO `simple-ecommerce`.entity (id, store_id, model_id, created_at, updated_at) VALUES (3, 1, 2, '2022-05-05 09:44:42', '2022-05-05 09:44:42');

INSERT INTO `simple-ecommerce`.product (id, store_id, entity_id, name, price, categories, created_at, updated_at) VALUES (1, 1, 1, '식스도시락', 3000, '도시락', '2022-05-05 09:43:48', '2022-05-05 09:43:48');
INSERT INTO `simple-ecommerce`.product (id, store_id, entity_id, name, price, categories, created_at, updated_at) VALUES (2, 1, 2, '식스도서', 3000, '도서', '2022-05-05 09:44:08', '2022-05-05 09:44:08');

INSERT INTO `simple-ecommerce`.attribute_value (id, attribute_id, entity_id, value, created_at, updated_at) VALUES (1, 3, 1, '2022.07.01', '2022-05-05 09:43:48', '2022-05-05 09:43:48');
INSERT INTO `simple-ecommerce`.attribute_value (id, attribute_id, entity_id, value, created_at, updated_at) VALUES (2, 1, 2, '2022.05.01', '2022-05-05 09:44:08', '2022-05-05 09:44:08');

INSERT INTO `simple-ecommerce`.`order` (id, store_id, entity_id, customer_id, status, price, products, created_at, updated_at) VALUES (1, 1, 3, 1, 'OK', 6000, '1,2', '2022-05-05 09:44:42', '2022-05-05 09:44:42');

INSERT INTO `simple-ecommerce`.attribute_value (id, attribute_id, entity_id, value, created_at, updated_at) VALUES (3, 2, 3, '아이폰', '2022-05-05 09:44:42', '2022-05-05 09:44:42');
