import { Controller, Get } from '@nestjs/common';
import { CatService } from './cats.service';
import { Cat } from './cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
