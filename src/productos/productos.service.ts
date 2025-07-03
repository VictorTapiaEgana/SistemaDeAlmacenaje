import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {

  constructor(

    @InjectRepository(Producto)
    private productos:Repository<Producto>

  ){}

  async create(createProductoDto: CreateProductoDto) {

    try {

      const nuevoProducto = this.productos.create(createProductoDto)

      await this.productos.save(nuevoProducto)

      return `Producto "${createProductoDto.nombre}" , Creado exitosamente`

      
    } catch (error) {

      if (error.code === 'ER_DUP_ENTRY') { 

        throw new ConflictException('El producto ya existe');

      }else{

        throw new InternalServerErrorException('Error al crear el producto');

      }

   }
      
  } 

  async findAll() {

    try {

        return await this.productos.find()

    } catch (error) {

       throw new InternalServerErrorException('Error al obtener los datos')
      
    }
    
  }

  async findOne(id: number) {

   try {

      return  await this.productos.findOneBy({id:id})

   } catch (error) {
    
    throw new InternalServerErrorException('Error al obtener los datos')

   }
}

  async update(id: number, updateProductoDto: UpdateProductoDto) {

    try {
      
      const ProductoActualizado = this.productos.create(updateProductoDto)
      await this.productos.update(id,ProductoActualizado)
      
      return 'Producto actualizado correctamente' 
      
    } catch (error) {

      throw new InternalServerErrorException('Producto no actualizado')
      
    }       

  }

  async remove(id: number) {

    try {

      await this.productos.softDelete({id})

      return 'Producto eliminado Exitosamente'

      
    } catch (error) {
      
       throw new InternalServerErrorException('Producto no eliminado')

    }

  }
}
