import { useState } from 'react'
import BtnCerrar from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault()

        setNombre(nombre.trim())
        setCategoria(categoria.trim())

        if ([nombre, cantidad, categoria].includes('') || cantidad < 1) {
            setMensaje('Todos los campos son obligatorios');
            setCantidad('')

            setTimeout(() => {
                setMensaje('')
            }, 2500);
            return
        }

        guardarGasto({ nombre, cantidad, categoria })
        setNombre('')
        setCantidad('')
        setCategoria('')
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={BtnCerrar}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}
            >
                <legend>Nuevo Gasto</legend>

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder='Nombre del gasto...'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad: </label>
                    <input
                        type="number"
                        name="cantidad"
                        id="cantidad"
                        placeholder='Cantidad del gasto, ej: 300'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria: </label>
                    <select
                        name="categoria"
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">Seleccione</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Añadir gasto" />
            </form>
        </div>
    )
}
export default Modal