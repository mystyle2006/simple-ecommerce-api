## Stack
- nodejs
- nestjs
- mysql
- liquibase
- docker
- swagger

## Installation
1. 도커 이미지 실행
```bash
$ yarn docker:up
```

2. 서비스 실행
- 실행 후 docker에 모든 자원은 실행되었지만 liquibase를 통해 모든 스키마 및 mocking 데이터가 생성되므로 1분 ~ 2분 정도 더 기다리신 후 확인하실 수 있습니다.
```bash
$ yarn service:up
```

3. 서비스 종료
```bash
$ yarn service:down
```

## Documentation
- host: localhost
- port: 3000
- docs: /api

## 상세 설명
- 사용자 정의 필드를 개발하기 위해 EVA 패턴을 활용하였습니다.
