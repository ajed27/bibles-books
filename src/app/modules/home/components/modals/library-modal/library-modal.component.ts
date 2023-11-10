import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LibraryService } from 'src/app/core';
import { DocumentModalComponent } from '../document-modal';


@Component({
  selector: 'app-library-modal',
  templateUrl: './library-modal.component.html'
})

export class LibraryModalComponent {
  libraryService = inject(LibraryService);
  public root: string = this.libraryService.rootLibrary;
  public image: string = this.libraryService.libraryImage;

  public modal = inject(MatDialog);

  constructor(
    public dialogRef: MatDialogRef<LibraryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public idCategory: number,
  ) {}

  openDoc(path: string): void{
    this.modal.open(DocumentModalComponent, {
      data: path,
      width: "100%",
      height: "83%",
      backdropClass: "overscroll-y-none"
    });
  }

}
