# Portafolio - John Chávez Zevallos

Portafolio profesional optimizado con Tailwind CSS.

## 🚀 Instalación

```bash
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
- Reduce el tamaño de ~3MB a solo unos KB

## 📁 Estructura de archivos

```
portafolio-main/
├── src/
│   └── input.css          # Archivo fuente de Tailwind
├── index.html             # Página principal
├── script.js              # JavaScript principal
├── styles.css             # Estilos personalizados
├── styles-compiled.css    # CSS de Tailwind compilado (generado)
├── tailwind.config.js     # Configuración de Tailwind
└── package.json           # Dependencias del proyecto
```

## 🎨 Personalización

La configuración de Tailwind está en `tailwind.config.js`. Allí puedes:
- Modificar la paleta de colores
- Agregar fuentes personalizadas
- Extender utilidades
- Configurar breakpoints

## 📝 Notas

- El archivo `styles-compiled.css` se genera automáticamente, **no lo edites manualmente**
- Los estilos personalizados van en `styles.css`
- Ejecuta `npm run build:css` antes de subir a producción
