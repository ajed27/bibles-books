import { Component, inject } from '@angular/core';

import { NavbarService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bibles-books';
  data = inject(NavbarService);
  menu = this.data.menu;
  
  public click: boolean = false;
  
  public clickMenu(){
    this.click = !this.click;
  }
}
