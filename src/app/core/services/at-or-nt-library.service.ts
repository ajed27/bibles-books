import { Injectable } from '@angular/core';

import { AtOrNtLibrary, CategoryLibrary } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AtOrNtLibraryService {

  atOrNtService: AtOrNtLibrary[] = [
    {
      id: 1,
      time: 'Antiguo Testamento',
    },
    {
      id: 2,
      time: 'Nuevo Testamento',
    },
  ];

}
