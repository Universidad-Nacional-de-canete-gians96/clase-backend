import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreatePersonajeDto {
  @IsString()
  nombre: string;

  @IsString()
  foto: string;
}

export class UpdatePersonajeDto {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  foto?: string;
}
