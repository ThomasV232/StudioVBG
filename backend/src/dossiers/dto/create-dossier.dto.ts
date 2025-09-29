import { IsArray, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDossierDto {
  @IsString()
  @MinLength(3)
  @MaxLength(120)
  title: string;

  @IsString()
  @MinLength(10)
  @MaxLength(2000)
  description: string;

  @IsOptional()
  @IsArray()
  milestones?: { title: string; weight?: number }[];
}
