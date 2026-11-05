# Publicar Brío Rol en briorol.com

Destino: GitHub Pages, repositorio público `htmlboy/briorol`. DNS en Cloudflare. Dirección principal: **https://briorol.com/**; `www.briorol.com` redirigirá a ella.

La propuesta está en un PR independiente. No se ha activado el alojamiento ni se ha modificado DNS. Esta configuración es distinta de la de Ruido: la landing va en la raíz del dominio; Ruido conserva su subdominio y su repositorio.

## 1. GitHub

Cuando se quiera publicar esta propuesta:

1. Integrar el PR de diseño en `main`. Así `index.html`, `assets/` y `.nojekyll` estarán en la rama que se publica.
2. Abrir [Settings → Pages](https://github.com/htmlboy/briorol/settings/pages).
3. En **Build and deployment → Source**, elegir **Deploy from a branch**.
4. Seleccionar la rama **main** y la carpeta **/ (root)**. Pulsar **Save**.
5. En **Custom domain**, escribir **briorol.com**, sin `https://` ni `/`, y guardar. GitHub añadirá o actualizará el archivo `CNAME` en la rama publicada.
6. Completar los registros de Cloudflare del siguiente apartado.
7. Volver a Pages y esperar a que termine la comprobación de DNS y se emita el certificado. Después activar **Enforce HTTPS** cuando esté disponible.

No hace falta configurar un comando de compilación ni GitHub Actions para este sitio estático. GitHub puede mostrar su ejecución interna de Pages en Actions; no hay que lanzar otro workflow manualmente.

Antes de configurar el dominio personalizado, la dirección de Pages será `https://htmlboy.github.io/briorol/`. La landing utiliza rutas relativas y también funciona en esa dirección. Una vez asignado el dominio, esa dirección debe redirigir a `briorol.com`.

Para revisar la propuesta publicada antes de integrarla, se puede seleccionar temporalmente la rama **design/brio-rol-direction**, **/ (root)**, dejando vacío Custom domain. Después de integrar el PR, cambiar a **main** y continuar con el dominio propio.

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
- `https://briorol.com/design/`: estudio de identidad; puede mantenerse durante la revisión o retirarse después.
- `https://www.briorol.com/`: redirección a `https://briorol.com/`.
- `https://ruido.briorol.com/`: sigue abriendo Ruido.
- Enlaces de Sistema y Sala: de momento apuntan a `sistemabrio.com` y `online.sistemabrio.com`, respectivamente.

La emisión del certificado y la propagación DNS pueden tardar después de guardar. Si GitHub no deja activar HTTPS al momento, esperar a que finalice la comprobación; cambiar repetidamente los registros no la acelera.

## Referencias oficiales

- [Configurar un dominio personalizado de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
- [Gestionar registros DNS en Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/).
