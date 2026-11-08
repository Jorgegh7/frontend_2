import { useState } from "react"
import useProductos from "../hooks/useProductos.js"
import { validarProductos } from "../util/validacionesProductos.js"
import NotificacionesModal from "../components/NotificacionesModal.jsx"
import { CATEGORIAS } from "../data/categorias.js"
import CampoFormulario from "../components/CampoFormulario.jsx"

const valoresIniciales = {
    nombre: '',
    marca: '',
    categoria: '',
    descripcion: '',
    precio: '',
    precioOferta: '',
    stock: '',
    img: '',
}

function AgregarProducto() {

    const [valores, setValores] = useState(valoresIniciales)
    const [errores, setErrores] = useState({})
    const { agregarProducto } = useProductos()
    const [exito, setExito] = useState('')

    const manejarCambio = (evento) => {
        const { name, value } = evento.target
        setValores((previos) => ({ ...previos, [name]: value }))
    }

    const manejarEnvio = (evento) => {
        evento.preventDefault()

        const { esValido, errores: nuevosErrores, datos } = validarProductos(valores)

        if (!esValido) {
            setErrores(nuevosErrores)
            return
        }

        const resultado = agregarProducto(datos)

        // Al guardar de forma exitosa se llena el texto y eso hace aparecer el modal.
        if (resultado.exito) {
            setValores(valoresIniciales)
            setErrores({})
            // React vuelve a ejecutar la funcion cuando exito es distinto a null y el modal aparece
            setExito('Producto agregado correctamente.')
        } else {
            setErrores(resultado.errores)
        }
    }


    return (
        <div className="container py-8">
            <h1 className="mb-2 text-3xl font-bold text-verde-oscuro">Agregar producto</h1>
            <p className="mb-6">Completa los datos para sumar un producto al inventario.</p>

            <NotificacionesModal texto={exito} onCerrar={() => setExito('')} />
            <form onSubmit={manejarEnvio} className="max-w-xl space-y-4">
                <div>
                    <CampoFormulario
                        nombre="nombre"
                        etiqueta="Nombre"
                        valor={valores.nombre}
                        onChange={manejarCambio}
                        error={errores.nombre}
                    />
                </div>
                <div>
                    <CampoFormulario
                        nombre="marca"
                        etiqueta="Marca"
                        valor={valores.marca}
                        onChange={manejarCambio}
                        error={errores.marca}
                    />
                </div>
                <div>
                    <label htmlFor="categoria" className="mb-1 block font-bold">Categoría</label>
                    <select
                        id="categoria"
                        name="categoria"
                        value={valores.categoria}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    >
                        <option value="">Selecciona una categoría</option>
                        {CATEGORIAS.map((categoria) => (
                            <option key={categoria} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                    {errores.categoria && <p className="text-sm text-red-600">{errores.categoria}</p>}
                </div>
                <div>
                    <label htmlFor="descripcion" className="mb-1 block font-bold">Descripción</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        rows="3"
                        value={valores.descripcion}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    ></textarea>
                    {errores.descripcion && <p className="text-sm text-red-600">{errores.descripcion}</p>}
                </div>
                <div>
                    <CampoFormulario
                        nombre="precio"
                        etiqueta="Precio"
                        tipo="number"
                        valor={valores.precio}
                        onChange={manejarCambio}
                        error={errores.precio}
                    />
                </div>
                <div>
                    <CampoFormulario
                        nombre="precioOferta"
                        etiqueta="PrecioOferta"
                        tipo="number"
                        valor={valores.precioOferta}
                        onChange={manejarCambio}
                        error={errores.precioOferta}
                    />
                </div>
                <div>
                    <CampoFormulario
                        nombre="stock"
                        etiqueta="Stock"
                        tipo="number"
                        valor={valores.stock}
                        onChange={manejarCambio}
                        error={errores.stock}
                    />
                </div>
                <div>
                    <CampoFormulario
                        nombre="img"
                        etiqueta="Imagen"
                        tipo="url"
                        valor={valores.img}
                        onChange={manejarCambio}
                        error={errores.img}
                    />
                </div>



                <button
                    type="submit"
                    className="rounded-lg bg-verde-oscuro px-6 py-3 font-bold text-white hover:bg-verde"
                >
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default AgregarProducto