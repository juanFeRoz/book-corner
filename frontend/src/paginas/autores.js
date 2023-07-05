import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { BarraNavegacion } from '../navbar/barra-navegacion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
{/* Agregé la barra de navegacion  :) danna*/}
function BasicExample() {
  return (
    <div>
    <BarraNavegacion />
    <Accordion defaultActiveKey="0">{/*En el fragmento de código, estás utilizando la prop defaultActiveKey en el componente Accordion para establecer el índice inicial del acordeón.*/}
      <Accordion.Item eventKey="0" accordion-color>
        <Accordion.Header>Gabriel García Márquez</Accordion.Header>{/*se define un encabezado para elemento de acordeón con el texto*/}
        
        <Accordion.Body>{/*se utiliza para definir el contenido del cuerpo de un elemento de acordeón dentro de un componente*/}
        Gabriel García Márquez. (6 de marzo de 1927, Aracataca, Colombia - 17 de abril de 2014, México D.F.). Escritor y periodista colombiano.
        Nace y pasa sus primeros años en una zona caribeña del norte de Colombia, que le marca especialmente por su contraste con Bogotá y otras zonas del país en las que vive más tarde. En 1947 empieza a estudiar Derecho, carrera que abandona para dedicarse al periodismo. Sus primeros artículos se publican en El Espectador y en El Heraldo y pasa a integrar el conocido como “Grupo de Barranquilla”, de cuya mano conoce la obra de los autores que más adelante le influenciarán: Faulkner, Virginia Woolf, Hemingway y Kafka, entre otros.
        Su primera obra, La hojarasca, se publica en 1955. En esa misma fecha viaja a Europa por primera vez y se queda allí cuatro años, viviendo en Ginebra, Roma y París. Durante su estancia en Francia, donde atraviesa dificultades económicas, escribe El coronel no tiene quien le escriba y La mala hora (publicadas en 1961 y 1962, respectivamente).
        <img
          src="https://www.biografiasyvidas.com/biografia/g/fotos/garcia_marquez_gabriel.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Miguel de Cervantes Saavedra</Accordion.Header>
        <Accordion.Body>
        (Alcalá de Henares, España, 1547 - Madrid, 1616) Escritor español, autor de Don Quijote de la Mancha (1605 y 1615), obra cumbre de la literatura universal. La inmensa fama de este libro inmortal, que parte de la parodia del género caballeresco para trazar un maravilloso retrato de los ideales y prosaísmos que cohabitan en el espíritu humano, ha hecho olvidar la existencia siempre precaria y azarosa del autor, al que ni siquiera sacó de la estrechez el fulgurante éxito del Quijote, compuesto en los últimos años de su vida.
        <img
          src="https://www.biografiasyvidas.com/biografia/c/fotos/cervantes_miguel.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey='2'>
        <Accordion.Header>Robert Louis Stevenson</Accordion.Header>
        <Accordion.Body>
        (Edimburgo, 1850 - Vailima Upolu, Samoa Occidental, 1894) Escritor escocés. En la tumba de Stevenson, en una lejana isla de los mares del Sur a la que se retiró por motivos de salud, figura grabado el apodo que le dieron los samoanos: Tusitala, que en español significaría «el contador de historias». En efecto, la literatura de Stevenson es uno de los más claros ejemplos de la novela-narración, el «romance» por excelencia.
        <img
          src="https://www.biografiasyvidas.com/biografia/s/fotos/stevenson.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
        </Accordion.Body>
      </Accordion.Item>

    <Accordion.Item eventKey='3'>
      <Accordion.Header>Homero</Accordion.Header>
      <Accordion.Body>
      (Siglo VIII a.C.) Poeta griego al que se atribuye la autoría de la Ilíada y la Odisea, los dos grandes poemas épicos de la antigua Grecia. En palabras de Hegel, Homero es «el elemento en el que vive el mundo griego como el hombre vive en el aire». Admirado, imitado y citado por todos los poetas, filósofos y artistas griegos que le siguieron, es el poeta por antonomasia de la literatura clásica, a pesar de lo cual la biografía de Homero aparece rodeada del más profundo misterio, hasta el punto de que su propia existencia histórica ha sido puesta en tela de juicio.
      <img
          src="https://www.biografiasyvidas.com/biografia/h/fotos/homero_2.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey='4'>
      <Accordion.Header>William Goldman</Accordion.Header>
      <Accordion.Body>
      Escritor, novelista, guionista y articulista estadounidense nacido en Highland Park, Illinois, el 12 de agosto de 1931. Ha publicado obras bajo dos pseudónimos, Harry Longbaugh y Simon Morguestern. Precisamente bajo este último alias fue como vio la luz la que es su novela más conocida, La princesa prometida, publicada en 1973 y llevada al cine por el director Rob Reiner en 1987.
      Es el autor de dos de los libros más importantes publicados acerca de la industria del entretenimiento cinematográfico, Adventures in the screen trade (1982) y Wich lie did i tell (2000). Ganador de un premio Oscar al mejor guión original por Dos hombres y un destino (Butch Cassidy and the Sundance Kid) en 1970 y de otro al mejor guión adaptado por Todos los hombres del presidente (All the President's Men) en 1977, Goldman fue uno de los guionistas cinematográficos más afamados del último cuarto del siglo XX. Otros trabajos suyos que fueron llevados al cine son Un puente lejano, The Stepford wives, Misery (adaptando al cine la novela homónima de Stephen King), Chaplin, Maverick o La hija del general.
      <img
          src="https://decine21.com/img/upload/perfiles/william-goldman-63690/william-goldman-63690-c.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey='5'>
      <Accordion.Header>Julio Verne</Accordion.Header>
      <Accordion.Body>
      (Jules Verne; Nantes, 1828 - Amiens, 1905) Escritor francés considerado el fundador de la moderna literatura de ciencia ficción. Predijo con gran precisión en sus relatos fantásticos la aparición de algunos inventos generados por los avances tecnológicos del siglo XX, como la televisión, los helicópteros, los submarinos o las naves espaciales.
      <img
          src="https://www.biografiasyvidas.com/biografia/v/fotos/verne_julio.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </Accordion.Body>
    </Accordion.Item>

  <Accordion.Item eventKey='6'>
    <Accordion.Header>Robert Fisher</Accordion.Header>
    <Accordion.Body>
    (Londres, 1660 - Moorfields, actual Reino Unido, 1731) Escritor inglés. Abandonó la carrera eclesiástica para dedicarse al comercio, primero en una empresa textil, hasta 1692, y luego en otra de ladrillos, actividades que propiciaron frecuentes viajes por Europa. En 1695 entró a formar parte del gobierno, y en 1701 obtuvo cierto éxito con El verdadero inglés, novela en la que atacaba los prejuicios nacionales en defensa de su admirado rey Guillermo III, de origen holandés.
    <img
          src="https://www.biografias10.com/src/-550.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey='7'>
   <Accordion.Header>Daniel Defoe</Accordion.Header>
   <Accordion.Body>
    Autor americano, Robert Fisher fue conocido tanto por su larga carrera en el mundo del cine, la televisión y el teatro como por sus obras dedicadas a la autoayuda.Cuando apenas tenía 19 años Fisher comenzó su carrera como guionista para grandes cómicos de la época como Groucho Marx o Bob Hope, trabajando posteriormente para la radio y la televisión, firmando más de mil programas. A lo largo de su carrera obtuvo premios como el Emmy o el Sylvania por su labor en televisión y recibió excelentes críticas por sus comedias teatrales. En lo literario, Fisher se convirtió en uno de los gurús de la autoayuda gracias a la publicación de El caballero de la armadura oxidada, un libro motivacional que logró un gran éxito de ventas en todo el mundo y al que siguieron títulos como El gato que encontró a Dios y El búho que no podía ulular.
    <img
          src="https://www.biografiasyvidas.com/biografia/d/fotos/defoe.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
    </Accordion.Body>
  </Accordion.Item>
  

  <Accordion.Item eventKey='8'>
    <Accordion.Header>George R. R. Martin</Accordion.Header>
    <Accordion.Body>
    Escritor y guionista americano, George R. R. Martin, de nombre real George Raymond Richard Martin, es conocido por sus novelas y relatos de terror, fantasía, histórica o ciencia ficción. Alcanzó su fama gracias a ser el autor de la conocida serie de fantasía medieval, Canción de Hielo y Fuego, adaptada a la televisión bajo el título Juego de Tronos.

    Martin creció en una familia obrera siendo el mayor de tres hermanos, desde pequeño se vio cautivado por el mundo de las palabras, leyendo y escribiendo relatos. Estudió Periodismo en la Universidad de Evanston, aunque no ejercería mucho tiempo esta profesión, prefiriendo la docencia en el Instituto Clarke de Dubuque y siendo juez de torneos de ajedrez, mientras preparaba sus primeros trabajos literarios.

    Martin se dio a conocer gracias a sus relatos, con los cuales ganó premios tan importantes como el Hugo o el Nébula, dando el salto a la primera plana de la ciencia ficción gracias a su primera novela, Muerte de la luz, obra que le permitió dedicarse en exclusiva a la escritura.

    Además de su labor literaria, Martin trabajó como guionista para la televisión en series como La zona crepuscular o La bella y la bestia a mediados de los años 80. A mediados de los 90 abandonaría esta actividad, superando su bache literario, para centrarse en la que es su obra más conocida, la serie de Canción de Hielo y Fuego.

    Juego de tronos apareció en 1996 y supuso el comienzo de un gran éxito que se vería refrendado con la adaptación de la serie a la televisión por parte de la HBO y que ha sido un fenómeno mediático en prácticamente todo el mundo.
    <img
          src="https://3.bp.blogspot.com/-V1Z7OiRx7b8/WZd2p5A2BVI/AAAAAAACBwU/YjmDCafu8EMyuLO14k-I_dHEZCeXTpOcgCEwYBhgL/s1600/GEORGE%2BRR%2BMARTIN%2B020.png"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey='9'>
    <Accordion.Header>C. S. Lewis</Accordion.Header>
    <Accordion.Body>
    C. S. Lewis nació el 29 de noviembre de 1898 en Belfast, Irlanda del Norte, Reino Unido.
    Hijo de Florence Augusta, hija de un sacerdote anglicano, y de Albert James Lewis, abogado.
    Desde niño fue aficionado a la lectura, sobre todo de historias de fantasía.
    En 1908, ingresó a la Escuela Wynyard, ubicada en Watford, aunque antes ya había cursado estudios privados en su casa. Después asistió al Campbell College, del que salió a causa de problemas respiratorios. Ingresó en un centro de salud en la ciudad de Malvern, donde cursó la preparatoria en la Cherbourg House. Por entonces se interesó en la mitología. Admitido en el Malvern College en 1913; en 1916, se le otorgó una beca para estudiar en el University College de Oxford. Un año después ingresa en el Ejército Británico.En 1918, fue herido durante la Primera Guerra Mundial. Después C. S. Lewis sufrió de depresión, y cuando su salud mejoró, fue destinado a Andover, Inglaterra. En diciembre de ese año fue dado de baja del ejército y pudo continuar con sus estudios.
    <img
          src="https://prodavinci.com/wp-content/uploads/2021/09/cs_lewis_pd_dest.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey='10'>
    <Accordion.Header>León Tolstói</Accordion.Header>
    <Accordion.Body>
    Escritor ruso, León Tolstói es considerado como uno de los más grandes autores de la literatura universal de todos los tiempos. Su obra es fundamental para entender el desarrollo de la novela contemporánea, siendo el mayor ejemplo del movimiento realista.
    Nacido dentro de una familia aristocrática, Tolstói cursó estudios de Derecho y Lenguas Orientales, pero los abandonó sin un objetivo definido en su vida, viviendo de manera diletante aprovechando el dinero de su familia. Durante la Guerra de Crimea Tolstói sirvió en el frente y comenzó a escribir sus primeras obras. Su vuelta al mundo civil le convenció de mostrar la sociedad tal y como era, conformando el modelo de su estilo realista.
    Tolstói alcanzó una gran popularidad no solo en Rusia sino también en el resto del mundo gracias a obras tan importantes como Guerra y paz, Ana Karenina, Los cosacos o La muerte de Iván Illyich. Su dominio de la psicología de los personajes le valió los elogios de autores como Flaubert, Chéjov, Joyce, Mann, Proust o Faulkner.
    <img
          src="https://www.liceus.com/wp-content/uploads/2018/06/tolstoi.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey='11'>
    <Accordion.Header>William Shakespeare</Accordion.Header>
    <Accordion.Body>
    (Stratford on Avon, Reino Unido, 1564 - id., 1616) Dramaturgo y poeta inglés. Solamente con sus versos hubiera ya pasado a la historia de la literatura; por su genio teatral, y especialmente por el impresionante retrato de la condición humana en sus grandes tragedias, Shakespeare es considerado el mejor dramaturgo de todos los tiempos.
    <img
          src="https://www.biografiasyvidas.com/biografia/s/fotos/shakespeare_william_2.jpg"
          alt="Imagen"
          style={{ display: 'block', margin: '0 auto' }}
        />
    </Accordion.Body>
  </Accordion.Item>
    


    </Accordion>
    </div>
  );
}

export default BasicExample;
