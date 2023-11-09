import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-document-modal',
  templateUrl: './document-modal.component.html'
})
export class DocumentModalComponent {
  
  private sanitizer = inject(DomSanitizer);

  constructor(
    public dialogRef: MatDialogRef<DocumentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public pathDoc: string,
  ) {}

  convertUrlSafe(){
    const pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pathDoc);
    return pdfUrl;
  }

  close(){
    this.dialogRef.close();
  }
}
