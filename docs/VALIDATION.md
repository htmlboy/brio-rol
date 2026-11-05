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

Las capturas actuales están en `design/identity/previews/`. La revisión es una exploración gráfica: no acredita reconocimiento de marca por terceros, registro de marca ni resultados de impresión física.
