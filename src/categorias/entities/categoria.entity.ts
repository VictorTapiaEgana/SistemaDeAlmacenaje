import { Producto } from "src/productos/entities/producto.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()  
  id: number;

  @Column()  
  nombre: string;

  @DeleteDateColumn()  
  deletedAt?: Date;

//   @OneToMany(() => Subcategoria, sub => sub.categoria)
//   subcategorias: Subcategoria[];

  @OneToMany(() => Producto, producto => producto.categoria)
  productos: Producto[];
}

