# Validación de la propuesta

Fecha: 2026-11-05. Navegador: Chromium, automatizado con Playwright sobre el servidor local.

## Verificado

- Landing y estudio de identidad a 320, 390, 768, 1024 y 1440 px: diez vistas sin desbordamiento horizontal.
- Imágenes y fuentes locales disponibles; sin recursos con respuesta de error ni errores JavaScript en consola.
- Un encabezado h1 por página, tres accesos a los proyectos y navegación por anclas operativa.
- Enlace de salto accesible por teclado, con foco visible, y navegación a Módulos y Sobre Brío.
- La landing mantiene sus tres enlaces de proyecto con JavaScript desactivado.
- Selector claro/oscuro del estudio: cambia el tema y actualiza `aria-pressed`.
- Capturas reales de escritorio y móvil revisadas. Se corrigió una interferencia entre la ilustración de Ruido y su rótulo.

## Contraste calculado

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

- Valoración de la dirección de marca, el logotipo y la voz por el autor.
- Decisión final sobre Sala frente a Juega.
- Incorporación de datos reales de los módulos cuando se publiquen.
- Comprobación en Safari/iOS y en dispositivos físicos.
- Publicación y comprobación de DNS, certificado y redirección de `www`, según `PUBLISHING.md`.

Las capturas son del prototipo local. No acreditan un despliegue en producción ni cambios en Sistema, Sala o Ruido.
