import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  constructor() {
    setTimeout(() => {
      this.title = 'Title Changed';
    }, 1000);
  }
}
