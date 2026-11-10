# Revisión de credenciales publicadas

Fecha: 2026-11-05.

## Alcance

- Repositorios públicos `htmlboy/brio-rol` y `htmlboy/brio-ruido`: archivos actuales y todo el historial accesible de ramas y referencias de PR, incluidos PR cerrados.
- Archivos comprimidos encontrados en el historial, incluido el ZIP de logotipos.
- Catorce archivos públicos descargados de Brío Rol, Ruido, Sistema y Online: HTML, CSS, JavaScript y mapas de fuentes propios cuando estaban disponibles.
- Inventario de nombres de archivo sensibles en los repositorios y de los recursos públicos de las aplicaciones.

Se revisaron los estados de fuente `b020b62472b139ea9ec964b9159a315ed7106874` de Brío Rol y `00bd8d9cef208bb2b277b205d3fdae345b5e6b09` de Ruido, además de sus referencias accesibles. Esta nota documenta ese momento de la revisión.

## Método

Gitleaks 8.30.1, obtenido de su distribución oficial y comprobado contra su SHA-256. Reglas incorporadas, sin exclusiones del proyecto ni supresiones por comentarios. Escaneo de historial Git, archivos actuales y archivos comprimidos, con decodificación y redacción de resultados. Las coincidencias se revisaron sin reproducir sus valores en este informe.

## Resultado

| Área | Resultado |
| --- | --- |
| Brío Rol: historial, archivos y ZIP | Ninguna credencial detectada |
| Ruido: historial y archivos | Ninguna credencial detectada |
| Archivos publicados de las cuatro webs | Una coincidencia de clave de API en la configuración cliente de Firebase de Online |
| Nombres de archivo sensibles | Ningún archivo de entorno, clave privada o cuenta de servicio encontrado en el alcance revisado |

La coincidencia de Online está en el objeto de configuración del cliente Firebase, junto a sus campos habituales. No es una clave privada de cuenta de servicio ni un token administrativo. Firebase documenta que las claves de identificación del cliente son públicas por diseño; el control de acceso depende de otros mecanismos. Referencia: [claves de API de Firebase](https://firebase.google.com/docs/projects/api-keys).

No se encontraron tokens de GitHub/Netlify, claves privadas ni credenciales de administración en el material revisado. No fue necesario eliminar o reescribir archivos por una credencial detectada.

## Límites de la revisión

La integración no permite consultar las alertas privadas de secret scanning de GitHub, por lo que se utilizó el análisis local. No se han auditado las restricciones de la clave en Google Cloud ni las reglas de autorización de Firebase en producción. Este informe se refiere a los contenidos y versiones analizados; no certifica futuras publicaciones.

## Actualización: configuración cliente fuera de futuros commits

Fecha: 2026-11-06. Estado: cambio preparado; pendiente de rotación y configuración de cuenta por el titular.

La alerta de GitHub en Online corresponde a la clave cliente de Firebase que ya incluía la antigua web. Se prepara un flujo en el que el JavaScript lee un archivo generado únicamente en el artefacto de Pages. El repo conserva un placeholder sin clave; un secreto de Actions de `brio-online` proporciona la configuración durante el despliegue. El PR público de preparación es https://github.com/htmlboy/brio-online/pull/1.

El árbol candidato para publicación tiene cero hallazgos en Gitleaks y un guard que rechaza claves de Google con formato reconocible antes de guardar compilaciones. Las pruebas incluyen el fallo por configuración ausente o administrativa. Esto no describe el historial antiguo ni certifica las restricciones de la clave o las reglas de producción. La nueva configuración seguirá visible en el navegador.

La web actual conserva su despliegue operativo. Falta crear una clave nueva restringida para el mismo proyecto, guardar el JSON en `FIREBASE_CLIENT_CONFIG` de `brio-online`, publicar y verificar autenticación, salas y tiradas. Después corresponde revocar la antigua y resolver su alerta como revocada. No se ha revocado ninguna clave, reescrito historia, desactivado el escáner ni cerrado ninguna alerta.
