# Aplicación de la familia a las webs

Estado: primera aplicación publicada; revisión visual abierta.

## Objetivo

Llevar la familia de logos aceptada a las páginas reales. Sistema sirve como primera aplicación completa del estilo; Brío Rol conserva su función de directorio y Online incorpora su firma sin rehacer todavía la sala de juego.

## Criterios comunes

- Los maestros Brío/rol, Brío/sistema y Brío/online conservan sus proporciones y descriptores.
- Ruido y Dados son nombres independientes. No llevan «by Brío» en su logo.
- Papel cálido, tinta oscura y rojo óxido; superficies planas y jerarquía por tipografía, espacio y líneas.
- Tipografía local, lectura cómoda, foco visible y enlaces claros.
- Copy concreto en español. Sin promesas de tiempo sin verificar, slogans de productividad ni tarjetas de prestaciones de una web SaaS.
- Ilustraciones propias con relación con el juego. Una biblioteca de géneros distintos no constituye una identidad común.

## Aplicación por producto

Brío Rol muestra las firmas en el directorio, manteniendo sus descripciones y destinos. Dados no se anuncia como herramienta disponible. Sistema presenta las reglas como una publicación: portada, lectura y materiales. La revisión de presentación no cambia las mecánicas ni rediseña los PDFs. Online conserva por ahora el diseño de las salas y sus temas; el nuevo SVG hereda el color del contexto. Ruido aplica su logo independiente, Plex local y una variante oscura cálida con acentos de la familia de rojo. Conserva las ilustraciones, la biblioteca y la mesa de mezcla; Brío aparece como procedencia separada en el pie.

## Revisión

Capturas de escritorio y móvil, ausencia de desbordamientos, funcionamiento del índice y descargas, contraste y navegación con teclado. Los cambios y su estado de publicación deben registrarse por separado: una captura local no prueba un despliegue ni un certificado público válido.

## Primera entrega

Capturas locales: [portada Sistema](../previews/sistema-desktop.png), [móvil](../previews/sistema-mobile.png), [reglas](../previews/rules-desktop.png) y [directorio](../previews/directory-desktop.png). La revisión se implementa en portada, reglas, materiales y navegación; los PDFs conservan su diseño anterior. Se comprobaron las tres páginas a 320, 390, 768 y 1440 px, navegación móvil, índice, fuentes locales y los dos PDFs. Los textos de listas y tabla de las reglas se conservan íntegros.

## Publicación

Los despliegues de Sistema, Online y Brío Rol terminaron correctamente el 2026-11-05. Brío Rol incorpora los logos mediante el PR #4. Sistema publica el rediseño completo; Online incorpora la firma y conserva sus temas e interfaz. La propuesta de diseño y estas capturas siguen abiertas a revisión. GitHub todavía indica certificado pendiente para Sistema y Online; esto se registra por separado y no se presenta como HTTPS validado.

## Segunda revisión crítica de Sistema

Se descarta el tratamiento de portada de la primera entrega: titular de campaña en mayúsculas, tipografía condensada e ilustración de un portal. El texto presenta el uso del sistema directamente y un ejemplo de las reglas sustituye la decoración: Destreza 3, dificultad 4, resultados 4/2/5 y dos éxitos. Se usa Plex en toda la web. Se eliminan numeraciones sin secuencia real, etiquetas repetidas y flechas de enlaces internos. La revisión no cambia mecánicas ni PDFs. Las capturas se actualizan con esta segunda aplicación.

Tras revisión del autor, la portada de Sistema se limita a presentación y accesos. El ejemplo y las explicaciones quedan dentro de las reglas. La firma es Javier U y el contacto público es el usuario de Discord `javier_u`.

El directorio Brío Rol prescinde de separadores por fila, encabezado y pie. Los tres proyectos se presentan en columnas en escritorio y como filas abiertas en móvil. Mantener una jerarquía clara y enlaces reconocibles sin recurrir a bordes o tarjetas.

Directorio sin bordes verificado a 320, 390, 760, 1024 y 1440 px: sin desbordamiento horizontal, logos cargados, destinos conservados y foco de teclado visible. Capturas: [escritorio](../previews/directory-desktop.png) y [móvil](../previews/directory-mobile.png).

## HTML público e hidratación

Sistema y Ruido generan su contenido público en HTML durante el build, usando los mismos componentes. React hidrata los controles en el navegador. La lectura de reglas, materiales y biblioteca no depende de ejecutar JavaScript. Online prepara una capa pública sin renderizar salas ni perfiles; su publicación sigue ligada al cambio de configuración de Firebase pendiente. Brío Rol ya es HTML estático.
