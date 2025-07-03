import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {    

  const app = await NestFactory.create(AppModule);
  const envCnfig = app.get(ConfigService);

  // Class Transform
  app.useGlobalPipes(
    new ValidationPipe({
       whitelist:true,
       forbidNonWhitelisted:true,
       transform:true
    })
  )



  const config = new DocumentBuilder()
    .setTitle('Sistema de Almacenaje')
    .setDescription(
      'API RESTful para la gestión de productos, bodegas y movimientos de inventario. ' +
      'Incluye funcionalidades como ingreso/salida de productos, trazabilidad, y control de stock.'
    )
    .setVersion('1.0.0')
     .addTag('Productos', 'Gestión de productos, creación y actualizaciones')
    // .addTag('Almacenaje', 'Operaciones relacionadas con el almacenamiento y gestión de inventario')   
    // .addTag('Movimientos', 'Entrada y salida de stock entre bodegas')
    // .addTag('Usuarios', 'Administración de accesos y roles (si aplica)')
    // .addBearerAuth() // Para indicar que usas JWT
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(envCnfig.get('PORT') ?? 3000);

}

bootstrap();
