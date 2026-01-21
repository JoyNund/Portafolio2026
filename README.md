# 🎨 Portafolio - John Chávez Zevallos

Portafolio profesional moderno y optimizado construido con Tailwind CSS, JavaScript vanilla y diseño responsive.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Características

- 🎨 **Diseño moderno y minimalista** con animaciones suaves
- 🌓 **Dark mode** funcional con persistencia en localStorage
- 📱 **Completamente responsive** - Se adapta a todos los dispositivos
- ⚡ **Optimizado para producción** - CSS de solo 16.7KB (vs 3MB del CDN)
- 🖼️ **Galería masonry** con imágenes y videos
- 📂 **Sistema de proyectos** con modales detallados
- 👤 **Modal de perfil** con información personal y redes sociales
- 🎬 **Reproducción de videos** optimizada sin bugs de congelamiento
- 🔍 **SEO optimizado** con meta tags completos

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JoyNund/Portafolio2026.git

# Entrar al directorio
cd Portafolio2026

# Instalar dependencias
npm install
```

## 💻 Desarrollo

Para trabajar en el proyecto y que los cambios de CSS se actualicen automáticamente:

```bash
npm run watch:css
```

Este comando:
- Observa cambios en los archivos HTML y JS
- Recompila automáticamente el CSS cuando agregas o modificas clases de Tailwind
- Mantiene el archivo `styles-compiled.css` actualizado

## 📦 Producción

Para generar el CSS final optimizado y minificado:

```bash
npm run build:css
```

Este comando genera un archivo `styles-compiled.css` ultra-optimizado que:
- Solo incluye las clases de Tailwind que realmente usas
- Está minificado para máximo rendimiento
- Reduce el tamaño de ~3MB a solo **16.7KB** (99.4% más pequeño)

## 📁 Estructura del proyecto

```
portafolio-main/
├── src/
│   └── input.css              # Archivo fuente de Tailwind
├── img/                       # Imágenes del portafolio
├── vid/                       # Videos del portafolio
├── project1/                  # Recursos del proyecto 1
├── project3/                  # Recursos del proyecto 3
├── servicios/                 # Página de servicios
├── index.html                 # Página principal
├── script.js                  # JavaScript principal
├── styles.css                 # Estilos personalizados
├── styles-compiled.css        # CSS de Tailwind compilado (generado)
├── tailwind.config.js         # Configuración de Tailwind
├── package.json               # Dependencias del proyecto
└── README.md                  # Este archivo
```

## 🎨 Personalización

### Colores y fuentes

La configuración de Tailwind está en `tailwind.config.js`. Allí puedes:
- Modificar la paleta de colores
- Agregar fuentes personalizadas (actualmente usa Poppins)
- Extender utilidades
- Configurar breakpoints

### Estilos personalizados

Los estilos que no son de Tailwind van en `styles.css`, incluyendo:
- Animaciones del fondo
- Estilos de la galería masonry
- Efectos de glassmorphism
- Scrollbars personalizados

## 🌐 Despliegue

El sitio está listo para ser desplegado en cualquier servicio de hosting estático:

- **GitHub Pages**: Ya está configurado
- **Netlify**: Arrastra la carpeta o conecta el repositorio
- **Vercel**: Importa desde GitHub
- **Cloudflare Pages**: Conecta el repositorio

### Antes de desplegar

Asegúrate de ejecutar:

```bash
npm run build:css
```

Esto generará el CSS optimizado final.

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **Tailwind CSS** - Framework de utilidades
- **JavaScript (Vanilla)** - Interactividad sin frameworks
- **WebP** - Formato de imágenes optimizado
- **WebM** - Formato de videos optimizado

## 📝 Características técnicas

### Optimizaciones

- ✅ CSS minificado y optimizado (16.7KB)
- ✅ Lazy loading de imágenes
- ✅ Videos con preload optimizado
- ✅ Animaciones con GPU acceleration
- ✅ Código JavaScript modular

### Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Dispositivos móviles iOS y Android

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**John Chávez Zevallos**

- GitHub: [@JoyNund](https://github.com/JoyNund)
- LinkedIn: [john-zevallos](https://www.linkedin.com/in/john-zevallos)
- Twitter: [@sisiyalosabemos](https://twitter.com/sisiyalosabemos)

## 🙏 Agradecimientos

- Fuentes de [Google Fonts](https://fonts.google.com/)
- Iconos SVG personalizados
- Inspiración de diseños modernos de portafolios

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
