import { Component, inject } from '@angular/core';

import { CategoryLibraryService } from 'src/app/core';
import { LibraryModalComponent } from '../../components';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html'
})
export class LibraryComponent {
  categoryService = inject(CategoryLibraryService);
  categories = this.categoryService.categoryService;
  public folder: string = this.categoryService.folderImage;

  public modal = inject(MatDialog);

  openDialog(id:number): void{
    const dialogRef = this.modal.open(LibraryModalComponent, {
      data: id,
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log("Hello");
      console.log(result);
    });
  }
}
