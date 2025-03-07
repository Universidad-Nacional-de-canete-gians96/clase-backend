import { IsEmail, IsNegative, IsNumber, IsString } from "class-validator";

export class CrearUsuarioDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    nombres: string;
}

export class ModificarUsuarioDto {

    @IsNumber()
    @IsNegative()
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    nombres: string;
}

export class EliminarUsuarioDto {
    @IsNumber()
    @IsNegative()
    id: number;
}