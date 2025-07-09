import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({  
  controllers: [AuthController],
  providers: [AuthService],
  imports:[TypeOrmModule.forFeature([Usuario])]
})
export class AuthModule {}
