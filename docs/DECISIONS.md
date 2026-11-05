# Decisiones

## D-001 — Brío Rol como espacio de autor

Fecha: 2026-11-05. Estado: propuesta implementada para revisión.

La landing presenta proyectos de Javier Usobiaga. Sistema Brío es uno de sus proyectos y no la marca que debe contenerlos a todos. El catálogo admite módulos, sistemas y herramientas.

## D-002 — Continuidad con el logotipo original

Fecha: 2026-11-05. Estado: propuesta implementada para revisión.

Se amplía el logotipo de Brío con las letras ROL, reutilizando las formas originales. El dado de un punto sirve como símbolo reducido. La dirección gráfica usa composición editorial, superficies planas, papel, tinta y rojo óxido. Referencia: `BRAND.md`.

## D-003 — Contenido basado en disponibilidad real

Fecha: 2026-11-05. Estado: implementada en el prototipo.

Se presentan los tres proyectos existentes. Los módulos tienen una sección de futuras publicaciones sin títulos, fechas ni descargas ficticias. No se anuncian Dados ni otras herramientas como disponibles. Se conserva el contacto público del autor. Referencia: `CONTENT.md`.

## D-004 — Sala como nombre propuesto

Fecha: 2026-11-05. Estado: pendiente de decisión.

Se recomienda Sala frente a Juega por la centralidad de las salas compartidas. El nombre aparece en el prototipo para poder valorar la propuesta. No se cambian dominios, rutas de las aplicaciones ni PRs de migración existentes. Referencia: `NAMING.md`.

## D-005 — Prototipo estático y revisión independiente

Fecha: 2026-11-05. Estado: implementada.

La landing no requiere backend, framework ni compilación. HTML y CSS funcionan directamente; solo el selector claro/oscuro del estudio requiere JavaScript. Las fuentes y los SVG se alojan con el proyecto. La propuesta se desarrolla en una rama y PR independientes, sin activar un despliegue de producción ni tocar los otros repositorios.

## D-006 — Sistema Brío como manual de consulta

Fecha: 2026-11-05. Estado: propuesta implementada para revisión.

La identidad se aplica a una portada y un extracto navegable de reglas en `design/sistema/`. El sistema conserva su logotipo y su nombre. La composición distingue presentación y consulta: titulares grandes en la portada, columna contenida, índice, tablas y ejemplos en las reglas. Se adapta contenido existente sin cambiar mecánicas ni modificar el sitio de Sistema. Referencia: `SISTEMA.md`.

## D-007 — Portada como índice personal de proyectos

Fecha: 2026-11-05. Estado: propuesta revisada tras valoración de diseño.

La landing se reduce a una presentación breve, tres accesos descriptivos, el estado de los módulos y el contacto del autor. Se retiran el hero ilustrado, el titular publicitario, los números de proyecto, las etiquetas redundantes y los bloques de autopresentación repetida. Se conserva el logotipo, la paleta y la tipografía de lectura. La tipografía condensada se reserva para usos que la necesiten; no debe convertir todos los encabezados en reclamos.

La propuesta de Sistema sigue el mismo criterio: una portada orientada a reglas y consulta, sin una cubierta de manual ficticia. El índice y los ejemplos de reglas son contenido navegable, no decoración.

## D-008 — Logotipo: continuidad con jerarquía

Fecha: 2026-11-05. Estado: recomendación gráfica pendiente de valoración.

La revisión específica del logotipo recomienda conservar el dibujo original de Brío, con ROL dibujado a aproximadamente un tercio de su altura y alineado con su base. Se definen firma horizontal, compacta y versiones inversas. La B extraída sirve como inicial; para usos pequeños tiene un maestro de contraformas abiertas.

Un redibujo más regular se conserva como exploración descartada por perder singularidad. La recomendación, las pruebas de tamaño y los SVG se recogen en `IDENTITY-REVIEW.md` y `../design/identity/`. Esta entrega no sustituye los assets de la landing ni modifica las aplicaciones.

## D-009 — Publicación temporal en el dominio principal

Fecha: 2026-11-05. Estado: publicada y verificada.

Se publica una landing temporal desde `main`, con un workflow de GitHub Pages independiente del estudio gráfico. Se conserva la portada breve y se usa «Juego online» hasta cerrar el nombre de esa aplicación. Los destinos siguen siendo los publicados actualmente. El dominio `briorol.com`, sus recursos y la redirección desde `www` se verifican por HTTPS; queda activar la redirección obligatoria de HTTP en la configuración de Pages.

Se incorpora `main` a la rama de diseño para que la propuesta pendiente conserve la configuración de publicación y el índice temporal. El estudio del logotipo sigue disponible en el PR sin quedar adoptado por esta publicación.

## D-010 — Prueba de familia con dos relaciones de marca

Fecha: 2026-11-05. Estado: exploración gráfica para revisión.

Se compara Brío como nombre principal con los descriptores en minúsculas rol, sistema y salas, y dos herramientas con nombre propio: ruido y dados, firmadas con by Brío. Los descriptores comparten escala y anclaje derecho; los nombres independientes comparten construcción y altura de dibujo. La firma de origen se subordina al nombre de la herramienta.

La prueba usa el Brío original, descriptores en Plex Sans convertidos a contornos y nombres independientes dibujados como parte de la exploración. Se entregan positivos, negativos y variantes de nombre solo. No se renombra la aplicación publicada, no se anuncia Dados como disponible y no se sustituyen los logos de la web temporal. Referencia: `BRAND-ARCHITECTURE.md`.

## D-011 — Herramientas con logo independiente y procedencia separada

Fecha: 2026-11-05. Estado: dirección aceptada, preparación de archivos de entrega.

La familia mantiene Brío con los descriptores rol, sistema y salas. Ruido y Dados utilizan su nombre como logotipo independiente. Se elimina by Brío de la firma gráfica de ambas herramientas; la procedencia se resolverá mediante un enlace con el logo de Brío en otro punto de sus webs.

La entrega de esta fase afina proporciones, espaciado y variantes de uso, documenta tamaños orientativos y ofrece SVG principales y negativos. Los cambios de las páginas de los productos se harán en una aplicación posterior de la identidad.

## D-012 — Conservar online como descriptor y dominio

Fecha: 2026-11-05. Estado: aceptada.

Se sustituye la exploración salas por online en la familia gráfica. La aplicación utilizará `online.briorol.com`, conservando el término que ya aparece en su dirección original. Sistema mantiene el destino previsto `sistema.briorol.com`. La landing principal en `briorol.com` sigue en GitHub Pages; las dos aplicaciones permanecen en sus sitios de Netlify. La configuración y las redirecciones se preparan en el repositorio correspondiente.

## D-013 — Separar dominio, DNS, alojamiento y redirección

Fecha: 2026-11-05. Estado: documentación de la migración actualizada.

La nueva dirección no cambia el alojamiento de Sistema y Online: ambas aplicaciones siguen en sus proyectos actuales de Netlify. La gestión de DNS y la renovación de un dominio propio son servicios separados. Prescindir de Netlify requiere trasladar antes las aplicaciones y disponer de un servicio que mantenga las redirecciones antiguas con HTTPS. La redirección se pierde al caducar el dominio de origen. No se realiza ninguna baja de alojamiento en esta fase.

La revisión de material publicado queda documentada en `SECURITY-REVIEW.md`, con alcance, resultados y límites; no incluye valores de credenciales.

## D-014 — Sistema y Online también en GitHub Pages

Fecha: 2026-11-05. Estado: migración preparada; configuración de cuenta pendiente.

Se sustituye la migración de dominios sobre Netlify por la publicación de ambas aplicaciones en GitHub Pages, con dos repositorios de compilaciones y los dominios sistema.briorol.com y online.briorol.com. El código fuente permanece privado y Firebase continúa como backend. Los CNAME de ambos subdominios apuntarán a htmlboy.github.io. Las instrucciones anteriores con targets netlify.app quedan sustituidas.

La retirada completa de Netlify incluye trasladar la zona DNS antigua y sus redirecciones a un servicio independiente, manteniendo los enlaces antiguos mientras el dominio siga registrado. La integración no puede crear los nuevos repos ni administrar Pages; las compilaciones y comprobaciones se preparan mientras el titular configura esos recursos.

## D-015 — Publicación de Sistema y Online en Pages

Fecha: 2026-11-05. Estado: publicada y verificada.

Sistema y Online sirven sus dominios nuevos desde los repos de compilaciones de GitHub Pages. Las reglas, materiales, recursos y recuperación de rutas se han comprobado; la landing principal enlaza directamente a ambos. Online requirió una revisión nueva para superar un primer despliegue de Pages que agotó el tiempo de espera.

Las direcciones antiguas se redirigirán mediante sitios Fully Hosted y certificados de DreamHost, usando el paquete .htaccess preparado. El cambio de nameservers afecta solo a sistemabrio.com; briorol.com sigue en Cloudflare. La baja de los proyectos de Netlify y su zona antigua se realiza tras comprobar esas redirecciones.

## D-016 — Redirecciones sin contratar alojamiento

Fecha: 2026-11-05. Estado: configuración preparada.

Se descarta el hosting de DreamHost para los dominios antiguos. La alternativa gratuita usa la zona antigua en Cloudflare, DNS proxied para los tres hosts y dos Single Redirects 301 que conservan rutas y consultas. Las aplicaciones permanecen en GitHub Pages. El cambio de nameservers y la activación de las reglas deben realizarse en las cuentas del titular; no se han ejecutado desde la integración.

## D-017 — Aplicar la familia a Sistema y al directorio

Fecha: 2026-11-05. Estado: primera aplicación publicada, revisión visual en curso.

Se recuperan los SVG finales de la familia y se aplican al directorio Brío Rol, Sistema y la firma de Online. Sistema es la primera aplicación completa: composición editorial de reglas, tipografía local, papel, tinta y rojo, con ilustración vectorial propia en lugar de renders de géneros distintos. Se mantienen las mecánicas, los PDFs y la interfaz de las salas. Ruido queda como siguiente aplicación, una vez contrastada esta dirección. Referencia: `specs/03-family-web.md`.

## D-018 — Corregir el tratamiento de campaña de Sistema

Fecha: 2026-11-05. Estado: segunda revisión en publicación.

La primera aplicación seguía dependiendo de un slogan, una ilustración de ambiente y recursos de portada genéricos. Se sustituyen por una presentación breve y un ejemplo real de las reglas. La identidad común se mantiene en los logos, el color y la tipografía de lectura; no exige repetir una plantilla gráfica en cada producto. Se retiran numeraciones decorativas y flechas de navegación interna. Referencia: `specs/03-family-web.md`.
