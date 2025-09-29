import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DossierStatus } from '@prisma/client';

export class UpdateDossierStatusDto {
  @IsEnum(DossierStatus)
  status: DossierStatus;

  @IsOptional()
  @IsString()
  rejectionReason?: string;
}
