--liquibase formatted sql
--changeset inho:2022050507
--comment attribute_value unique key

alter table attribute_value
	add constraint attribute_value_unique
		unique (attribute_id, entity_id);

