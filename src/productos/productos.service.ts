import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { Categoria as CategoriEntity } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class ProductosService {

  constructor(

    @InjectRepository(Producto)
    private productos:Repository<Producto>,

    @InjectRepository(CategoriEntity)
    private categorias:Repository<CategoriEntity>

  ){}

  async create(createProductoDto: CreateProductoDto) {

    try {

      const categoria  = await this.categorias.findOneBy({id: createProductoDto.id_categoria})

      const nuevoProducto = this.productos.create({
                                                  ...createProductoDto,
                                                   categoria:categoria!})

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

        return await this.productos.find({relations:['categoria']})

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
