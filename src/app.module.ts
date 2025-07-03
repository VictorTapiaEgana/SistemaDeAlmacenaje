import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
             })
            // TypeOrmModule.forRootAsync({
            //       imports: [ConfigModule], 
            //       inject: [ConfigService],
            //       useFactory: (configService: ConfigService) => ({
            //         type: 'mysql',
            //         host: configService.get<string>('DB_HOST'),
            //         port: configService.get<number>('DB_PORT'),
            //         username: configService.get<string>('DB_USER'),
            //         password: configService.get<string>('DB_PASS'),
            //         database: configService.get<string>('DB_DDBB'),                    
            //         synchronize: true,
            //         // dropSchema: true,
            //          autoLoadEntities: true,
            //       }),
            // })  
           ]  
})

export class AppModule {}
