import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = e => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 1) {
            setMensaje('No es un presupuesto válido.')
            setPresupuesto('')
            setIsValidPresupuesto(false)
            return
        }

        setMensaje('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label>Definir presupuesto:</label>
                    <input
                        className="nuevo-presupuesto"
                        placeholder="Añade tu presupuesto..."
                        type="number"
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}
export default NuevoPresupuesto