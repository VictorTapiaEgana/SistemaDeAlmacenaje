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

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Sistema de Almacenaje')
    .setDescription(
      'API RESTful para la gestión de productos, bodegas y movimientos de inventario. ' +
      'Incluye funcionalidades como ingreso/salida de productos, trazabilidad, y control de stock.'
    )
    .setVersion('1.0.0')
     .addTag('Productos', 'Gestión de productos, creación, actualizaciones y eliminacion')
     .addTag('Categorias','Gestión de Categorías, creación, actualizaciones y eliminacion')
     .addTag('Usuarios', 'Mantencion y Administración de accesos y roles')
    // .addTag('Almacenaje', 'Operaciones relacionadas con el almacenamiento y gestión de inventario')   
    // .addTag('Movimientos', 'Entrada y salida de stock entre bodegas')
    
    // .addBearerAuth() // Para indicar que usas JWT
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory,{
      swaggerOptions: {
        docExpansion: 'none', 
      },
  });  

  // CORS
   app.enableCors({
    origin: 'http://localhost:4200', // tu frontend
    credentials: true,              // si usas cookies/token en headers
  });
  
  await app.listen(envCnfig.get('PORT') ?? 3000);

}

bootstrap();
