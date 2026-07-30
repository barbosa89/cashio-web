# Cash IO Web

Landing page estática de Cash IO construida con Astro 7 y Tailwind CSS 4.

## Aplicación Cash IO

Cash IO es una aplicación de finanzas personales offline-first para registrar
ingresos y egresos, administrar cuentas y presupuestos, consultar saldos y
gráficas, y exportar reportes desde una base de datos local.

La aplicación está disponible para Android en
[Google Play](https://play.google.com/store/apps/details?id=com.omarbarbosa.cashio).

## Idiomas

El sitio genera tres versiones localizadas:

- `/es/`: español.
- `/en/`: inglés.
- `/pt/`: portugués neutro.

La ruta `/` elige el idioma usando `localStorage`, después las preferencias del
navegador y, como último recurso, español. El selector guarda la preferencia en
la clave `cashio:locale`.

## Desarrollo

Requiere Node.js 24 LTS. Con `nvm`:

```sh
nvm use
npm install
```

Comandos principales:

```sh
npm run dev
npm run check
npm run build
npm run validate
npm run preview
```

Cuando sea necesario iniciar el servidor de desarrollo en este repositorio,
debe ejecutarse en segundo plano:

```sh
npx astro dev --background
```

## Estructura

- `src/i18n/content.ts`: contratos y contenido de los tres idiomas.
- `src/pages/`: entrada de detección y páginas localizadas.
- `src/components/`: landing y componentes reutilizables.
- `src/styles/global.css`: tema de Tailwind y estilos globales.
- `backup/`: referencia intacta del sitio anterior.
