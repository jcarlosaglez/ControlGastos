import { useEffect, useState } from 'react'
import {formatearPesos} from '../helpers'

const ControlPresupuesto = ({ presupuesto, gastos }) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        setGastado(gastos.reduce((total, gasto) => total += gasto.cantidad, 0))
        setDisponible(presupuesto - gastado)
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