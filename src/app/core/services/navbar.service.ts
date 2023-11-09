import { Injectable } from '@angular/core';
import { Navbar } from '../interfaces/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public menu: Navbar[] = [
    {
      id: 1,
      name: 'Biblioteca',
      route: '/library',
    },
    {
      id: 2,
      name: 'Biblia',
      route: '/bible',
    },
    {
      id: 3,
      name: 'Versiones',
      route: '/version',
    },
    {
      id: 4,
      name: 'Diccionarios',
      route: '/dictionary',
    },
  ];
}
