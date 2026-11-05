# Decisiones de publicación

## D-001 — Landing temporal

Fecha: 2026-11-05. Estado: preparada para publicación.

Se publica un índice breve de proyectos mientras se revisa la identidad de Brío Rol. Se usan los destinos actualmente publicados de Sistema Brío, la aplicación online y Ruido. La aplicación se presenta como «Juego online» hasta cerrar su nombre. No se anuncian módulos descargables que aún no están disponibles.

## D-002 — Despliegue independiente del estudio gráfico

Fecha: 2026-11-05. Estado: implementada.

La publicación se realiza desde `main` mediante GitHub Actions y GitHub Pages, con el dominio `briorol.com` ya configurado. El artefacto contiene únicamente `index.html`, recursos gráficos y tipográficos, el dominio y los avisos de derechos. Las propuestas de identidad y pantallas siguen en su PR independiente y no se incorporan al sitio temporal.

## D-003 — Direct links to GitHub Pages applications

Date: 2026-11-05. Status: prepared; merge after both new custom domains are live.

The project index links directly to sistema.briorol.com and online.briorol.com. This avoids relying on the old domain or Netlify redirects. The landing itself remains on its existing GitHub Pages publication.
