# Centro de Cálculos de Planta

App estática (PWA) para uso en planta desde celulares y tablets. Cubre tres módulos en un único repositorio:

1. **Silos, traslados y mezclas** — cálculos por ecuación lineal o por tabla, traslados entre silos y convertidor de mezclas de 2 y 3 componentes.
2. **Colorantes para esmalte** — masa de sólidos, porcentajes y cantidades a adicionar con reportes en TXT y CSV.
3. **Medidas de tanques** — consulta por tabla con interpolación lineal, soporte para extrapolación controlada ±2 cm e histórico local.

Instalable como PWA, funciona offline tras la primera carga, y guarda histórico localmente en cada dispositivo.

## Novedades en esta versión (v3)

- Reforzado contra XSS al renderizar el historial de silos y tanques (los campos ahora se escapan al insertarse en el DOM).
- Validación más estricta al importar respaldos JSON: solo se aceptan claves conocidas, las demás se ignoran y se reportan.
- Service Worker reescrito con manejo de errores explícito y soporte para activación inmediata vía mensajería (`SKIP_WAITING`).
- Manifest enriquecido: `scope`, `lang`, `dir`, `categories` e ícono `maskable`.
- `LICENSE`, `.gitignore`, `package.json` y workflow de GitHub Actions para correr los tests automáticamente.

## Estructura del repositorio

```text
/
├── index.html
├── manifest.webmanifest
├── service-worker.js
├── README.md
├── LICENSE
├── package.json
├── .gitignore
├── .github/
│   └── workflows/
│       └── tests.yml
├── assets/
│   ├── styles.css
│   └── app.js
├── data/
│   ├── silos-formulas.json
│   ├── silos-tables.json
│   └── tanks.json
├── tests/
│   └── run-tests.mjs
└── icons/
    ├── icon.svg
    ├── icon-192.png
    └── icon-512.png
```

## Datos externos en JSON

Las fórmulas y tablas viven fuera del código, en `data/`:

- `data/silos-formulas.json` — coeficientes `a, b` de la ecuación lineal `L = a·h + b` por silo.
- `data/silos-tables.json` — tablas de silos no lineales (39, 41-42, 43-46).
- `data/tanks.json` — tablas y modelos lineales de tanques.

Editar estos archivos no requiere tocar código de la app.

## Probar localmente

Solo necesitas Node.js 18+ (para los tests) y un navegador moderno.

### 1. Correr los tests

```bash
npm test
# equivale a: node tests/run-tests.mjs
```

Las pruebas verifican cantidad de fórmulas, cálculos lineales representativos, interpolaciones de silos y tanques, y consistencia de configuraciones lineales.

### 2. Servir la app en un servidor local

Los Service Workers **no funcionan** abriendo `index.html` directamente con doble clic (file://). Necesitas un servidor HTTP:

```bash
# Opción 1: con Python (ya viene en macOS y Linux)
python3 -m http.server 8080

# Opción 2: con npx (si tienes Node.js)
npx serve -p 8080

# Opción 3: con el script del package.json
npm run serve
```

Luego abre `http://localhost:8080` en el navegador. Para probar en celular, conéctate a la misma red y usa la IP del PC: `http://<ip-del-pc>:8080`.

## Publicar en GitHub Pages

### Primera publicación

1. Crea o abre tu repositorio en GitHub.
2. Sube todos los archivos manteniendo la estructura.
3. En el repositorio, ve a **Settings → Pages**.
4. En **Build and deployment** selecciona:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Guarda. La URL aparecerá en `https://<usuario>.github.io/<repo>/` en uno o dos minutos.

### Actualizar a una nueva versión

Cuando cambies archivos y republiques:

1. **Sube el número de versión del Service Worker** en `service-worker.js`:
   ```js
   const CACHE_NAME = 'planta-suite-v4';  // antes era v3
   ```
   Sin esto, los navegadores pueden seguir sirviendo la caché vieja.
2. Sube los archivos modificados al repositorio.
3. Espera 1–2 minutos a que GitHub Pages publique.
4. En el celular/tablet con la PWA instalada:
   - Abre la app y haz pull-to-refresh, o ciérrala completamente y vuelve a abrirla.
   - El SW nuevo se instalará en segundo plano y se activará al siguiente reinicio.

### Verificar después de publicar

1. Abre la URL en una ventana de incógnito.
2. Confirma que carga sin errores en la consola del navegador (F12).
3. En **Application → Service Workers** de DevTools, verifica que aparezca `planta-suite-vN` activo.
4. En **Application → Cache Storage**, debe estar `planta-suite-vN` con los archivos del app shell.

## Mantenimiento

- **Histórico local:** sigue siendo local al navegador. La pestaña "Inicio" tiene botones para exportar/importar respaldos JSON. Al importar, ahora solo se aceptan las claves reconocidas por la app — las demás se ignoran con seguridad.
- **Cambios en datos críticos:** después de editar cualquier JSON en `data/`, corre `npm test` antes de publicar. El workflow de GitHub Actions también lo hará automáticamente en cada push a `main`.
- **Cambios en assets:** acuérdate de subir también `service-worker.js` con un `CACHE_NAME` nuevo para invalidar la caché.

## Licencia

MIT — ver [`LICENSE`](./LICENSE).
