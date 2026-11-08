# San Esteban Supermercado

Sitio web de gestión de inventario para la cadena de supermercados San Esteban.
Desarrollo Frontend II (PFY2202), Duoc UC.

## Enlaces

- **Código fuente:** https://github.com/Jorgegh7/frontend_2/tree/main/Semana_3
- **Sitio publicado (rama `gh-pages`):** https://jorgegh7.github.io/frontend_2/Semana_3/

## Tecnologías

- React + Vite
- React Router (`react-router`) para la navegación
- Tailwind CSS con colores propios definidos en `@theme`
- Context API + `useReducer` para el estado compartido
- JavaScript, HTML y CSS

## Páginas y rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Presentación y catálogo con filtro por categoría |
| `/productos` | Productos | Tabla con todo el inventario (imagen, datos, precios y stock), filtro por categoría y enlace al detalle desde el nombre |
| `/productos/:id` | Detalle de producto | Imagen, precios, stock y selector de cantidad para agregar al carrito |
| `/agregar-producto` | Agregar producto | Formulario con validaciones |
| `/carrito` | Carrito | Lista, cantidades, subtotales, total y pago |
| `/nuestras-tiendas` | Nuestras tiendas | Las dos sucursales |
| `/quienes-somos` | Quiénes somos | Historia de la empresa |
| `/contactanos` | Contáctanos | Datos de contacto |
| `*` | No encontrada | Página 404 con enlace de regreso al inicio |

La navegación incluye un menú hamburguesa para pantallas pequeñas, y el diseño es responsive con Tailwind.

## Cómo fluye el estado

1. `src/data/productos.json` contiene los productos iniciales, con `id` UUID.
2. `ProductosReducer.js` define los tipos de acción, el estado inicial (`productos` y `carrito`) y las reglas de cambio.
3. `ProductosProvider.jsx` conecta el reducer con React mediante `useReducer` y publica `productos`, `carrito` y las funciones: `agregarProducto`, `agregarAlCarrito`, `disminuirCantidadCarrito` y `pagarCarrito`.
4. El hook `useProductos` entrega esos datos a cualquier componente dentro del Provider. Si se usa fuera de él, lanza un error con un mensaje claro.

Recorrido de una acción: el usuario genera un evento (por ejemplo, un clic en "Agregar al carrito"), el manejador del componente llama a una función del Provider, esa función hace `dispatch` con el tipo de acción y sus datos, React ejecuta el reducer, el reducer devuelve el estado nuevo, React lo guarda y vuelve a dibujar los componentes que lo usan.

### Reglas del inventario y el carrito

- Agregar al carrito descuenta las unidades elegidas del `stock` y las suma a la `cantidad` del carrito. No permite pedir más de lo disponible.
- Los botones `+` y `−` del carrito mueven la cantidad y el stock en sentidos opuestos. Si la cantidad llega a 0, el producto sale del carrito.
- Pagar vacía el carrito, muestra un aviso con el total y redirige al inicio. El stock no se vuelve a descontar, porque ya se descontó al agregar.
- Si un producto tiene `precioOferta` mayor a 0, ese es el precio que se cobra.
- Los precios se muestran con formato chileno (`$1.590`) mediante `formatearPrecio`.

Los cambios viven en memoria: al recargar la página se vuelve a los datos del JSON.

## Filtro por categoría

La lista de categorías está en `src/data/categorias.js`. El componente `FiltroCategoria` dibuja el desplegable y lo usan el catálogo del inicio y la tabla de `/productos`. La función `filtrarProductosPorCategoria` (en `src/util/filtroProductos.js`) devuelve una lista filtrada sin modificar el inventario original.

## Validaciones del formulario

Las reglas están en `src/util/validacionesProductos.js` y se aplican dos veces: en el formulario, para mostrar los errores, y en el Provider, como segunda barrera antes de guardar.

- **Nombre y marca:** obligatorios, con largo mínimo y máximo, y una expresión regular que permite letras, números, espacios y algunos signos. Quedan fuera `< > = " '` y otros caracteres que sirven para inyectar código.
- **Descripción:** obligatoria, entre 10 y 200 caracteres, con su propia regex (admite puntuación).
- **Categoría:** debe estar en la lista fija de `src/data/categorias.js`, que se elige en un desplegable.
- **Precio:** obligatorio; debe ser un número válido (se rechaza el campo vacío o con letras) y mayor a 0.
- **Precio oferta:** opcional. Vacío equivale a 0 (sin oferta). Si se escribe, debe ser un número válido, no puede ser negativo y debe ser menor al precio.
- **Stock:** obligatorio; debe ser un número válido, entero y de 0 o más.
- **Imagen:** URL que empiece con `http://` o `https://`, validada además con una regex.

Los mensajes de largo se arman con los mismos números que usa la condición (`LIMITES`), para que nunca digan algo distinto.

## Estructura

```
src/
  components/   Navigation, Footer, InfoCard, ProductCard, CatalogoProductos,
                FiltroCategoria, CampoFormulario, NotificacionesModal
  context/      ProductosContext, ProductosProvider, ProductosReducer
  data/         productos.json, categorias.js, rutas.js
  hooks/        useProductos
  pages/        Home, ListaProductos, AgregarProducto, DetalleProducto, Carrito,
                NuestrasTiendas, QuienesSomos, Contactanos, NoEncontrada
  util/         validacionesProductos, filtroProductos, formatearPrecio
  assets/       logo e imágenes
public/
  productos/    fotos de los productos
```

`rutas.js` guarda la lista de enlaces que usan `Navigation` y `Footer`, para que los dos queden siempre iguales.

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

## Publicación en GitHub Pages

El sitio se publica desde la rama `gh-pages` del repositorio, en la carpeta `Semana_3`, con el contenido de `dist`. Para funcionar dentro de esa dirección, la versión publicada usa una copia del proyecto con tres ajustes que no están en esta rama:

- `base: '/frontend_2/Semana_3/'` en `vite.config.js`.
- `HashRouter` en lugar de `BrowserRouter`, para que recargar una página interna no dé error 404.
- Una función `rutaImagen` que antepone la base a las fotos de `public/productos`.

## Autor

Jorge Gallardo Heck, estudiante de Analista Programador Computacional, Duoc UC Online.