# Validación de la propuesta revisada

Fecha: 2026-11-05. Navegador: Chromium, automatizado con Playwright sobre servidor local.

## Verificado

- Landing, estudio de identidad, portada de Sistema y consulta de reglas a 320, 390, 768, 1024 y 1440 px: veinte vistas sin desbordamiento horizontal.
- Un encabezado h1 por página, imágenes disponibles y ausencia de errores JavaScript de página.
- Los tres enlaces del índice de proyectos están presentes.
- Las anclas del índice de reglas navegan a las secciones correspondientes.
- El selector claro/oscuro del estudio sigue funcionando tras separar los estilos compartidos de los de la landing.
- Capturas actuales de escritorio y móvil para las cuatro páginas, revisadas visualmente.
- La landing y la propuesta de Sistema son HTML y CSS sin dependencia de JavaScript.

## Contraste de los colores comunes

| Texto / fondo | Relación |
| --- | --- |
| Tinta / papel | 13,15:1 |
| Secundario / papel | 5,60:1 |
| Rojo de acción / papel | 5,18:1 |
| Texto claro / fondo oscuro | 13,17:1 |
| Secundario / fondo oscuro | 7,79:1 |
| Acento claro / fondo oscuro | 6,86:1 |

Estas parejas superan 4,5:1 para texto normal. Esto no constituye una auditoría completa de accesibilidad.

## Pendiente

- Valoración del diseño y los textos por el autor.
- Decisión sobre Sala frente a Juega.
- Datos reales de los módulos cuando se publiquen.
- Safari/iOS y dispositivos físicos.
- Publicación y comprobación de DNS, certificado y redirección de `www`, según `PUBLISHING.md`.

Las capturas son del prototipo local. Sistema sigue siendo una propuesta dentro de este repositorio; no modifica sus reglas, su repositorio ni su sitio publicado.

## Revisión específica del logotipo

El muestrario `design/identity/` se revisó en Chromium a 320, 390, 768 y 1440 px, sin desbordamiento horizontal y con imágenes disponibles. Las firmas se compararon en una tinta, en negativo y a 120/160 px; la inicial se revisó a 16/24/32 px. Los SVG se parsearon y se comprobó que las firmas no dependen de fuentes, imágenes ni recursos externos.

Las capturas actuales están en `design/identity/previews/`. La revisión es una exploración gráfica pendiente de valoración por el autor y de pruebas de impresión física.

## Landing temporal publicada

Despliegue de Pages completado correctamente en la ejecución `42082996340`. Página, CSS, SVG y fuente IBM Plex Sans verificados con HTTP 200 por HTTPS en `briorol.com`. Los tres destinos actuales de los proyectos responden con HTTP 200. `www.briorol.com` redirige a la raíz. Certificado aprobado para ambos nombres.

El acceso HTTP todavía permanece en HTTP y la dirección anterior de GitHub Pages redirige a HTTP, porque Enforce HTTPS está desactivado. La integración no tiene permiso para activar ese ajuste; la instrucción concreta está en `PUBLISHING.md`.

## Prueba de familia

El muestrario `design/family/` se comprobó en Chromium a 320, 390, 768 y 1440 px, sin desbordamiento horizontal y con las imágenes disponibles. Los SVG se parsean y contienen los contornos de las letras sin depender de una fuente instalada ni de recursos externos. Los tres Brío comparten tamaño de dibujo y los nombres independientes se comparan con la misma altura. Las capturas corresponden a una prueba de identidad, no a modificaciones de los productos publicados.

## Entrega de logos independientes y descriptor online

Se verifican doce SVG canónicos: cinco logos y Brío sin descriptor, con positivos y negativos. Los archivos de Ruido y Dados no incluyen by Brío; las exploraciones anteriores quedan archivadas. La versión vigente sustituye salas por online.

El muestrario se revisó en Chromium a 320, 390, 768 y 1440 px, con imágenes disponibles y sin desbordamiento. Las capturas de tamaños muestran las firmas Brío a 120 px de ancho y los nombres independientes a 96 px. El paquete `deliverables/brio-logos.zip` contiene los doce SVG, guía de uso y avisos de derechos; se comprobó que sus archivos coinciden con los canónicos.

## Publicación de las aplicaciones en GitHub Pages

Sistema se publicó correctamente en la ejecución 42104574982: siete archivos remotos, incluidas reglas y PDFs, coincidieron con la compilación preparada. Online se publicó en 42107023278 tras repetir una primera publicación bloqueada: 33 archivos remotos coincidieron y el enlace dinámico de sala devolvió el documento de recuperación esperado. La landing con los enlaces nuevos se publicó en 42107357355.

El paquete de DreamHost incluye una guía en español y el archivo .htaccess con excepción para renovación de certificados. La configuración del panel, los certificados y las redirecciones reales de los dominios antiguos quedan pendientes de aplicar en esa cuenta.
