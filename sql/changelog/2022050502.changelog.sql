--liquibase formatted sql
--changeset inho:2022050502
--comment 고객 store_id, name, email, password not nullable 처리

alter table customer modify store_id int not null comment '상점 고유 ID';

alter table customer modify name varchar(255) not null comment '고객명';

alter table customer modify password varchar(255) not null comment '비밀번호';

alter table customer
	add constraint customer_unique_email_by_store_id
		unique (store_id, email);

