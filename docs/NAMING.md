# Arquitectura y nombre de la aplicación

Estado: decisión actual: conservar **online** para la aplicación, con dominio `online.briorol.com`. La familia gráfica usa Brío / online. Las exploraciones anteriores con Sala o Salas se conservan como antecedentes, no como nombres vigentes. Ruido y Dados tienen logos independientes, con Brío como procedencia separada en sus webs.

## Propuesta anterior: Sala

«Sala» describe el núcleo actual de la aplicación: reunir al grupo, compartir personajes y tiradas dentro de un espacio de juego. El producto se llama Sala; cada partida ocurre en una sala. Es una relación comprensible, comparable a una aplicación llamada Calendario que contiene calendarios, aunque conviene evitar construcciones redundantes.

«Juega» funciona como una invitación, pero explica menos qué se abre. Además, si la plataforma deja de agrupar todas las herramientas, su amplitud puede sugerir que es la puerta obligatoria para usar el resto.

| Contexto | Texto propuesto |
| --- | --- |
| En el catálogo de Brío Rol | Sala — Juego compartido |
| Enlace desde la landing | Abrir Sala |
| Pantalla de entrada | Crear sala / Entrar en una sala |
| Compartir una partida | Copiar invitación |
| Procedencia de la herramienta | Un proyecto de Brío Rol |

Evitar «entra en Sala para crear tu sala de Sala» y el nombre «Sala Brío Rol» en cada control. La marca y el nombre de una sala concreta no necesitan aparecer juntos de forma repetida.

## Dominios y herramientas futuras

La dirección propuesta sería `sala.briorol.com`, sustituyendo el destino previsto `juega.briorol.com` si se acepta el cambio. **Esta propuesta no modifica DNS, redirecciones ni los PRs de migración existentes.** El prototipo enlaza con `online.sistemabrio.com` mientras siga siendo la dirección publicada.

`Sistema Brío` puede trasladarse a `sistema.briorol.com`; Ruido ya vive en `ruido.briorol.com`. Una futura herramienta de dados podría vivir en `dados.briorol.com` y usarse dentro de Sala. Esta es una arquitectura de nombres, no una especificación de integración ni una promesa de disponibilidad.

Para la integración futura, convendrá separar el motor de cada herramienta de la interfaz que lo presenta. Su definición técnica se hará en los repos correspondientes cuando se aborde ese trabajo.
