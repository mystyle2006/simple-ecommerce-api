--liquibase formatted sql
--changeset inho:2022050503
--comment 상품 store_id, name, not nullable 처리

alter table product modify store_id int not null comment '상점 ID';

alter table product modify name varchar(255) not null comment '상품명';

