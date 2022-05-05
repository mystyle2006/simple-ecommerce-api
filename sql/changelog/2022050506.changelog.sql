--liquibase formatted sql
--changeset inho:2022050506
--comment attribute model_id, store_id, type, name not nullable

alter table attribute modify model_id int not null comment '모델 고유 ID';

alter table attribute modify store_id int not null comment '상점 고유 ID';

alter table attribute modify type varchar(255) not null comment '속성 타입';

alter table attribute modify name varchar(255) not null comment '속성 명';
