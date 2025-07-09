import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsInt, IsNumber, IsString } from "class-validator";

export class CreateProductoDto {        
       
    @ApiProperty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsString()
    descripcion: string;
      
    @ApiProperty()
    @IsString()
    codigo_barra: string;

    @ApiProperty()
    @IsString()
    sku: string;
    
    @ApiProperty()
    @IsString()
    codigo_interno: string;

    @ApiProperty()   
    @IsString()
    ean13: string;
    
    @ApiProperty()
    @IsString()
    qr_code: string;
    
    @ApiProperty()
    @IsString()
    marca: string;
    
    @ApiProperty()
    @IsString()
    modelo: string;
    
    @ApiProperty()
    @IsString()
    unidad_medida: string;
    
    @ApiProperty()
    @IsInt()
    unidad_por_empaque: number;
    
    @ApiProperty()
    @IsInt()
    cantidad_total: number;
    
    @ApiProperty()
    @IsInt()
    stock_minimo: number;
    
    @ApiProperty()
    @IsInt()
    stock_maximo: number;
    
    @ApiProperty()
    @IsString()
    estado_stock: string;
    
    @ApiProperty()
    @IsString()
    nivel_rotacion: string;
    
    @ApiProperty()
    @IsNumber()
    peso: number;

    @ApiProperty()
    @IsInt()
    largo: number;
    
    @ApiProperty()
    @IsInt()
    ancho: number;
    
    @ApiProperty()
    @IsInt()
    alto: number;
    
    @ApiProperty()
    @IsBoolean()
    es_ensamblado: boolean;
    
    @ApiProperty()
    @IsInt()
    precio_compra: number;
    
    @ApiProperty()
    @IsInt()
    costo_promedio: number;
    
    @ApiProperty()
    @IsInt()
    precio_venta: number;
    
    @ApiProperty()
    @IsInt()
    precio_mayorista: number;
    
    @ApiProperty()
    @IsInt()
    precio_descuento: number;
    
    @ApiProperty()
    @IsBoolean()
    iva_incluido: boolean;
    
    @ApiProperty()
    @IsString()
    moneda: string;
    
    @ApiProperty()
    @IsString()
    origen: string;
    
    @ApiProperty()
    @IsString()
    fecha_fabricacion: string;

    @ApiProperty()
    @IsDateString()
    fecha_ingreso: string;
    
    @ApiProperty()
    @IsDateString()
    fecha_vencimiento: string;
    
    @ApiProperty()
    @IsInt()
    dias_alerta_vencimiento: number;
    
    @ApiProperty()
    @IsBoolean()
    es_perecible: boolean;
    
    @ApiProperty()
    @IsBoolean()
    requiere_refrigeracion: boolean;
    
    @ApiProperty()
    @IsString()
    control_calidad: string;
    
    @ApiProperty()
    @IsDateString()
    fecha_control_calidad: string;
    
    @ApiProperty()
    @IsString()
    inspeccionado_por: string;
    
    @ApiProperty()
    @IsBoolean()
    activo: boolean;
    
    @ApiProperty()
    @IsString()
    observaciones: string;

    @ApiProperty()
    @IsNumber()
    id_categoria:number 

}
