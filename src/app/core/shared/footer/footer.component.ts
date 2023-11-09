import { Component, inject } from '@angular/core';
import { GlobalVarsService } from 'src/app/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public year = new Date().getFullYear();
  root: string = inject(GlobalVarsService).root + 'Footer/';
}
