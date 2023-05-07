import { useEffect, useState } from 'react'
import Header from './Components/Header'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './Components/Modal'
import ListadoGastos from './Components/ListadoGastos'

function App() {
    const [presupuesto, setPresupuesto] = useState('')
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const [gastos, setGastos] = useState([])
    const [gastoEditar, setGastoEditar] = useState({})

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setModal(true)

            setTimeout(() => {
                setAnimarModal(true)
            }, 300);
        }
    }, [gastoEditar])


    const guardarGasto = gasto => {
        /*const resto = presupuesto - gasto.cantidad

        if (resto < 0) {
            console.log('Ya no tienes presupuesto...');
            return
        }*/

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);

        if(gasto.id) {
            editarGasto(gasto)
            return
        }

        gasto.id = generarId()
        gasto.fecha = Date.now()

        setGastos([...gastos, gasto])
        //setPresupuesto(resto)
    }

    const editarGasto = gastoEditar => {
        const gastosActualizado = gastos.map(gasto => gasto.id === gastoEditar.id ? {...gasto, ...gastoEditar} : gasto)
        setGastos(gastosActualizado)
        setGastoEditar({})

        /*setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);*/
    }

    const handleNuevoGasto = () => {
        setModal(true)
        setGastoEditar({})

        setTimeout(() => {
            setAnimarModal(true)
        }, 300);
    }

    const eliminarGasto = idGasto => {
        const listaActualizada = gastos.filter(gasto => gasto.id !== idGasto)
        setGastos(listaActualizada)
    }

    return (
        <div className={modal ? 'fijar' : ''}>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                gastos={gastos}
            />

            {isValidPresupuesto &&
                <>
                    <main>
                        <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto} />
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
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                />
            }
        </div>
    )
}

export default App
