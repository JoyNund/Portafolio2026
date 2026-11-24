window.CLIENT_LOGOS = {
  "PatLad": {"logo":"/cases/logos/patlad.png","tone":"light"},
  "wav.e productora": {"logo":"/cases/logos/wave-productora.png","tone":"dark"},
  "CasaGold": {
    "logo": "/cases/logos/casagold.svg",
    "tone": "light"
  },
  "Intiwasi Spanish Immersion School": {
    "logo": "/cases/logos/intiwasi.png",
    "tone": "light"
  },
  "BeAware": {
    "logo": "/cases/logos/beaware.svg",
    "tone": "dark"
  },
  "Radio Vesánico": {
    "logo": "/cases/logos/radio-vesanico.png",
    "tone": "dark"
  },
  "RE/MAX Focus": {
    "logo": "/cases/logos/remax-focus.webp",
    "tone": "light"
  }
};
window.CASE_STUDIES = [
  {
    "slug": "beaware-recruit",
    "title": "BeAware Recruit",
    "client": "BeAware",
    "description": "Reclutamiento conectado: WhatsApp, flujos conversacionales, evaluación curricular y seguimiento.",
    "tagline": "De una conversación en WhatsApp a un proceso de selección completo.",
    "image": "/cases/images/recruit-flujo.webp",
    "categories": [
      "Aplicaciones",
      "WhatsApp",
      "IA"
    ],
    "type": "Plataforma de reclutamiento",
    "year": "2026",
    "role": "Diseño de producto, desarrollo full stack e integración conversacional",
    "intro": "Diseñé y desarrollé una plataforma que conecta el primer contacto de un postulante con la operación del equipo de reclutamiento. Las convocatorias, los flujos de WhatsApp, los documentos y las evaluaciones comparten un mismo proceso. El resultado es una herramienta de trabajo para reclutadores y clientes, con una experiencia de postulación que empieza en un canal cotidiano.",
    "challenge": "Recibir mensajes y currículums no basta para organizar una convocatoria. Hace falta relacionar cada conversación con el puesto correcto, recoger información comparable y permitir que el equipo revise los avances sin reconstruir el proceso entre chats, archivos y hojas de cálculo.",
    "solution": "Una aplicación con convocatorias por etapas, un motor de conversación configurable y un expediente de postulación que reúne respuestas, CV y puntajes. WhatsApp funciona como una entrada al proceso; el panel permite configurar sus reglas y continuar la evaluación humana.",
    "tech": [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "SQLite",
      "Baileys",
      "Integración con LLM"
    ],
    "flow": [
      "Crear convocatoria en Recruit",
      "Generar página pública",
      "Listar en el portal de empleos",
      "Postular por formulario o WhatsApp",
      "Gestionar y evaluar"
    ],
    "sections": [
      {
        "id": "whatsapp",
        "title": "WhatsApp como parte del producto",
        "body": "La integración del bot es el núcleo del sistema. Una conexión se vincula a una convocatoria y ejecuta su árbol de conversación. El motor interpreta las respuestas, guarda variables y decide el siguiente paso de acuerdo con condiciones y disparadores configurados.",
        "bullets": [
          "Vinculación de sesiones mediante QR y consulta de su estado de conexión.",
          "Nodos de mensaje, pregunta, condición, registro, archivo y cierre.",
          "Captura de información y recepción del CV dentro del mismo recorrido.",
          "Registro del postulante asociado a la convocatoria y continuidad del seguimiento."
        ],
        "note": "Integración implementada con Baileys sobre sesiones de WhatsApp Web."
      },
      {
        "id": "publicacion",
        "title": "Una convocatoria conecta publicación y postulación",
        "body": "Recruit genera la página de cada convocatoria y el portal de empleos la incorpora automáticamente a su catálogo. El canal de postulación depende de la configuración de esa convocatoria: formulario directo o WhatsApp cuando tiene un bot habilitado. La publicación, la captación y el seguimiento pertenecen al mismo ecosistema.",
        "bullets": [
          "Página pública generada desde la convocatoria en Recruit.",
          "Listado automático en el portal de empleos.",
          "Formulario directo o postulación por WhatsApp según la configuración.",
          "Continuidad entre la oportunidad publicada y la gestión de postulantes."
        ],
        "related": "beaware-empleos",
        "relatedLabel": "Explorar el portal de empleos",
        "image": "/cases/images/recruit-publica.webp",
        "caption": "Página de convocatoria generada por Recruit, presentada como una oferta de demostración. Incluye la entrada al formulario y a WhatsApp."
      },
      {
        "id": "flujos",
        "title": "Flujos reutilizables y reglas explícitas",
        "body": "Cada puesto necesita preguntas y criterios diferentes. El constructor permite definir el recorrido de una convocatoria y guardar su configuración como plantilla para reutilizarla. Las plantillas tienen una vista de lectura; los cambios se realizan desde la convocatoria y pueden volver a guardarse como plantilla.",
        "image": "/cases/images/recruit-flujo.webp",
        "caption": "Plantilla de conversación con título y contenido de demostración; no contiene respuestas de postulantes.",
        "bullets": [
          "Preguntas y variables adaptadas al perfil buscado.",
          "Ramas según respuestas y puntajes asociados a disparadores.",
          "Plantillas reutilizables entre convocatorias.",
          "Playground para revisar el comportamiento del recorrido."
        ],
        "gallery": [
          {
            "image": "/cases/images/recruit-builder.webp",
            "caption": "Constructor del chatbot: tipos de nodo, campos de registro y conexión entre pasos. La vista muestra la configuración, sin respuestas de candidatos."
          }
        ]
      },
      {
        "id": "evaluacion",
        "title": "Del PDF a una evaluación estructurada",
        "body": "La aplicación extrae el contenido del CV y dispone de una capa de integración con proveedores de IA. La configuración permite orientar la evaluación a habilidades, formación y experiencia, con criterios por convocatoria. El análisis y los puntajes quedan disponibles para la revisión del equipo.",
        "bullets": [
          "Recepción y extracción de texto de documentos curriculares.",
          "Configuración de proveedor, modelo y criterios de evaluación.",
          "Resumen curricular, análisis y puntajes vinculados al postulante.",
          "Evaluación por etapas, notas y actualización del ranking."
        ],
        "note": "Los puntajes apoyan la revisión del reclutador. No se presentan como una garantía de idoneidad ni como una decisión final de contratación.",
        "image": "/cases/images/recruit-ia.webp",
        "caption": "Configuración de proveedor y modelo de IA. Las credenciales visibles son ficticias y no válidas."
      },
      {
        "id": "operacion",
        "title": "Una operación con dos perspectivas",
        "body": "La administración organiza clientes, solicitudes, convocatorias y postulantes. La vista del cliente concentra el seguimiento de sus procesos y la comunicación con el equipo. Esta separación permite ofrecer una experiencia distinta a quien configura el reclutamiento y a quien necesita consultar su avance.",
        "bullets": [
          "Dashboard y gestión de convocatorias.",
          "Estados, puntajes y etapas de selección.",
          "Solicitudes y seguimiento para clientes.",
          "Mensajería, notificaciones y seguimiento público de postulaciones."
        ],
        "image": "/cases/images/recruit-cliente.webp",
        "caption": "Vista del cliente: solicitud de una convocatoria con empresa y contenido ficticios. No se envió ninguna solicitud.",
        "gallery": [
          {
            "image": "/cases/images/recruit-etapas.webp",
            "caption": "Seguimiento por etapas con tres postulantes ficticios: identidad de demostración, evaluación curricular, filtros y puntaje."
          }
        ]
      },
      {
        "id": "arquitectura",
        "title": "Un motor que une canales y datos",
        "body": "El frontend en React y TypeScript consume una API de Node.js y Express. Prisma organiza la persistencia de convocatorias, etapas, postulantes y conexiones. El servicio de WhatsApp ejecuta la lógica conversacional y la capa de IA procesa el contenido curricular. El portal de empleos es otra interfaz del ecosistema, con su propio caso de estudio.",
        "bullets": [
          "Interfaz de operación separada del motor conversacional.",
          "Modelo de datos compartido entre convocatoria, conversación y evaluación.",
          "Configuración de procesos por puesto y reutilización de plantillas.",
          "Canal web y canal conversacional conectados a la gestión de reclutamiento."
        ]
      }
    ],
    "outcomes": [
      "Postulaciones vinculadas a su convocatoria desde el primer contacto.",
      "Información curricular y conversacional disponible en una misma operación.",
      "Flujos adaptables a distintos puestos sin rehacer el motor de conversación."
    ],
    "links": [
      {
        "label": "Ver acceso a Recruit",
        "url": "https://app.beaware.pe/"
      }
    ],
    "related": [
      "beaware-empleos",
      "beaware-web"
    ],
    "demoNote": "Las personas, empresas de ejemplo y puntajes de las vistas demostrativas son ficticios. Las capturas explican el funcionamiento del producto."
  },
  {
    "slug": "casagold",
    "title": "CasaGold · App de gestión inmobiliaria",
    "client": "CasaGold",
    "description": "Gold Panel: cartera de propiedades, asesores, CRM de leads, contactos, expedientes e indicadores.",
    "tagline": "De mostrar propiedades a gestionar una operación inmobiliaria.",
    "image": "/cases/images/casagold-app.webp",
    "categories": [
      "Aplicaciones",
      "CRM inmobiliario",
      "Gestión comercial"
    ],
    "type": "Aplicación de gestión inmobiliaria",
    "year": "2026",
    "role": "Diseño de producto y desarrollo full stack",
    "intro": "Desarrollé Gold Panel, una aplicación de gestión inmobiliaria que reúne cartera de propiedades, asesores, CRM de leads, contactos, expedientes e indicadores de operación. La administración dispone de una visión global y cada asesor trabaja con sus propias herramientas. La aplicación se conecta con la web pública de CasaGold y las landings de asesores; la edición del contenido comercial es una función complementaria.",
    "challenge": "Una inmobiliaria necesita conectar lo que muestra al público con el trabajo del equipo comercial. El catálogo cambia, los asesores tienen carteras y recorridos propios, y cada oportunidad necesita seguimiento y documentación.",
    "solution": "Una plataforma con experiencia pública y paneles diferenciados para administración y asesores. La cartera de propiedades se relaciona con las consultas y el trabajo comercial; el gestor de contenido permite ajustar la web y los elementos de captación.",
    "tech": [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "SQLite",
      "Leaflet",
      "Recharts"
    ],
    "flow": [
      "Publicar propiedad",
      "Recibir consulta",
      "Asignar y dar seguimiento",
      "Organizar expediente",
      "Revisar la operación"
    ],
    "sections": [
      {
        "id": "panel",
        "title": "Gold Panel: la operación en una aplicación",
        "body": "El panel reúne herramientas de cartera, leads, contactos y expedientes. La vista global incorpora indicadores y gráficos de la operación; los asesores cuentan con herramientas vinculadas a sus propiedades y a su actividad comercial.",
        "bullets": [
          "Gestión de propiedades y sus estados.",
          "Leads, contactos y seguimiento comercial.",
          "Expedientes y documentación por proceso.",
          "Dashboard global y vistas para asesores."
        ],
        "image": "/cases/images/casagold-app.webp",
        "caption": "Dashboard del asesor con cifras ficticias para explicar cartera, conversión y comisiones."
      },
      {
        "id": "crm",
        "title": "El seguimiento comercial, visto de cerca",
        "body": "El CRM organiza las oportunidades por origen y estado y permite buscar contactos, registrar comentarios y dar continuidad a cada consulta. El registro manual complementa las entradas que llegan desde formularios y conexiones.",
        "image": "/cases/images/casagold-crm.webp",
        "caption": "Vista del CRM con nombres, teléfonos, correos, zonas y notas ficticios.",
        "gallery": [
          {
            "image": "/cases/images/casagold-lead-manual.webp",
            "caption": "Formulario de lead manual con un contacto ficticio. La captura muestra el formulario, sin guardar el registro."
          }
        ]
      },
      {
        "id": "cartera",
        "title": "Registrar y localizar una propiedad",
        "body": "El formulario reúne los datos de la propiedad, sus características, el tipo de operación y la ubicación en el mapa. Esta información alimenta la cartera que el asesor gestiona desde su panel.",
        "image": "/cases/images/casagold-nueva-propiedad.webp",
        "caption": "Alta de propiedad: características, precio y ubicación. Se muestra el formulario sin guardar una propiedad."
      },
      {
        "id": "expedientes",
        "title": "Documentar la operación inmobiliaria",
        "body": "Los expedientes relacionan una propiedad con la operación y sus participantes. El formulario organiza datos del vendedor o arrendador, comprador o arrendatario, contrato principal y anexos.",
        "image": "/cases/images/casagold-expediente.webp",
        "caption": "Creación de expediente operativo con campos de ejemplo ficticios. No se registró una operación ni se subieron documentos."
      },
      {
        "id": "asesores",
        "title": "Herramientas para cada asesor",
        "body": "La experiencia de asesores integra su cartera y perfil con una landing pública propia. Pueden administrar información de presentación y puntos de contacto, mientras la administración mantiene una visión transversal del equipo.",
        "bullets": [
          "Accesos diferenciados entre administración y asesores.",
          "Cartera asignada y seguimiento de oportunidades.",
          "Perfil y landing pública de asesor.",
          "Configuración de contacto y herramientas de medición."
        ]
      },
      {
        "id": "publica",
        "title": "Una vitrina inmobiliaria conectada",
        "body": "El sitio presenta la propuesta de CasaGold y su catálogo de propiedades. Las fichas y colecciones ayudan a explorar la oferta, mientras los puntos de contacto conectan el interés del visitante con la operación comercial.",
        "image": "/cases/images/casagold.webp",
        "caption": "Captura de la web pública de CasaGold.",
        "bullets": [
          "Catálogo y detalle de propiedades.",
          "Colecciones para agrupar oportunidades.",
          "Información de ubicación y mapas.",
          "Formularios y llamadas de contacto configurables."
        ]
      },
      {
        "id": "cms",
        "title": "Edición de la web como función complementaria",
        "body": "Además de las herramientas de gestión inmobiliaria, la aplicación incorpora un módulo para mantener el contenido de la web comercial: portada, navegación, formularios, galerías y páginas legales. Este módulo acompaña el trabajo de cartera, captación y seguimiento que constituye el núcleo del producto.",
        "image": "/cases/images/casagold-cms.webp",
        "caption": "Captura de Gold Panel en la sección CMS: controles de contenido y configuración del sitio, sin registros de clientes.",
        "bullets": [
          "Textos, imágenes, logos y visibilidad del menú.",
          "Edición de portada, contacto y secciones dinámicas.",
          "SEO, Open Graph y configuración de medición.",
          "Mensajes y llamadas de contacto de WhatsApp configurables."
        ]
      },
      {
        "id": "arquitectura",
        "title": "Una base para la web y el trabajo interno",
        "body": "React y TypeScript resuelven la experiencia pública y administrativa. Una API de Node.js y Express organiza los datos mediante Prisma; Leaflet aporta mapas y Recharts las visualizaciones del panel. La plataforma relaciona la publicación de inmuebles con su gestión comercial.",
        "bullets": [
          "Interfaces públicas y privadas con recorridos específicos.",
          "Cartera, contactos y expedientes relacionados en la aplicación.",
          "CMS propio sobre la experiencia comercial.",
          "Mapas e indicadores como herramientas de consulta."
        ]
      }
    ],
    "outcomes": [
      "Presentación pública y operación inmobiliaria conectadas.",
      "Herramientas específicas para administración y asesores.",
      "Autonomía editorial para mantener la web y sus puntos de captación."
    ],
    "links": [
      {
        "label": "Visitar CasaGold",
        "url": "https://casagold.pe/"
      },
      {
        "label": "Ver acceso a Gold Panel",
        "url": "https://casagold.pe/admin"
      }
    ],
    "related": [
      "beaware-recruit",
      "tinkuy"
    ],
    "demoNote": "Nombres, contactos, notas y cifras comerciales de las vistas demostrativas son ficticios. Los formularios se muestran sin registrar operaciones."
  },
  {
    "slug": "tinkuy",
    "title": "Tinkuy · Portal y app escolar",
    "client": "Intiwasi Spanish Immersion School",
    "description": "Comunidad, comunicación, asistencia y operación escolar para familias, docentes y administración.",
    "tagline": "La vida de la escuela, conectada en una sola experiencia.",
    "image": "/cases/images/tinkuy-units.jpg",
    "categories": [
      "Aplicaciones",
      "Educación",
      "Móvil"
    ],
    "type": "Portal familiar y aplicación móvil",
    "year": "2026",
    "role": "Diseño de producto y desarrollo full stack y móvil",
    "intro": "Tinkuy reúne herramientas que acompañan el día a día de una comunidad escolar. Las familias consultan información de sus hijos y se comunican con el equipo; los docentes trabajan con sus clases; la administración coordina la operación. Desarrollé una experiencia web con proyectos móviles para iOS y Android, adaptada a las necesidades particulares de Intiwasi.",
    "challenge": "La información escolar tiene muchas formas: mensajes, fotos, asistencia, progreso, permisos y pedidos. Cada persona necesita una parte distinta de esa información. El reto fue conectar esas tareas sin tratar a familias, docentes y administradores como si tuvieran el mismo trabajo.",
    "solution": "Un portal con acceso según rol y relación con el estudiante. La experiencia reúne comunicación en tiempo real, seguimiento escolar, check-in con QR y servicios cotidianos, con una base web y capacidades móviles mediante Capacitor.",
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Socket.IO",
      "Capacitor",
      "Push notifications",
      "Stripe"
    ],
    "flow": [
      "Familias y equipo",
      "Acceso según rol",
      "Comunicación y comunidad",
      "Seguimiento escolar",
      "Servicios cotidianos"
    ],
    "sections": [
      {
        "id": "roles",
        "title": "Tres roles, tres formas de usar la escuela",
        "body": "El diseño parte de las responsabilidades de cada persona. Las familias acceden a la información vinculada a sus hijos; los docentes trabajan con sus clases; la administración dispone de herramientas de gestión transversal.",
        "image": "/cases/images/tinkuy-dashboard.png",
        "caption": "Panel familiar móvil con accesos a tareas cotidianas y feed de comunidad. Cuenta y publicaciones de demostración.",
        "bullets": [
          "Panel y accesos según el perfil del usuario.",
          "Vinculación entre familias, estudiantes y salones.",
          "Herramientas para docentes y administración.",
          "Directorio y recursos para la comunidad."
        ]
      },
      {
        "id": "comunicacion",
        "title": "Una comunidad que conversa",
        "body": "Los canales de clase y los mensajes directos conectan al equipo con las familias. El feed admite publicaciones con contenido visual y texto enriquecido. La comunicación incorpora lectura, reacciones y notificaciones para acompañar el uso diario.",
        "image": "/cases/images/tinkuy-calendar.jpg",
        "caption": "Calendario en la interfaz web de Tinkuy, con eventos ficticios de una base de demostración. Captura de navegador; no de un dispositivo iOS.",
        "bullets": [
          "Canales y mensajes directos en tiempo real.",
          "Confirmaciones de lectura y reacciones.",
          "Edición visual de mensajes y publicaciones.",
          "Álbumes, avisos, calendario y notificaciones."
        ]
      },
      {
        "id": "asistencia",
        "title": "Asistencia y recogida con QR",
        "body": "La entrada y la salida se conectan con códigos QR de la escuela o del salón. El sistema registra los horarios y permite consultar asistencia y tiempo de permanencia. Las herramientas del equipo complementan la experiencia de las familias.",
        "bullets": [
          "Escaneo de QR y selección de los hijos vinculados.",
          "Registro de entrada y salida.",
          "Consulta de asistencia y horarios.",
          "Registro de permanencia y horario extendido."
        ]
      },
      {
        "id": "aprendizaje",
        "title": "El aprendizaje también tiene un lugar",
        "body": "Las unidades, el progreso y las calificaciones permiten seguir el recorrido del estudiante. Para los salones habilitados, el cuidado diario recoge información de la jornada. Las alergias y los recursos completan tareas que suelen quedar dispersas.",
        "image": "/cases/images/tinkuy-units.jpg",
        "caption": "Interfaz web de unidades de aprendizaje con una familia y un salón ficticios. Captura de un entorno de demostración, sin datos reales de estudiantes.",
        "bullets": [
          "Unidades, progreso, logros y XP.",
          "Calificaciones y report cards.",
          "Cuidado diario y registro de alergias.",
          "Recursos y documentos de la comunidad escolar."
        ]
      },
      {
        "id": "reportes",
        "title": "Un reporte que reúne la información del estudiante",
        "body": "El reporte del estudiante concentra progreso académico, evaluaciones registradas, asistencia, logros y observaciones. La familia puede consultar el contexto de aprendizaje en una vista que complementa las unidades y el calendario.",
        "image": "/cases/images/tinkuy-report.jpg",
        "caption": "Reporte académico con el estudiante Alex Demo y datos escolares ficticios."
      },
      {
        "id": "detalle-unidad",
        "title": "Del programa a la conversación con la familia",
        "body": "Cada unidad puede reunir una carta de bienvenida y un espacio de reflexión. La información académica se presenta como una experiencia que la familia puede leer y acompañar, junto al progreso del estudiante.",
        "image": "/cases/images/tinkuy-unit-detail.jpg",
        "caption": "Detalle de una unidad en el entorno web demostrativo de Tinkuy, con contenido y personas ficticias."
      },
      {
        "id": "movil",
        "title": "Web y móvil sobre una misma experiencia",
        "body": "La aplicación usa Next.js y React con Prisma para la capa de datos y Socket.IO para la comunicación en tiempo real. Capacitor conecta la experiencia web con proyectos de iOS y Android y capacidades del dispositivo, como cámara, escáner y notificaciones.",
        "bullets": [
          "Diseño responsive y navegación pensada para el teléfono.",
          "Proyectos móviles de iOS y Android con Capacitor.",
          "Cámara, escaneo y avisos push.",
          "Tienda, pedidos y servicios vinculados a la operación escolar."
        ],
        "note": "Este caso describe el producto y su implementación. No presupone disponibilidad pública en las tiendas de aplicaciones."
      }
    ],
    "outcomes": [
      "Comunicación y tareas escolares reunidas en un portal de uso cotidiano.",
      "Experiencias diferenciadas para familias, docentes y administración.",
      "Continuidad entre navegador y capacidades móviles."
    ],
    "links": [
      {
        "label": "Ver acceso a Tinkuy",
        "url": "https://beta.intiwasischool.com/"
      }
    ],
    "related": [
      "intiwasi-web",
      "controla-studio"
    ],
    "demoNote": "Las vistas privadas utilizan una familia, un salón y registros escolares ficticios del entorno de demostración. Las imágenes corresponden a la interfaz web."
  },
  {
    "slug": "controla-studio",
    "title": "Controla Studio",
    "client": "Controla Digital",
    "description": "Editor visual CMS para sitios con diseño propio: lienzo, capas, ajustes responsive, borradores, historial y publicación. Implementación mostrada: Intiwasi.",
    "tagline": "Un editor visual CMS para gestionar sitios con diseño propio.",
    "image": "/cases/images/controla-studio-desktop.webp",
    "categories": [
      "Webs y CMS",
      "Producto",
      "UI/UX"
    ],
    "type": "Editor visual CMS",
    "year": "2026",
    "role": "Diseño de producto y desarrollo del editor y del sistema de publicación",
    "intro": "Controla Studio es mi editor visual CMS para gestionar sitios con diseño propio directamente sobre sus páginas HTML. Combina un lienzo interactivo, un árbol de capas y un inspector de contenido y diseño. Este caso muestra su implementación en la web de Intiwasi School: el producto es Controla Studio y la escuela es el cliente cuyo contenido aparece dentro del lienzo.",
    "challenge": "Los sitios con diseño propio necesitan un editor que conserve sus componentes, estilos e interacciones y permita trabajar por dispositivo. El equipo editorial debe poder mantener el contenido y revisar sus cambios antes de publicarlos, sin reconstruir el sitio en otro sistema.",
    "solution": "Un entorno editorial con selección sobre el lienzo, edición por capas, biblioteca de bloques y controles responsive. Los cambios se guardan como borradores; la publicación conserva versiones anteriores y verifica si la página pública cambió desde que se abrió el borrador.",
    "tech": [
      "JavaScript",
      "HTML y CSS",
      "Python",
      "SQLite",
      "tinycss2",
      "Edición del DOM",
      "Control de versiones de contenido"
    ],
    "flow": [
      "Seleccionar página",
      "Editar en el lienzo",
      "Revisar por dispositivo",
      "Guardar borrador",
      "Previsualizar y publicar"
    ],
    "sections": [
      {
        "id": "implementacion-intiwasi",
        "title": "El producto y su implementación",
        "body": "Controla Studio es el producto CMS. Intiwasi School es la implementación que se muestra como ejemplo: su web, sus imágenes y su identidad permanecen dentro del lienzo. La marca de la herramienta y la marca del sitio administrado cumplen funciones distintas.",
        "bullets": [
          "Producto: Controla Studio, editor visual CMS.",
          "Ejemplo de implementación: Intiwasi School.",
          "Edición sobre las páginas HTML del sitio.",
          "Capturas adaptadas para mostrar la marca del producto."
        ]
      },
      {
        "id": "lienzo",
        "title": "El contenido se edita donde se ve",
        "body": "La selección reconoce textos, imágenes, botones, secciones, formularios, videos y otros elementos del sitio. El doble clic permite escribir sobre los textos. El inspector organiza los ajustes en Contenido, Diseño y Avanzado, mientras las capas ayudan a localizar y reordenar la estructura.",
        "image": "/cases/images/controla-studio-desktop.webp",
        "caption": "Controla Studio con el sitio de Intiwasi como ejemplo. Captura del entorno demostrativo adaptada con la marca del producto.",
        "bullets": [
          "Selección visual, contenedor superior y ruta del elemento.",
          "Árbol de capas y reordenamiento de bloques.",
          "Controles de tamaño, guías y edición de imágenes.",
          "Deshacer y rehacer durante el trabajo."
        ]
      },
      {
        "id": "responsive",
        "title": "Diseñar por dispositivo, dentro del mismo editor",
        "body": "El ancho del lienzo, el zoom y los modos de escritorio, tablet y móvil permiten revisar la composición. Los ajustes específicos de cada dispositivo se conservan por separado del estilo base.",
        "bullets": [
          "Reglas de diseño independientes para tablet y móvil.",
          "Tamaño, columnas, espaciado, fondos y tipografías.",
          "Encuadre y posición de imágenes por dispositivo.",
          "Vista previa para revisar las interacciones de la página."
        ],
        "image": "/cases/images/controla-studio-mobile.webp",
        "caption": "Vista móvil de la implementación en Intiwasi. Captura demostrativa adaptada con la marca Controla Studio.",
        "gallery": [
          {
            "image": "/cases/images/controla-studio-diseno.webp",
            "caption": "Inspector de diseño de un elemento seleccionado: tipografía, distribución y ajustes del componente en el lienzo."
          }
        ]
      },
      {
        "id": "biblioteca",
        "title": "Bloques propios y estilos globales",
        "body": "La biblioteca incluye elementos básicos y secciones de la propia web. Se pueden añadir formularios, acordeones, tarjetas, sliders y módulos existentes. Los estilos globales permiten administrar paleta, fuentes, títulos y botones con una vista previa antes de aplicarlos.",
        "bullets": [
          "Bloques alineados con el diseño institucional.",
          "Biblioteca de medios y normalización de imágenes a WebP.",
          "Paleta y tipografías compartidas.",
          "Sincronización explícita de navbar y footer entre páginas."
        ],
        "gallery": [
          {
            "image": "/cases/images/controla-studio-bloques.webp",
            "caption": "Biblioteca de componentes en el editor: elementos básicos y secciones que pueden incorporarse al lienzo."
          },
          {
            "image": "/cases/images/controla-studio-estilos.webp",
            "caption": "Panel de estilos globales: paleta del sitio y controles para guardar un borrador o aplicar los cambios."
          }
        ]
      },
      {
        "id": "publicacion",
        "title": "Un flujo editorial con memoria",
        "body": "Guardar crea un borrador. Publicar aplica los cambios al sitio y conserva el HTML anterior en el historial. Restaurar una versión la devuelve al lienzo para revisarla antes de guardar o publicar. Los controles de versión detectan conflictos para evitar sobrescribir cambios más recientes.",
        "bullets": [
          "Guardado manual o automático sobre borradores.",
          "Historial de páginas y de estilos globales.",
          "Nuevas páginas inicialmente en borrador.",
          "Despublicación que conserva el contenido para recuperarlo."
        ]
      },
      {
        "id": "implementacion",
        "title": "HTML público y estado editorial separados",
        "body": "El sitio mantiene sus documentos HTML como contenido publicado. Un backend de Python administra usuarios, borradores, preferencias e historial en SQLite privado. El editor modifica la estructura de las páginas y conserva sus hojas de estilo y scripts; las interacciones se revisan en una vista previa aislada.",
        "bullets": [
          "Contenido publicado separado del estado privado del CMS.",
          "Acceso de propietarios y editores.",
          "Verificación de versiones y cambios antes de publicar.",
          "Editor enfocado en la web institucional; Tinkuy y otros servicios conservan su propia gestión."
        ]
      }
    ],
    "outcomes": [
      "Edición visual adaptada a una web diseñada a medida.",
      "Un recorrido claro entre editar, guardar, revisar y publicar.",
      "Historial y recuperación de contenido integrados al trabajo editorial."
    ],
    "links": [
      {
        "label": "Ver acceso a la implementación en Intiwasi",
        "url": "https://intiwasischool.com/edit"
      },
      {
        "label": "Ver sitio publicado",
        "url": "https://intiwasischool.com/"
      }
    ],
    "related": [
      "intiwasi-web",
      "casagold"
    ]
  },
  {
    "slug": "intiwasi-web",
    "title": "Intiwasi School · Sitio institucional",
    "client": "Intiwasi Spanish Immersion School",
    "description": "Una experiencia editorial para descubrir la escuela, sus programas y su comunidad, con CMS propio.",
    "tagline": "Una escuela con una historia propia. Una web preparada para contarla.",
    "image": "/cases/images/intiwasi.webp",
    "categories": [
      "Webs y CMS",
      "Educación",
      "UI/UX"
    ],
    "type": "Sitio institucional y experiencia de admisiones",
    "year": "2026",
    "role": "Diseño de experiencia, desarrollo web y sistema editorial",
    "intro": "Desarrollé la nueva presencia digital de Intiwasi, una escuela de inmersión en español en Los Ángeles. El proyecto reúne identidad visual, contenidos académicos, vida escolar y recorridos para familias que quieren conocer la propuesta educativa. También construí un editor visual propio para que el equipo mantenga esa experiencia con autonomía.",
    "challenge": "La web debía explicar una propuesta educativa rica sin convertir la navegación en una acumulación de páginas. Era necesario conectar programas, metodología, comunidad y admisiones, manteniendo una identidad cálida y una experiencia clara en el teléfono.",
    "solution": "Una arquitectura de contenidos que acompaña el recorrido de las familias: conocer la escuela, explorar sus programas, descubrir al equipo y dar el siguiente paso hacia una visita o consulta. El CMS se integra a las páginas existentes y conserva su lenguaje visual.",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "CMS a medida",
      "Diseño responsive",
      "Caddy"
    ],
    "flow": [
      "Conocer Intiwasi",
      "Explorar programas",
      "Descubrir la comunidad",
      "Consultar admisiones",
      "Agendar una visita"
    ],
    "sections": [
      {
        "id": "experiencia",
        "title": "Diseño con identidad y jerarquía",
        "body": "La experiencia combina fotografía, tipografía y módulos editoriales para comunicar la vida de la escuela. El contenido se organiza por intención: qué se aprende, cómo se vive la inmersión y qué puede esperar una familia de cada etapa.",
        "image": "/cases/images/intiwasi.webp",
        "caption": "Captura del sitio institucional publicado.",
        "bullets": [
          "Presentación de la propuesta de inmersión en español.",
          "Recorridos de Preschool y Elementary.",
          "Páginas sobre metodología, equipo y comunidad.",
          "Diseño adaptado a escritorio y móvil."
        ]
      },
      {
        "id": "navegacion",
        "title": "De la exploración a la siguiente acción",
        "body": "El sitio relaciona las páginas académicas con admisiones, visitas y programas complementarios. La navegación ayuda a pasar de una pregunta general sobre la escuela a información concreta para cada familia.",
        "bullets": [
          "Menús y enlaces entre contenidos relacionados.",
          "Presentación de programas, campamentos y actividades.",
          "Galería, noticias y perfiles del equipo.",
          "Accesos a tours, admisiones y al portal familiar Tinkuy."
        ]
      },
      {
        "id": "cms",
        "title": "Un CMS propio, integrado al diseño",
        "body": "La autonomía editorial forma parte del proyecto. Controla Studio permite seleccionar elementos sobre el lienzo, editar textos e imágenes, ajustar estilos y revisar la página por dispositivo. Guardar un borrador y publicar son acciones distintas; el historial conserva versiones anteriores.",
        "image": "/cases/images/controla-studio-desktop.webp",
        "caption": "Controla Studio con el sitio de Intiwasi como ejemplo. Captura del entorno demostrativo adaptada con la marca del producto.",
        "bullets": [
          "Edición visual de textos, imágenes, enlaces y componentes.",
          "Biblioteca de elementos, capas y ajustes por dispositivo.",
          "Borradores, vista previa, historial y publicación explícita.",
          "Control de páginas publicadas y sincronización de bloques compartidos."
        ],
        "related": "controla-studio"
      },
      {
        "id": "ecosistema",
        "title": "Parte de un ecosistema escolar",
        "body": "El sitio público es la puerta de entrada. Tinkuy atiende la vida cotidiana de las familias y del equipo, mientras otras aplicaciones resuelven inscripciones, eventos y actividades específicas. La web conecta estos recorridos respetando la función de cada herramienta.",
        "bullets": [
          "Información pública y experiencia de descubrimiento en el sitio institucional.",
          "Acceso al portal familiar desde la navegación.",
          "Enlaces a servicios y registros especializados.",
          "CMS centrado en el contenido institucional."
        ]
      }
    ],
    "outcomes": [
      "Una presencia digital coherente con la identidad educativa de la escuela.",
      "Contenidos académicos y comunitarios conectados con admisiones.",
      "Autonomía para mantener textos, imágenes y páginas mediante un editor propio."
    ],
    "links": [
      {
        "label": "Visitar Intiwasi",
        "url": "https://intiwasischool.com/"
      },
      {
        "label": "Ver acceso al editor",
        "url": "https://intiwasischool.com/edit"
      }
    ],
    "related": [
      "controla-studio",
      "tinkuy"
    ]
  },
  {
    "slug": "beaware-empleos",
    "title": "BeAware · Portal de empleos",
    "client": "BeAware",
    "description": "Convocatorias publicadas automáticamente desde Recruit y postulación por formulario o WhatsApp según cada proceso.",
    "tagline": "Una entrada clara al mundo del trabajo.",
    "image": "/cases/images/empleos.webp",
    "categories": [
      "Aplicaciones",
      "Empleo",
      "UI/UX"
    ],
    "type": "Portal de oportunidades y autoservicio para postulantes",
    "year": "2026",
    "role": "Diseño de experiencia y desarrollo del portal",
    "intro": "Desarrollé el portal de empleos como la experiencia pública para descubrir las convocatorias administradas en Recruit. Recruit genera sus páginas y el portal las incorpora automáticamente. Cada oportunidad ofrece la forma de postular definida en el sistema: formulario directo o WhatsApp si tiene un bot habilitado. El portal también reúne perfil, CVs y consulta de postulaciones.",
    "challenge": "Una plataforma de reclutamiento necesita una entrada comprensible para el postulante. La información del puesto debe ser fácil de encontrar y la postulación necesita continuidad: perfil, documentos y seguimiento no pueden quedar como pasos aislados.",
    "solution": "Un catálogo conectado directamente con Recruit, acompañado de búsqueda y un espacio personal para candidatos. La configuración de cada convocatoria determina si la postulación se realiza mediante formulario directo o a través de un bot de WhatsApp.",
    "tech": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "API de Recruit"
    ],
    "flow": [
      "Crear en Recruit",
      "Generar página de convocatoria",
      "Aparecer en el portal",
      "Postular por el canal habilitado",
      "Continuar el seguimiento"
    ],
    "sections": [
      {
        "id": "busqueda",
        "title": "La oportunidad adecuada empieza por encontrarla",
        "body": "La portada presenta convocatorias con información útil para decidir: cargo, empresa, ubicación, modalidad y rango salarial cuando está disponible. El buscador compara distintos campos de las oportunidades y la clasificación ayuda a explorar el catálogo.",
        "image": "/cases/images/empleos.webp",
        "caption": "Captura de la portada pública del portal de empleos.",
        "bullets": [
          "Búsqueda por cargo, empresa, modalidad y ubicación.",
          "Clasificación de oportunidades y resultados de búsqueda.",
          "Tarjetas con información contextual del puesto.",
          "Acceso al detalle de las convocatorias."
        ]
      },
      {
        "id": "perfil",
        "title": "Un espacio personal para postular",
        "body": "El candidato cuenta con un panel propio. La gestión de CVs permite preparar información curricular y reutilizarla en el proceso. La lista de postulaciones da continuidad al recorrido después de enviar una solicitud.",
        "bullets": [
          "Registro y acceso de postulantes.",
          "Perfil personal y gestión de CVs.",
          "Formulario curricular y generación de documentos desde el backend.",
          "Consulta de postulaciones."
        ]
      },
      {
        "id": "integracion",
        "title": "Una interfaz distinta, un proceso conectado",
        "body": "Recruit administra las convocatorias y genera sus páginas públicas. El portal lista esas oportunidades automáticamente y ofrece el canal de postulación configurado para cada una. Cuando se habilita un bot, el candidato puede continuar por WhatsApp; las convocatorias sin bot admiten formulario directo. Ambos proyectos forman parte de un mismo proceso de captación y gestión.",
        "bullets": [
          "Páginas de convocatoria generadas desde Recruit.",
          "Publicación automática en el catálogo del portal.",
          "Formulario directo o WhatsApp según la configuración del puesto.",
          "Información de postulación conectada con la gestión de reclutamiento."
        ]
      },
      {
        "id": "empresas",
        "title": "Un recorrido específico para empresas",
        "body": "La entrada de empresas dispone de un formulario propio para solicitar acceso al servicio de reclutamiento. El portal ofrece así recorridos distintos para quien busca una oportunidad y para quien necesita publicar una convocatoria.",
        "image": "/cases/images/empleos-empresa.webp",
        "caption": "Registro de empresa con nombre, correo y teléfono ficticios. La solicitud no se envió."
      }
    ],
    "outcomes": [
      "Una sola gestión de convocatorias para publicación y captación.",
      "Canal de postulación adaptado a cada proceso.",
      "Continuidad entre la experiencia pública y la operación de Recruit."
    ],
    "links": [
      {
        "label": "Explorar el portal",
        "url": "https://empleos.beaware.pe/"
      }
    ],
    "related": [
      "beaware-recruit",
      "beaware-web"
    ],
    "demoNote": "El ejemplo de registro de empresa utiliza información ficticia y no fue enviado."
  },
  {
    "slug": "beaware-web",
    "title": "BeAware · Web y landing de reclutamiento",
    "client": "BeAware",
    "description": "Presencia corporativa y captación comercial con contenidos, imágenes y secciones editables desde CMS.",
    "tagline": "Dos experiencias de marca, preparadas para evolucionar desde un CMS.",
    "image": "/cases/images/beaware.webp",
    "categories": [
      "Webs y CMS",
      "Marketing",
      "UI/UX"
    ],
    "type": "Web corporativa y landing comercial",
    "year": "2026",
    "role": "Diseño web, desarrollo full stack y CMS a medida",
    "intro": "Desarrollé la web corporativa de BeAware y una landing especializada en reclutamiento. La primera presenta su propuesta de consultoría y servicios; la segunda concentra el recorrido comercial de una solución concreta. Ambas incorporan administración de contenidos para que la marca pueda actualizar su comunicación desde una interfaz propia.",
    "challenge": "La web institucional necesita amplitud para explicar la empresa, mientras una landing requiere foco. El reto fue mantener una identidad común, dar a cada experiencia su propio recorrido y permitir que el equipo cambie textos, imágenes y secciones sin intervenir el código.",
    "solution": "Dos interfaces conectadas por la misma marca y acompañadas de CMS propios. La web organiza servicios, diferenciales, clientes y testimonios. La landing combina contenido comercial, formularios y agenda para pasar del interés a una conversación.",
    "tech": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Motion",
      "Node.js",
      "Express",
      "SQLite"
    ],
    "flow": [
      "Descubrir la marca",
      "Comprender la propuesta",
      "Explorar la solución",
      "Dejar una consulta",
      "Coordinar una conversación"
    ],
    "sections": [
      {
        "id": "corporativa",
        "title": "Una presentación institucional por capas",
        "body": "La web corporativa organiza la propuesta de BeAware en una secuencia de contenidos: portada, reseña institucional, soluciones, diferenciales, clientes, testimonios y contacto. El diseño combina módulos de marca con movimiento e interacción.",
        "image": "/cases/images/beaware.webp",
        "caption": "Captura de la web corporativa publicada.",
        "bullets": [
          "Arquitectura de servicios y propuesta de valor.",
          "Módulos de metodología, clientes y testimonios.",
          "Formularios y accesos de contacto.",
          "Experiencia responsive con componentes de marca."
        ]
      },
      {
        "id": "landing",
        "title": "Una landing con una intención concreta",
        "body": "La experiencia de reclutamiento se enfoca en las necesidades de una empresa que busca talento. Sus módulos explican el servicio, refuerzan la confianza y acompañan la consulta con formularios y un recorrido de agenda.",
        "image": "/cases/images/beaware-landing.webp",
        "caption": "Captura de la landing de reclutamiento, desarrollada como parte del mismo ecosistema de marca.",
        "bullets": [
          "Contenido específico sobre la solución de reclutamiento.",
          "Formularios de captación integrados a su operación.",
          "Agenda y gestión de disponibilidad.",
          "Continuidad visual con la web institucional."
        ]
      },
      {
        "id": "cms",
        "title": "El CMS también es parte de la entrega",
        "body": "Los administradores disponen de controles para mantener la experiencia comercial. La web corporativa permite actualizar portada, navegación, servicios, imágenes, testimonios y visibilidad de secciones. La landing incorpora edición de contenidos, subida de imágenes y pestañas de leads y agenda.",
        "bullets": [
          "Edición de textos, imágenes y bloques desde paneles propios.",
          "Gestión de navegación, logos, servicios y testimonios.",
          "Mostrar u ocultar secciones sin reescribir el sitio.",
          "Administración de consultas y agenda en la landing."
        ]
      },
      {
        "id": "sistema",
        "title": "Diseño de marca conectado a una operación",
        "body": "Los formularios, el contenido y la gestión comercial se apoyan en APIs propias. Esta estructura permite mantener el diseño de la web y a la vez ofrecer herramientas prácticas al equipo que la usa todos los días.",
        "bullets": [
          "Frontend en React y TypeScript.",
          "Backend de contenido y consultas con Node.js y Express.",
          "Contenido administrable y medios desde el CMS.",
          "Ecosistema vinculado con el portal de empleos y Recruit."
        ]
      }
    ],
    "outcomes": [
      "Una marca consistente entre presencia institucional y campaña comercial.",
      "Actualización de contenido desde CMS propios.",
      "Captación y agenda incorporadas a la experiencia de reclutamiento."
    ],
    "links": [
      {
        "label": "Visitar BeAware",
        "url": "https://beaware.pe/"
      },
      {
        "label": "Ver landing de reclutamiento",
        "url": "https://reclutamiento.beaware.pe/"
      }
    ],
    "related": [
      "beaware-recruit",
      "beaware-empleos"
    ]
  },
  {
    "slug": "intiwasi-sms-marketing",
    "title": "Intiwasi · SMS marketing y conversiones",
    "client": "Intiwasi Spanish Immersion School",
    "description": "Campañas con Twilio, segmentación, conversaciones y seguimiento del lead hasta la conversión en un panel conectado.",
    "tagline": "Del mensaje enviado al avance real de una oportunidad.",
    "image": "/cases/images/sms.webp",
    "categories": [
      "Aplicaciones",
      "Automatización",
      "Marketing"
    ],
    "type": "Sistema de SMS y gestión de conversiones",
    "year": "2026",
    "role": "Diseño de la solución, desarrollo full stack e integración con Twilio",
    "intro": "Desarrollé un sistema conjunto para gestionar la comunicación por SMS y consultar su relación con el avance comercial. El portal SMS organiza contactos, segmentos, campañas, automatizaciones y conversaciones mediante Twilio. Su contraparte, Intiwasi MKT, presenta campañas, estados del lead y métricas de conversión. Las dos aplicaciones vinculan el trabajo de contacto con la lectura de resultados.",
    "challenge": "Un envío masivo describe una actividad, pero no explica qué ocurrió después con cada oportunidad. El equipo necesita organizar destinatarios, continuar conversaciones y saber cuáles fueron contactados, agendaron, asistieron o se matricularon.",
    "solution": "Dos herramientas conectadas: una para ejecutar y gestionar la comunicación, y otra para consultar el avance de las campañas. Los estados de los contactos permiten construir una lectura del proceso comercial y calcular indicadores vinculados a la inversión registrada.",
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Twilio",
      "PostgreSQL / Neon"
    ],
    "flow": [
      "Organizar contactos",
      "Segmentar audiencia",
      "Contactar por SMS",
      "Registrar avance del lead",
      "Consultar conversiones en MKT"
    ],
    "sections": [
      {
        "id": "sms",
        "title": "La operación del canal en una aplicación",
        "body": "El portal SMS reúne los contactos y las herramientas de comunicación. Permite trabajar con campañas masivas y mensajes individuales, consultar respuestas recibidas y organizar recorridos automatizados. La integración con Twilio conecta estas acciones con el canal de mensajería.",
        "image": "/cases/images/sms.webp",
        "caption": "Pantalla principal del portal SMS. Se muestran accesos a las herramientas, sin datos de contactos.",
        "bullets": [
          "Contactos e importación de destinatarios.",
          "Segmentos para organizar audiencias.",
          "Campañas de SMS y envío individual.",
          "Conversaciones con respuestas recibidas y automatizaciones."
        ]
      },
      {
        "id": "segmentacion",
        "title": "Definir a quién contactar y con qué mensaje",
        "body": "La segmentación permite construir campañas sobre grupos de contactos. El envío incorpora selección y exclusión de segmentos, contenido del mensaje y recursos de apoyo. El sistema registra el resultado de los intentos de envío para que la operación pueda revisarlos.",
        "bullets": [
          "Inclusión y exclusión de audiencias.",
          "Contador de caracteres y fragmentos de texto reutilizables.",
          "Soporte de contenido multimedia en el flujo de envío.",
          "Registro de envíos correctos y fallidos."
        ],
        "gallery": [
          {
            "image": "/cases/images/sms-importar.webp",
            "caption": "Entrada de importación CSV: carga de archivo y preparación del mapeo de columnas. No se importaron contactos."
          },
          {
            "image": "/cases/images/sms-campana.webp",
            "caption": "Formulario de nueva campaña con nombre, segmento y mensaje. No se creó ni se envió una campaña."
          }
        ]
      },
      {
        "id": "mensaje-individual",
        "title": "Atender también una conversación individual",
        "body": "El envío manual permite seleccionar un contacto o indicar un número, redactar el mensaje y utilizar variables de personalización. La interfaz muestra el contador de caracteres y distingue el texto simple del contenido multimedia.",
        "image": "/cases/images/sms-manual.webp",
        "caption": "Pantalla de SMS manual sin destinatario seleccionado. No se envió ningún mensaje."
      },
      {
        "id": "conversiones",
        "title": "MKT conecta la campaña con su resultado",
        "body": "La aplicación de Marketing utiliza los estados de los leads para mostrar contacto y conversión. Distingue etapas como contacto por SMS o llamada, interés, cita, asistencia y matrícula, junto con estados pendientes o descartados. La matrícula constituye la conversión definida en este contexto escolar.",
        "image": "/cases/images/mkt.webp",
        "caption": "Panel de campaña con inversión, métricas y embudo preparados con cifras ficticias.",
        "bullets": [
          "Campañas y segmentos vinculados al seguimiento.",
          "Porcentajes de contacto y conversión.",
          "Lectura del embudo por estados comerciales.",
          "Coste por lead y coste por adquisición según la inversión registrada."
        ],
        "note": "Las métricas reflejan los estados y la inversión registrados en el sistema; no constituyen una atribución causal del resultado a un único SMS."
      },
      {
        "id": "integracion",
        "title": "Comunicación y seguimiento como un solo producto",
        "body": "La relación entre SMS y MKT permite documentar un recorrido completo: organizar una audiencia, iniciar el contacto, continuar la gestión y consultar el avance de las oportunidades. El valor de la solución está en conectar esas tareas y ofrecer interfaces específicas para cada momento.",
        "bullets": [
          "Un portal orientado a la ejecución de mensajes.",
          "Un panel orientado al seguimiento y las métricas.",
          "Estados de contactos que permiten interpretar el avance.",
          "Integración de un servicio externo de mensajería con herramientas propias."
        ]
      }
    ],
    "outcomes": [
      "Comunicación por SMS y seguimiento comercial conectados.",
      "Audiencias organizadas mediante contactos y segmentos.",
      "Indicadores basados en el avance registrado de los leads."
    ],
    "links": [
      {
        "label": "Ver portal SMS",
        "url": "https://sms.intiwasischool.com/"
      }
    ],
    "related": [
      "intiwasi-email-marketing",
      "beaware-recruit"
    ],
    "demoNote": "Las cifras de la campaña y del embudo son ficticias y se utilizan para mostrar la interfaz. No representan resultados comerciales reales."
  },
  {
    "slug": "intiwasi-email-marketing",
    "title": "Intiwasi · Email marketing",
    "client": "Intiwasi Spanish Immersion School",
    "description": "Mailer y Newsletter Studio: composición visual, listas de destinatarios, biblioteca de ediciones y gestión de envíos masivos.",
    "tagline": "Crear, organizar y enviar comunicaciones desde herramientas propias.",
    "image": "/cases/images/newsletter.webp",
    "categories": [
      "Aplicaciones",
      "Marketing",
      "Automatización"
    ],
    "type": "Suite de comunicación y email marketing",
    "year": "2026",
    "role": "Diseño de producto, desarrollo de editores y servicios de envío",
    "intro": "Construí dos herramientas complementarias para la comunicación por correo: Mailer, orientado a redactar campañas y gestionar destinatarios y envíos, y Newsletter Studio, un constructor visual de ediciones con bloques, biblioteca y preparación de envío. Juntas cubren desde la composición del contenido hasta su entrega mediante colas de correo.",
    "challenge": "El trabajo de comunicación exige más que un editor de texto. El equipo necesita preparar diseños repetibles, mantener imágenes disponibles, seleccionar destinatarios sin duplicaciones y consultar qué ocurrió con un envío.",
    "solution": "Una suite con dos experiencias de composición y servicios de envío propios. Mailer resuelve la redacción y las listas; Newsletter Studio permite construir publicaciones por secciones, guardar ediciones y recuperar versiones. La entrega se procesa en colas separadas de la interfaz.",
    "tech": [
      "JavaScript",
      "HTML para email",
      "CSS",
      "Python",
      "SQLite",
      "SMTP",
      "Colas de envío"
    ],
    "flow": [
      "Crear contenido",
      "Revisar diseño",
      "Definir destinatarios",
      "Preparar y probar",
      "Encolar y consultar resultado"
    ],
    "sections": [
      {
        "id": "newsletters",
        "title": "Un constructor para publicaciones recurrentes",
        "body": "Newsletter Studio permite editar bloques de contenido y ver el resultado en una vista previa. Las secciones admiten noticias con imagen, texto, banners y filas de artículos. El equipo puede ordenar, duplicar o retirar bloques, revisar la composición en escritorio y móvil y exportar HTML para correo.",
        "image": "/cases/images/newsletter.webp",
        "caption": "Newsletter Studio con una plantilla semanal de Intiwasi abierta para mostrar la composición. No se guardó ni envió una campaña durante esta revisión.",
        "bullets": [
          "Bloques de texto, imágenes, banners y columnas.",
          "Edición sobre la vista previa y formularios de contenido.",
          "Reordenamiento, duplicación, deshacer y rehacer.",
          "HTML con tablas y estilos en línea para su uso en correo."
        ],
        "gallery": [
          {
            "image": "/cases/images/newsletter-mobile.webp",
            "caption": "Revisión de la plantilla semanal en modo móvil dentro de Newsletter Studio, sin guardar ni enviar una edición."
          }
        ]
      },
      {
        "id": "biblioteca",
        "title": "Una biblioteca para dar continuidad a cada edición",
        "body": "Las ediciones pueden guardarse en una biblioteca compartida con acceso del equipo. El sistema conserva versiones, permite recuperar una revisión como copia y dispone de papelera con restauración. También mantiene opciones de importación y respaldo en JSON.",
        "bullets": [
          "Biblioteca de newsletters y vista previa de ediciones.",
          "Versiones guardadas y recuperación como copia.",
          "Papelera y restauración.",
          "Subida de imágenes, borradores locales y respaldo editable."
        ]
      },
      {
        "id": "mailer",
        "title": "Mailer: redacción y audiencias en una interfaz",
        "body": "Mailer reúne asunto, destinatarios y contenido enriquecido, con vista previa del mensaje. Las listas permiten seleccionar audiencias y completar destinatarios deduplicados; el flujo incluye copia, copia oculta, versión alternativa en texto y envío de prueba.",
        "image": "/cases/images/mailer.webp",
        "caption": "Mailer con listas y contenido ficticios para mostrar redacción, selección de audiencia y vista previa. No se realizó ningún envío.",
        "bullets": [
          "Editor enriquecido con imágenes, enlaces y estructura de contenido.",
          "Gestión e importación de listas de destinatarios.",
          "Selección de listas y deduplicación de direcciones.",
          "Vista previa, prueba y preparación del envío."
        ]
      },
      {
        "id": "envios",
        "title": "La entrega tiene su propia operación",
        "body": "Los servicios de correo separan la creación de una campaña de su procesamiento por SMTP. La interfaz registra un trabajo en cola y permite consultar su avance y resultado. Newsletter Studio también incorpora preparación de envío y consulta del historial desde su propio entorno.",
        "bullets": [
          "Colas de entrega procesadas por workers.",
          "Consulta del estado y del resultado de los envíos.",
          "Registro de direcciones aceptadas o rechazadas por el servicio.",
          "Controles para reducir duplicaciones accidentales de trabajos de envío."
        ],
        "note": "La aceptación por SMTP indica el resultado de entrega al servicio de correo. No se presenta como medición de apertura, clic ni llegada garantizada a la bandeja de entrada."
      }
    ],
    "outcomes": [
      "Composición visual y operación de envío dentro de herramientas propias.",
      "Ediciones reutilizables con biblioteca, versiones y recuperación.",
      "Gestión de audiencias y trazabilidad del procesamiento por correo."
    ],
    "links": [
      {
        "label": "Ver Mailer",
        "url": "https://mailer.intiwasischool.com/"
      },
      {
        "label": "Ver Newsletter Studio",
        "url": "https://newsletter.intiwasischool.com/"
      }
    ],
    "related": [
      "intiwasi-sms-marketing",
      "controla-studio"
    ],
    "demoNote": "Las listas, destinatarios y contenido comercial de los ejemplos son ficticios. Las capturas no corresponden a envíos realizados."
  },
  {
    "slug": "radio-vesanico",
    "title": "Radio Vesánico · Plataforma de radio y contenidos",
    "client": "Radio Vesánico",
    "description": "Una radio independiente que reúne transmisión, noticias, agenda, programas, podcasts y tienda en una sola plataforma.",
    "tagline": "De una señal de radio a un medio digital con identidad propia.",
    "image": "/cases/images/radio-home.webp",
    "categories": [
      "Aplicaciones",
      "Streaming",
      "CMS"
    ],
    "type": "Plataforma de medios digitales",
    "year": "2026",
    "role": "Diseño de experiencia y desarrollo de la plataforma web",
    "intro": "La nueva web de Radio Vesánico organiza la experiencia del oyente alrededor de la transmisión y la conecta con la actividad editorial y cultural de la radio. Un mismo producto reúne escucha, noticias, agenda, programación, podcasts y una tienda, con una identidad visual de alto contraste y una navegación adaptada a móvil.",
    "challenge": "Una radio digital necesita dar continuidad a la escucha mientras el público descubre noticias, programas y actividades. La presentación del contenido debe conservar la personalidad del medio y permitir que cada sección tenga su propio espacio dentro de una experiencia coherente.",
    "solution": "Una plataforma con reproductor principal y minirreproductor persistente, secciones editoriales separadas, programación por días, catálogo de podcasts y una tienda pública. La nueva interfaz utiliza tipografía expresiva, contraste y acentos de color para dar una identidad común a las distintas funciones.",
    "tech": [
      "React",
      "JavaScript",
      "Streaming de audio",
      "API de contenidos"
    ],
    "flow": [
      "Entrar a la radio",
      "Consultar la transmisión",
      "Explorar noticias y agenda",
      "Descubrir programas y podcasts",
      "Visitar la tienda o apoyar la radio"
    ],
    "sections": [
      {
        "id": "escucha",
        "title": "La transmisión como punto de entrada",
        "body": "La portada muestra el tema en reproducción y los controles de escucha y volumen. Al recorrer otras pantallas aparece un minirreproductor inferior que mantiene accesible el control de la radio sin ocupar el centro de cada sección.",
        "image": "/cases/images/radio-home.webp",
        "caption": "Portada actual de radiovesanico.com, con identidad editorial, transmisión y acceso directo a la escucha."
      },
      {
        "id": "noticias",
        "title": "Un espacio editorial para la escena musical",
        "body": "Noticias dispone de una pantalla propia para consultar la cobertura de la radio. La plataforma diferencia el contenido editorial de la transmisión, manteniendo la navegación y la identidad compartidas.",
        "image": "/cases/images/radio-noticias.webp",
        "caption": "Sección pública de noticias de la nueva plataforma."
      },
      {
        "id": "agenda",
        "title": "Agenda que conecta el medio con los eventos",
        "body": "La agenda presenta conciertos y actividades de la escena. La vista también separa los eventos pasados, de modo que el contenido puede conservarse como archivo sin confundirse con próximas fechas.",
        "image": "/cases/images/radio-agenda.webp",
        "caption": "Agenda pública con acceso a eventos y archivo de actividades pasadas."
      },
      {
        "id": "programas",
        "title": "Programación organizada por días",
        "body": "La pantalla Programas permite recorrer la semana mediante pestañas. Cada programa presenta nombre, descripción, hora y duración para que el oyente identifique los espacios que le interesan.",
        "image": "/cases/images/radio-programas.webp",
        "caption": "Parrilla semanal con selección de día y fichas de programas; el minirreproductor permanece disponible."
      },
      {
        "id": "podcasts",
        "title": "Contenido para escuchar fuera del directo",
        "body": "La sección de podcasts da un lugar propio al contenido bajo demanda. Esta separación amplía la experiencia más allá del tema que esté sonando en vivo y facilita descubrir otras publicaciones de la radio.",
        "image": "/cases/images/radio-podcast.webp",
        "caption": "Pantalla de podcasts integrada en la navegación del medio."
      },
      {
        "id": "tienda",
        "title": "Una dimensión comercial dentro del mismo producto",
        "body": "La tienda tiene una sección propia para presentar merchandising y productos de sellos independientes. Comparte la estructura de navegación y la identidad de la radio, integrando el catálogo en la experiencia del medio.",
        "image": "/cases/images/radio-tienda.webp",
        "caption": "Catálogo público de la tienda. La revisión no incluyó compras ni pagos."
      },
      {
        "id": "movil",
        "title": "La misma identidad en una pantalla pequeña",
        "body": "La composición adapta el encabezado, la tipografía y la transmisión a móvil. La prioridad es que el oyente encuentre la radio y pueda continuar explorando el contenido sin depender de una interfaz de escritorio.",
        "image": "/cases/images/radio-mobile.webp",
        "caption": "Vista móvil real de la portada actual, capturada a 390 píxeles de ancho."
      },
      {
        "id": "administracion",
        "title": "CMS y acceso de administración separado",
        "body": "El proyecto cuenta con una entrada de administración separada y protegida por inicio de sesión. La autogestión editorial forma parte de la plataforma: la radio dispone de un espacio de trabajo propio, mientras el público accede a las publicaciones y a la escucha desde el sitio principal."
      }
    ],
    "links": [
      {
        "label": "Visitar Radio Vesánico",
        "url": "https://radiovesanico.com/"
      }
    ],
    "related": [
      "intiwasi-web",
      "beaware-web",
      "controla-studio"
    ],
    "outcomes": [
      "Una experiencia común para transmisión y contenido editorial.",
      "Programación semanal, archivo de podcasts y agenda accesibles desde la misma navegación.",
      "Un espacio comercial integrado mediante la tienda pública.",
      "Controles de escucha persistentes al explorar otras secciones."
    ]
  }
];
