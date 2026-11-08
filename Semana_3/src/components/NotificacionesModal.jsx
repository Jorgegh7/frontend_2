function NotificacionesModal({ texto, onCerrar }) {
    if (!texto) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div
                role="dialog"
                aria-modal="true"
                className="w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg"
            >
                <p className="mb-6 text-lg font-bold text-verde-oscuro">{texto}</p>
                <button
                    type="button"
                    onClick={onCerrar}
                    className="rounded-lg bg-verde-oscuro px-6 py-3 font-bold text-white hover:bg-verde"
                >
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default NotificacionesModal