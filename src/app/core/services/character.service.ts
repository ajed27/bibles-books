import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public characters: Character[] = [
    {
      id: 1,
      name: 'Adan',
      history: 'Primer hombre',
      url: 'https://adan.com',
      img: 'adsfasdf',
      bornAge: 0,
      deathAge: 918,
      idBook: 1
    },
    {
      id: 2,
      name: 'Enoc',
      history: 'Camino con Dios',
      url: 'https://enoc.com',
      img: 'adsfasdf',
      bornAge: 1515,
      deathAge: 1515,
      idBook: 1
    },
    {
      id: 3,
      name: 'Noé',
      history: 'Diluvio',
      url: 'https://noe.com',
      img: 'adsfasdf',
      bornAge: 1010,
      deathAge: 1010,
      idBook: 1
    },
    {
      id: 4,
      name: 'Sem',
      history: 'Diluvio',
      url: 'https://noe.com',
      img: 'adsfasdf',
      bornAge: 1010,
      deathAge: 1010,
      idBook: 1
    },
    {
      id: 5,
      name: 'Cam',
      history: 'Diluvio',
      url: 'https://noe.com',
      img: 'adsfasdf',
      bornAge: 1010,
      deathAge: 1010,
      idBook: 1
    },
    {
      id: 6,
      name: 'Jafet',
      history: 'Diluvio',
      url: 'https://noe.com',
      img: 'adsfasdf',
      bornAge: 1010,
      deathAge: 1010,
      idBook: 1
    },
    {
      id: 7,
      name: 'Noé',
      history: 'Diluvio',
      url: 'https://noe.com',
      img: 'adsfasdf',
      bornAge: 1010,
      deathAge: 1010,
      idBook: 1
    }
  ];

}
