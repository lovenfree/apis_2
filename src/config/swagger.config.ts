import { DocumentBuilder } from '@nestjs/swagger';

export const swaggercConfig = new DocumentBuilder()
  .setTitle('TaaS Public Api Service')
  .setDescription('TaaS Public Api Service')
  .setVersion('1.0')
  .addTag('cats')
  .build();
