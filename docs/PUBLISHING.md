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

Si existen registros A, AAAA o CNAME anteriores para `@` o `www` que dirigen a otro alojamiento, sustituir los que entren en conflicto con esta configuración. Los registros de correo y los de `ruido`, `sistema`, `juega` u otros nombres no forman parte de este cambio.

Con **DNS only**, el HTTPS lo sirve GitHub Pages. No hace falta cambiar el modo SSL de Cloudflare ni crear una regla de redirección de `www`: GitHub la gestiona al configurar el dominio principal y ambos nombres.

## 3. Comprobar

- `https://briorol.com/`: landing de Brío Rol, con sus imágenes y fuentes.
- El estudio de identidad sigue en el PR de diseño; no se sirve desde la landing temporal.
- `https://www.briorol.com/`: redirección a `https://briorol.com/`.
- `https://ruido.briorol.com/`: sigue abriendo Ruido.
- Enlaces de Sistema y Sala: de momento apuntan a `sistemabrio.com` y `online.sistemabrio.com`, respectivamente.

La emisión del certificado y la propagación DNS pueden tardar después de guardar. Si GitHub no deja activar HTTPS al momento, esperar a que finalice la comprobación; cambiar repetidamente los registros no la acelera.

## Referencias oficiales

- [Configurar un dominio personalizado de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
- [Gestionar registros DNS en Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/).
