import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Sector, SectorService } from 'src/app/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html'
})
export class ElementComponent {

  sectorService = inject(SectorService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  sector?: Sector | null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = params['id'];
      this.sector = this.getSector(id);
    });
  }

  getSector(id: number): Sector | null{
    return this.sectorService.getSector(id);
  }

  goBack(){
    this.router.navigateByUrl('/presentation/tabernacle');
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
