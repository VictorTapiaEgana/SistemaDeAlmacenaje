import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from 'src/app.module';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports:[TypeOrmModule.forFeature([Producto])]
})
export class ProductosModule {}
