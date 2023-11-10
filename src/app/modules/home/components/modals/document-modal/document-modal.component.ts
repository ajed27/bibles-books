import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer'

@Component({
  selector: 'app-document-modal',
  templateUrl: './document-modal.component.html'
})
export class DocumentModalComponent {
  
  private sanitizer = inject(DomSanitizer);
  public zoomCount: number = 1;

  constructor(
    public dialogRef: MatDialogRef<DocumentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public pathDoc: string,
  ) {pdfDefaultOptions.assetsFolder = 'bleeding-edge';}

  convertUrlSafe(){
    const pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pathDoc);
    return pdfUrl;
  }

  manageZoom(control: number): number{
    if( control === 1 ){
      this.zoomCount = this.zoomCount + 0.1;
    }else{
      this.zoomCount = this.zoomCount - 0.1;
    }
    return this.zoomCount;
  }
}
