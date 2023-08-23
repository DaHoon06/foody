import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from "@config/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global prefix setting
  app.setGlobalPrefix('/api');
  setupSwagger(app);

  // cors setting
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap().then();
