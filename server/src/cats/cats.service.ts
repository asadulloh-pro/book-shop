import { Cat } from './cat.entity';

export class CatService {
  public findAll(): Cat[] {
    return [{ age: 20, id: 1, name: 'Salom' }];
  }
}
