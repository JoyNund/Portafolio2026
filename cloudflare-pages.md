# Configuración de Cloudflare Pages

## ⚠️ IMPORTANTE: Configuración en el Dashboard

Ve a tu proyecto en Cloudflare Pages y configura lo siguiente:

### 🔧 Build settings:

1. **Framework preset**: `None` o `Plain HTML`
2. **Build command**: `npm run build`
3. **Build output directory**: `/` (solo una barra `/`)
4. **Root directory**: `/` (deja vacío o `/`)

### 📝 Explicación:

- **Build command**: Ejecuta `npm run build` que compilará Tailwind CSS
- **Build output directory**: `/` porque todos los archivos (HTML, CSS, JS, imágenes) están en la raíz del proyecto
- **Root directory**: Dejar vacío o `/` porque el proyecto ya está en la raíz

### ❌ NO uses:
- Wrangler (es para Workers, no para Pages)
- Output directory como `dist` o `build` (los archivos están en la raíz)

### ✅ Proceso:

1. Cloudflare instalará las dependencias (`npm install`)
2. Ejecutará el build command (`npm run build`)
3. Esto generará `styles-compiled.css`
4. Servirá todos los archivos desde la raíz

### 🔄 Si ya configuraste mal:

1. Ve a tu proyecto en Cloudflare Pages
2. Settings → Builds & deployments
3. Edita la configuración de build
4. Cambia el build command a `npm run build`
5. Cambia el output directory a `/`
6. Guarda y redeplementa
