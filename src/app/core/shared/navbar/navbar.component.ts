import { Component, inject } from '@angular/core';

import { NavbarService } from '../../';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  data = inject(NavbarService);
  menu = this.data.menu;
}
