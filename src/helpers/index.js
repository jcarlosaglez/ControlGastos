export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

export const formatearFecha = () => {
    const fecha = Date.now()

    const opciones = Intl.DateTimeFormat('es-MX', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })

    return opciones.format(fecha)
}