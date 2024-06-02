import { Injectable } from '@angular/core';
import { Presentations } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PresentationsService {

  presentations: Presentations[] = [
    {
      id: 1,
      name: 'Tabernáculo',
      path: 'tabernacle',
      img: 'https://aprendeencasa.mx/wp-content/uploads/2023/06/el-tabernaculo-de-david-un-estudio-detallado-de-su-significado-y-simbolismo.jpg',
      description: 'Adentrate más a conocer las partes del tabernáculo que utilizaban los israelitas en el desierto en lugar del templo y cada una de sus interesantes sectores'
    },
  ];

}
