import { Injectable, inject } from '@angular/core';

import { CategoryLibrary } from '../interfaces';
import { GlobalVarsService } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class CategoryLibraryService {

  root: string = inject(GlobalVarsService).root;
  public folderImage: string = this.root + 'Elements/folder';

  categoryService: CategoryLibrary[] = [
    {
      id: 1,
      category: 'Comentarios',
    },
    {
      id: 2,
      category: 'Mensajes',
    },
    {
      id: 3,
      category: 'Diccionarios',
    },
    {
      id: 4,
      category: 'Estudios',
    },
    {
      id: 5,
      category: 'Teología',
    },
  ];

}
