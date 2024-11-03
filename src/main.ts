import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const configDocumentationApi = async (app: any) => {
  const config = new DocumentBuilder()
    .setTitle('Task List API')
    .setDescription('API REST para gerenciar tarefas')
    .setVersion('1.0')
    .addTag('Task List API')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs/api-task-list', app, documentFactory);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, PATCH',
    credentials: true,
  });
  configDocumentationApi(app);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
