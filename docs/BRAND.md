# Brío Rol — Dirección visual 01

Estado: propuesta para revisión. La landing y el estudio visual son prototipos implementados; no rediseñan las aplicaciones existentes.

## Punto de partida

La identidad actual de Sistema Brío tiene un logotipo condensado, de trazos gruesos, con un dado de un punto integrado sobre la «i». Esa relación entre letra y objeto es más específica que la presentación de su landing: titulares centrados, degradado violeta, ilustraciones de fantasía y ciencia ficción y botones de llamada a la acción.

Se revisaron el SVG original y los componentes, estilos y contenidos de `htmlboy/brio/apps/landing`, junto a la página pública de [Sistema Brío](https://sistemabrio.com/). Las capturas de `docs/previews/` corresponden al nuevo prototipo.

## Dirección propuesta

Una web editorial de autor, cercana a una publicación de material de juego. El contenido y los proyectos concretos son el centro. La presentación debe admitir tanto aventuras impresas como herramientas de pantalla, sin imponer una ambientación de fantasía, terror o ciencia ficción a toda la marca.

- Fondo papel, texto tinta y rojo óxido para acciones y énfasis.
- Tipografía de titular condensada que dialogue con el logo. Texto y controles de lectura cómoda.
- Alineación a la izquierda, filetes, espacios consistentes y bloques planos.
- Ilustraciones originales de mapas, fichas, dados y mesa compartida. Trazos simples, reconocibles a tamaños pequeños.
- Proyectos en filas con descripción y acceso explícito. Cada proyecto tiene espacio según su contenido, sin convertir la web en un panel de aplicaciones.

## Logotipo

`assets/briorol.svg` conserva el dibujo de BRÍO y construye ROL a partir de sus formas: R y O reutilizan los trazos del original; L sigue su proporción y peso. Es un primer ajuste vectorial revisable, no una tipografía nueva.

`assets/mark.svg` extrae el dado de un punto como símbolo reducido. El nombre completo acompaña al símbolo cuando el contexto no permite reconocer la marca. Evitar añadir un segundo dado genérico al lado del logotipo.

Usos iniciales:

- Principal: horizontal, una tinta, sobre fondo papel.
- Mínimo recomendado: 120 px de ancho para el nombre completo. Por debajo, símbolo y nombre accesible.
- Reserva: al menos la altura de la cabeza de la «i» alrededor del logotipo.
- El SVG conserva las formas como vectores, sin depender de una fuente instalada.
- No introducir degradados, biseles, contornos decorativos ni una mascota como parte del logotipo.

## Tipografía y color

| Uso | Elección |
| --- | --- |
| Titulares y nombres | Barlow Condensed Bold |
| Lectura, navegación y controles | IBM Plex Sans Regular / Medium |
| Papel | `#F3EFE4` |
| Tinta | `#252720` |
| Texto secundario | `#5C6056` |
| Acción / énfasis | `#B43824` |
| Salvia de ilustración | `#E1E5D9` |
| Ocre de ilustración | `#E9D9AE` |

Las fuentes se alojan con el sitio y conservan SIL OFL. La landing no solicita fuentes a terceros. El cuerpo usa 16 px en escritorio y 14–15 px en móvil según el bloque; etiquetas y créditos tienen una escala menor. No trasladar estas etiquetas pequeñas a controles importantes de una aplicación.

La interfaz oscura del estudio usa fondo `#242722`, texto `#F3EFE4`, texto secundario `#B7BCAE` y acento `#F1987C`. No invertir los colores de la landing de forma automática. El contraste se verifica para cada pareja de texto y fondo.

## Familia de productos

Brío Rol es el espacio de autor y el punto de entrada. Los proyectos conservan nombres que explican o evocan su función:

- **Sistema Brío:** reglas, consultas y materiales imprimibles.
- **Sala:** propuesta para la aplicación de juego compartido.
- **Ruido:** mezclador de ambientes y música.
- **Dados:** posibilidad futura de herramienta independiente; no se anuncia como producto disponible.

La firma común propuesta es «Un proyecto de Brío Rol». El símbolo, las familias tipográficas y la composición se comparten. La densidad, las ilustraciones y el color de trabajo dependen de cada producto.

Sistema puede tener una lectura más editorial; Sala necesita formularios y estados claros; Ruido debe conservar el control inmediato y la identificación visual de escenas. No se trasladan el tamaño de los titulares ni el espacio de la landing a una sesión de juego.

## Qué se evita

La propuesta prescinde de reclamos sobre revolucionar el rol, estadísticas de uso sin fuente, testimonios inventados, etiquetas de novedad sin fecha, portadas ficticias, listas de ventajas repetidas y animaciones decorativas. Tampoco añade newsletter, cuentas, comunidad ni tienda que no existan.

## Archivos de revisión

- `index.html`: contenidos y composición de la landing.
- `design/index.html`: logotipo, familias, paleta y estudio claro/oscuro de controles.
- `docs/previews/`: capturas reales del prototipo en navegador.
- `CONTENT.md`: textos, estructura editorial y datos que faltan para publicar módulos.
