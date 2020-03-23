import { Injectable } from '@angular/core';

// Q. why we add @Injectable({})
// to load the dependecies of this services
/**
 * constructor(private address: AddressService) {
 * }
 * ! we can remove this @Injectable({}) decorator - if we donot have any service dependencies
 */
@Injectable()
export class PeopleService {

  constructor() { }

  getPeople() {
    return [
      {
        name: 'Rahul'
      },
      {
        name: 'Sanjay'
      }
    ];
  }
}
