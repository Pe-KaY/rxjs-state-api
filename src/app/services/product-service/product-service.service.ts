import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}

  fetchProducts() {
    return of([
      {
        name: 'Mango',
        price: 10,
      },
      {
        name: 'Pear',
        price: 10,
      },
      {
        name: 'Pineaple',
        price: 20,
      },
      {
        name: 'Tomatoes',
        price: 30,
      },
      {
        name: 'Sugar Cane',
        price: 25,
      },
      {
        name: 'Apple',
        price: 60,
      },
      {
        name: 'Banana',
        price: 15,
      },
      {
        name: 'Grapes',
        price: 60,
      },
      {
        name: 'Watermelon',
        price: 25,
      },
      {
        name: 'Sugar Apple',
        price: 70,
      },
      {
        name: 'Sugar Cane',
        price: 65,
      },
      {
        name: 'Strawberry',
        price: 27,
      },
    ]);
  }
}
