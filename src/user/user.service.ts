import { Injectable } from '@nestjs/common';
import { usuario } from 'src/data';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    createUserDto = {
      id: usuario[usuario.length - 1].id + 1,
      ...createUserDto,
    };
    usuario.push(createUserDto);
    return usuario;
  }

  findAll() {
    return usuario;
  }

  findOne(email: string) {
    return usuario.find((user) => user.email === email);
  }

  update(
    id: number,
    updateUserDto: {
      name: string;
      email: string;
      senha: string;
    },
  ) {
    const index = usuario.findIndex((user) => user.id === id);
    usuario[index] = {
      id: usuario[index].id,
      ...updateUserDto,
    };
    return usuario[index];
  }
}
