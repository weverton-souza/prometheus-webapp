import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const pokemons = [];
    return { pokemons };
  }

  genId(): number {
    return Math.round(Math.random() * 1000000);
  }
  
}