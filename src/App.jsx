import { useState } from 'react'
import Header from './Components/Header'
import { generarId, formatearFecha } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './Components/Modal'
import ListadoGastos from './Components/ListadoGastos'

function App() {
    const [presupuesto, setPresupuesto] = useState('')
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const [gastos, setGastos] = useState([])

    const guardarGasto = gasto => {
        const resto = presupuesto - gasto.cantidad

        if (resto < 0) {
            console.log('Ya no tienes presupuesto...');
            return
        }

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);

        gasto.id = generarId()
        gasto.fecha = formatearFecha()

        setGastos([...gastos, gasto])
        setPresupuesto(resto)
    }

    const handleNuevoGasto = () => {
        setModal(true)

        setTimeout(() => {
            setAnimarModal(true)
        }, 300);
    }

    return (
        <div>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />

            {isValidPresupuesto &&
                <>
                    <main>
                        <ListadoGastos gastos={gastos} />
                    </main>
                    <div className='nuevo-gasto'>
                        <img
                            src={IconoNuevoGasto}
                            alt="icono nuevo gasto"
                            onClick={handleNuevoGasto}
                        />
                    </div>
                </>
            }

            {modal &&
                <Modal
                    setModal={setModal}
                    setAnimarModal={setAnimarModal}
                    animarModal={animarModal}
                    guardarGasto={guardarGasto}
                />
            }
        </div>
    )
}

export default App
