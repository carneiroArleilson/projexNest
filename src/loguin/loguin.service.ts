import { Injectable } from '@nestjs/common';
import { usuario } from 'src/data';
import { CreateLoguinDto } from './dto/create-loguin.dto';

@Injectable()
export class LoguinService {
  create(createLoguinDto: CreateLoguinDto) {
    return 'This action adds a new loguin';
  }

  findAll() {
    return usuario;
  }

  async findOne({ email, senha }: { email: string; senha: string }) {
    const data = await usuario.find((lo) => lo.email === email);
    const sucess = data ? { sucess: true, id: data.id } : { sucess: false };
    return {
      ...sucess,
    };
  }
}
