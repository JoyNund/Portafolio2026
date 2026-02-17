// Theme Toggle (Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.classList.add('dark');
}

themeToggle?.addEventListener('click', () => {
    html.classList.toggle('dark');
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
    
    const menuIcon = mobileMenuButton.querySelector('.mobile-menu-icon');
    const closeIcon = mobileMenuButton.querySelector('.mobile-menu-close');
    
    menuIcon?.classList.toggle('hidden');
    closeIcon?.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        mobileMenuButton.classList.remove('active');
        
        const menuIcon = mobileMenuButton.querySelector('.mobile-menu-icon');
        const closeIcon = mobileMenuButton.querySelector('.mobile-menu-close');
        
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
    });
});

// About Modal
const aboutBtn = document.getElementById('about-btn');
const aboutBtnMobile = document.getElementById('about-btn-mobile');
const aboutModal = document.getElementById('about-modal');
const closeModal = document.getElementById('close-modal');
const nameTitle = document.getElementById('name-title');

function openAboutModal() {
    aboutModal?.classList.remove('hidden');
    aboutModal?.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeAboutModal() {
    aboutModal?.classList.remove('active');
    setTimeout(() => {
        aboutModal?.classList.add('hidden');
    }, 300);
    document.body.classList.remove('modal-open');
}

aboutBtn?.addEventListener('click', openAboutModal);
aboutBtnMobile?.addEventListener('click', openAboutModal);
nameTitle?.addEventListener('click', openAboutModal); // Agregar click al nombre
closeModal?.addEventListener('click', closeAboutModal);

aboutModal?.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        closeAboutModal();
    }
});

// Scroll Down Button
const scrollDownBtn = document.getElementById('scroll-down');
scrollDownBtn?.addEventListener('click', () => {
    const proyectosSection = document.getElementById('proyectos');
    proyectosSection?.scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Projects Data (from original script.js)
const projects = [
    {
        title: 'Flujo Comercial para Empresas',
        description: 'Automatización completa del proceso de captación de leads',
        image: 'project7/cover.png',
        categories: ['Automatización', 'Marketing', 'CRM'],
        tagline: 'De la campaña al cierre: automatiza todo el embudo de ventas sin intervención manual',
        fullDescription: `
            Sistema integral de automatización del flujo comercial que conecta campañas de
            advertising (Google Ads, Facebook Ads, LinkedIn) con formularios de captación,
            hojas de cálculo como backup, y un CRM propio (Controla CRM) donde los leads son
            atendidos por agentes de IA (Controla Agentes) o asesores humanos.
        `,
        role: 'Arquitecto de Automatizaciones & Desarrollador Full Stack',
        client: 'Controla Digital',
        duration: '7 meses',
        year: '2025',
        challenge: `
            Las empresas perdían leads valiosos por procesos manuales de captación y
            seguimiento. La data de campañas se dispersaba en múltiples plataformas,
            los formularios no se integraban con sistemas CRM, y el seguimiento dependía
            de la iniciativa humana, resultando en oportunidades perdidas y baja conversión.
        `,
        solution: `
            Creamos un flujo automatizado end-to-end: los CTAs de campañas dirigen a
            formularios (integrados en plataformas de ads o landing pages), la data se
            respalda automáticamente en Google Sheets, y mediante Google Apps Script se
            sincroniza en tiempo real con Controla CRM, donde cada lead es asignado a un
            agente de IA o asesor humano para seguimiento inmediato.
        `,
        process: [
            {
                title: 'Campañas y Formularios',
                description: `
                    Configuramos campañas en Google Ads, Facebook Ads y LinkedIn con CTAs
                    optimizados que dirigen a formularios de captación. Estos pueden estar
                    integrados nativamente en las plataformas de ads o alojados en landing
                    pages personalizadas con tracking de conversiones.
                `,
                image: 'project7/p1.png',
                caption: 'Estructura de campañas multi-plataforma'
            },
            {
                title: 'Backup en Google Sheets',
                description: `
                    Implementamos un sistema de respaldo automático donde cada lead
                    capturado se guarda instantáneamente en una hoja de cálculo de Google,
                    proporcionando un backup accesible y permitiendo análisis ad-hoc
                    sin depender del CRM.
                `,
                image: 'project7/p2.webp',
                caption: 'Hoja de cálculo con leads capturados'
            },
            {
                title: 'Integración con Apps Script',
                description: `
                    Desarrollamos scripts personalizados que monitorean cambios en la
                    hoja de cálculo y sincronizan automáticamente los nuevos leads con
                    Controla CRM, mapeando campos, normalizando datos y asignando
                    etiquetas según la fuente de origen.
                `,
                image: 'project7/p3.webp',
                caption: 'Script de sincronización automática'
            },
            {
                title: 'Distribución en CRM',
                description: `
                    En Controla CRM, los leads se distribuyen automáticamente según
                    reglas de asignación: por fuente, por valor estimado, por ubicación
                    geográfica. Cada lead es atendido por Controla Agentes (IA) o
                    asignado a un asesor humano según complejidad y prioridad.
                `,
                image: 'project7/p4.webp',
                caption: 'Distribución automática de leads'
            },
            {
                title: 'Seguimiento y Cierre',
                description: `
                    El sistema automatiza seguimientos mediante WhatsApp, email o SMS,
                    registra todas las interacciones en el CRM, actualiza el estado del
                    lead en el pipeline y notifica a los asesores cuando se requiere
                    intervención humana para cierre.
                `,
                image: 'project7/p5.webp',
                caption: 'Pipeline de seguimiento de leads'
            }
        ],
        results: [
            {
                metric: '90%',
                description: 'Reducción en tiempo de primer contacto'
            },
            {
                metric: '3x',
                description: 'Incremento en tasa de conversión'
            },
            {
                metric: '100%',
                description: 'Leads registrados sin pérdida de data'
            },
            {
                metric: '70%',
                description: 'Reducción en trabajo manual de seguimiento'
            }
        ],
        learnings: [
            {
                title: 'La Velocidad es Clave',
                description: `
                    Contactar leads dentro de los primeros 5 minutos incrementa
                    drásticamente la probabilidad de conversión. La automatización
                    elimina los retrasos humanos.
                `
            },
            {
                title: 'Backup es Esencial',
                description: `
                    Tener un respaldo en Google Sheets proporcionó tranquilidad a los
                    clientes y permitió análisis de data sin sobrecargar el CRM con
                    consultas ad-hoc.
                `
            },
            {
                title: 'Integración Sin Fricción',
                description: `
                    Usar Google Apps Script como puente entre Sheets y el CRM resultó
                    ser una solución económica, confiable y fácil de mantener para
                    las PYMEs.
                `
            }
        ]
    },
    {
        title: 'Agentes de ventas',
        description: 'Agentes de IA para atención al cliente y cierre de ventas en WhatsApp',
        image: 'project6/cover.png',
        categories: ['IA', 'WhatsApp', 'Automatización'],
        tagline: 'Potencia tu negocio con agentes inteligentes que atienden, califican y cierran ventas 24/7',
        fullDescription: `
            Plataforma de creación y gestión de agentes de IA para WhatsApp Business. Permite
            configurar modelos de lenguaje personalizados, definir personalidades y reglas de
            conversación, vincular sesiones de WhatsApp mediante QR y monitorear todas las
            interacciones con sistema de etiquetado inteligente.
        `,
        role: 'Desarrollador Full Stack & Ingeniero de IA',
        client: 'Controla Digital',
        duration: '6 meses',
        year: '2025',
        challenge: `
            Las empresas necesitaban automatizar la atención al cliente y el proceso de ventas
            en WhatsApp sin perder la calidad del trato humano. El desafío era crear agentes
            que pudieran mantener conversaciones naturales, seguir instrucciones específicas
            y escalar a humanos cuando fuera necesario.
        `,
        solution: `
            Desarrollamos Controla Agentes, una plataforma que permite crear agentes de IA
            configurables con modelos de lenguaje a elección, personalizar su personalidad
            y reglas de negocio, vincularlos a sesiones de WhatsApp reales mediante escaneo
            QR, y monitorear todas las conversaciones con un sistema de etiquetado para
            análisis y mejora continua.
        `,
        process: [
            {
                title: 'Configuración del Agente',
                description: `
                    Diseñamos una interfaz intuitiva donde los usuarios pueden seleccionar
                    el modelo de IA, definir instrucciones personalizadas, establecer la
                    personalidad del agente (tono, estilo, formalidad) y configurar reglas
                    de negocio específicas como horarios de atención y escalado a humanos.
                `,
                image: 'project6/p1.png',
                caption: 'Panel de configuración del agente'
            },
            {
                title: 'Vinculación con WhatsApp',
                description: `
                    Implementamos un sistema de vinculación mediante QR code que conecta
                    el agente con una sesión real de WhatsApp Web, permitiendo que el agente
                    opere desde un número existente sin necesidad de APIs costosas de
                    WhatsApp Business.
                `,
                image: 'project6/p2.webp',
                caption: 'Escaneo QR para vinculación'
            },
            {
                title: 'Monitoreo y Etiquetado',
                description: `
                    Creamos un dashboard de monitoreo donde se pueden revisar todas las
                    conversaciones del agente, agregar etiquetas personalizadas (ej: "lead
                    caliente", "requiere seguimiento", "venta cerrada") y filtrar por estado,
                    fecha o tipo de interacción para análisis y reporting.
                `,
                image: 'project6/p3.webp',
                caption: 'Dashboard de conversaciones etiquetadas'
            }
        ],
        results: [
            {
                metric: '80%',
                description: 'Reducción en tiempo de respuesta'
            },
            {
                metric: '24/7',
                description: 'Disponibilidad del agente'
            },
            {
                metric: '35%',
                description: 'Incremento en tasa de cierre de ventas'
            },
            {
                metric: '1000+',
                description: 'Conversaciones manejadas por agente/mes'
            }
        ],
        learnings: [
            {
                title: 'Personalidad Importa',
                description: `
                    Los agentes con personalidad bien definida y alineada a la marca
                    lograron mayor engagement y confianza por parte de los clientes.
                `
            },
            {
                title: 'Escalado Oportuno',
                description: `
                    Identificar cuándo escalar a un humano es crucial. Los agentes deben
                    reconocer sus limitaciones y transferir conversaciones complejas
                    sin frustrar al usuario.
                `
            },
            {
                title: 'El Etiquetado Empodera',
                description: `
                    El sistema de etiquetado permitió a las empresas analizar patrones,
                    identificar objeciones comunes y optimizar continuamente las
                    respuestas del agente.
                `
            }
        ]
    },
    {
        title: 'Controla PM (Project manager)',
        description: 'Gestor de proyectos híbrido con IA integrada',
        image: 'project5/cover.png',
        categories: ['Desarrollo web', 'Project Management', 'IA'],
        tagline: 'La evolución en gestión de proyectos: Kanban, Gantt, calendario e IA colaborativa en un solo lugar',
        fullDescription: `
            Sistema completo de gestión de proyectos que combina lo mejor de múltiples
            metodologías: vista Kanban para flujo visual, diagramas de Gantt para
            planificación temporal, calendario para deadlines y un asistente de IA
            integrado en cada tarea. Incluye gestión de roles, chat colaborativo,
            notas personales y fusión de tareas en supertareas.
        `,
        role: 'Desarrollador Full Stack & Arquitecto de Software',
        client: 'Controla Digital',
        duration: '8 meses',
        year: '2025',
        challenge: `
            Los equipos de proyecto necesitaban una herramienta que unificara múltiples
            vistas de trabajo (Kanban, Gantt, calendario) sin perder funcionalidades
            clave como colaboración en tiempo real, seguimiento de deadlines y asistencia
            inteligente. Las soluciones existentes fragmentaban estas capacidades en
            diferentes herramientas.
        `,
        solution: `
            Creamos Controla PM, un project manager híbrido que integra vistas múltiples
            intercambiables, sistema de roles granular, chat de equipo, notas personales,
            fusión de tareas y un agente de IA conversacional integrado en cada tarea
            que asiste en la planificación, priorización y ejecución del trabajo.
        `,
        process: [
            {
                title: 'Diseño del Sistema Híbrido',
                description: `
                    Desarrollamos un esquema cuasi-Kanban que mantiene la flexibilidad
                    del método tradicional mientras incorpora elementos de planificación
                    temporal. Cada tarea puede visualizarse como tarjeta, entrada de
                    calendario o barra en diagrama de Gantt según la vista seleccionada.
                `,
                image: 'project5/p1.png',
                caption: 'Vista híbrida Kanban-Gantt'
            },
            {
                title: 'Integración de IA',
                description: `
                    Implementamos un agente de chat con IA entrenado para asistir en
                    gestión de proyectos. Cada tarea tiene su propio agente contextual
                    que puede ayudar con estimaciones, desglose de subtareas, identificación
                    de dependencias y recomendaciones de priorización.
                `,
                image: 'project5/p2.webp',
                caption: 'Agente de IA asistiendo en una tarea'
            },
            {
                title: 'Dashboard Inteligente',
                description: `
                    Diseñamos un dashboard central con tarjetas de tareas filtrables por
                    prioridad, estado y responsable. Incluye segmentación por vistas
                    temporal (diaria, semanal, mensual) y alertas proactivas de deadlines
                    próximos.
                `,
                image: 'project5/p3.webp',
                caption: 'Dashboard con filtros inteligentes'
            },
            {
                title: 'Colaboración en Tiempo Real',
                description: `
                    Construimos un sistema de chat colaborativo integrado, comentarios
                    en tareas, asignación de responsables con notificaciones push y
                    una microapp de notas personales para cada usuario, permitiendo
                    capturar ideas rápidas sin salir de la plataforma.
                `,
                image: 'project5/p4.webp',
                caption: 'Chat de equipo y notas personales'
            }
        ],
        results: [
            {
                metric: '40%',
                description: 'Mejora en cumplimiento de deadlines'
            },
            {
                metric: '3x',
                description: 'Reducción en reuniones de seguimiento'
            },
            {
                metric: '85%',
                description: 'Adopción por equipos en el primer mes'
            },
            {
                metric: '500+',
                description: 'Tareas asistidas por IA diariamente'
            }
        ],
        learnings: [
            {
                title: 'Flexibilidad es Clave',
                description: `
                    Permitir que los usuarios cambien entre vistas (Kanban/Gantt/Calendario)
                    según su preferencia personal aumentó significativamente la satisfacción
                    y productividad del equipo.
                `
            },
            {
                title: 'IA Contextual Funciona',
                description: `
                    El agente de IA integrado directamente en el contexto de cada tarea
                    demostró ser más efectivo que los asistentes generales, ya que
                    comprende el estado, dependencias y historial específico.
                `
            },
            {
                title: 'Micro-herramientas Internas',
                description: `
                    La inclusión de notas personales y chat integrado redujo la necesidad
                    de herramientas externas, manteniendo a los equipos enfocados en
                    una sola plataforma.
                `
            }
        ]
    },
    {
        title: 'Radio Vesánico',
        description: 'Radio y portal web de rock de culto y dark wave con CMS propio',
        image: 'project9/cover.png',
        categories: ['Desarrollo web', 'Streaming', 'CMS'],
        tagline: 'La voz del rock de culto y dark wave: promueve bandas locales, transmite 24/7 y conecta a la escena alternativa peruana',
        fullDescription: `
            Radio Vesánico es una plataforma integral que combina radio en streaming,
            portal de noticias y web app interactiva. Orientada a la música rock de culto
            y dark wave, promueve bandas locales del Perú y cuenta con un CMS personalizado
            para gestionar noticias, eventos, programación y podcasts. Su reproductor
            incorpora un visualizer con Web Audio API que reacciona a la intensidad de la música.
        `,
        role: 'Desarrollador Full Stack & Diseñador de Producto',
        client: 'Radio Vesánico',
        duration: '10 meses',
        year: '2024',
        challenge: `
            La escena de rock de culto y dark wave en Perú carecía de un espacio digital
            unificado que combinara transmisión en vivo, difusión de bandas locales y
            contenido editorial. Se necesitaba una plataforma con identidad visual distintiva
            que capturara la esencia oscura y alternativa del género.
        `,
        solution: `
            Desarrollamos Radio Vesánico como una web app completa con diseño inmersivo
            y atmosférico. Incluye un CMS personalizado para autogestión de contenido,
            streaming de audio 24/7, reproductor con visualizer en tiempo real, y secciones
            dedicadas a noticias, eventos, programación y podcasts de la escena alternativa.
        `,
        process: [
            {
                title: 'Diseño Dark Wave',
                description: `
                    Desarrollamos una UI inmersiva con predominancia negra, acentos en rojo
                    intenso y matices violetas que capturan la esencia del dark wave y rock
                    de culto. La interfaz incorpora el visualizer como elemento central,
                    creando una experiencia visual que reacciona a la música en tiempo real.
                `,
                image: 'project9/p1.png',
                caption: 'Interfaz dark wave con visualizer integrado'
            },
            {
                title: 'CMS para Gestión de Contenido',
                description: `
                    Construimos un panel de administración completo para gestionar noticias,
                    eventos, podcasts y programación. El CMS permite publicar contenido
                    dinámicamente sin intervención técnica, manteniendo el portal siempre
                    actualizado con lo último de la escena alternativa.
                `,
                image: 'project9/p2.webp',
                caption: 'Panel CMS de administración'
            },
            {
                title: 'Visualizer con Web Audio API',
                description: `
                    Implementamos un visualizer que analiza el espectro de audio en tiempo
                    real usando Web Audio API. Las animaciones se intensifican con la música,
                    mostrando frecuencias, picos de volumen y patrones visuales que hacen
                    la experiencia más inmersiva.
                `,
                image: 'project9/p3.gif',
                caption: 'Visualizer reaccionando al audio'
            },
            {
                title: 'Portal de Noticias y Eventos',
                description: `
                    Creamos una sección editorial dedicada a noticias de la escena dark wave
                    y rock de culto, además de un calendario de eventos donde los usuarios
                    pueden descubrir conciertos, lanzamientos y actividades relacionadas.
                `,
                image: 'project9/p4.webp',
                caption: 'Portal de noticias y eventos'
            },
            {
                title: 'Parrilla de Programación',
                description: `
                    Diseñamos un calendario interactivo que muestra la programación semanal
                    de la radio. Los usuarios pueden ver qué programas están al aire,
                    explorar la parrilla por días y configurar recordatorios para sus
                    programas favoritos.
                `,
                image: 'project9/p5.webp',
                caption: 'Calendario con programación semanal'
            },
            {
                title: 'Panel de Comentarios Interactivo',
                description: `
                    Integramos un sistema de comentarios en tiempo real que permite a los
                    oyentes interactuar durante las transmisiones, solicitar canciones y
                    participar en la comunidad. El panel se sincroniza con el reproductor
                    para mostrar comentarios contextualizados a cada tema.
                `,
                image: 'project9/p6.webp',
                caption: 'Panel de comentarios en vivo'
            },
            {
                title: 'Widget de Letras LRCLIB',
                description: `
                    Incorporamos integración con LRCLIB para mostrar letras sincronizadas
                    de las canciones en reproducción. El widget muestra la letra en tiempo
                    real, resaltando el verso actual y permitiendo a los usuarios seguir
                    la música mientras leen.
                `,
                image: 'project9/p7.webp',
                caption: 'Widget de letras sincronizadas'
            }
        ],
        results: [
            {
                metric: '50+',
                description: 'Bandas locales promovidas'
            },
            {
                metric: '10K+',
                description: 'Oyentes mensuales'
            },
            {
                metric: '24/7',
                description: 'Transmisión continua'
            },
            {
                metric: '200+',
                description: 'Noticias y eventos publicados'
            }
        ],
        learnings: [
            {
                title: 'Identidad Visual Fuerte',
                description: `
                    Un diseño coherente con la esencia del género musical fue crucial
                    para conectar con la audiencia objetivo y diferenciar la plataforma
                    de otras opciones mainstream.
                `
            },
            {
                title: 'Web Audio API es Poderosa',
                description: `
                    El visualizer en tiempo real añadió una capa de inmersión que los
                    usuarios valoraron enormemente, transformando la experiencia de solo
                    audio en algo multisensorial.
                `
            },
            {
                title: 'Autogestión Empodera',
                description: `
                    El CMS personalizado permitió al equipo de Radio Vesánico publicar
                    contenido sin depender de desarrolladores, agilizando la cobertura
                    de eventos y noticias de la escena.
                `
            }
        ]
    },
    {
        title: 'App-Center',
        description: 'Tienda de aplicaciones y launcher para web apps de productividad',
        image: 'project4/cover.png',
        categories: ['Desarrollo web', 'Apps', 'UI/UX'],
        tagline: 'Un ecosistema unificado para descubrir, adquirir y ejecutar web apps empresariales',
        fullDescription: `
            Plataforma integral que funciona como tienda de aplicaciones y launcher para web apps
            de productividad empresarial. Los usuarios pueden explorar el catálogo de aplicaciones,
            adquirir licencias y lanzar las apps directamente desde la plataforma, todo en un
            mismo entorno centralizado.
        `,
        role: 'Desarrollador Full Stack & Diseñador de Producto',
        client: 'Controla Digital',
        duration: '5 meses',
        year: '2025',
        challenge: `
            Las empresas necesitaban una forma sencilla de distribuir y gestionar sus web apps
            de productividad entre los empleados. Existía la necesidad de unificar el acceso,
            la gestión de licencias y la ejecución de aplicaciones en una sola plataforma
            intuitiva y segura.
        `,
        solution: `
            Desarrollamos App-Center, un hub centralizado que combina tienda de aplicaciones
            con launcher integrado. Los usuarios pueden navegar el catálogo sin registrarse,
            pero al adquirir una app e iniciar sesión, obtienen acceso inmediato desde la
            sección "Mis Apps" o directamente desde las tarjetas del catálogo.
        `,
        process: [
            {
                title: 'Investigación y Arquitectura',
                description: `
                    Analizamos los flujos de usuarios y definimos una arquitectura que separa
                    claramente el modo exploración (sin login) del modo usuario (con apps
                    adquiridas), optimizando la experiencia de descubrimiento y acceso.
                `,
                image: 'project4/p1.png',
                caption: 'Arquitectura de la plataforma'
            },
            {
                title: 'Diseño de Interfaz',
                description: `
                    Creamos una interfaz limpia que prioriza el descubrimiento visual de
                    aplicaciones, con tarjetas informativas, categorías claras y un sistema
                    de estados que indica claramente qué apps están disponibles, adquiridas
                    o en uso.
                `,
                image: 'project4/p2.webp',
                caption: 'Diseño de la tienda de aplicaciones'
            },
            {
                title: 'Desarrollo e Integración',
                description: `
                    Implementamos un sistema de autenticación seguro con gestión de licencias,
                    launcher integrado que abre las apps en ventanas embebidas o pestañas
                    nuevas, y sincronización en tiempo real del estado de cada aplicación.
                `,
                image: 'project4/p3.webp',
                caption: 'Launcher integrado en acción'
            }
        ],
        results: [
            {
                metric: '25+',
                description: 'Web apps disponibles en el catálogo'
            },
            {
                metric: '99.9%',
                description: 'Uptime del launcher'
            },
            {
                metric: '60%',
                description: 'Reducción en tiempo de acceso a apps'
            }
        ],
        learnings: [
            {
                title: 'Experiencia Sin Fricción',
                description: `
                    Permitir la exploración sin registro aumentó significativamente las
                    conversiones, ya que los usuarios podían evaluar las apps antes de
                    comprometerse.
                `
            },
            {
                title: 'Centralización Eficiente',
                description: `
                    Unificar tienda y launcher en una sola plataforma mejoró la adopción
                    y redujo la resistencia al cambio en las empresas.
                `
            }
        ]
    },
    {
        title: 'Escuela RE/MAX Focus',
        description: 'Plataforma de formación de agentes inmobiliarios',
        image: 'project1/cover.png',
        categories: ['Desarrollo web', 'E-learning'],
        tagline: 'Transformando la educación inmobiliaria con tecnología de vanguardia',
        fullDescription: `
            Desarrollo de una plataforma e-learning completa para la capacitación de agentes 
            inmobiliarios. Incluye cursos interactivos, evaluaciones en línea, certificaciones 
            y un sistema de gestión de aprendizaje (LMS) personalizado.
        `,
        role: 'Desarrollador Full Stack & Diseñador UX',
        client: 'RE/MAX Focus',
        duration: '4 meses',
        year: '2024',
        challenge: `
            RE/MAX necesitaba modernizar su programa de capacitación para agentes inmobiliarios,
            pasando de sesiones presenciales a un formato digital que permitiera escalar
            la formación sin perder calidad educativa.
        `,
        solution: `
            Creamos una plataforma e-learning robusta con contenido multimedia interactivo,
            sistema de evaluaciones automatizado, seguimiento de progreso en tiempo real
            y certificaciones digitales verificables.
        `,
        process: [
            {
                title: 'Análisis y Arquitectura',
                description: `
                    Realizamos un análisis exhaustivo de las necesidades educativas y definimos
                    la arquitectura de la plataforma, priorizando la escalabilidad y la experiencia
                    de usuario tanto para estudiantes como administradores.
                `,
                image: 'project1/p1.png',
                caption: 'Arquitectura de la plataforma'
            },
            {
                title: 'Diseño de Interfaz',
                description: `
                    Desarrollamos una interfaz intuitiva que facilita la navegación entre cursos,
                    con un dashboard personalizado que muestra el progreso del estudiante y
                    recomendaciones de contenido.
                `,
                image: 'project1/p2.webp',
                caption: 'Dashboard del estudiante'
            },
            {
                title: 'Desarrollo e Integración',
                description: `
                    Implementamos la plataforma utilizando tecnologías modernas, integrando
                    sistemas de video conferencia, evaluaciones interactivas y un sistema
                    de certificaciones automatizado.
                `,
                image: 'project1/p3.webp',
                caption: 'Sistema de cursos interactivos'
            }
        ],
        results: [
            {
                metric: '200+',
                description: 'Agentes capacitados en el primer mes'
            },
            {
                metric: '95%',
                description: 'Tasa de finalización de cursos'
            },
            {
                metric: '40%',
                description: 'Reducción en costos de capacitación'
            }
        ],
        learnings: [
            {
                title: 'Gamificación Efectiva',
                description: `
                    La implementación de elementos de gamificación aumentó significativamente
                    el engagement y las tasas de finalización de los cursos.
                `
            },
            {
                title: 'Feedback Continuo',
                description: `
                    Las pruebas con usuarios reales durante el desarrollo fueron esenciales
                    para identificar y resolver problemas de usabilidad tempranamente.
                `
            }
        ]
    },
    {
        title: 'Controla CRM',
        description: 'CRM personalizable con integración de fuentes de datos múltiples',
        image: 'project8/cover.png',
        categories: ['CRM', 'Desarrollo web', 'Bases de Datos'],
        tagline: 'Un CRM que se adapta a tu negocio: integra fuentes internas y externas en una sola plataforma',
        fullDescription: `
            CRM altamente personalizable que permite integrar múltiples fuentes de datos:
            desde campañas de advertising hasta bases de datos externas como SUNAT (empresas
            registradas) y el portal de proveedores del Estado. Cada fuente de datos ocupa
            una pantalla independiente personalizable, con seguimiento de oportunidades
            mediante tableros Kanban.
        `,
        role: 'Arquitecto de Software & Desarrollador Full Stack',
        client: 'Controla Digital',
        duration: '9 meses',
        year: '2025',
        challenge: `
            Las empresas manejaban data dispersa en múltiples sistemas: leads de campañas
            en plataformas de ads, información de empresas en SUNAT, proveedores estatales
            en portales gubernamentales, y oportunidades en spreadsheets desconectados.
            Necesitaban una vista unificada sin perder la capacidad de segmentar por fuente.
        `,
        solution: `
            Diseñamos Controla CRM con una arquitectura modular de "pantallas por fuente".
            Por defecto incluye datos de campañas de ads, pero permite agregar nuevas
            fuentes (SUNAT, proveedores del Estado, APIs personalizadas) que se organizan
            en pantallas independientes. El seguimiento de oportunidades usa un modelo
            Kanban personalizable por pipeline.
        `,
        process: [
            {
                title: 'Arquitectura Modular',
                description: `
                    Desarrollamos una arquitectura basada en plugins donde cada fuente
                    de datos es un módulo independiente con su propia pantalla, campos
                    personalizados y reglas de mapeo. Esto permite agregar nuevas fuentes
                    sin modificar el núcleo del sistema.
                `,
                image: 'project8/p1.png',
                caption: 'Arquitectura modular del CRM'
            },
            {
                title: 'Integración con SUNAT',
                description: `
                    Implementamos conectores con la API de SUNAT para consultar y importar
                    datos de empresas registradas (RUC, razón social, estado, actividad
                    económica), permitiendo enriquecer leads y validar prospectos
                    automáticamente.
                `,
                image: 'project8/p2.webp',
                caption: 'Pantalla de consulta SUNAT integrada'
            },
            {
                title: 'Proveedores del Estado',
                description: `
                    Integramos conexión con el portal de proveedores del Estado (SEACE),
                    permitiendo importar registros de proveedores activos, verificar
                    habilitaciones y monitorear licitaciones relevantes para el negocio.
                `,
                image: 'project8/p3.webp',
                caption: 'Módulo de proveedores del Estado'
            },
            {
                title: 'Tableros Kanban',
                description: `
                    Diseñamos un sistema Kanban flexible donde cada fuente de datos puede
                    tener su propio pipeline de seguimiento con columnas personalizables
                    (ej: "Nuevo", "Contactado", "Propuesta", "Negociación", "Cerrado").
                    Las oportunidades se mueven mediante drag-and-drop.
                `,
                image: 'project8/p4.webp',
                caption: 'Tablero Kanban de oportunidades'
            },
            {
                title: 'Vista Unificada de Contacto',
                description: `
                    Creamos un perfil unificado de contacto/empresa que consolida toda
                    la información de las distintas fuentes: datos de SUNAT, interacciones
                    de campañas, notas del CRM, historial de comunicaciones y oportunidades
                    asociadas en una sola vista 360°.
                `,
                image: 'project8/p5.webp',
                caption: 'Perfil 360° de contacto'
            }
        ],
        results: [
            {
                metric: '5+',
                description: 'Fuentes de datos integradas'
            },
            {
                metric: '50%',
                description: 'Reducción en tiempo de investigación de leads'
            },
            {
                metric: '80%',
                description: 'Mejora en calidad de data de prospectos'
            },
            {
                metric: '25+',
                description: 'Empresas usando el CRM'
            }
        ],
        learnings: [
            {
                title: 'Flexibilidad sobre Rigidez',
                description: `
                    Permitir que cada empresa configure sus propias fuentes y pipelines
                    resultó en mayor adopción que imponer una estructura fija.
                `
            },
            {
                title: 'Data Externa Enriquece',
                description: `
                    Integrar SUNAT y proveedores del Estado permitió a los equipos de
                    ventas calificar leads con información oficial sin salir del CRM,
                    ahorrando horas de investigación manual.
                `
            },
            {
                title: 'Kanban es Universal',
                description: `
                    El modelo Kanban resonó con equipos de ventas porque visualiza
                    claramente el pipeline, identifica cuellos de botella y motiva
                    el avance de oportunidades.
                `
            }
        ]
    },
    {
        title: 'Sonidos del Encierro',
        description: 'Serie web trasmedia en el contexto de la pandemia',
        image: 'project3/cover.png',
        categories: ['Audiovisual', 'Ciberactivismo', 'Arte digital'],
        tagline: 'La autogestión para levantar la escena músical local en tiempos de aislamiento social.',
        fullDescription: `
            Projecto de serie web multiplataforma para difundir e impulsar a artistas locales
            en el contexto de la pandemia durante el año 2020.
        `,
        role: 'Director Creativo & Desarrollador',
        client: 'Raw Productora',
        duration: '8 meses',
        year: '2020',
        challenge: `
            Se necesitaba lograr captar la atención del público local en un time-span relativa corto debido
            a las condiciones del contexto de la emergencia sanitaria
        `,
        solution: `
            Se desarrolló una estrategia multiplataforma en simultaneo con lanzamientos a lo largo de un mes,
            esto incluyo: Campaña de expectativa en Redes Sociales y Youtube, desarrollo de página web, 
            playlist de artistas protagonistas de la serie en spotify, un MOD para el juego web clone hero.
        `,
        process: [
            {
                title: 'Diseño de Plataforma',
                description: `
                    Desarrollamos una arquitectura web que facilita la
                    navegación y descubrimiento de artistas, mientras mantenemos un
                    enfoque en la experiencia de usuario con servicios conectados.
                `,
                image: 'project3/p1.webp',
                caption: 'Plataforma web integrada'
            }
        ],
        results: [
            {
                metric: '30+',
                description: 'Artistas impulsados en la plataforma'
            },
            {
                metric: '17K+',
                description: 'Views'
            }
        ],
        learnings: [
            {
                title: 'El Poder de la Comunidad',
                description: `
                    La participación activa de la comunidad en el desarrollo fue
                    fundamental para crear una plataforma que realmente satisface
                    las necesidades de los artistas.
                `
            },
            {
                title: 'Innovación Tecnológica',
                description: `
                    La integración con multimedios como videojuegos
                    demostró ser lo suficiente innovadora como para
                    otorgar un incremento en la atención de usuario.
                `
            }
        ]
    },
    {
        title: 'Pawtrulla App móvil',
        description: 'App para contratar paseos para perros en la ciudad de Trujillo',
        image: 'img/app1.webp',
        categories: ['Apps', 'UI/UX', 'Startup'],
        tagline: 'Conectando dueños de mascotas con paseadores profesionales de manera segura y eficiente',
        fullDescription: `
            Desarrollo de una aplicación móvil que conecta dueños de mascotas con paseadores 
            profesionales. La app incluye sistema de reservas, seguimiento en tiempo real, 
            pagos integrados y sistema de calificaciones.
        `,
        role: 'Diseñador UI/UX & Desarrollador Frontend',
        client: 'Pawtrulla',
        duration: '6 meses',
        year: '2023',
        challenge: `
            El mercado de paseo de perros en Trujillo carecía de una solución tecnológica
            que garantizara seguridad y confianza. Los dueños de mascotas necesitaban una
            forma de encontrar y evaluar paseadores confiables.
        `,
        solution: `
            Creamos una aplicación que implementa verificación de paseadores, seguimiento
            en tiempo real de los paseos, sistema de pagos seguros y calificaciones
            verificadas. La app se diseñó priorizando la confianza y la experiencia de usuario.
        `,
        process: [
            {
                title: 'Research & UX',
                description: `
                    Realizamos una investigación exhaustiva del mercado local de paseo de perros,
                    entrevistando a dueños de mascotas y paseadores para entender sus necesidades
                    y puntos de dolor específicos.
                `,
                image: 'img/app1.webp',
                caption: 'Mapeo de la experiencia de usuario'
            },
            {
                title: 'Diseño UI',
                description: `
                    Desarrollamos un sistema de diseño completo y prototipado en Figma,
                    enfocándonos en crear una interfaz intuitiva que transmitiera confianza
                    y profesionalismo.
                `,
                image: 'img/app.webp',
                caption: 'Sistema de diseño y componentes UI'
            }
        ],
        results: [
            {
                metric: '500+',
                description: 'Usuarios activos en el primer trimestre'
            },
            {
                metric: '4.4/5',
                description: 'Calificación promedio en la Playstore'
            },
            {
                metric: '3,000+',
                description: 'Paseos completados exitosamente'
            }
        ],
        learnings: [
            {
                title: 'La Confianza es Clave',
                description: `
                    La implementación de verificaciones de identidad y sistema de reseñas
                    fue crucial para generar confianza entre usuarios y paseadores.
                `
            },
            {
                title: 'Iteración Continua',
                description: `
                    El feedback constante de los usuarios nos permitió mejorar la aplicación
                    de manera significativa durante las primeras semanas de lanzamiento.
                `
            }
        ]
    }
];

// Portfolio Items Data
const portfolioItems = [
    // Videos (areel.webm siempre será el primero)
    { type: 'video', src: 'vid/areel.webm', title: 'Reel', category: 'Motion', isFirst: true },
    { type: 'video', src: 'vid/brain.webm', title: 'Not real', category: 'Motion' },
    { type: 'video', src: 'vid/lazy.webm', title: 'Pixel Art', category: 'Motion' },
    { type: 'video', src: 'vid/road.webm', title: 'Loop', category: 'Motion' },
    { type: 'video', src: 'vid/woke.webm', title: 'Still not real', category: 'Motion' },
    
    // Images (excluimos img.webp)
    { type: 'image', src: 'img/app.webp', title: 'PatLad App', category: 'UI/UX' },
    { type: 'image', src: 'img/app1.webp', title: 'Screens', category: 'UI/UX' },
    { type: 'image', src: 'img/cafe.webp', title: "D'wasi Café", category: 'Product Photography'},
    { type: 'image', src: 'img/cbd1.webp', title: 'Happy Plant', category: 'product photography' },
    { type: 'image', src: 'img/creep.webp', title: 'Creep', category: 'Photography' },
    { type: 'image', src: 'img/foot.webp', title: 'Flowers', category: 'Photography' },
    { type: 'image', src: 'img/hd1.webp', title: 'Häagen-Dazs Ice Cream', category: 'Product Photography' },
    { type: 'image', src: 'img/hd2.webp', title: "Häagen-Dazs ad - Don't Hold Back", category: 'Advertising' },
    { type: 'image', src: 'img/hd3.webp', title: "Häagen-Dazs ad - Don't Hold Back", category: 'Advertising' },
    { type: 'image', src: 'img/hd4.webp', title: 'Häagen-Dazs Ice Cream', category: 'Product Photography' },
    { type: 'image', src: 'img/lp.webp', title: 'Landing Page RE/MAX', category: 'Web Design' },
    { type: 'image', src: 'img/lp1.webp', title: 'Landing Contorla SaaS', category: 'Web Design' },
    { type: 'image', src: 'img/lp2.webp', title: 'Landing Page CasaGold', category: 'Web Design' },
    { type: 'image', src: 'img/lp3.webp', title: 'Landing Page Gianella Aponte', category: 'Web Design' },
    { type: 'image', src: 'img/lp4.webp', title: 'Tienda de Aplicaciones Web', category: 'Web Developement' },
    { type: 'image', src: 'img/mara1.webp', title: 'Mar 1', category: 'Photography' },
    { type: 'image', src: 'img/mara2.webp', title: 'Mar 2', category: 'Photography' },
    { type: 'image', src: 'img/onnit.webp', title: 'Onnit Design', category: 'Advertising' },
    { type: 'image', src: 'img/pez.webp', title: 'Big fish', category: 'Digital Art' },
    { type: 'image', src: 'img/wing1.webp', title: 'Wingman ad', category: 'Advertising' },
    { type: 'image', src: 'img/wing2.webp', title: 'Wingman ad', category: 'Product Photography' },
    { type: 'image', src: 'img/wise.webp', title: 'Gettin Old', category: 'Digital Art' }
];

// Shuffle array pero manteniendo el primer elemento (areel.webm)
function shuffle(array) {
    // Separar el primer elemento (areel.webm)
    const firstItem = array.find(item => item.isFirst);
    const restItems = array.filter(item => !item.isFirst);
    
    // Mezclar el resto
    const shuffled = [...restItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Retornar con el primer elemento al inicio
    return firstItem ? [firstItem, ...shuffled] : shuffled;
}

// Load Projects
function loadProjects() {
    const grid = document.querySelector('#proyectos .grid');
    if (!grid) return;
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card rounded-2xl overflow-hidden group cursor-pointer';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="relative h-64 overflow-hidden">
                <img src="${project.image}" alt="${project.title}" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${project.categories.map(cat => `
                            <span class="category-tag">
                                ${cat}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 group-hover:text-cyan-500 transition-colors">
                    ${project.title}
                </h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                    ${project.description}
                </p>
            </div>
        `;
        
        // Agregar evento click para abrir el modal del proyecto
        card.addEventListener('click', () => openProjectModal(project));
        
        grid.appendChild(card);
    });
}

// Abrir modal de proyecto
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    // Llenar el modal con los datos del proyecto
    modal.querySelector('.project-hero').src = project.image;
    modal.querySelector('.project-title').textContent = project.title;
    modal.querySelector('.project-tagline').textContent = project.tagline || project.description;
    
    const categoriesContainer = modal.querySelector('.project-categories');
    categoriesContainer.innerHTML = project.categories.map(cat => `
        <span class="category-tag">${cat}</span>
    `).join('');
    
    // Información básica
    modal.querySelector('.project-role').textContent = project.role || '';
    modal.querySelector('.project-client').textContent = project.client || '';
    modal.querySelector('.project-year').textContent = project.year || '';
    modal.querySelector('.project-duration').textContent = project.duration || '';
    
    // Descripción
    modal.querySelector('.project-description').textContent = project.fullDescription || '';
    
    // Desafío y Solución
    modal.querySelector('.project-challenge').textContent = project.challenge || '';
    modal.querySelector('.project-solution').textContent = project.solution || '';
    
    // Proceso
    const processContainer = modal.querySelector('.project-process');
    if (project.process && project.process.length > 0) {
        processContainer.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${project.process.map(phase => `
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                        ${phase.image ? `
                            <img src="${phase.image}" alt="${phase.title}" class="w-full h-64 object-cover">
                        ` : ''}
                        <div class="p-6">
                            <h4 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">${phase.title}</h4>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">${phase.description}</p>
                            ${phase.caption ? `
                                <p class="text-xs text-gray-500 dark:text-gray-400 italic">${phase.caption}</p>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        processContainer.innerHTML = '';
    }
    
    // Resultados
    const resultsContainer = modal.querySelector('.project-results');
    if (project.results && project.results.length > 0) {
        resultsContainer.innerHTML = project.results.map(result => `
            <div class="text-center">
                <div class="text-4xl font-bold text-cyan-500 mb-2">${result.metric}</div>
                <p class="text-gray-600 dark:text-gray-400">${result.description}</p>
            </div>
        `).join('');
    } else {
        resultsContainer.innerHTML = '';
    }
    
    // Aprendizajes
    const learningsContainer = modal.querySelector('.project-learnings');
    if (project.learnings && project.learnings.length > 0) {
        learningsContainer.innerHTML = project.learnings.map(learning => `
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h5 class="font-semibold mb-2 text-gray-900 dark:text-white">${learning.title}</h5>
                <p class="text-gray-600 dark:text-gray-400">${learning.description}</p>
            </div>
        `).join('');
    } else {
        learningsContainer.innerHTML = '';
    }
    
    // Mostrar el modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal de proyecto
document.getElementById('close-project')?.addEventListener('click', () => {
    const modal = document.getElementById('project-modal');
    modal?.classList.add('hidden');
    document.body.style.overflow = '';
});

// Load Portfolio Items
let displayedItems = 0;
const itemsPerLoad = 12;
let shuffledPortfolioItems = []; // Array mezclado que se mantiene constante

function loadPortfolioItems(count = itemsPerLoad) {
    const masonry = document.querySelector('#portafolio .masonry-grid');
    if (!masonry) return;
    
    // Solo mezclar una vez al inicio
    if (shuffledPortfolioItems.length === 0) {
        shuffledPortfolioItems = shuffle(portfolioItems);
    }
    
    const itemsToLoad = shuffledPortfolioItems.slice(displayedItems, displayedItems + count);
    
    itemsToLoad.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'masonry-item fade-in-up';
        itemDiv.style.animationDelay = `${index * 0.05}s`;
        
        if (item.type === 'image') {
            // Determinar si es una imagen larga (landing page)
            const isLandingPage = item.isLandingPage || false;
            
            itemDiv.innerHTML = `
                <div class="relative group cursor-pointer overflow-hidden rounded-2xl">
                    <img src="${item.src}" alt="${item.title}" 
                         class="w-full ${isLandingPage ? 'h-96 object-cover object-top' : 'h-auto'} transition-transform duration-500 group-hover:scale-105 media-item"
                         onerror="this.src='https://via.placeholder.com/400x600?text=${encodeURIComponent(item.title)}'">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <span class="category-tag mb-2">
                                ${item.category}
                            </span>
                            <h4 class="font-semibold text-lg text-white">${item.title}</h4>
                        </div>
                    </div>
                </div>
            `;
            
            itemDiv.addEventListener('click', () => openLightbox(item));
        } else if (item.type === 'video') {
            itemDiv.innerHTML = `
                <div class="relative group cursor-pointer overflow-hidden rounded-2xl">
                    <video class="w-full h-auto media-item" muted loop playsinline autoplay>
                        <source src="${item.src}" type="video/webm">
                    </video>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <span class="category-tag mb-2">
                                ${item.category}
                            </span>
                            <h4 class="font-semibold text-lg text-white">${item.title}</h4>
                        </div>
                    </div>
                    <div class="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                    </div>
                </div>
            `;
            
            // El video se reproduce automáticamente con autoplay
            const video = itemDiv.querySelector('video');
            
            // Asegurar que el video se reproduzca en loop
            video.addEventListener('loadeddata', () => {
                video.play().catch(err => console.log('Autoplay prevented:', err));
            });
            
            itemDiv.addEventListener('click', () => openLightbox(item));
        }
        
        masonry.appendChild(itemDiv);
    });
    
    displayedItems += itemsToLoad.length;
    
    // Hide load more button if all items are displayed
    const loadMoreBtn = document.getElementById('load-more');
    if (displayedItems >= portfolioItems.length && loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

// Load More Button
const loadMoreBtn = document.getElementById('load-more');
const loadMoreContainer = document.getElementById('load-more-container');

loadMoreBtn?.addEventListener('click', () => {
    loadPortfolioItems();
    
    // Ocultar el botón si ya se cargaron todos los items
    if (displayedItems >= shuffledPortfolioItems.length) {
        loadMoreContainer.style.display = 'none';
    }
});

// Lightbox
function openLightbox(item) {
    const lightbox = document.getElementById('content-modal');
    const content = lightbox?.querySelector('.content-container');
    
    if (!lightbox || !content) return;
    
    // Pausar todos los videos de la galería
    document.querySelectorAll('.masonry-grid video').forEach(v => {
        v.pause();
    });
    
    // Determinar si es una imagen larga
    const isTallImage = item.src && item.src.includes('lp.webp');
    
    if (item.type === 'image') {
        content.innerHTML = `
            <div class="relative">
                <img src="${item.src}" alt="${item.title}" class="w-full h-auto rounded-2xl">
                <div class="mt-6 text-center">
                    <span class="category-tag mb-3">
                        ${item.category}
                    </span>
                    <h3 class="text-2xl font-bold text-white mt-3">${item.title}</h3>
                </div>
            </div>
        `;
        
        // Agregar clase para imágenes largas
        if (isTallImage) {
            lightbox.classList.add('has-tall-image');
        } else {
            lightbox.classList.remove('has-tall-image');
        }
    } else if (item.type === 'video') {
        content.innerHTML = `
            <div class="relative">
                <video controls loop preload="auto" playsinline class="w-full h-auto rounded-2xl" 
                       style="background: #000; max-height: 90vh; width: 100%; height: auto; display: block;">
                    <source src="${item.src}" type="video/webm">
                    Tu navegador no soporta la reproducción de video.
                </video>
                <div class="mt-6 text-center">
                    <span class="category-tag mb-3">
                        ${item.category}
                    </span>
                    <h3 class="text-2xl font-bold text-white mt-3">${item.title}</h3>
                </div>
            </div>
        `;
        
        // Videos siempre centrados
        lightbox.classList.remove('has-tall-image');
        
        // Asegurar que el video se reproduzca correctamente
        const video = content.querySelector('video');
        if (video) {
            // Forzar recálculo de dimensiones para evitar el bug de congelamiento
            const forceReflow = () => {
                // Forzar un reflow del DOM
                video.style.display = 'none';
                void video.offsetHeight; // Trigger reflow
                video.style.display = 'block';
            };
            
            // Resetear y forzar carga
            video.currentTime = 0;
            video.load();
            
            // Cuando se cargue la metadata, ajustar dimensiones
            video.addEventListener('loadedmetadata', () => {
                // Calcular dimensiones correctas
                const videoWidth = video.videoWidth;
                const videoHeight = video.videoHeight;
                const aspectRatio = videoWidth / videoHeight;
                
                // Establecer dimensiones explícitas
                const maxHeight = window.innerHeight * 0.9;
                const calculatedWidth = maxHeight * aspectRatio;
                
                video.style.maxHeight = maxHeight + 'px';
                video.style.width = 'auto';
                video.style.height = 'auto';
                
                // Forzar reflow
                forceReflow();
                
                // Pequeño delay antes de reproducir
                setTimeout(() => {
                    video.play()
                        .then(() => {
                            console.log('Video reproduciéndose correctamente');
                        })
                        .catch(err => {
                            console.log('Error al reproducir:', err);
                        });
                }, 100);
            }, { once: true });
            
            // Detectar cuando el video se "congela" y forzar reflow
            let lastTime = 0;
            video.addEventListener('timeupdate', () => {
                const currentTime = video.currentTime;
                
                // Si el tiempo no avanza y el video no está pausado
                if (!video.paused && !video.ended && currentTime === lastTime && currentTime > 0) {
                    console.log('Video congelado, forzando reflow...');
                    forceReflow();
                    video.play();
                }
                
                lastTime = currentTime;
            });
            
            // Manejar errores
            video.addEventListener('error', (e) => {
                console.error('Error en el video:', video.error);
            });
        }
    }
    
    lightbox.classList.remove('hidden');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('content-modal');
    
    // Pausar cualquier video que se esté reproduciendo en el modal
    const video = lightbox?.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
        video.src = ''; // Liberar recursos
    }
    
    lightbox?.classList.remove('active');
    lightbox?.classList.remove('has-tall-image');
    setTimeout(() => {
        lightbox?.classList.add('hidden');
        // Reiniciar videos de la galería
        document.querySelectorAll('.masonry-grid video').forEach(v => {
            v.play().catch(err => {});
        });
    }, 300);
    document.body.style.overflow = '';
}

document.getElementById('close-lightbox')?.addEventListener('click', closeLightbox);
document.getElementById('content-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'content-modal') {
        closeLightbox();
    }
});

// Escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadPortfolioItems();
});

// Crear capas de fondo animadas
function createBackgroundLayers() {
    const layers = ['bg-layer-1', 'bg-layer-2', 'bg-layer-3'];
    layers.forEach(id => {
        if (!document.getElementById(id)) {
            const layer = document.createElement('div');
            layer.id = id;
            document.body.appendChild(layer);
        }
    });
}

// Parallax effect on scroll - Anima el fondo con el scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrolled / maxScroll;
    
    // Animar el patrón de red neuronal (body::before)
    const root = document.documentElement;
    
    // Variables CSS para animar el patrón
    root.style.setProperty('--scroll-offset', `${scrolled * 0.1}px`);
    root.style.setProperty('--scroll-rotate', `${scrollPercent * 360}deg`);
    root.style.setProperty('--scroll-scale', `${1 + scrollPercent * 0.2}`);
    root.style.setProperty('--scroll-opacity', `${0.5 + scrollPercent * 0.5}`);
    
    // Animar la capa principal (body::after) - formas grandes
    const bodyAfter = document.body;
    if (bodyAfter) {
        bodyAfter.style.setProperty('--scroll-y', `${scrolled * 0.3}px`);
    }
    
    // Animar capas individuales con diferentes velocidades
    const layer1 = document.getElementById('bg-layer-1');
    const layer2 = document.getElementById('bg-layer-2');
    const layer3 = document.getElementById('bg-layer-3');
    
    if (layer1) {
        layer1.style.transform = `translate(${scrolled * 0.05}px, ${scrolled * 0.1}px) rotate(${scrollPercent * 10}deg)`;
        layer1.style.opacity = 1 - scrollPercent * 0.3;
    }
    
    if (layer2) {
        layer2.style.transform = `translate(${-scrolled * 0.08}px, ${scrolled * 0.15}px) rotate(${-scrollPercent * 15}deg)`;
        layer2.style.opacity = 1 - scrollPercent * 0.2;
    }
    
    if (layer3) {
        layer3.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 + scrollPercent * 0.1})`;
    }
});

// Efecto de movimiento con el mouse (sutil)
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;
});

function animateBackground() {
    // Suavizar el movimiento
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;
    
    document.documentElement.style.setProperty('--mouse-x', `${currentX}%`);
    document.documentElement.style.setProperty('--mouse-y', `${currentY}%`);
    
    requestAnimationFrame(animateBackground);
}

// Inicializar
createBackgroundLayers();
animateBackground();
