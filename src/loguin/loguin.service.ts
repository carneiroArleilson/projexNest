import { Injectable } from '@nestjs/common';
import { usuario } from 'src/data';
import { CreateLoguinDto } from './dto/create-loguin.dto';
import { UpdateLoguinDto } from './dto/update-loguin.dto';

@Injectable()
export class LoguinService {
  create(createLoguinDto: CreateLoguinDto) {
    return 'This action adds a new loguin';
  }

  findAll() {
    return usuario;
  }

  findOne({ email, senha }: { email: string; senha: string }) {
    const sucess = usuario.find((lo) => lo.email === email).senha === senha;
    return {
      sucess,
    };
  }
}
