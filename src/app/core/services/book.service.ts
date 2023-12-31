import { Injectable, inject } from '@angular/core';

import { Book } from '../interfaces/book';
import { CharacterService } from './character.service';
import { GlobalVarsService } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  root: string = inject(GlobalVarsService).root;
  public rootBooks: string = this.root + 'Books/';
  characters = inject(CharacterService).characters;

  public books: Book[] = [
    {
      id: 1,
      name: 'Genesis',
      author: 'Moisés',
      description: 'El primer libro de la Biblia, nos explica el origen del hombre, desde la creación, el diluvio, el origen de los idiomas y la historia del principio del pueblo de Israel, con las historias de Abraham, Isaac y Jacob, terminando con el ingreso de Israel a Egipto',
      capsCount: 50,
      versCount: 1533,
      url: ['https://www.youtube.com/embed/HQMKA6w5ZZM', 'https://www.youtube.com/embed/MC8BqGu9B8A'],
      characters: [this.characters[0]],
      dateAprox: 'Alrededor de 1440 a.C.',
      historicalContext: 'Según algunos eruditos, se menciona que Génesis fue escrito por Moisés durante el tiempo que estuvo en el desierto, esto lo hizo en parte gracias a las historias de la tradición judía y por revelación divina, desde luego, el objetivo de Moisés para escribir este libro fue dejar constancia escrita de las historias de tradición judía, tales como los patriarcas, y la genealogía de los mismos, así como el origen de la creación, dentro de la narración descrita en génesis encontramos 3 contextos diferentes, Mesopotamia en los capítulos (1-11), Tierra Prometida en los capítulos (12-36) y Egipto en los capítulos (37-50)'
    },
    {
      id: 2,
      name: 'Éxodo',
      author: 'Moisés',
      description: 'Podemos encontrar la historia desde el nacimiento de Moisés en Egipto, la liberación del pueblo de Israel por medio de las 10 plagas y como se superan varios obstáculos con ayuda de Jehová terminando con la llegada de Israel al monte Sinaí, con los inicios de la Ley',
      capsCount: 40,
      versCount: 1165,
      url: ['https://www.youtube.com/embed/y9pED55wMM4', 'https://www.youtube.com/embed/U2lUpubEMDI'],
      characters: [this.characters[0]],
      dateAprox: 'Alrededor de 1400 a.C.',
      historicalContext: 'En el tiempo en el que Moisés nació y vivió en Egipto(aproximadamente 1525 a.C. se encontraba en reinado en Egito la décimo octava dinastía de Egipto, no fue un período político  económicamente débil u oscuro de la historia egipcia. Por ejemplo, Tumosis III, el Faraón de la opresión ha sido llamado el "Napoleón del Egipto antiguo", el soberano que expandió las fronteras de influencia egipcia mucho más allá de las fronteras naturales. Esta era la dinastía sobre la cual un siglo antes, bajo el liderazgo de Amosis I, había expulsado a los reyes hicsos del país y redirigido el crecimiento económico, militar y diplomático del país. Al tiempo del éxodo, Egipto está fuerte, no débil, se supone que Moisés escribe el Éxodo durante el tiempo que estaban en el desierto con el pueblo de Israel, es importante mencionar que el pueblo de Israel viene de un tiempo en Egipto de 430 años (la mayor parte en servidumbre), lo que hizo que vinieran con una cultura no muy buena y una amargura notoria, lo que hace que este pueblo sea muy incrédulo y necio, haciendo que en este libro nos encontremos con continuas peleas e infidelidad entre el pueblo y Dios, y vemos como Dios en su misericordia mantiene su pacto'
    },
    {
      id: 3,
      name: 'Levítico',
      author: 'Moisés',
      description: 'En este libro encontraremos las leyes y regulaciones estipuladas por Dios en el desierto para la correcta adoración y la alabanza en el tabernáculo, además de otras leyes para el diario vivir que a los israelitas se les había dado para que la cumpliesen',
      capsCount: 27,
      versCount: 859,
      url: ['https://www.youtube.com/embed/vKT8eo3hAMw'],
      characters: [this.characters[0]],
      dateAprox: 'Alrededor de 1445 a.C.',
      historicalContext: 'Cuando el pueblo de Israel se asentó en el monte Sinaí, se le ordenó a Moisés a empezar la construcción del tabernáculo para que Dios pudiera habitar, por primera vez, en medio del pueblo y debido a esto Moisés se vió en la necesidad de crear un estándar de santidad para los levitas que serían los sacerdotes que se dedicarían al servicio de Dios, y pensando en que lo primero que los niños aprenderían sería esa ley y luego se dedicarían a aprender todo lo demás, esto con el fin de generar un pueblo santo para Dios, ahí es donde se produce este libro, conteniendo en él todos los estatutos y leyes necesarias para mantener la santidad necesaria para tener a Dios en medio de ellos'
    },
    {
      id: 4,
      name: 'Números',
      author: 'Moisés',
      description: 'Se pueden encontrar los censos al pueblo mientras se preparaba para la travesía hacia Canaán estos censos facilitarían la asignación de tareas y la organización de la defensa ante los enemigos, también encontramos la historia hasta llegar al río Jordan, al otro lado de Canaán',
      capsCount: 36,
      versCount: 1289,
      url: ['https://www.youtube.com/embed/dtfbSxNecMk'],
      characters: [this.characters[0]],
      dateAprox: 'Alrededor de 1400 a.C.',
      historicalContext: 'La mayoría de los acontecimientos del libro se llevan a cabo "en el desierto". La palabra "desierto" es usada cuarenta y ocho veces en Números. Este término se refiere a la tierra que contiene poca vegetación o árboles, y debido a una escasez de lluvia, no puede ser cultivada. En los capítulos 1-10, Israel acampó en "el desierto en Sinaí".De los capítulos 10-12, Israel viajó desde Sinaí a Cades. En los capítulos 13-20, los acontecimientos se llevaron a cabo en y alrededor de Cades. De los capítulos 20-22, Israel viajó de Cades a las "llanuras de Moab". Todos los acontecimientos del versículo 22:2 al 36:13 ocurrieron mientras Israel estaba acampando en la planicie al Norte de Moab. Esta planicie era un terreno de tierra llano y fértil en medio del desierto (21:20; 23:28; 24:1). \nEL libro de Números se concentra en acontecimientos que se llevan a cabo en los años dos y cuarenta después del éxodo. La falta de material dedicado a este período de treinta y siete años, en comparación con los otros años del viaje de Egipto a Canaán, muestra el desperdicio que estos años fueron debido a la rebelión por parte de Israel en contra del Señor y su juicio consecuente'
    },
    {
      id: 5,
      name: 'Deuteronomio',
      author: 'Moisés',
      description: 'En el se repite la Ley. Se presenta una copia de esta como recordatorio para la nueva generación, el pueblo que finalmente entraba a la Tierra prometida, vemos la historia de Israel entrando en Canáan y Moisés a punto de morir, dando los últimos consejos al pueblo',
      capsCount: 34,
      versCount: 982,
      url: ['https://www.youtube.com/embed/qfMplfJoYA0'],
      characters: [this.characters[0]],
      dateAprox: 'Alrededor de 1400 a.C.',
      historicalContext: ''
    },
    {
      id: 6,
      name: 'Josué',
      author: 'Desconocido, se le atribuye a Josué en partes y lo demás pudo ser un escriba posterior',
      description: 'Encontramos el cambio de líder para el pueblo de Israel entre Moisés y Josué, la batalla en Canaán y como algunos apoyaron a Israel y otros conquistados, por útlimo, encontramos la repartición de la tierra entre las doce tribus, y da sus palabras y consejos finales',
      capsCount: 24,
      versCount: 658,
      url: ['https://www.youtube.com/embed/49ggVrdBN_Y'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 1400 - 1375 a.C.',
      historicalContext: ''
    },
    {
      id: 7,
      name: 'Jueces',
      author: 'Desconocido, pero se le atribuye en ocasiones a Samuel',
      description: 'Este libro nos presenta la vida y personalidad de cada uno de los jueces, dirigentes de Israel que existieron antes de los reyes, en estas historias se muestra como Israel estaba en constante peligro y Dios siempre la cuidó a pesar de su constante deslealtad y desobediencia',
      capsCount: 21,
      versCount: 618,
      url: ['https://www.youtube.com/embed/bCwaJz4L2nU'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 1050 - 1000 a.C.',
      historicalContext: ''
    },
    {
      id: 8,
      name: 'Rut',
      author: 'Samuel',
      description: 'Este libro nos muestra la historia de Rut, la cuál era una mujer de Moab que nos muestra la fidelidad que ella tuvo hacia su suegra hasta Belén, donde se establece, gracias a esta historia se conoce más sobre la genealogía de David y posteriormente de la del Mesías',
      capsCount: 4,
      versCount: 85,
      url: ['https://www.youtube.com/embed/f984fG4-xlE'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 1050 - 500 a.C.',
      historicalContext: ''
    },
    {
      id: 9,
      name: '1 Samuel',
      author: 'Desconocido, en su mayoría, Samuel, luego un sacerdote llamado Abiatar, o el profeta Natan',
      description: 'En el encontramos un momento donde la nación de Israel está mal, espíritualmente y políticamente debido a que los jueces se corrompieron, por lo tanto, llega Samuel a ser el último juez y a empezar con el período de los Reyes, primero con Saúl y luego con David y los primeros Reyes de Israel',
      capsCount: 31,
      versCount: 810,
      url: ['https://www.youtube.com/embed/34biq4ivs5I'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 931 - 722 a.C.',
      historicalContext: ''
    },
    {
      id: 10,
      name: '2 Samuel',
      author: 'Posiblemente el sacerdote Abiatar',
      description: 'En el nos adentramos a la historia del ascenso de David al trono y su reinado de 40 años hasta el pecado de David con Betsabé, en el podemos encontrar la importancia de la santidad y obedecer a Dios en todo momento, así como la importancia de un liderazgo bajo la guianza de Dios',
      capsCount: 24,
      versCount: 695,
      url: ['https://www.youtube.com/embed/BEvicPpjQBE'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 931 - 722 a.C.',
      historicalContext: ''
    },
    {
      id: 11,
      name: '1 Reyes',
      author: 'Desconocido, algunos se lo atribuyen a Jeremías, compilador Esdras y editor Isaías',
      description: 'Lo que nos narra este libro se encuentra ubicado históricamente entre 1 y 2 de Samuel y narra la historia posterio a David y a Samuel, es decir, empieza con el reinado de Salomón, y como durante este reino se dividió el pueblo en dos reinos, Judá e Israel',
      capsCount: 22,
      versCount: 817,
      url: ['https://www.youtube.com/embed/8V-TefJJc0g'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 560 - 538 a.C.',
      historicalContext: ''
    },
    {
      id: 12,
      name: '2 Reyes',
      author: 'Desconocido, algunos se lo atribuyen a Jeremías, otros a un autor desconocido de Babilonia',
      description: 'Este libro inicia justamente donde termina la historia de 1 de Reyes, con la división de los reinos para luego narrarnos la historia política de ambos pueblos y la historia detallada como el carácter y decisiones de los respectivos reyes de Judá como los reyes de Israel',
      capsCount: 25,
      versCount: 724,
      url: ['https://www.youtube.com/embed/8V-TefJJc0g'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 560 - 538 a.C.',
      historicalContext: ''
    },
    {
      id: 13,
      name: '1 Crónicas',
      author: 'Esdras',
      description: 'Originalmente 1 y 2 de Crónicas eran un sólo libro llamado "Los eventos de los días", pero al ser muy largo se dividió en dos, este libro narra temas paralelos a Samuel  y Reyes, la mayor parte de este libro se enfoca en el reinado de David y en la historia de Judá',
      capsCount: 29,
      versCount: 943,
      url: ['https://www.youtube.com/embed/lMj--4fDpvc'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 425 - 400 a.C.',
      historicalContext: ''
    },
    {
      id: 14,
      name: '2 Crónicas',
      author: 'Esdras',
      description: 'En este libro se exploran los reinados de Salomón y posteriormente el de los reyes que le sucedieron, esto tomando en cuenta sus virtudes y defectos hasta la cautividad babilónica, y el decreto de Ciro, autorizando la liberación del remanente de su tierra',
      capsCount: 35,
      versCount: 798,
      url: ['https://www.youtube.com/embed/lMj--4fDpvc'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 425 - 400 a.C.',
      historicalContext: ''
    },
    {
      id: 15,
      name: 'Esdras',
      author: 'Esdras',
      description: 'Este libro nos narra historia después del exilio desde Babilonia, donde pasaron posteriormente por Persia, y como Dios, por medio de Esdras y de Nehemías guía al pueblo al arrepentimiento y se comienza la reconstrucción de templo y de Jerusalen',
      capsCount: 10,
      versCount: 280,
      url: ['https://www.youtube.com/embed/OGdiLZ92nQs'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 425 - 400 a.C.',
      historicalContext: ''
    },
    {
      id: 16,
      name: 'Nehemías',
      author: 'Esdras y Nehemías',
      description: 'El tema central que encontramos en este libro es la reconstrucción de las murallas de Jerusalen, en el podemos ver la determinación de Nehemías, que confiando en Dios sigue firme a pesar la constante oposición enemiga para que no se pudieran reconstruir las murallas',
      capsCount: 13,
      versCount: 405,
      url: ['https://www.youtube.com/embed/OGdiLZ92nQs'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 445 - 420 a.C.',
      historicalContext: ''
    },
    {
      id: 17,
      name: 'Ester',
      author: '',
      description: '',
      capsCount: 10,
      versCount: 167,
      url: ['https://www.youtube.com/embed/0NzTOuBKAcI'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 465 - 400 a.C.',
      historicalContext: ''
    },
    {
      id: 18,
      name: 'Job',
      author: '',
      description: '',
      capsCount: 42,
      versCount: 1070,
      url: ['https://www.youtube.com/embed/A3ifTHYTmMQ'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: 'Ley'
    },
    {
      id: 19,
      name: 'Salmos',
      author: '',
      description: '',
      capsCount: 150,
      versCount: 2525,
      url: ['https://www.youtube.com/embed/8yieTfiw_Ew'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 20,
      name: 'Proverbios',
      author: 'Salomón',
      description: '',
      capsCount: 31,
      versCount: 915,
      url: ['https://www.youtube.com/embed/pNjt_NfIam8'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 21,
      name: 'Eclesiastés',
      author: 'Salomón',
      description: '',
      capsCount: 12,
      versCount: 222,
      url: ['https://www.youtube.com/embed/X4Brf1Z8N4E'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 22,
      name: 'Cantares',
      author: 'Salomón',
      description: '',
      capsCount: 8,
      versCount: 117,
      url: ['https://www.youtube.com/embed/JeTxGCZH99o'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 23,
      name: 'Isaías',
      author: 'Parte Isaías y parte un profecta posterior',
      description: '',
      capsCount: 62,
      versCount: 1292,
      url: ['https://www.youtube.com/embed/9lWr9EZchWg', 'https://youtube.com/embed/s-K5s7YpUC8'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 24,
      name: 'Jeremías',
      author: 'Jeremías',
      description: '',
      capsCount: 52,
      versCount: 1364,
      url: ['https://www.youtube.com/embed/_Nf4IcDuyTc'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 25,
      name: 'Lamentaciones',
      author: 'Jeremías',
      description: '',
      capsCount: 5,
      versCount: 154,
      url: ['https://www.youtube.com/embed/CWgafyPYpAU'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 26,
      name: 'Ezequiel',
      author: 'Ezequiel',
      description: '',
      capsCount: 48,
      versCount: 1273,
      url: ['https://www.youtube.com/embed.be/_XqV69VU3o0'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 27,
      name: 'Daniel',
      author: 'Daniel',
      description: '',
      capsCount: 12,
      versCount: 358,
      url: ['https://www.youtube.com/embed/yBO4FjCebrI'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 28,
      name: 'Oseas',
      author: 'Oseas',
      description: '',
      capsCount: 14,
      versCount: 197,
      url: ['https://www.youtube.com/embed/f81QQCnEOT4'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 29,
      name: 'Joel',
      author: 'Joel',
      description: '',
      capsCount: 3,
      versCount: 73,
      url: ['https://www.youtube.com/embed/lcUo6mIBx1E'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 30,
      name: 'Amós',
      author: 'Amós',
      description: 'El propósito del mensaje de Amós es poner exponer que los pecados en Israel eran graves. En primer lugar, desde la perspectiva económica, la diferencia entre los ricos y los pobres se ensanchó, trayendo un ambiente de impotencia e intranquilidad en la comunidad. El libro de Amós ataca tanto los males sociales del pueblo como su adoración pagana.  Lo hace por medio de un llamado urgente al arrepentimiento como el único medio de escapatoria del juicio inminente. La posición privilegiada de Israel debió haber ayudado para la vida justa, ciertamente no ser una excusa para pecar. La predicación de Amós en Bet-el, un centro de adoración y lugar de residencia del rey Jeroboam II, produjo una oposición de tal magnitud que regresó a Judá, donde escribió su mensaje.  El libro de Amós demuestra que el profeta era un hombre preparado, no un labrador ignorante',
      capsCount: 9,
      versCount: 146,
      url: ['https://www.youtube.com/embed/_6VyB2nOH8w'],
      characters: [this.characters[0]],
      dateAprox: '755 a.C.',
      historicalContext: 'Amós no se le describe como un profeta de profesión, el recibió un llamado de directo de Dios a ministrar Amós 7:15.  Su ocupación era l de boyero, quizá el jefe de una cuadrilla de pastores. Uzias, el rey de Judá (791-740), reinó sobre una nación prospera, pero operaba bajo la influencia de Jeroboam II, rey de Israel (793-753) cuyo reino estaba externamente en el cenit de su poderío pero interiormente era idólatra y corrupto 2 Reyes 14:24-25. Aquella época se caracterizaba por la prosperidad material y los males sociales. Los sectores más acaudalados de la sociedad no manifestaban solidaridad ni respeto hacia las necesidades del pueblo. Cap. 2:6-8; 3:10; 4;1;5:10-12; 8:4-6'
    },
    {
      id: 31,
      name: 'Abdías',
      author: 'Abdías',
      description: 'La intención es doble: proclamar la condenación de Edom por su maldad contra Israel y anunciar el "día del SEÑOR", y reflexionar sobre el dominio y la opresión de una nación sobre otra. Dios juzga la maldad de Edom frente a la desgracia israelita, pero el arrasamiento de Judá por Babilonia es también juicio de Dios para ella por oprimir a Edom y otras naciones. Indirectamente, Abdías invita a reconsiderar las pretensiones hegemónicas de las naciones',
      capsCount: 1,
      versCount: 21,
      url: ['https://www.youtube.com/embed/aEe3f0vEmVw'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 840 - 586 a.C.',
      historicalContext: 'Los edomitas eran descendientes de Esaú, el hermano gemelo de Jacob. Los edomitas estaban en conflicto constante con Israel, los descendientes de Jacob. Rechazaron la petición de Moisés de permitirles pasar por su territorio (Núm 20:14-20), se opusieron al rey Saúl (1Sa 14:47), hicieron guerra contra David (1Re 11:14-17), se opusieron a Salomón (1Re 11:14-25) y a Josafat (2Cr 20:22) y se rebelaron contra Joram (2Cr 21:8). Desde el siglo XIII al VI a.C., se establecieron en el monte Seir, una región montañosa al sur del mar Muerto, de la que Sela (Petra) era la capital. El terreno en ese valle es tan escarpado y difícil que para llegar a Petra hay que atravesar por estrechos desfiladeros protegidos por laderas que se alzan entre 100-150 m. de altura (véase Abdías 1:3-4). Durante el siglo V a.C. los naboteos desalojaron a los edomitas de su territorio y obligándoles a asentarse en Idumea en el sur de Palestina. Herodes el Grande era un edomita'
    },
    {
      id: 32,
      name: 'Jonás',
      author: 'Jonás',
      description: 'El libro demuestra que el Dios de los hebreos tiene cuidado de todo el mundo. La intención del autor está implícita en el personaje que simboliza Jonás. Por un lado, invita a los israelitas fieles a asumir su responsabilidad de compartir con los otros pueblos el conocimiento de Dios que se les ha revelado. Por otro lado, invitar a aquellos que sostienen la visión cerrada y exclusivista de Dios y su salvación a reflexionar y abrirse a una visión de Dios más plena: la universalidad de la misericordia de Dios y la inclusión de otros pueblos a la comunidad de los redimidos (Isa 56:3-7 )',
      capsCount: 4,
      versCount: 48,
      url: ['https://www.youtube.com/embed/oozILMuVVio'],
      characters: [this.characters[0]],
      dateAprox: 'Alrededor de 1400 a.C.',
      historicalContext: 'Ley'
    },
    {
      id: 33,
      name: 'Miqueas',
      author: 'Miqueas',
      description: 'La intención del autor es doble. Primera, anunciar la condenación de Dios a Samaria y Jerusalén debido a los pecados sociales sostenidos estructuralmente en sus respectivos aparatos políticos y religiosos de poder (gobernantes, jueces y sacerdotes). Segunda, anunciar la llegada del tiempo mesiánico y del Mesías de la familia de David que habrá de gobernar con justicia y paz a su pueblo',
      capsCount: 7,
      versCount: 105,
      url: ['https://www.youtube.com/embed/uivwBR1_tLs'],
      characters: [this.characters[0]],
      dateAprox: '760 a.C.',
      historicalContext: 'Como un profeta a las diez tribus del norte de Israel, Jonás comparte su contexto histórico con Amós. La nación disfrutó un tiempo de paz y prosperidad relativas. Tanto Siria como Asiria eran débiles, permitiendo a Jeroboam II que agrandara las fronteras del norte de Israel hasta donde habían estado en los días de David y Salomón (2Re 14:23-27). No obstante, espiritualmente fue un tiempo de pobreza; la religión era ritualista y más y más idólatra, y la justicia se había pervertido. El tiempo de paz y la riqueza la había hecho que estuviera en bancarrota espiritual, moral y ética (2Re 14:24; Amós 4:1; 5:10-13). Como resultado, Dios iba a castigarla al traer destrucción y cautividad de los asirios en el 722 a.C. El arrepentimiento de Nínive pudo haber sido ayudado por dos plagas (765 y 759 a.C.) y un eclipse solar (763 a.C.), preparándolos para el mensaje de juicio por parte de Jonás'
    },
    {
      id: 34,
      name: 'Nahum',
      author: 'Nahum',
      description: 'Nahúm significa consolado. Aunque el mensaje central es de juicio y destrucción sobre Nínive, resulta de gran consuelo para el abatido pueblo de Dios, que fue víctima de la crueldad de los asirios. El profeta Isaías describe el asedio al que fue sometida Jerusalén por los asirios: rodearon la ciudad amurallada con un ejército muy numeroso cuya cifra total desconocemos, pero sabemos que el ángel del SEÑOR exterminó en un solo día a ciento ochenta y cinco mil asirios (Isa 37:38 ) “¡Bueno es el Señor! Es una fortaleza en el día de la angustia, y conoce a los que en él se refugian” (Nah 1:7 ) Aunque los versículos de consolación son muy pocos, representaron en sí una verdadera expresión de consuelo para el pueblo de Dios. Dios ha consolado',
      capsCount: 3,
      versCount: 47,
      url: ['https://www.youtube.com/embed/bDGI0kq3vaE'],
      characters: [this.characters[0]],
      dateAprox: 'Entre 663 - 612 a.C.',
      historicalContext: '¡Nínive será destruida! Casi cada versículo desde Nah 1:15 a Nah 3:19 describe ese suceso, que ocurrió en el año 612 a.C. Los ninivitas (asirios) convertidos por la predicación de Jonás (más de un siglo antes de que Nahum escribiera) no habían comunicado su conocimiento del verdadero Dios a sus hijos y el pueblo pronto había retrocedido a sus prácticas crueles y paganas. Habían destruido a Samaría (el Reino del Norte, Israel) en el año 722 y estuvieron a punto de capturar a Jerusalén en el año 701. Nahum describe brevemente la maldad de Nínive en Nah 3:1; Nah 3:4. Dios tenía que destruir a un pueblo tan apóstata'
    },
    {
      id: 35,
      name: 'Habacuc',
      author: 'Habacuc',
      description: 'La fe es el estilo de vida del justo. No se trata de una fe escapista o espectadora de la realidad, sino justamente la que lo compromete a ser fiel en su realidad. Desde este entendimiento de la fe como dinámica de vida en fidelidad a Dios, se puede comprender el juicio de los injustos y la confianza absoluta en el Señor que interviene y actúa poderosamente. La fe de la que nos habla Habacuc está anclada en la confianza de que el Señor interviene en la historia, y nos convoca a la búsqueda de la justicia',
      capsCount: 3,
      versCount: 56,
      url: ['https://www.youtube.com/embed/AJT_ipZplS4'],
      characters: [this.characters[0]],
      dateAprox: '607 a.C.',
      historicalContext: 'Si bien nada se sabe del mismo profeta (cuyo nombre significa “abrazar”, debido a su amor por Dios), sí se conoce algo acerca de su tiempo. Habacuc profetizó justamente antes de que Nabucodonosor invadiera a Judá por primera vez en el año 605 a.C. (y llevase cautivos a Daniel y a otros a Babilonia) y fuera comisionado para anunciar la intención del Señor de castigar a Judá mediante la inminente deportación a Babilonia. El rey de Judá era Joacim, descrito por Jeremías de esta manera: “mas tus ojos y tu corazón no son sino para tu avaricia, y para derramar sangre inocente, y para opresión y para hacer agravio” (Jer 22:17; Hab 1:2-4 y 2Re 23:34-24:5)'
    },
    {
      id: 36,
      name: 'Sofonías',
      author: 'Sofonías',
      description: '',
      capsCount: 3,
      versCount: 53,
      url: ['https://www.youtube.com/embed/I9KvC0w1plE'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 37,
      name: 'Hageo',
      author: 'Hageo',
      description: '',
      capsCount: 2,
      versCount: 38,
      url: ['https://www.youtube.com/embed/kPOORNkv4AA'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 38,
      name: 'Zacarías',
      author: 'Zacarías',
      description: '',
      capsCount: 14,
      versCount: 211,
      url: ['https://www.youtube.com/embed/pYh4r4bNruQ'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 39,
      name: 'Malaquías',
      author: 'Malaquías',
      description: '',
      capsCount: 4,
      versCount: 55,
      url: ['https://www.youtube.com/embed/8ZMSBFH-8QM'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 40,
      name: 'Mateo',
      author: 'Mateo',
      description: '',
      capsCount: 28,
      versCount: 1071,
      url: ['https://www.youtube.com/embed/3jUPGTb80ms', 'https://youtu.be/EobkNEf-ySA'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 41,
      name: 'Marcos',
      author: 'Marcos',
      description: '',
      capsCount: 16,
      versCount: 678,
      url: ['https://www.youtube.com/embed/gsXLQkppzUc'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 42,
      name: 'Lucas',
      author: 'Lucas',
      description: '',
      capsCount: 24,
      versCount: 1151,
      url: ['https://www.youtube.com/embed/bPzhlL9zKmg', 'https://youtu.be/CxiSs-SHTuI'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 43,
      name: 'Juan',
      author: 'Juan',
      description: '',
      capsCount: 21,
      versCount: 879,
      url: ['https://www.youtube.com/embed/OU16-2Sg_CQ', 'https://www.youtube.com/embed/NUW1Frg8DA0'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 44,
      name: 'Hechos',
      author: 'Lucas',
      description: '',
      capsCount: 28,
      versCount: 1007,
      url: ['https://www.youtube.com/embed/5h7Q0EK-m8I', 'https://www.youtube.com/embed/ZKaaHQUdVCY'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 45,
      name: 'Romanos',
      author: 'Pablo',
      description: '',
      capsCount: 16,
      versCount: 433,
      url: ['https://www.youtube.com/embed/0tco1rQGC1o', 'https://www.youtube.com/embed/ZqScL0dHLsM'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 46,
      name: '1 Corintios',
      author: 'Pablo',
      description: '',
      capsCount: 16,
      versCount: 437,
      url: ['https://www.youtube.com/embed/6f0kym4bUmE'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 47,
      name: '2 Corintios',
      author: 'Pablo',
      description: '',
      capsCount: 13,
      versCount: 256,
      url: ['https://www.youtube.com/embed/jV7dTkYFym4'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 48,
      name: 'Gálatas',
      author: 'Pablo',
      description: '',
      capsCount: 6,
      versCount: 149,
      url: ['https://www.youtube.com/embed/kMJLgLOWb3I'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 49,
      name: 'Efesios',
      author: 'Pablo',
      description: '',
      capsCount: 6,
      versCount: 155,
      url: ['https://www.youtube.com/embed/yJgym5MGzM4'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 50,
      name: 'Filipenses',
      author: 'Pablo',
      description: '',
      capsCount: 4,
      versCount: 104,
      url: ['https://www.youtube.com/embed/gks8CQX5mwQ'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 51,
      name: 'Colosenses',
      author: 'Pablo',
      description: '',
      capsCount: 4,
      versCount: 95,
      url: ['https://www.youtube.com/embed/AG4jqCUapng'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 52,
      name: '1 Tesalonicenses',
      author: 'Pablo',
      description: '',
      capsCount: 5,
      versCount: 89,
      url: ['https://www.youtube.com/embed/_7N4vdUUK2w'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 53,
      name: '2 Tesalonicenses',
      author: 'Pablo',
      description: '',
      capsCount: 3,
      versCount: 47,
      url: ['https://www.youtube.com/embed/YXBzJlvH6l4'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 54,
      name: '1 Timoteo',
      author: 'Pablo',
      description: '',
      capsCount: 6,
      versCount: 113,
      url: ['https://www.youtube.com/embed/K5xCbQcSsOE'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 55,
      name: '2 Timoteo',
      author: 'Pablo',
      description: '',
      capsCount: 4,
      versCount: 83,
      url: ['https://www.youtube.com/embed/lvNqjbjTytE'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 56,
      name: 'Tito',
      author: 'Pablo',
      description: '',
      capsCount: 3,
      versCount: 46,
      url: ['https://www.youtube.com/embed/SuJmsIu_1-M'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 57,
      name: 'Filemón',
      author: 'Pablo',
      description: '',
      capsCount: 1,
      versCount: 25,
      url: ['https://www.youtube.com/embed/wNySA_IEHbM'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 58,
      name: 'Hebreos',
      author: '',
      description: '',
      capsCount: 13,
      versCount: 303,
      url: ['https://www.youtube.com/embed/VqVAOqyoKCs'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 59,
      name: 'Santiago',
      author: 'Santiago',
      description: '',
      capsCount: 5,
      versCount: 108,
      url: ['https://www.youtube.com/embed/yDqK_U-ipfc'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 60,
      name: '1 Pedro',
      author: '',
      description: '',
      capsCount: 5,
      versCount: 105,
      url: ['https://www.youtube.com/embed/NXRkCxeO-C4'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 61,
      name: '2 Pedro',
      author: '',
      description: '',
      capsCount: 3,
      versCount: 61,
      url: ['https://www.youtube.com/embed/0RJLecW7F08'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 62,
      name: '1 Juan',
      author: 'Juan',
      description: '',
      capsCount: 5,
      versCount: 105,
      url: ['https://www.youtube.com/embed/wQtMnuBzb4c'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 63,
      name: '2 Juan',
      author: 'Juan',
      description: '',
      capsCount: 1,
      versCount: 13,
      url: ['https://www.youtube.com/embed/wQtMnuBzb4c'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 64,
      name: '3 Juan',
      author: 'Juan',
      description: '',
      capsCount: 1,
      versCount: 15,
      url: ['https://www.youtube.com/embed/wQtMnuBzb4c'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 65,
      name: 'Judas',
      author: 'Judas',
      description: '',
      capsCount: 1,
      versCount: 25,
      url: ['https://www.youtube.com/embed/vhPyNSJiRZ8'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    },
    {
      id: 66,
      name: 'Apocalipsis',
      author: 'Juan',
      description: '',
      capsCount: 22,
      versCount: 404,
      url: ['https://www.youtube.com/embed/PgV57gK-Xow', 'https://youtu.be/DMXA-GERRzY'],
      characters: [this.characters[0]],
      dateAprox: '',
      historicalContext: ''
    }
  ]

  getBook(id: number): Book | null{
    for( let item of this.books){
      if(item.id == id){
        return item;
      }
    }
    return null;
  }
}
