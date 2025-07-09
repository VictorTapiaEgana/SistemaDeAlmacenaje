import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginDto{

    @ApiProperty()
    @IsString()
    correo:string

    @ApiProperty()
    @IsString()
    password:string

}