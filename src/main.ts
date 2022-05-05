import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import liquibaseRunner from './utils/liquibase-runner';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class-validator 추가
  app.useGlobalPipes(new ValidationPipe());

  // liquibase changelog 실행
  await liquibaseRunner.update(null);

  // swagger 설치
  const config = new DocumentBuilder()
    .setTitle('simple ecommerce')
    .setDescription('The simple ecommerce API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
