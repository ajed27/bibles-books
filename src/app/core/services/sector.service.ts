import { Injectable } from '@angular/core';

import { Sector } from '..';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  public sectorData: Sector[] = [
    {
      id: 1,
      sector: 'Lugar Santísimo y Santo',
      url: 'https://atravesdelasescrituras.files.wordpress.com/2016/08/slide_201.jpg?w=365&h=274',
      description: 'El lugar santísimo era el área más oculta y más sagrada del antiguo tabernáculo de Moisés y del templo de Jerusalén, fue construido como un cubo perfecto. Sólo contenía el arca del pacto, el símbolo de la relación especial de Israel con Dios. Únicamente el sumo sacerdote israelita podía acceder al lugar santísimo una vez al año, en Yom Kipur, el día de la expiación, el sumo sacerdote estaba autorizado para entrar en el pequeño recinto, sin ventanas para quemar incienso y rociar la sangre de un animal sacrificado sobre el propiciatorio del arca. Al hacerlo, el sumo sacerdote expiaba sus propios pecados y los del pueblo. El lugar santísimo estaba separado del resto del tabernáculo / templo por el velo, un enorme y pesado velo de azul, púrpura, carmesí y lino torcido, y bordado con querubines de oro. El lugar Santo por otro lado era un área distinta al Santísimo, estaban divididos entre sí por un velo enorme, ésta área ocupaba dos terceras partes de la longitud total de la construcción, en el Sur estaba el candelabro de oro, en el occidente, frente a la cortina se encontraba el altar de incienso de oro, en el Norte se encontraba la mesa del pan de la proposición y allí mismo estaban los tazones y diversos utensilios de oro',
      shortDescription: 'El lugar santísimo y el lugar santo, fueron dos áreas ubicadas dentro del tabernáculo que Dios dió las especificaciones de como hacerlas, a las que solo los sacerdotres podían entrar'
    },
    {
      id: 2,
      sector: 'Arca del Pacto',
      url: 'https://unidoscontralaapostasia.files.wordpress.com/2011/09/arca-del-pacto.gif',
      description: 'El arca del pacto era una caja de madera enchapada de oro con medidas aproximadas de 1.3 metro de largo por unos 75 centímetro de ancho y alto, al principio, dentro de ella contenía las tablas de la ley escritas por el dedo de Dios y el maná del cielo que sirvió para alimentar al pueblo de Israel, esta arca representaba la presencia y el poder Dios, y como el no se aparta de su pueblo, yendo esta misma al frente de cualquier camino que iniciara el pueblo de Israel, la parte más importante del arca era la tapa, también llamada el "popiciatorio", este era el lugar donde el sacerdote entraba una vez al año y rociaba con sangre del sacrificio para calmar la ira de Dios por los pecados de el y del pueblo, este era el único lugar en el que se podía hacer eso.',
      shortDescription: 'El arca del pacto, fue un símbolo de la presencia y el poder de Dios, siendo la guía del pueblo de Israel al ir en frente cada vez que estos se movían'
    },
    {
      id: 3,
      sector: 'Segundo Velo',
      url: 'https://static.wixstatic.com/media/809e19_2cce7395a57242f78c1c4059c57b97ae~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_auto/809e19_2cce7395a57242f78c1c4059c57b97ae~mv2.jpg',
      description: 'El segundo velo tenía un espesor de 10 centímetros, según éxodo fue hecho con material azul, púrpura, carmesí y lino fino torcido, este velo se encontraba en medio del lugar Santísimo y el lugar Santo, dividiéndolos entre sí, tenía en el diseñados un par de querubínes, este velo representaba a Jesús ya que sólo por medio de este velo se podía entrar al lugar Santísimo, y Jesús el único medio para llegar al Padre, y ésta representación se hace más fuerte cuando se rompe al morir Jesús ya que resgar ese velo no era nada fácil y además simbolizando como ahora Jesús tomaba ese lugar de ser el único camino hacía Dios.',
      shortDescription: 'El segundo velo es el que se encargaba de dividir el lugar Santísimo del lugar Santo, teniendo un espesor de 10 centímetros hacíendolo pesado y resistente'
    },
    {
      id: 4,
      sector: 'Altar de Incienso',
      url: 'https://drive.tiny.cloud/1/4ctnih2g62i5dxdhvlhnyzbqfkkf4hk3kejup1taqn10ddnk/61645977-230c-4079-be1b-8fcd4d181568',
      description: 'El altar de incienso se encontraba en el lugar Santo, al lado del velo, junto con la mesa de la proposicion y el candelero, era específico para realizar sacrificios de incienso a Dios de mañana y de tarde con el fin de que Dios recibiera un olor grato, este incienso representa la oración de los creyentes, la buena oración sube a Dios como un olor grato para Él, estaba hecho de madera de acacia la cuál era un material que no se corrompe fácilmente, es decir, es un material bastante duradero, además de estar recubierto de oro puro, esto era una representación directa y perfecta de Jesús, siendo la madera su parte cien porciento humana y el oro su parte cien porciento Dios, ',
      shortDescription: 'El altar de incienso, era un instrumento utilizado para hacer sacrificios por la manaña y la tarde de incienso para ofrecer un olor grato a Dios'
    },
    {
      id: 5,
      sector: 'Candelabro',
      url: 'https://i.pinimg.com/originals/1c/14/36/1c14365534ba48a52e7869953e323ad8.gif',
      description: 'El candelero se encontraba justo en frente del arca del pacto, como el arca representaba la presencia de Dios, el candelero representaba a Jesús y sus brazos representan a su pueblo que ha sido dispersado pero que el mantendrá junto, en apocalipsis, se presenta como siete candeleros diferentes, igual, justo en frente del trono de Dios, entonces el candelero como tal es una representación de la congregación o pueblo de Dios, aparte de todo el número 7 suele representar el número perfecto de Dios, en este caso 6 de los brazos representan a la humanidad, ya que el 6 es el número de hombre, y el séptimo en es centro es Jesucristo que debe ser el centro del hombre.',
      shortDescription: 'El candelero es uno de los utensilios que se encontraba en el lugar Santo, el cual ayudaba para iluminar este lugar, teniendo también un significado importante'
    },
    {
      id: 6,
      sector: 'Mesa de la Proposición',
      url: 'https://matutinaadventista.com/wp-content/uploads/2021/09/Miercoles-22-de-Septiembre-de-2021-Matutina-para-Menores-Donde-se-encontraba-el-pan-de-la-proposicion.png',
      description: 'Mesa de la proposición se encontraba en el lugar Santo, y estaba hecha de madera de acacia, recubierta con oro, encima de ella se encontraban siempre doce panes, estos panes podían ser comidos unicamente por los sacerdotes, todos los utensilios que estaban en la mesa como, platos, tazas, tazones y jarras estaban hechas de oro, las medidas de la mesa era aproximadamente 70cm de alto, 90cm de largo y 45cm de ancho, así como en ese tiempo solo los sacerdotes pordían comer del pan, ahora sólo nosotros podemos comer de ese pan que es Jesús.',
      shortDescription: 'Mesa de la proposición, una mesa hecha específicamente para mantener siempre sobre ella doce panes que podían ser comidos sólo por los sacerdotes'
    },
    {
      id: 7,
      sector: 'Primer Velo',
      url: 'https://image.slidesharecdn.com/conf-ex26-120402162455-phpapp01/85/CONF-EXODO-26-1-37-EX-No-26-EL-TABERNACULO-Y-SU-ESTRUCTURA-64-320.jpg',
      description: 'El primer velo tenía un espesor de 10 centímetros, según éxodo fue hecho con material azul, púrpura, carmesí y lino fino torcido, este velo se encontraba en medio de los atrios donde estaba el altar de bronce y el lugar Santo, dividiéndolos entre sí, tenía en el diseñados un par de querubínes.',
      shortDescription: 'El primer velo es el que se encargaba de dividir el lugar donde estaba el altar de bronce del lugar Santo, teniendo un espesor de 10 centímetros hacíendolo pesado y resistente'
    },
    {
      id: 8,
      sector: 'Telas de Cubierta',
      url: 'https://www.salvoxgracia.com/wp-content/uploads/2020/11/Tabernaculo-Cubiertas_lr.jpg',
      description: 'Las telas de cubierta eran utilizadas porque, al ser el tabernáculo diseñado para ser móvil, entonces se necesitaba un techo fácil de quitar y poner, es este caso Dios pidió que fueran como primera capa, lino fino, algo interesante de mencionar es que la palbra lino traía consigo la condición de que debía ser blanca, como segundo piel de cabra, como tercero, piel de carnero teñida de rojo, y como última capa, piel de tejón que servía especialmente para que fuera impermeable, es decir, que el agua no atravesara.',
      shortDescription: 'El tabernáculo, para ser más específico, el lugar Santo y el lugar Santísimo necesitaban un techo, para ello Dios pidió que se utilizaran dirferentes cubiertas'
    },
    {
      id: 9,
      sector: 'Fuente de Bronce',
      url: 'https://graciamasgraciacom.files.wordpress.com/2020/01/lavacro-de-bronce.png',
      description: 'La fuente de bronce estaba hecha de espejos de bronce, y se encontraba justo en el medio entre el velo para entrar al lugar Santo, y el altrar de bronce, su utilización principal era que al terminar los sacrificios, el o los sacerdotes pudieran lavarse las manos, los pies y la cabeza antes de entrar al lugar Santo a hacer sacrificios de incienso ya ntes de salpícar la sangre en el arca del pacto para la expiación de pecados de el mismo y del pueblo, así como pasar a la mesa de la proposición y todo lo que se encontraba en el lugar Santo y el lugar Santísimo.',
      shortDescription: 'La fuente de bronce era una fuente hecha de espejos de bronces con agua dentro de sí para que los sacerdotes se limpiaran las manos, los pies y la cabeza antes de entrar al lugar Santo'
    },
    {
      id: 10,
      sector: 'Altar de Bronce',
      url: 'https://i.pinimg.com/474x/d9/13/88/d913888e72564bc946ab0bd2d7cba019--the-tabernacle-reign.jpg',
      description: 'El altar de bronce era el lugar estípulado para los sacrifcios que se iban a hacer a Dios, estos sacrificios podían ser con un distinto objectivo, tales como, perdón de pecados, perdón por la falta hecha a un hermano, agradecimiento a Dios, o sacrificio como ofrenda, este altar tenía también para utilizarlo distintos utensislios llamados "utensilios de bronce" que eran herramientas utilizadas para hacer los sacrificios, el altar de bnronce se encontraba ubicado en medio del tabernáculo, justo al entrar por la puerta y a sus lados se encontraban los atrios.',
      shortDescription: 'El altar de bronce es el lugar seleccionado por Dios para realizar los distintos tipos de sacrificio que se ofrecían a Dios, estaba hecho de madera y bañado en bronce'
    },
    {
      id: 11,
      sector: 'La Puerta',
      url: 'https://i.pinimg.com/736x/55/41/e5/5541e5f862176f454ae2198b7009016f.jpg',
      description: 'La puerta del tabernáculo estaba diseñada de 4 colores distintos, siendo estos, el blanco, azul, rojo, y púrpura, esto era con varios objectivos, siendo uno de los primeros que fuera llamativo a los ojos de los israelitas para que siempre supieran donde estaba la entrada del tabernáculo, y posteriormente se tomó como la figura de lo que ahora tenemos como los cuatro evangelios de la Biblia, Mateo, Marcos, Lucas y Juan, la altura era de más o menos 2.25 metros y su ancho de más o menos 9 metros, el color azul también era una figura de lo que vendría con el bautismo, el púrpura demostrando la nobleza de Jesús que es Rey de Reyes, el rojo o carmesí la sangre del sacrificio de Jesús en la cruz y el blanco, siendo la salvación obtenida por medio del Cordero inmolado que fue Jesucristo.',
      shortDescription: 'La puerta del tabernáculo era de 2.25 metros de alto y 9 metros de anchho, siendo de cuatro colores distintos con un significado futuro cada uno, simbolizando a Jesús'
    },
  ]



}
