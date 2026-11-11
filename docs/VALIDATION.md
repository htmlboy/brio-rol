# Validación del directorio ilustrado

Revisión en Chromium a 1440, 768, 390 y 320 px:

- Sin desbordamiento horizontal; imágenes y fuentes locales cargadas.
- Los tres destinos originales se conservan.
- Flechas SVG de Feather, sin caracteres Unicode como iconos.
- Los logos identifican los proyectos sin duplicar sus nombres visibles.
- En móvil el catálogo precede al grabado.
- El enlace de salto al contenido es accesible con teclado.
- Añadir una cuarta fila conserva la estructura y no causa desbordamiento.

La publicación se realiza desde los archivos HTML/CSS fuente del repositorio; no existe un paso de compilación. Después del despliegue se comprueban por HTTPS el HTML, los estilos y el grabado frente a los archivos locales.
