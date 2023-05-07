import { useEffect, useState } from 'react'
import { formatearPesos } from '../helpers'

const ControlPresupuesto = ({ presupuesto, gastos }) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado

        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])


    return (
        <div className="contenedor contenedor-presupuesto sombra dos-columnas">
            <div>
                Grafica
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearPesos(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearPesos(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearPesos(gastado)}
                </p>
            </div>
        </div>
    )
}
export default ControlPresupuesto