import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],  
  imports: [ ProductosModule,
             CategoriasModule,   
             UsuariosModule,      
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
              synchronize:Boolean(process.env.DB_SYNC),
              autoLoadEntities:true
             }), AuthModule,             
           ]  
})

export class AppModule {}
