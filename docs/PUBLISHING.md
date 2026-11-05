# Publicar Brío Rol en briorol.com

Destino: GitHub Pages, repositorio público `htmlboy/briorol`. DNS en Cloudflare. Dirección principal: **https://briorol.com/**; `www.briorol.com` redirigirá a ella.

## Estado actual

La landing temporal está publicada en **https://briorol.com/** desde `main`. La fuente de Pages es **GitHub Actions**, con el workflow `.github/workflows/pages.yml`. El certificado de `briorol.com` y `www.briorol.com` está aprobado. Se verificaron la página, los estilos, el logo y las fuentes con HTTP 200 por HTTPS.

`https://www.briorol.com/` redirige a la raíz. La opción **Enforce HTTPS** sigue pendiente: la integración no tiene permiso para cambiarla; se puede activar en [Settings → Pages](https://github.com/htmlboy/briorol/settings/pages). Esto hará que también el acceso por HTTP y la redirección desde la dirección de GitHub Pages terminen en HTTPS.

El estudio de identidad sigue en un PR independiente y no se ha incluido en la publicación temporal. La aplicación se presenta como «Juego online» hasta cerrar su nombre. Los destinos actuales de Sistema Brío, la aplicación y Ruido se comprobaron con HTTP 200.

## 1. GitHub

La configuración ya preparada es:

- **Source:** GitHub Actions.
- **Custom domain:** `briorol.com`.
- **Publicación:** automática al actualizar `main`, sin instalación ni compilación de la web.
- **Artefacto:** `index.html`, recursos, `CNAME`, `.nojekyll` y avisos de derechos. No incluye los estudios ni la documentación.
- **HTTPS:** certificado aprobado; queda marcar **Enforce HTTPS** en Pages.

No cambiar Source a «Deploy from a branch»: el workflow existente ya publica el sitio. La dirección `https://htmlboy.github.io/briorol/` redirige al dominio personalizado.

## 2. Cloudflare

Abrir la zona **briorol.com → DNS → Records** y añadir estos registros:

| Tipo | Name | Contenido / Target | Proxy | TTL |
| --- | --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | DNS only, nube gris | Auto |
| A | `@` | `185.199.109.153` | DNS only, nube gris | Auto |
| A | `@` | `185.199.110.153` | DNS only, nube gris | Auto |
| A | `@` | `185.199.111.153` | DNS only, nube gris | Auto |
| CNAME | `www` | `htmlboy.github.io` | DNS only, nube gris | Auto |

`@` representa la raíz `briorol.com`. El CNAME de `www` crea ese subdominio: no hay que darlo de alta en otra pantalla. El destino del CNAME no lleva `https://`, ruta ni nombre de repositorio.

Si existen registros A, AAAA o CNAME anteriores para `@` o `www` que dirigen a otro alojamiento, sustituir los que entren en conflicto con esta configuración. Los registros de correo y los de `ruido`, `sistema`, `online` u otros nombres no forman parte de este cambio.

Con **DNS only**, el HTTPS lo sirve GitHub Pages. No hace falta cambiar el modo SSL de Cloudflare ni crear una regla de redirección de `www`: GitHub la gestiona al configurar el dominio principal y ambos nombres.

## 3. Comprobar

- `https://briorol.com/`: landing de Brío Rol, con sus imágenes y fuentes.
- El estudio de identidad sigue en el PR de diseño; no se sirve desde la landing temporal.
- `https://www.briorol.com/`: redirección a `https://briorol.com/`.
- `https://ruido.briorol.com/`: sigue abriendo Ruido.
- Enlaces de Sistema y Online: de momento apuntan a `sistemabrio.com` y `online.sistemabrio.com`, respectivamente.

La emisión del certificado y la propagación DNS pueden tardar después de guardar. Si GitHub no deja activar HTTPS al momento, esperar a que finalice la comprobación; cambiar repetidamente los registros no la acelera.

## Referencias oficiales

- [Configurar un dominio personalizado de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
- [Gestionar registros DNS en Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/).

## Sistema y aplicación online: Netlify

La landing `briorol.com` permanece en GitHub Pages. Sistema y la aplicación de juego mantienen sus dos proyectos existentes de Netlify.

Los dominios por defecto se han comprobado por HTTPS: cada uno sirve el mismo título y archivo JavaScript de producción que su dominio actual.

| Proyecto | Dominio nuevo en Netlify | CNAME en Cloudflare | Target | Proxy |
| --- | --- | --- | --- | --- |
| Sistema | `sistema.briorol.com` | `sistema` | `sistemabrio.netlify.app` | DNS only |
| Online | `online.briorol.com` | `online` | `online-sistemabrio.netlify.app` | DNS only |

En el panel de cada proyecto de Netlify, abrir la gestión de dominios y añadir su dominio nuevo. Crear después el CNAME correspondiente en Cloudflare, esperar al certificado y comprobar que la aplicación y sus rutas funcionan. A continuación se puede fijar el nuevo dominio como principal y activar las redirecciones preparadas de las direcciones antiguas.

Los destinos de las redirecciones son `sistemabrio.com` → `sistema.briorol.com` y `online.sistemabrio.com` → `online.briorol.com`, conservando las rutas. Esto no cambia los registros de la raíz `briorol.com`, de `www` ni de Ruido.

El descriptor gráfico de la aplicación es online. Las propuestas anteriores juega, sala y salas quedan sustituidas para esta migración.

## Pasos en Netlify y Cloudflare

1. Abrir el proyecto **sistemabrio** en Netlify, entrar en **Domain management / Production domains** y añadir `sistema.briorol.com`.
2. Abrir **online-sistemabrio** y añadir `online.briorol.com` del mismo modo.
3. En Cloudflare, zona `briorol.com`, crear los dos CNAME de la tabla anterior con **DNS only**. Un CNAME se escribe sin protocolo ni ruta.
4. Esperar a que ambos dominios nuevos sirvan la aplicación correspondiente por HTTPS con certificado válido. Comprobar también `/reglas`, descargas y acceso directo a una sala.
5. Establecer los dominios nuevos como principales en Netlify, conservando los anteriores como alias. Comprobar las redirecciones automáticas y activar las reglas de redirección del repositorio cuando los destinos estén operativos.

Los dos proyectos de Netlify siguen alojando las aplicaciones. Cambiar el dominio no crea un alojamiento nuevo. La landing principal y Ruido continúan en GitHub Pages.

## Registro, DNS y redirección son servicios diferentes

Un dominio propio puede renovarse en un registrador y usar DNS o alojamiento de otros proveedores. La dirección proporcionada `nombre.netlify.app` no es un dominio propio que deba renovarse; depende de que el proyecto siga existiendo.

Las DNS de DreamHost solo serían efectivas si el dominio utiliza sus servidores DNS. Cambiar un CNAME no devuelve una redirección HTTP: para conservar las direcciones antiguas hace falta un servicio que responda en ellas, con certificado para HTTPS.

Para dejar Netlify completamente, primero habrá que trasladar el alojamiento de Sistema y Online. Después las direcciones antiguas podrán redirigirse desde otro servicio. Mantener el dominio registrado es necesario mientras se quiera conservar la redirección; al caducar no se conserva esa función.

DreamHost ofrece un servicio de redirección, pero su modalidad básica retira el alojamiento del dominio y no resuelve por sí sola las entradas HTTPS del dominio de origen. La alternativa requiere alojar el dominio con certificado y configurar la redirección allí, o utilizar otro servicio de redirección con HTTPS. No se ha solicitado ni ejecutado una baja de Netlify en esta fase.

Referencias: [redirección en DreamHost](https://help.dreamhost.com/hc/en-us/articles/215455377-Redirect-a-domain) y [limitación de HTTPS del servicio Redirect](https://help.dreamhost.com/hc/en-us/articles/115003505112-Force-your-site-to-redirect-to-HTTPS-SSL).
