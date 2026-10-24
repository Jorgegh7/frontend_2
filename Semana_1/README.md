# San Esteban Supermercado

Sitio web de gestión de inventario para la cadena de supermercados San Esteban.
Actividad formativa 1 de Desarrollo Frontend II (PFY2202), Duoc UC.

## Tecnologías

- React + Vite
- React Router (navegación entre páginas)
- Bootstrap 5
- HTML, CSS y JavaScript

## Páginas

- **Inicio** (`/`): presentación y listado de productos por categoría, con precio, oferta y stock.
- **Nuestras tiendas** (`/nuestras-tiendas`): las dos sucursales.
- **Quiénes somos** (`/quienes-somos`): historia de la empresa.
- **Contáctanos** (`/contactanos`): datos de contacto.

## Estructura

```
src/
  components/   Navigation, Footer, InfoCard, ProductCard
  pages/        Home, NuestrasTiendas, QuienesSomos, Contactanos
  data/         productos.json
  assets/       logo e imágenes
public/
  productos/    fotos de los productos
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Luego abre la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Autor

Jorge Gallardo Heck, estudiante de Analista Programador Computacional, Duoc UC Online.
