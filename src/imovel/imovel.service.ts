import { Injectable } from '@nestjs/common';
import { imovel } from 'src/data';
import { CreateImovelDto } from './dto/create-imovel.dto';

@Injectable()
export class ImovelService {
  create(createImovelDto: CreateImovelDto) {
    createImovelDto = {
      id: imovel.length > 0 ? imovel[imovel.length - 1].id + 1 : 1,
      ...createImovelDto,
    };
    imovel.push(createImovelDto);
    return imovel;
  }

  findAll() {
    return imovel;
  }

  findOne(id: number) {
    return imovel.find((user) => user.id === id);
  }

  update(id: number, updateImovelDto: CreateImovelDto) {
    const index = imovel.findIndex((user) => user.id === id);
    imovel[index] = {
      id: imovel[index].id,
      ...updateImovelDto,
    };
    return imovel;
  }

  remove(id: number) {
    return `This action removes a #${id} imovel`;
  }
}
