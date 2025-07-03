import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  controllers: [],
  providers: [],  
  imports: [ ProductosModule,         
             ConfigModule.forRoot({
                isGlobal: true, // Para que no necesites importar en cada módulo
             }), 
             TypeOrmModule.forRoot({
              type:'mysql',
              host:process.env.DB_HOST,
              port:Number(process.env.DB_PORT),
              username:process.env.DB_USER,
              password:process.env.DB_PASS,
              database:process.env.DB_DDBB,
              synchronize:true,
              autoLoadEntities:true
             }), CategoriasModule            
           ]  
})

export class AppModule {}
