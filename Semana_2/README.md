# San Esteban Supermercado

Sitio web de gestión de inventario para la cadena de supermercados San Esteban.
Actividad formativa de Desarrollo Frontend II (PFY2202), Duoc UC.

## Tecnologías

- React + Vite
- React Router (navegación entre páginas)
- Tailwind CSS (estilos)
- Context API y hook propio (`useProductos`) para compartir la lista de productos
- JavaScript, HTML y CSS

## Páginas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Presentación y catálogo de productos agrupado por categoría |
| `/productos` | Productos | Tabla con todos los productos del inventario |
| `/agregar-producto` | Agregar producto | Formulario con validaciones para sumar un producto |
| `/nuestras-tiendas` | Nuestras tiendas | Las dos sucursales |
| `/quienes-somos` | Quiénes somos | Historia de la empresa |
| `/contactanos` | Contáctanos | Datos de contacto |

## Cómo funciona la lista de productos

1. `src/data/productos.json` contiene los productos iniciales.
2. `ProductosProvider` guarda esa lista en un estado y expone `productos` y `agregarProducto`.
3. El hook `useProductos` entrega esos datos a cualquier componente que esté dentro del Provider. Si se usa fuera de él, lanza un error con un mensaje claro.
4. El formulario valida los datos con `validarProductos` antes de guardar. Las reglas están en `src/util/validacionesProductos.js`.
5. Al guardar, el producto nuevo aparece en el inicio y en el listado. Si la categoría es nueva, se crea una sección sola.

Los productos agregados viven en memoria: al recargar la página se vuelve a la lista del JSON.

## Estructura

```
src/
  components/   Navigation, Footer, InfoCard, ProductCard
  context/      ProductosContext, ProductosProvider
  data/         productos.json
  hooks/        useProductos
  pages/        Home, ListaProductos, AgregarProducto,
                NuestrasTiendas, QuienesSomos, Contactanos
  util/         validacionesProductos
  assets/       logo e imágenes
public/
  productos/    fotos de los productos
```

## Validaciones del formulario

- **Nombre, marca y categoría:** obligatorios, con largo mínimo y máximo.
- **Descripción:** obligatoria, entre 10 y 200 caracteres.
- **Precio:** número mayor a 0.
- **Precio oferta:** opcional. Si se deja vacío vale 0 (sin oferta). Si existe, debe ser menor al precio.
- **Stock:** número entero de 0 o más.
- **Imagen:** URL completa que empiece con `http://` o `https://`.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Luego abre la URL que muestra la terminal (normalmente `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
```

## Autor

Jorge Gallardo Heck, Estudiante de Analista Programador Computacional, Duoc UC Online.