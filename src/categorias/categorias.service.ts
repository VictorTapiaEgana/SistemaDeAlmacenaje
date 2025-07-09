import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {


  constructor( 
      @InjectRepository(Categoria)
      private categoria:Repository<Categoria>
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto) {

    try {

      const crearCategoria =  this.categoria.create(createCategoriaDto)
      await this.categoria.save(crearCategoria)

      return `Categoría "${createCategoriaDto.nombre}" ,creada exitosamente`;

      
    } catch (error) {

      throw new InternalServerErrorException('Categoría no creada')

    }

  }

  async findAll() {

    return this.categoria.find()
    
  }

  async findOne(id: number) {

    try {

      const categoria =  await this.categoria.findOneBy({id})

      if (!categoria){ 
        throw new NotFoundException('Categoría no encontrada')
      }

      return categoria

      
    } catch (error) {

      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Error al buscar la categoría')
      
    }

  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {

    try {

      const categoriaUpdate =  this.categoria.create(updateCategoriaDto)

      return await this.categoria.update(id,categoriaUpdate)
      
    } catch (error) {

      if (error instanceof Error) throw error;
      throw new InternalServerErrorException('No se actualizo la categoría')    
      
    }
  }

  async remove(id: number) {

    try {

      return await this.categoria.softDelete({id})
      
    } catch (error) {
      if(error instanceof Error) throw error
      throw new InternalServerErrorException('No se puedo eleiminar la catagoría')  
    }
  }
}
