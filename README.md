# Brío Rol

El espacio de proyectos de rol de Javier Usobiaga: módulos, sistemas y herramientas de juego.

Landing temporal publicada en **https://briorol.com/**.

Esta propuesta incluye una landing y un estudio de identidad para una familia de proyectos: Sistema Brío, Sala —nombre propuesto de la aplicación de juego compartido— y Ruido.

## Prueba de familia de marca

La exploración actual compara Brío / rol, Brío / sistema y Brío / salas con ruido / by Brío y dados / by Brío. Es una prueba gráfica; la web temporal y los productos conservan sus nombres y logotipos publicados.

- [Lámina de los cinco casos](design/family/previews/family-desktop.png).
- [Muestrario navegable](design/family/index.html), accesible en `/design/family/` al servir esta rama.
- [Arquitectura, proporciones y procedencia](docs/BRAND-ARCHITECTURE.md).
- [Revisión anterior del logotipo](docs/IDENTITY-REVIEW.md).

## Ver la propuesta

Sitio estático, sin instalación ni compilación:

```sh
python -m http.server 4174
```

- Landing: `http://localhost:4174/`
- Estudio de identidad y muestra clara/oscura: `http://localhost:4174/design/`
- [Captura de escritorio](docs/previews/landing-desktop.png) y [móvil](docs/previews/landing-mobile.png).
- [Estudio visual](docs/previews/brand-desktop.png) y [muestra oscura de Ruido](docs/previews/ruido-dark-study.png).

## Definición

- [Aplicación a Sistema Brío](docs/SISTEMA.md): portada y consulta de reglas en `/design/sistema/`.
- [Dirección visual y logotipo](docs/BRAND.md).
- [Contenidos y voz](docs/CONTENT.md).
- [Sala frente a Juega y arquitectura de nombres](docs/NAMING.md).
- [Definición de producto](docs/specs/01-producto.md).
- [Publicación con Cloudflare y GitHub Pages](docs/PUBLISHING.md).
- [Decisiones](docs/DECISIONS.md) y [validación](docs/VALIDATION.md).

La landing funciona sin JavaScript. El estudio de marca usa JavaScript solo para alternar la muestra clara/oscura. Fuentes e ilustraciones se sirven localmente. No hay analítica, formularios, backend ni dependencias de ejecución.

La propuesta no cambia los dominios ni las aplicaciones actuales. Los enlaces a Sistema y Sala conservan los destinos publicados mientras se decide la migración. `main` publica la landing temporal automáticamente mediante GitHub Actions y Pages; el estudio de diseño continúa en una rama independiente.

## Derechos

El código, los textos y el arte original tienen todos los derechos reservados. Las tipografías conservan SIL OFL. Véanse [LICENSE](LICENSE) y [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
