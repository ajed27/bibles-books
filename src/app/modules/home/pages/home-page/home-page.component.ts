import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  private router = inject(Router);

  redirectToBible(): void{
    this.router.navigateByUrl('/bible');
  }
}
