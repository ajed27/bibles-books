import { Component, inject } from '@angular/core';

import { Presentations, PresentationsService } from 'src/app/core';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html'
})
export class PresentationsComponent {

  presentationsService = inject(PresentationsService);
  presentations: Presentations[] = this.presentationsService.presentations;

}
