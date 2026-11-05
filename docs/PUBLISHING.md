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

## Sistema y Online: GitHub Pages

Estado actual: ambos sitios están publicados en GitHub Pages y la landing principal enlaza a los dominios nuevos. La retirada de las redirecciones antiguas de Netlify depende de configurar DreamHost. Las instrucciones anteriores para apuntar los subdominios a Netlify quedan sustituidas.

| Sitio | Repositorio de publicación | Dominio de Pages | CNAME en Cloudflare | Target |
| --- | --- | --- | --- | --- |
| Sistema | `htmlboy/brio-sistema` | `sistema.briorol.com` | `sistema` | `htmlboy.github.io` |
| Online | `htmlboy/brio-online` | `online.briorol.com` | `online` | `htmlboy.github.io` |

Los dos repositorios de publicación contienen solo compilaciones, sin mapas de código fuente. El código fuente de las aplicaciones permanece privado. Firebase sigue proporcionando autenticación, salas, presencia y tiradas.

1. Crear los dos repos públicos y dar acceso a la integración de GitHub si es necesario. La integración no puede crearlos por sí misma: GitHub devuelve 403.
2. Subir las compilaciones preparadas y configurar cada repo en **Settings → Pages → Source: GitHub Actions**.
3. Asignar los dominios de la tabla en **Custom domain** de los repos correspondientes.
4. Crear o sustituir los CNAME `sistema` y `online` en Cloudflare con el target `htmlboy.github.io`, **DNS only**. Los registros actuales de la raíz, www y Ruido se mantienen.
5. Esperar los certificados de Pages, activar **Enforce HTTPS** y comprobar reglas, PDFs, enlaces directos a salas y funcionamiento de dos clientes.

Las páginas conocidas tienen entradas propias; las rutas dinámicas de salas se recuperan mediante el documento 404 y una restauración de la ruta antes de arrancar React. No dependen de redirecciones de Netlify.

## Direcciones antiguas en DreamHost

Para retirar Netlify conservando las direcciones antiguas, DreamHost servirá únicamente las redirecciones. Las aplicaciones nuevas permanecen en GitHub Pages.

1. Añadir `sistemabrio.com` y `online.sistemabrio.com` como sitios **Fully Hosted**, con carpetas vacías dedicadas. Incluir `www.sistemabrio.com` en el primero. Se necesita un plan de alojamiento para atender HTTPS.
2. Descargar [el ZIP de redirecciones](../deliverables/dreamhost-redirects.zip) y subir su archivo `.htaccess` a la carpeta web de cada sitio antiguo. Mostrar archivos ocultos si hace falta. La validación de certificados queda exceptuada de las redirecciones.
3. En el registrador de `sistemabrio.com`, sustituir los nameservers de Netlify por `ns1.dreamhost.com`, `ns2.dreamhost.com` y `ns3.dreamhost.com`. `briorol.com` permanece en Cloudflare.
4. Cuando el dominio antiguo resuelva a DreamHost, activar **Let's Encrypt** para ambos sitios, incluido www, y comprobar las redirecciones por HTTP y HTTPS, con sus rutas y consultas.
5. Tras esas comprobaciones, eliminar los dos proyectos de Netlify y su zona DNS antigua. Mantener registrado el dominio mientras se necesiten las redirecciones.

No usar la modalidad básica **Redirect** para esta receta: la redirección de las visitas HTTPS requiere alojamiento y certificado en el dominio de origen. No se necesita WordPress ni base de datos en DreamHost.

Los destinos son `sistemabrio.com` y `www.sistemabrio.com` → `https://sistema.briorol.com`, y `online.sistemabrio.com` → `https://online.briorol.com`. Las direcciones proporcionadas `.netlify.app` pertenecen a Netlify y no se conservan al borrar los proyectos.

La renovación del dominio y el alojamiento son independientes. Si caduca `sistemabrio.com`, se pierden también sus redirecciones.

Referencia: [HTTPS y el servicio Redirect de DreamHost](https://help.dreamhost.com/hc/en-us/articles/115003505112-Force-your-site-to-redirect-to-HTTPS-SSL).
