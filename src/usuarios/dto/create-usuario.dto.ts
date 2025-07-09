import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateUsuarioDto {       
    
        @ApiProperty()
        @IsString()
        rut:string
    
        @ApiProperty()
        @IsString()    
        nombre:string
    
        @ApiProperty()
        @IsString()
        apellido_patero:string
    
        @ApiProperty()
        @IsString()
        apellido_materno:string
    
        @ApiProperty()
        @IsString()
        correo:string
    
        @ApiProperty()
        @IsString()
        pass:string
    
        // @ApiProperty()
        // @IsString()
        // calle:string
    
        // @ApiProperty()
        // @IsNumber()
        // numero:number
        
        // @ApiProperty()
        // @IsString()
        // poblacion:string
    
        // @ApiProperty()
        // @IsString()
        // ciudad:string         
        
}