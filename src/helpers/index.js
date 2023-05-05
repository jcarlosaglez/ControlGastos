export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

export const formatearFecha = fechaAFormatear => {
    const opciones = Intl.DateTimeFormat('es-MX', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })

    return opciones.format(fechaAFormatear)
}

export const formatearPesos = cantidadAFormatear => {
    const opciones = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })

    return opciones.format(cantidadAFormatear)
}