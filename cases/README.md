# Casos de soluciones empresariales

`projects.js` contiene el contenido público de los casos y alimenta las tarjetas de la portada. `node cases/build.cjs` genera páginas HTML estáticas en `/proyectos/<slug>/` y el sitemap. `npm run build` genera los casos y compila Tailwind.

Las páginas tienen enlaces directos, navegación por secciones, capturas ampliables, modo oscuro y proyectos relacionados. Los proyectos anteriores conservan sus modales.

## Capturas y procedencia

- Intiwasi, BeAware, landing, portal de empleos y CasaGold público: capturas de los sitios publicados.
- Recruit: plantilla conversacional sin respuestas de postulantes; formulario de cliente vacío con identidad de empresa oculta.
- CasaGold app: dashboard de asesor con cifras comerciales ocultas. El módulo editorial aparece como función complementaria de la aplicación inmobiliaria.
- Controla Studio: editor visual CMS propio, mostrado con la implementación de Intiwasi. Las capturas provienen de un entorno local aislado y se adaptaron mediante la herramienta de imágenes para sustituir la marca de la aplicación por Controla Studio. El contenido de Intiwasi permanece como ejemplo dentro del lienzo. Las páginas de producción no se modificaron.
- Tinkuy: pantalla pública de acceso y capturas previas de la interfaz web con datos ficticios. No son capturas de un dispositivo iOS o simulador.
- SMS: panel principal sin registros de contactos. MKT: instancia del VPS, con valores ocultos; el dominio público mostraba Deployment Paused durante la revisión.
- Email: Mailer sin destinatarios seleccionados y con selector de listas oculto; Newsletter Studio con plantilla semanal pública abierta localmente en el navegador, sin guardar ni enviar.

El contenido describe funciones revisadas en interfaces y código, junto con las aclaraciones del autor. No se añadieron porcentajes de mejora ni resultados comerciales sin medición.

Recruit genera las páginas de convocatoria y el portal las lista automáticamente. La configuración de cada convocatoria determina la postulación por formulario o por WhatsApp cuando tiene bot habilitado.
