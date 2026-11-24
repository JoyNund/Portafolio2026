# Casos de soluciones empresariales

`projects.js` contiene el contenido público de los casos y alimenta las tarjetas de la portada. `node cases/build.cjs` genera páginas HTML estáticas en `/proyectos/<slug>/` y el sitemap. `npm run build` genera los casos y compila Tailwind.

Las páginas tienen enlaces directos, navegación por secciones, capturas ampliables, modo oscuro y proyectos relacionados. Los proyectos anteriores conservan sus modales.

## Capturas y procedencia

- Intiwasi, BeAware, landing, portal de empleos y CasaGold público: capturas de los sitios publicados.
- Recruit: constructor de flujos, publicación, configuración de IA, etapas y solicitud de cliente. Las identidades, respuestas y credenciales visibles son ficticias.
- CasaGold app: dashboard, CRM, registro de leads, propiedades y expedientes con nombres, contactos y cifras de demostración. El módulo editorial aparece como función complementaria de la aplicación inmobiliaria.
- Controla Studio: editor visual CMS propio, mostrado con la implementación de Intiwasi. Las capturas provienen de un entorno local aislado y se adaptaron mediante la herramienta de imágenes para sustituir la marca de la aplicación por Controla Studio. El contenido de Intiwasi permanece como ejemplo dentro del lienzo. Las páginas de producción no se modificaron.
- Tinkuy: capturas de la interfaz web con usuarios y reportes ficticios. No son capturas de un dispositivo iOS o simulador.
- SMS: panel, importación y formularios de campañas sin envíos ni registros de contactos. MKT: instancia del VPS con cifras ficticias; el dominio público mostraba Deployment Paused durante la revisión.
- Email: Mailer con listas y contenido de demostración, sin destinatarios seleccionados; Newsletter Studio con plantilla semanal pública abierta localmente en el navegador, sin guardar ni enviar.

Los datos privados se sustituyeron únicamente en la vista del navegador antes de capturar, sin guardar cambios en las aplicaciones de clientes. Las páginas identifican los ejemplos con datos ficticios. Las nuevas vistas de Controla Studio proceden del editor aislado con la marca Controla en su interfaz.

El contenido describe funciones revisadas en interfaces y código, junto con las aclaraciones del autor. No se añadieron porcentajes de mejora ni resultados comerciales sin medición.

Recruit genera las páginas de convocatoria y el portal las lista automáticamente. La configuración de cada convocatoria determina la postulación por formulario o por WhatsApp cuando tiene bot habilitado.

Los logos de clientes fueron proporcionados por el autor: CasaGold, Intiwasi, BeAware, Radio Vesánico y RE/MAX Focus. Los archivos originales se alojan localmente en cases/logos, sin depender de los enlaces externos. Los fondos respetan el contraste de cada marca.
Radio Vesánico se actualizó con la web pública radiovesanico.com: portada, noticias, agenda, programas, podcasts, tienda y vista móvil. Las capturas son del sitio público. Se verificó el acceso de administración protegido, sin iniciar sesión. Se sustituyó el proyecto anterior y se retiraron sus cifras de audiencia no verificadas.

La marca antes identificada como Raw Productora se corrigió a wav.e productora. Su logo fue proporcionado por el autor. El logo de PatLad (Patrulla Ladrido) se recreó en PNG con transparencia a partir de la referencia del autor mediante la herramienta integrada de generación de imágenes; se conserva el original adjunto sin modificar.

Actualización de organización: BeAware web + landing e Intiwasi institucional se presentan en Contenido y diseño, junto con la campaña audiovisual Sonidos del Encierro. Las aplicaciones y automatizaciones permanecen en Proyectos. Se conservan las páginas de caso y sus enlaces directos.
Ampliación de interfaces: Recruit (conexiones, convocatoria, publicación y pesos de evaluación), CasaGold (administración global, roles y colecciones), Tinkuy (aula, asistencia, progreso y cuidados diarios), SMS (automatizaciones y segmentos), Mailer (listas y contactos) y Newsletter Studio (bloques y estilos). Tinkuy usa la cuenta de demostración existente; las demás vistas privadas se prepararon con datos ficticios únicamente en el navegador.
Radio Vesánico: modo reproductor y comentarios, CMS de noticias, editor, fuente de audio, productos y panel AzuraCast personalizado (estaciones, estación, medios y listas). AzuraCast se identifica como software de terceros personalizado e integrado. No se alteró la transmisión ni se guardaron contenidos, productos o configuraciones. Los comentarios de ejemplo no fueron enviados.
