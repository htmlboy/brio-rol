# Aplicación de la identidad a Sistema Brío

Estado: propuesta visual, dentro del PR de identidad de Brío Rol. El sitio y el repositorio de Sistema Brío no se modifican.

## Portada

Se conserva el logotipo original de Brío, acompañado por «Sistema de rol». Se aplican papel, tinta, rojo óxido, Barlow Condensed en titulares e IBM Plex Sans en lectura y controles. La portada prioriza el acceso a las reglas y un índice real de consulta rápida.

El acceso principal es «Leer las reglas». La aplicación online y los materiales conservan los destinos actuales. Los tres pasos —definir personaje, tirar cuando haga falta y contar éxitos— explican el sistema con contenido real.

## Consulta de reglas

El prototipo de reglas usa una columna de lectura de hasta 760 px, índice lateral en escritorio y un índice compacto por anclas en móvil. Las tablas tienen encabezados semánticos y los ejemplos separan la situación, los dados y el resultado. Los éxitos llevan texto además de un borde de color.

Se adapta contenido de las reglas rápidas actuales de Sistema Brío: características, reparto inicial, dificultad, éxitos, dados que explotan y uso básico de Brío y estrés. No se cambian mecánicas ni se presenta el extracto como un manual completo; se enlaza al resto de las reglas actuales.

## Alcance de la muestra

- `design/sistema/index.html`: portada.
- `design/sistema/reglas.html`: extracto de consulta con navegación funcional.
- Los destinos externos siguen siendo `sistemabrio.com` y `online.sistemabrio.com`.
- No se utiliza una cubierta ficticia de manual ni se anuncia un PDF inexistente.
- La firma «Un proyecto de Brío Rol» diferencia el sistema de la marca del autor.

## Verificación

Las páginas se comprueban en Chromium a 320, 390, 768, 1024 y 1440 px, con capturas de escritorio y móvil. Se revisan desbordamiento, imágenes y navegación por el índice. Pendiente la valoración del autor y la comprobación en Safari/iOS antes de trasladar el diseño al proyecto real.
