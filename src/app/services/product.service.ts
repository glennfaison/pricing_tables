import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  async fetchAll(): Promise<any[]> {
    return [{ id: 1 }, { id: 2 }, { id: 3 }];
  }
}
