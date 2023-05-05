import Gasto from "./Gasto"

const ListadoGastos = ({ gastos }) => {
    return (
        <div className="contenedor listado-gastos">
            {gastos.length ? <h2>Gastos</h2> : <h2>Aún no hay gastos.</h2>}

            {gastos.map(gasto => <Gasto key={gasto.id} gasto={gasto} />)}
        </div>
    )
}
export default ListadoGastos