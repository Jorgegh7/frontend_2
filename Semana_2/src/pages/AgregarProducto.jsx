import { useState } from "react"
import useProductos from "../hooks/useProductos.js"
import { validarProductos } from "../util/validacionesProductos.js"
import { useNavigate } from 'react-router'

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
    const navigate = useNavigate()

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

        if (resultado.exito) {
            navigate('/')
        } else {
            setErrores(resultado.errores)
        }
    }


    return (
        <div className="container py-8">
            <h1 className="mb-2 text-3xl font-bold text-verde-oscuro">Agregar producto</h1>
            <p className="mb-6">Completa los datos para sumar un producto al inventario.</p>

            <form onSubmit={manejarEnvio} className="max-w-xl space-y-4">
                <div>
                    <label htmlFor="nombre" className="mb-1 block font-bold">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        value={valores.nombre}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                    {errores.nombre && <p className="text-sm text-red-600">{errores.nombre}</p>}
                </div>
                <div>
                    <label htmlFor="marca" className="mb-1 block font-bold">Marca</label>
                    <input
                        id="marca"
                        type="text"
                        name="marca"
                        value={valores.marca}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                    {errores.marca && <p className="text-sm text-red-600">{errores.marca}</p>}
                </div>
                <div>
                    <label htmlFor="categoria" className="mb-1 block font-bold">Categoría</label>
                    <input
                        id="categoria"
                        type="text"
                        name="categoria"
                        value={valores.categoria}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    />
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
                    <label htmlFor="precio" className="mb-1 block font-bold">Precio</label>
                    <input
                        id="precio"
                        type="number"
                        name="precio"
                        value={valores.precio}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                    {errores.precio && <p className="text-sm text-red-600">{errores.precio}</p>}
                </div>
                <div>
                    <label htmlFor="precioOferta" className="mb-1 block font-bold">Precio Oferta</label>
                    <input
                        id="precioOferta"
                        type="number"
                        name="precioOferta"
                        value={valores.precioOferta}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                    {errores.precioOferta && <p className="text-sm text-red-600">{errores.precioOferta}</p>}
                </div>
                <div>
                    <label htmlFor="stock" className="mb-1 block font-bold">Stock</label>
                    <input
                        id="stock"
                        type="number"
                        name="stock"
                        value={valores.stock}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                    {errores.stock && <p className="text-sm text-red-600">{errores.stock}</p>}
                </div>
                <div>
                    <label htmlFor="img" className="mb-1 block font-bold">Imagen</label>
                    <input
                        id="img"
                        type="url"
                        name="img"
                        value={valores.img}
                        onChange={manejarCambio}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                    {errores.img && <p className="text-sm text-red-600">{errores.img}</p>}
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