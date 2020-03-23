import { Component } from '@angular/core';
import { PeopleService } from './people/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people;

  constructor() {
    // if people service have any dependencies - we will pass it here in constructor
    const ps = new PeopleService();
    this.people = ps.getPeople();
  }
}
