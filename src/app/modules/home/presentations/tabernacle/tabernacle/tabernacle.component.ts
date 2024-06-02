import { Component, inject } from '@angular/core';

import { Sector, SectorService } from 'src/app/core';

@Component({
  selector: 'app-tabernacle',
  templateUrl: './tabernacle.component.html'
})
export class TabernacleComponent {

  private sectorService = inject(SectorService);

  public data: Sector[] = this.sectorService.sectorData;

}
