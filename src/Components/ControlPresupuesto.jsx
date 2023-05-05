const ControlPresupuesto = ({ presupuesto }) => {
    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })

    return (
        <div className="contenedor contenedor-presupuesto sombra dos-columnas">
            <div>
                Grafica
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatter.format(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatter.format(0)}
                </p>
                <p>
                    <span>Gastado: </span> {formatter.format(0)}
                </p>
            </div>
        </div>
    )
}
export default ControlPresupuesto