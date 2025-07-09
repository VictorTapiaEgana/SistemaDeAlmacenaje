import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {

    constructor(        
        private loginService:AuthService
    ){}

    @Post()
    getLogin(@Body() datoslogin:LoginDto ){
         return this.loginService.ValidarLogin(datoslogin)  
    }
}
