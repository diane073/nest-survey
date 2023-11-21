import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { MyDevLogger, MyProdLogger } from "./my-logger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: process.env.NODE_ENV === 'production' 
    ? new MyProdLogger()
    : new MyDevLogger(),
  });

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  )
  
  await app.listen(port);
  
}
bootstrap();
