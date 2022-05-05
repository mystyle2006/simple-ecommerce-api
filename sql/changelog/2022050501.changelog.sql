--liquibase formatted sql
--changeset inho:2022050501
--comment 설계된 테이블 세팅

create table store
(
    id         int auto_increment comment '상점 고유 ID'
        primary key,
    name       varchar(255)                        null comment '상점명',
    created_at timestamp default CURRENT_TIMESTAMP not null comment '생성일',
    updated_at timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '수정일'
);

create table model
(
    id         int auto_increment comment '모델 고유 ID'
        primary key,
    store_id   int                                 null comment '상점 고유 ID',
    name       varchar(255)                        null comment '모델명',
    created_at timestamp default CURRENT_TIMESTAMP not null comment '생성일',
    updated_at timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '수정일',
    constraint model_fk_1
        foreign key (store_id) references store (id)
);

create table attribute
(
    id         int auto_increment comment '속성 고유 ID'
        primary key,
    model_id   int                                 null comment '모델 고유 ID',
    store_id   int                                 null comment '상점 고유 ID',
    type       varchar(255)                        null comment '속성 타입',
    name       varchar(255)                        null comment '속성 명',
    created_at timestamp default CURRENT_TIMESTAMP not null comment '생성일',
    updated_at timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '수정일',
    constraint attribute_unique_key
        unique (store_id, model_id, name),
    constraint attribute_ibfk_1
        foreign key (store_id) references store (id),
    constraint attribute_ibfk_2
        foreign key (model_id) references model (id)
);

create index model_id
    on attribute (model_id);

create table entity
(
    id         int auto_increment comment '엔티티 고유 ID'
        primary key,
    store_id   int                                 null comment '상점 고유 ID',
    model_id   int                                 null comment '모델 고유 ID',
    created_at timestamp default CURRENT_TIMESTAMP not null comment '생성일',
    updated_at timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '수정일',
    constraint entity_fk_1
        foreign key (store_id) references store (id),
    constraint entity_fk_2
        foreign key (model_id) references model (id)
);

create table attribute_value
(
    id           int auto_increment comment '데이터 고유 ID'
        primary key,
    attribute_id int                                 null comment '속성 고유 ID',
    entity_id    int                                 null comment '엔티티 고유 ID',
    value        varchar(255)                        null comment '값',
    created_at   timestamp default CURRENT_TIMESTAMP not null comment '생성일',
    updated_at   timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '수정일',
    constraint attribute_value_fk_1
        foreign key (attribute_id) references attribute (id),
    constraint attribute_value_fk_2
        foreign key (entity_id) references entity (id)
);

create table customer
(
    id        int auto_increment comment '고객 ID'
        primary key,
    store_id  int          null comment '상점 고유 ID',
    entity_id int          null comment '사용자 정의 필드 ID',
    name      varchar(255) null comment '고객명',
    email     varchar(255) null comment '이메일',
    password  varchar(255) null comment '비밀번호',
    created_at   timestamp default CURRENT_TIMESTAMP not null comment '생성일',
    updated_at   timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '수정일',
    constraint customer_email_unique
        unique (email),
    constraint customer_fk_1
        foreign key (store_id) references store (id),
    constraint customer_fk_2
        foreign key (entity_id) references entity (id)
);

create table `order`
(
    id          int auto_increment comment '주문 ID'
        primary key,
    store_id    int          null comment '상점 ID',
    entity_id   int          null comment '사용자 정의 필드 ID',
    customer_id int          null comment '고객 ID',
    status      varchar(255) null comment '상태(주문 완료: ok, 취소: cancel)',
    price       int          null comment '총 주문 금액',
    products    varchar(255) null comment '상품 ID 목록 (구분자: 콤마)',
    created_at   timestamp default CURRENT_TIMESTAMP not null comment '생성일',
    updated_at   timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '수정일',
    constraint order_fk_1
        foreign key (store_id) references store (id),
    constraint order_fk_2
        foreign key (entity_id) references entity (id),
    constraint order_fk_3
        foreign key (customer_id) references customer (id)
);

create table product
(
    id        int auto_increment comment '상품 ID'
        primary key,
    store_id  int          null comment '상점 ID',
    entity_id int          null comment '사용자 정의 필드 ID',
    name      varchar(255) null comment '상품명',
    price     int          null comment '가격',
    categories varchar(255) null comment '카테고리(구분자: 콤마)',
    created_at   timestamp default CURRENT_TIMESTAMP not null comment '생성일',
    updated_at   timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '수정일',
    constraint product_fk_1
        foreign key (store_id) references store (id),
    constraint product_fk_2
        foreign key (entity_id) references entity (id)
);

