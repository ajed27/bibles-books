import { Injectable } from '@angular/core';
import { Navbar } from '../interfaces/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public menu: Navbar[] = [
    {
      id: 1,
      name: 'Biblia',
      route: '/bible',
    },
    {
      id: 2,
      name: 'Biblioteca',
      route: '/library',
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
    {
      id: 5,
      name: 'Presentaciones',
      route: '/presentation',
    },
  ];
}
