import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { SuccessInterceptor } from './common/success.intercepter';
import { corsConfig } from './config/cors.config';
import { swaggercConfig } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new SuccessInterceptor());
  app.enableCors(corsConfig);
  const document = SwaggerModule.createDocument(app, swaggercConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(8000);
}
bootstrap();
