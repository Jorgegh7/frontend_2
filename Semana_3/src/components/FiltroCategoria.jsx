import { CATEGORIAS } from '../data/categorias.js'
import { VALOR_TODOS } from '../util/filtroProductos.js'

function FiltroCategoria({ valor, onChange }) {
    return (
        <div className="mb-6">
            <label htmlFor="filtro-categoria" className="mb-1 block font-semibold text-verde-oscuro">
                Filtrar por categoría
            </label>
            <select
                id="filtro-categoria"
                value={valor}
                onChange={onChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-verde-oscuro focus:outline-none sm:w-auto"
            >
                <option value={VALOR_TODOS}>Todas</option>
                {CATEGORIAS.map((categoria) => (
                    <option key={categoria} value={categoria}>{categoria}</option>
                ))}
            </select>
        </div>
    )
}

export default FiltroCategoria