import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Bloodseeker' },
      { id: 12, name: 'Keeper of the Light' },
      { id: 13, name: 'Necrophos' },
      { id: 14, name: 'Lina' },
      { id: 15, name: 'Arc Warden' },
      { id: 16, name: 'Outworld Devourer' },
      { id: 17, name: 'Batrider' },
      { id: 18, name: 'Sniper' },
      { id: 19, name: 'Crystal Maiden' },
      { id: 20, name: 'Oracle' }
    ];
    return {heroes};
  }
}
