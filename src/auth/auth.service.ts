import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(

        @InjectRepository(Usuario)
        private usuario:Repository<Usuario>

    ){}

  async ValidarLogin(datoslogin:LoginDto){    

    const dbUSer = await this.usuario.findOneBy({ correo:datoslogin.correo })

    if (!dbUSer) throw new HttpException('Usuario no encontrado', 404);

    const comparacion = await bcrypt.compare(datoslogin.password,dbUSer.hash_pass)

    if(!comparacion) throw new HttpException('Contraseña invalida',404)
    
    // TODO: Asignar el JWT

    return {
             nombre:dbUSer.nombre + ' ' + dbUSer.apellido_patero,
             correo:dbUSer.correo,
             rut:dbUSer.rut    
           }

  }  

}
