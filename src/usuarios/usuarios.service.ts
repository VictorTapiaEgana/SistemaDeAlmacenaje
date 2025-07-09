import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt'

@Injectable()

export class UsuariosService {

  constructor(

    @InjectRepository(Usuario)
    private usuario:Repository<Usuario>
    
  ){}

  async create(createUsuarioDto: CreateUsuarioDto) {

    try {

      const { pass , ...otrosDatos } = createUsuarioDto

       const salt = await bcrypt.genSalt(Number(process.env.BC_SALT))
       const passwordHasheada = await bcrypt.hash(pass,salt)

      const usuarioNuevo = this.usuario.create({
        ...otrosDatos,
        hash_pass:passwordHasheada
      })

      await this.usuario.save(usuarioNuevo)  
      return `Usuario ${createUsuarioDto.nombre} , creado exitosamente `

    } catch (error) {
     
      if (error instanceof Error) throw error
      throw new InternalServerErrorException('No se creo el usuario')

    }    
    
  }

  async findAll() {

    try {

      return await this.usuario.find()

    } catch (error) {

      if(error instanceof Error) throw error 
      throw new InternalServerErrorException('Error al obtener los registros')

    }

  }

  async findOne(id: number) {

    try {

      return await this.usuario.findOneBy({id:id})
      
    } catch (error) {

      if(error instanceof Error) throw error 
      throw new InternalServerErrorException('Error al obtener los registros')

    }
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    
    try {

      const usuarioActualizado =  this.usuario.create(updateUsuarioDto)
      await this.usuario.update(id,usuarioActualizado)
      return `Usuarios actualizado exitosamente`
      
      
    } catch (error) {

      if(error instanceof Error) throw error 
      throw new InternalServerErrorException('Error al obtener actualizar al usuario')

    }
  }

  async remove(id: number) {

    try {

      await this.usuario.softDelete({id})
      return `Usuario Eliminado exitosamente` 
      
    } catch (error) {

      if(error instanceof Error) throw error 
      throw new InternalServerErrorException('Error al eliminar al usuario')
      
    }

 }
}
