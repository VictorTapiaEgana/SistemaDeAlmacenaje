import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categorias/entities/categoria.entity";

@Entity()
export class Producto {

  @PrimaryGeneratedColumn()  
  id: number;

  @Column()  
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column()
  codigo_barra: string;

  @Column()
  sku: string;

  @Column()
  codigo_interno: string;

  @Column({ nullable: true })
  ean13: string;

  @Column({ nullable: true })
  qr_code: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  unidad_medida: string;

  @Column()
  unidad_por_empaque: number;

  @Column()
  cantidad_total: number;

  @Column()
  stock_minimo: number;

  @Column()
  stock_maximo: number;

  @Column()
  estado_stock: string;

  @Column()
  nivel_rotacion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  peso: number;

  @Column('decimal')
  largo: number;

  @Column('decimal')
  ancho: number;

  @Column('decimal')
  alto: number;

  @Column()
  es_ensamblado: boolean;

  @Column('decimal')
  precio_compra: number;

  @Column('decimal')
  costo_promedio: number;

  @Column('decimal')
  precio_venta: number;

  @Column('decimal')
  precio_mayorista: number;

  @Column('decimal')
  precio_descuento: number;

  @Column()
  iva_incluido: boolean;

  @Column()
  moneda: string;

  @Column()
  origen: string;

  @Column({ type: 'date' })
  fecha_fabricacion: Date;

  @Column({ type: 'timestamp' })
  fecha_ingreso: Date;

  @Column({ type: 'date', nullable: true })
  fecha_vencimiento: Date;

  @Column()
  dias_alerta_vencimiento: number;

  @Column()
  es_perecible: boolean;

  @Column()
  requiere_refrigeracion: boolean;

  @Column()
  control_calidad: string;

  @Column({ type: 'date' })
  fecha_control_calidad: Date;

  @Column()
  inspeccionado_por: string;

  @Column()
  activo: boolean;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => Categoria, categoria => categoria.productos)
  categoria: Categoria;

//   @ManyToOne(() => Subcategoria, sub => sub.productos)
//   subcategoria: Subcategoria;

//   @ManyToOne(() => Proveedor, proveedor => proveedor.productos)
//   proveedor: Proveedor;

//   @ManyToOne(() => Producto, producto => producto.id, { nullable: true })
//   producto_padre: Producto;

//   @OneToMany(() => AtributoProducto, attr => attr.producto)
//   atributos: AtributoProducto[];

//   @OneToMany(() => StockPorUbicacion, stock => stock.producto)
//   stock: StockPorUbicacion[];

//   @OneToOne(() => AuditoriaProducto, audit => audit.producto)
//   auditoria: AuditoriaProducto;

}
