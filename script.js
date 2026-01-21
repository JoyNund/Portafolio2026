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
            const isLandingPage = item.src.includes('lp.webp');
            
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
