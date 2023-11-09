import { Injectable, inject } from '@angular/core';
import { GlobalVarsService } from 'src/app/global';
import { BookLibrary } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  root: string = inject(GlobalVarsService).root;
  public rootLibrary: string = this.root + 'Library/General/';
  public libraryImage: string = this.root + 'Elements/pdfImage';

  
  public libraryByCategory(idCategory: number): BookLibrary[]{
    let libByCat: BookLibrary[] = [];
    for( let l of this.library ){
      if( l.id_category === idCategory ){
        libByCat.push(l);
      }
    }
    return libByCat;
  }

  public library: BookLibrary[] = [
    {
      id: 1,
      name: 'Croatto_Desmesura_Y_Fin_Del_Opresor_En_La_Perspectiva_Apocalíptica',
      title: 'Croatto Desmesura Y Fin Del Opresor En La Perspectiva Apocalíptica',
      id_category: 4,
      id_time: 1,
    },
    {
      id: 2,
      name: 'Croatto_Dios_En_El_Acontecimiento',
      title: 'Croatto Dios En El Acontecimiento',
      id_category: 5,
      id_time: 2,
    },
    {
      id: 3,
      name: 'Croatto_El_Mesías_Liberador_De_Los_Pobres',
      title:'Croatto El Mesías Liberador De Los Pobres',
      id_category: 5,
      id_time: 2,
    },
    {
      id: 4,
      name: 'Croatto_El_Origen_Isaiano_De_Las_Bienaventuranzas_De_Lucas',
      title: 'Croatto El Origen Isaiano De Las Bienaventuranzas De Lucas',
      id_category: 4,
      id_time: 1,
    },
    {
      id: 5,
      name: 'Croatto_Formó_Yahveh_Dios_Al_Ser_Humano_Como_Polvo_Del_Suelo',
      title: 'Croatto Formó Yahveh Dios Al Ser Humano Como Polvo Del Suelo',
      id_category: 4,
      id_time: 1,
    },
    {
      id: 6,
      name: 'Croatto_Hombre_Nuevo_Y_Liberación_En_La_Carta_A_Los_Romanos',
      title: 'Croatto Hombre Nuevo Y Liberación En La Carta A Los Romanos',
      id_category: 4,
      id_time: 2,
    },
    {
      id: 7,
      name: 'Croatto_La_Diosa_Asherá_En_El_Antiguo_Israel',
      title: 'Croatto La Diosa Asherá En El Antiguo Israel',
      id_category: 5,
      id_time: 1,
    },
    {
      id: 8,
      name: 'Croatto_La_Fe_Que_Llega_A_Su_Teléiosis_O_Perfección(Sant2,22b)',
      title: 'Croatto La Fe Que Llega A Su Teléiosis O Perfección(Sant2,22b)',
      id_category: 1,
      id_time: 2,
    },
    {
      id: 9,
      name: 'Croatto_La_Propuesta_Querigmática_Del_Segundo_Isaías',
      title: 'Croatto La Propuesta Querigmática Del Segundo Isaías',
      id_category: 1,
      id_time: 1,
    },
    // {
    //   id: 10,
    //   name: 'Croatto_La_Sexualidad_De_La_Divinidad',
    //   title: 'Croatto La Sexualidad De La Divinidad',
    //   id_category: 1,
    //   id_time: 1,
    // },
    {
      id: 11,
      name: 'Croatto_La_Torre_De_Babel',
      title: 'Croatto La Torre De Babel',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 12,
      name: 'Croatto_Las_Estructuras_De_Poder_En_La_Biblia',
      title: 'Croatto Las Estructuras De Poder En La Biblia',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 13,
      name: 'Croatto,_La_Anunciación_A_La_Luz_De_La_Teología_De_La_Alianza',
      title: 'Croatto, La Anunciación A La Luz De La Teología De La Alianza',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 14,
      name: 'Croatto_Cantar_De_Los_Cantares',
      title: 'Croatto Cantar De Los Cantares',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 15,
      name: 'Croatto_Cómo_Rleer_La_Biblia_Desde_Su_Contexto_Socio_Político',
      title: 'Croatto Cómo Leer La Biblia Desde Su Contexto Socio Político',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 16,
      name: 'Croatto_Las_Formas_Del_Mito',
      title: 'Croatto Las Formas Del Mito',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 17,
      name: 'Croatto_Nuevas_Hermenéuticas_Bíblicas',
      title: 'Croatto Nuevas Hermenéuticas Bíblicas',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 18,
      name: 'Croatto_Reading_Genesis_3_From_A_Utopian_Perspective',
      title: 'Croatto Reading Genesis 3 From A Utopian Perspective',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 19,
      name: 'Croatto_Sabreis_Que_Yo_Soy_Yave',
      title: 'Croatto Sabreis Que Yo Soy Yave',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 20,
      name: 'Exodo_Jorge_Pixley',
      title: 'Exodo Jorge Pixley',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 21,
      name: 'Invierno_Eclesial_Codina',
      title: 'Invierno Eclesial Codina',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 22,
      name: 'Kirk_Hermenéutica_Bíblica_Y_Hombre_Nuevo',
      title: 'Kirk Hermenéutica Bíblica Y Hombre Nuevo',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 23,
      name: 'La_Estructura_Ausente_Umberto_Eco',
      title: 'La Estructura Ausente Umberto Eco',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 24,
      name: 'Levoratti_El_Hombre_En_El_Mundo',
      title: 'Levoratti El Hombre En El Mundo',
      id_category: 1,
      id_time: 1,
    },
    {
      id: 25,
      name: 'Mateo_25_Antonio_González',
      title: 'Mateo 25 Antonio González',
      id_category: 1,
      id_time: 1,
    },
  ]
}
