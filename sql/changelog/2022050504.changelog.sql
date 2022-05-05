--liquibase formatted sql
--changeset inho:2022050504
--comment 상품 store_id, customer_id, status, products 처리

alter table `order` modify store_id int not null comment '상점 ID';

alter table `order` modify customer_id int not null comment '고객 ID';

alter table `order` modify status varchar(255) not null comment '상태(주문 완료: ok, 취소: cancel)';

alter table `order` modify products varchar(255) not null comment '상품 ID 목록 (구분자: 콤마)';

