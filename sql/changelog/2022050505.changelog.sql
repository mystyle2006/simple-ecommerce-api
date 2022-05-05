--liquibase formatted sql
--changeset inho:2022050505
--comment 모델 store_id 제거

alter table model drop foreign key model_fk_1;
alter table model drop column store_id;
