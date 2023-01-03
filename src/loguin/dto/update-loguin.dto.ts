import { PartialType } from '@nestjs/mapped-types';
import { CreateLoguinDto } from './create-loguin.dto';

export class UpdateLoguinDto extends PartialType(CreateLoguinDto) {}
