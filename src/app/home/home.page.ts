import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    name: 'Muhammad Uzair Danyal',
    city: 'Mardan',
    interests: ['books','cricket','programming']
  };

  constructor() {}

}
