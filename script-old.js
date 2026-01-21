// Datos de proyectos
const projects = [
    {
        title: 'Escuela RE/MAX Focus',
        description: 'Plataforma de formación de agentes inmobiliarios de RE/MAX',
        image: 'project1/cover.png',
        categories: ['Desarrollo web', 'Empresas', 'E-learning'],
        tagline: 'Transformando la formación inmobiliaria con una plataforma de aprendizaje personalizada',
        fullDescription: `
            Desarrollo de una plataforma educativa personalizada para RE/MAX Focus, 
            diseñada para optimizar el proceso de formación de agentes inmobiliarios. 
            La plataforma integra sistemas de gestión de aprendizaje, seguimiento de progreso 
            y herramientas de evaluación automatizadas.
        `,
        role: 'Desarrollador Full Stack & Diseñador UX',
        client: 'RE/MAX Focus',
        duration: '4 meses',
        year: '2023',
        challenge: `
            RE/MAX Focus necesitaba digitalizar su proceso de formación para agentes inmobiliarios,
            haciéndolo más eficiente y escalable. El sistema debía ser intuitivo, permitir el
            seguimiento del progreso y facilitar la evaluación de los agentes.
        `,
        solution: `
            Desarrollamos una plataforma LMS personalizada que integra contenido multimedia,
            evaluaciones automatizadas y un dashboard de seguimiento. La plataforma se diseñó
            con un enfoque mobile-first y una UX optimizada para diferentes niveles de usuarios.
        `,
        process: [
            {
                title: 'Investigación y Descubrimiento',
                description: `
                    La fase inicial se centró en entender las necesidades específicas de RE/MAX Focus
                    y sus agentes inmobiliarios. Realizamos entrevistas con stakeholders, análisis
                    de la competencia y workshops de diseño.
                `,
                image: 'project1/p1.png',
                caption: 'Workshop de diseño con el equipo de RE/MAX'
            },
            {
                title: 'Diseño UX/UI',
                description: `
                    Desarrollamos wireframes y prototipos interactivos, iterando constantemente
                    basados en feedback de usuarios reales. El diseño se enfocó en crear una
                    experiencia intuitiva y eficiente.
                `,
                image: 'project1/p2.webp',
                caption: 'Vista previa de la interfaz'
            },
            {
                title: 'Desarrollo e Implementación',
                description: `
                    La implementación se realizó en fases, comenzando con el core de la plataforma
                    y agregando funcionalidades progresivamente. Utilizamos React para el frontend
                    y Node.js para el backend, necesario para manejar user sessions individuales.
                `,
                image: 'project1/p3.webp',
                caption: 'Dashboard final de la plataforma'
            },
            {
                title: 'Recursos Complementarios',
                description: `
                    Se digitalizó la hoja de ruta del negocio inmobiliario interno de la empresa 
                    destinada a asesores, este compendio móvil se vinculó como una web app a la
                    plataforma LMS principal de modo que los agentes siempre puedan acceder a él.
                    Entre las características destacan, modos de color, buscador de palabras y
                    controles de narración por capítulos.
                `,
                images: [
                    'project1/p4.webp',
                    'project1/p4-1.webp',
                    'project1/p4-2.webp',
                    'project1/p4-3.webp',
                    'project1/p4-4.webp',
                    'project1/p4-5.webp',
                    'project1/p4-6.webp'
                ],
                caption: 'Web app móvil del Blueprint del agente RE/MAX'
            }
        ],
        results: [
            {
                metric: '+25%',
                description: 'Incremento en la tasa de finalización del programa'
            },
            {
                metric: '45min',
                description: 'Reducción en tiempo de evaluación por agente'
            },
            {
                metric: '98%',
                description: 'Satisfacción de usuarios con la plataforma'
            }
        ],
        learnings: [
            {
                title: 'Importancia del Feedback Temprano',
                description: `
                    Las sesiones regulares de feedback con usuarios reales fueron cruciales
                    para identificar y resolver problemas de usabilidad tempranamente.
                `
            },
            {
                title: 'Escalabilidad y Flexibilidad',
                description: `
                    Diseñar pensando en la escalabilidad desde el inicio permitió
                    adaptar la plataforma a nuevas necesidades sin mayores complicaciones.
                `
            }
        ]
    },
    {
        title: 'Pawtrulla App',
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
            },
           /* {
                title: 'Desarrollo e Implementación',
                description: `
                    Implementamos la aplicación utilizando React Native para garantizar una
                    experiencia nativa en iOS y Android, integrando servicios de geolocalización
                    y pagos en tiempo real.
                `,
                image: 'img/foot.webp',
                caption: 'Testing de la aplicación en dispositivos reales'
            }*/
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
                title: 'Teaser trailer 1',
                description: `
                   En Trujillo los artistas locales ven frenado abruptamente su labor debido a un virus a escala
                   global y un mandato estatal. Ahora deberán buscar salidas que les permitan salir adelante
                   en sus historias únicas.
                `,
                isYouTube: true,
                videoId: 'https://www.youtube.com/embed/LwIH7ShA_7c?si=aHMHouK4sc-jD7-Z', // Reemplaza con el ID real del video
                caption: 'Primer adelante sneak peak de la serie web'
            },
            {
                title: 'Diseño de Plataforma',
                description: `
                    Desarrollamos una arquitectura web que facilita la
                    navegación y descubrimiento de artistas, mientras mantenemos un
                    enfoque en la experiencia de usuario con servicios conectados.
                `,
                image: 'project3/p1.webp',
                caption: 'Plataforma web integrada'
            },
            {
                title: 'Snipets Músicales',
                description: `
                    Se desplegaron nuevos lanzamientos de artistas locales a manera de
                    snipets interactivos que conducían a los enlaces de Spotify.
                `,
                isYouTube: true,
                videoId: 'https://www.youtube.com/embed/8TJkbxLVZ1s',
                caption: 'Playlist conjunta, snipets y shorts'
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
            },
            /*{
                metric: '10K+',
                description: 'Comunidad'
            }*/
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
    }
];

// Agregar al inicio del archivo
const portfolioItems = [
    // 1er video (posición 0)
    {
        type: 'video',
        src: 'vid/areel.webm',
        title: 'Motion Graphics',
        description: 'Showreel de gráficos en movimiento'
    },
    // Imágenes 1-3
    {
        type: 'image',
        src: 'img/app1.webp',
        title: 'Pawtrulla App',
        description: 'Prototipado de app de paseo para mascotas'
    },
    {
        type: 'image',
        src: 'img/cafe.webp',
        title: "D'wasi café",
        description: 'Fotografía de producto par empresa de café artesanal'
    },
    {
        type: 'image',
        src: 'img/cbd1.webp',
        title: 'Happy Plant',
        description: 'Fotografía de producto para empresa de aceites terapeuticos'
    },
    // 2do video (posición 4)
    {
        type: 'video',
        src: 'vid/brain.webm',
        title: 'Brain damage',
        description: 'Breve animación 2.5d para campaña de redes sociales'
    },
    // Imágenes 4-7
    {
        type: 'image',
        src: 'img/foot.webp',
        title: 'Fotografía experimental',
        description: 'Sesión fotográfica para proyecto de arte escenico experimental'
    },
    {
        type: 'image',
        src: 'img/creep.webp',
        title: 'Fotografía experimental',
        description: 'Sesión fotográfica para proyecto de arte escenico experimental'
    },
    {
        type: 'image',
         src: 'img/lp.webp',
        title: 'Landing Page RE/MAX',
        description: 'Página de aterrizaje con proceso de reclutamiento automatizado para RE/MAX',
        isLanding: true
    },
    // 3er video (posición 8)
    {
        type: 'video',
        src: 'vid/lazy.webm',
        title: 'Pixelart',
        description: 'Animación 2d con técnica pixelart para redes sociales'
    },
    // Imágenes 8-11
    {
        type: 'image',
        src: 'img/hd1.webp',
        title: 'Häagen-Dazs',
        description: 'Renderizado 3d para empresa de helados'
    },
    {
        type: 'image',
        src: 'img/hd2.webp',
        title: "Don't hold back",
        description: 'Fotografía publicitaria para Häagen-Dazs'
    },
    {
        type: 'image',
        src: 'img/hd3.webp',
        title: "Don't hold back",
        description: 'Fotografía publicitaria para Häagen-Dazs'
    },
    {
        type: 'image',
        src: 'img/hd4.webp',
        title: 'Häagen Dazs',
        description: 'Renderizado 3d para empresa de helados'
    },
    // 4to video (posición 13)
    {
        type: 'video',
        src: 'vid/road.webm',
        title: 'Loop',
        description: 'Animación 2d en bucle para backing clip'
    },
    // Imágenes 12-15
    {
        type: 'image',
        src: 'img/app.webp',
        title: 'Pawtrulla Aplicación móvil',
        description: 'Aplicaicón móvil para empresa local del sector mascotas'
    },
    {
        type: 'image',
        src: 'img/mara1.webp',
        title: 'Fotogtafía exterior',
        description: 'Laboratorio fotográfico anónimo en exteriores'
    },
    {
        type: 'image',
        src: 'img/mara2.webp',
        title: 'Fotogtafía exterior',
        description: 'Laboratorio fotográfico anónimo en exteriores'
    },
    // 5to video (posición 17)
    {
        type: 'video',
        src: 'vid/woke.webm',
        title: 'Woke up',
        description: 'Animación 2d para grupo ciber-activista'
    },
    // Imágenes finales
    {
        type: 'image',
        src: 'img/onnit.webp',
        title: 'Alpha Brain by Onnit',
        description: 'Fotografía de producto para empresa de suplementos nutricionales'
    },
    {
        type: 'image',
        src: 'img/pez.webp',
        title: 'Gran pez',
        description: 'Illustración digital'
    }
];

// Cargar proyectos
function loadProjects() {
    const projectsContainer = document.querySelector('#proyectos .grid');
    const projectModal = document.getElementById('project-modal');
    
    function openProjectModal(project) {
        const modal = document.getElementById('project-modal');
        
        // Actualizar contenido básico
        modal.querySelector('.project-title').textContent = project.title;
        modal.querySelector('.project-hero').src = project.image;
        modal.querySelector('.project-hero').alt = project.title;
        modal.querySelector('.project-tagline').textContent = project.tagline;
        modal.querySelector('.project-description').textContent = project.fullDescription;
        modal.querySelector('.project-role').textContent = project.role;
        modal.querySelector('.project-client').textContent = project.client;
        modal.querySelector('.project-year').textContent = project.year;
        modal.querySelector('.project-duration').textContent = project.duration;
        modal.querySelector('.project-challenge').textContent = project.challenge;
        modal.querySelector('.project-solution').textContent = project.solution;

        // Categorías
        const categoriesHtml = project.categories
            .map(cat => `<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm text-blue-700 dark:text-blue-300">${cat}</span>`)
            .join('');
        modal.querySelector('.project-categories').innerHTML = categoriesHtml;

        // Proceso
        const processHtml = project.process
            .map(phase => `
                <div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                    <div class="grid md:grid-cols-2 gap-8 items-start">
                        <div class="p-8">
                            <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">${phase.title}</h4>
                            <p class="text-gray-600 dark:text-gray-300">${phase.description}</p>
                        </div>
                        <div class="relative flex justify-center p-8">
                            ${phase.images ? `
                                <div class="carousel relative w-full max-w-sm">
                                    <div class="carousel-container flex transition-transform duration-500 ease-in-out">
                                        ${phase.images.map(img => `
                                            <img src="${img}" alt="${phase.caption}" class="w-full h-[600px] object-contain flex-shrink-0">
                                        `).join('')}
                                    </div>
                                    <div class="absolute bottom-8 left-8 right-8 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-lg">
                                        <p class="text-sm text-white">${phase.caption}</p>
                                    </div>
                                    <div class="absolute bottom-24 left-0 right-0 flex justify-center gap-2">
                                        ${phase.images.map((_, i) => `
                                            <button class="carousel-dot w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" data-index="${i}"></button>
                                        `).join('')}
                                    </div>
                                </div>
                             ` : phase.isYouTube ? `
                                <div class="relative z-10 w-full aspect-video"> 
                                    <iframe 
                                        class="w-full h-full rounded-lg"
                                        src="https://www.youtube.com/embed/${phase.videoId}?enablejsapi=1&origin=${window.location.origin}"
                                        title="${phase.caption}"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        loading="lazy"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        sandbox="allow-same-origin allow-scripts allow-presentation"
                                        style="border: 0;"
                                        width="100%"
                                        height="100%">
                                    </iframe>
                                </div>
                                <div class="absolute bottom-8 left-8 right-8 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-lg">
                                    <p class="text-sm text-white">${phase.caption}</p>
                                </div>    
                            ` : `
                                <img src="${phase.image}" alt="${phase.caption}" class="w-auto max-h-[600px] object-contain rounded-lg">
                                <div class="absolute bottom-8 left-8 right-8 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-lg">
                                    <p class="text-sm text-white">${phase.caption}</p>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            `)
            .join('');
        modal.querySelector('.project-process').innerHTML = processHtml;

        // Resultados
        const resultsHtml = project.results
            .map(result => `
                <div class="text-center">
                    <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">${result.metric}</div>
                    <p class="text-sm text-gray-600 dark:text-gray-300">${result.description}</p>
                </div>
            `)
            .join('');
        modal.querySelector('.project-results').innerHTML = resultsHtml;

        // Aprendizajes
        const learningsHtml = project.learnings
            .map(learning => `
                <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 class="font-semibold text-gray-900 dark:text-white mb-2">${learning.title}</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300">${learning.description}</p>
                </div>
            `)
            .join('');
        modal.querySelector('.project-learnings').innerHTML = learningsHtml;

        // Mostrar modal
        modal.classList.remove('hidden');
        document.body.classList.add('modal-open');
        
        // Hacer scroll al inicio del modal
        modal.scrollTop = 0;

        // Inicializar carruseles después de que el contenido esté en el DOM
        setTimeout(() => {
            document.querySelectorAll('.carousel').forEach(carousel => {
                initCarousel(carousel);
            });
        }, 100);
    }
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105';
        
        const categories = project.categories
            .map(cat => `<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm text-blue-700 dark:text-blue-300">${cat}</span>`)
            .join('');
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-4">
                    ${categories}
                </div>
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300">${project.description}</p>
            </div>
        `;
        
        // Agregar evento click para abrir el modal
        projectCard.addEventListener('click', () => {
            openProjectModal(project);
        });
        
        projectsContainer.appendChild(projectCard);
    });

    // Configurar el cierre del modal
    const closeBtn = document.getElementById('close-project');
    closeBtn.addEventListener('click', () => {
        projectModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
            projectModal.classList.add('hidden');
            document.body.classList.remove('modal-open');
        }
    });

    // Cerrar al hacer clic fuera del contenido
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.add('hidden');
            document.body.classList.remove('modal-open');
        }
    });
}

// Toggle modo oscuro
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Asegurarse de que empiece en modo claro si no hay preferencia guardada
    if (!localStorage.theme) {
        localStorage.theme = 'light';
    }
    
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });

    // Cargar preferencia guardada
    if (localStorage.theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
}

// Manejo del modal Sobre Mí
function setupModal() {
    const modal = document.getElementById('about-modal');
    const modalContent = modal.querySelector('.modal-content');
    const openBtn = document.getElementById('about-btn');
    const openBtnMobile = document.getElementById('about-btn-mobile');
    const nameTitle = document.getElementById('name-title');
    const closeBtn = document.getElementById('close-modal');

    function openModal() {
        modal.classList.remove('hidden');
        modalContent.scrollTop = 0; // Asegura que el contenido empiece desde arriba
        modal.scrollTop = 0; // Asegura que el modal empiece desde arriba
        setTimeout(() => {
            modal.classList.add('active');
            modalContent.style.transform = 'translateY(0)';
        }, 10);
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modal.classList.remove('active');
        modalContent.style.transform = 'translateY(100%)';
        setTimeout(() => {
            modal.classList.add('hidden');
            modalContent.scrollTop = 0; // Reset scroll position
        }, 300);
        document.body.classList.remove('modal-open');
    }

    openBtn.addEventListener('click', openModal);
    openBtnMobile.addEventListener('click', openModal);
    nameTitle.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Configuración del lightbox
function setupLightbox() {
    const modal = document.getElementById('content-modal');
    const closeBtn = document.getElementById('close-lightbox');
    const contentContainer = modal.querySelector('.content-container');

    function openLightbox(content, title, description) {
        contentContainer.innerHTML = `
            ${content}
            <div class="content-info">
                <h3 class="text-2xl font-semibold mb-2">${title}</h3>
                <p class="text-gray-300">${description}</p>
            </div>
        `;

        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.classList.add('modal-open');

        // Si es video, asegurarse de que se reproduzca
        const video = contentContainer.querySelector('video');
        if (video) {
            video.play().catch(console.log);
        }
    }

    function closeLightbox() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('hidden');
            contentContainer.innerHTML = '';
        }, 300);
        document.body.classList.remove('modal-open');
    }

    // Eventos de cierre
    closeBtn.addEventListener('click', closeLightbox);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLightbox();
        }
    });

    return { openLightbox, closeLightbox };
}

// Variable global para el lightbox
let lightbox;

// Función para cargar elementos del portafolio
function loadPortfolioItems(startIndex, count) {
    const container = document.querySelector('.masonry-grid');
    const fragment = document.createDocumentFragment();
    const endIndex = Math.min(startIndex + count, portfolioItems.length);

    for (let i = startIndex; i < endIndex; i++) {
        const item = portfolioItems[i];
        const element = document.createElement('div');
        element.className = 'masonry-item cursor-pointer';
        
        if (item.type === 'video') {
            element.innerHTML = `
                <video class="media-item" autoplay muted loop playsinline>
                    <source src="${item.src}" type="video/webm">
                    <img src="img/img.webp" alt="${item.title}" class="media-item">
                </video>
                <div class="media-overlay">
                    <h3 class="text-xl font-semibold">${item.title}</h3>
                    <p class="text-sm">${item.description}</p>
                </div>
            `;

            // Evento click para abrir en lightbox
            element.addEventListener('click', () => {
                const videoContent = `
                    <div class="relative w-full">
                        <video class="w-full" controls autoplay>
                            <source src="${item.src}" type="video/webm">
                        </video>
                    </div>
                `;
                lightbox.openLightbox(videoContent, item.title, item.description);
            });
        } else {
            element.innerHTML = `
                <img src="${item.src}" alt="${item.title}" 
                    class="media-item ${item.isLanding ? 'landing-preview' : ''}"
                >
                <div class="media-overlay">
                    <h3 class="text-xl font-semibold">${item.title}</h3>
                    <p class="text-sm">${item.description}</p>
                </div>
            `;

            // Evento click para abrir en lightbox
            element.addEventListener('click', () => {
                const imageContent = item.isLanding ? `
                    <div class="lightbox-zoom-container">
                        <img src="${item.src}" alt="${item.title}" 
                            class="mx-auto cursor-zoom-in"
                            style="max-height: none; width: auto;"
                            onclick="this.classList.toggle('zoomed')">
                    </div>
                ` : `
                    <img src="${item.src}" alt="${item.title}" class="mx-auto">
                `;
                lightbox.openLightbox(imageContent, item.title, item.description);
            });
        }

        fragment.appendChild(element);
    }

    container.appendChild(fragment);

    // Actualizar el botón "Mostrar más"
    const loadMoreContainer = document.getElementById('load-more-container');
    loadMoreContainer.style.display = 'flex'; // Siempre mostrar el contenedor

    // Iniciar animaciones para los nuevos elementos
    const newItems = container.querySelectorAll('.masonry-item:not(.animated)');
    newItems.forEach((item, index) => {
        item.classList.add('animated');
        item.dataset.delay = index * 100;
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
}

// Agregar el botón "Mostrar más" al HTML
function setupLoadMore() {
    const section = document.getElementById('portafolio');
    const container = document.createElement('div');
    container.id = 'load-more-container';
    container.className = 'flex justify-center mt-12 mb-8';
    let isExpanded = false;
    container.innerHTML = `
        <button id="load-more" class="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
            <span class="text-sm">Ver más</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </button>
    `;
    section.querySelector('.container').appendChild(container);

    let currentIndex = 0;
    const initialItems = 9;
    const totalItems = 20;

    // Carga inicial
    loadPortfolioItems(0, initialItems);
    currentIndex = initialItems;

    // Evento click para cargar más
    const loadMoreBtn = document.getElementById('load-more');
    loadMoreBtn.addEventListener('click', () => {
        if (!isExpanded) {
            // Cargar los elementos restantes (11)
            loadPortfolioItems(currentIndex, totalItems - initialItems);
            currentIndex = totalItems;
            
            // Si ya no hay más items para cargar, cambiar a "Ver menos"
            isExpanded = true;
            loadMoreBtn.innerHTML = `
                <span class="text-sm">Ver menos</span>
                <svg class="w-4 h-4 transition-transform group-hover:-translate-y-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            `;
        } else {
            // Ocultar los items adicionales
            const container = document.querySelector('.masonry-grid');
            const items = container.querySelectorAll('.masonry-item');
            items.forEach((item, index) => {
                if (index >= initialItems) {
                    item.remove();
                }
            });
            
            // Resetear el estado
            currentIndex = initialItems;
            isExpanded = false;
            loadMoreBtn.innerHTML = `
                <span class="text-sm">Ver más</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            `;
        }
    });
}

// Configuración del menú móvil
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuButton.querySelector('.mobile-menu-icon');
    const mobileMenuClose = mobileMenuButton.querySelector('.mobile-menu-close');
    const aboutBtnMobile = document.getElementById('about-btn-mobile');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        setTimeout(() => mobileMenu.classList.toggle('active'), 10);
        mobileMenuButton.classList.toggle('active');
        mobileMenuIcon.classList.toggle('hidden');
        mobileMenuClose.classList.toggle('hidden');
    }

    mobileMenuButton.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Conectar el botón "Sobre Mí" móvil con el modal
    aboutBtnMobile.addEventListener('click', () => {
        toggleMenu();
        document.getElementById('about-btn').click();
    });

    // Cerrar menú al hacer scroll
    window.addEventListener('scroll', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMenu();
        }
    });
}

// Configuración del botón seguir
function setupScrollDown() {
    const scrollButton = document.getElementById('scroll-down');
    const proyectosSection = document.getElementById('proyectos');

    scrollButton.addEventListener('click', () => {
        proyectosSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Actualizar la inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupThemeToggle();
    setupModal();
    lightbox = setupLightbox();
    setupLoadMore();
    setupMobileMenu();
    setupScrollDown();
});

// Animaciones al scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Animar elementos del masonry cuando entran en vista
            if (entry.target.classList.contains('masonry-item')) {
                entry.target.style.animationDelay = `${entry.target.dataset.delay}ms`;
                entry.target.style.animationPlayState = 'running';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section, .masonry-item').forEach((element, index) => {
    if (element.classList.contains('masonry-item')) {
        element.dataset.delay = index * 100; // Retraso escalonado para cada item
        element.style.animationPlayState = 'paused';
    }
    observer.observe(element);
}); 

function closeProjectModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

// Manejo de gestos táctiles para el modal Sobre Mí
function setupModalGestures() {
    const modal = document.getElementById('about-modal');
    const modalContent = modal.querySelector('.modal-content');
    let startY = 0;
    let currentY = 0;

    modalContent.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        modalContent.style.transition = 'none';
    });

    modalContent.addEventListener('touchmove', (e) => {
        if (modalContent.scrollTop === 0) {
            currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;
            
            if (deltaY > 0) {
                e.preventDefault();
                modalContent.style.transform = `translateY(${deltaY}px)`;
            }
        }
    }, { passive: false });

    modalContent.addEventListener('touchend', () => {
        modalContent.style.transition = 'transform 0.3s ease';
        if (currentY - startY > 100) {
            closeModal();
        } else {
            modalContent.style.transform = 'translateY(0)';
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
}

// Llamar a la función después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    setupModalGestures();
    // ... resto del código existente ...
});

// Función para inicializar el carrusel
function initCarousel(carouselElement) {
    const container = carouselElement.querySelector('.carousel-container');
    const images = container.querySelectorAll('img');
    const totalSlides = images.length;
    let currentIndex = 0;
    let autoplayInterval;

    function updateCarousel(index) {
        container.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(currentIndex);
    }

    // Iniciar autoplay
    autoplayInterval = setInterval(nextSlide, 3000);

    // Limpiar intervalo cuando el elemento se elimina del DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (!document.contains(carouselElement)) {
                clearInterval(autoplayInterval);
                observer.disconnect();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Inicializar
    updateCarousel(0);
}

// Agregar más metadatos estructurados

