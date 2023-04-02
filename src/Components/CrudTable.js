import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <article className="crud-tabla">
      <h3>Tabla de datos</h3>
      <div className='tabla-content'>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nucleos</th>
              <th>Hilos</th>
              <th>Reloj Base</th>
              <th>Reloj Máximo</th>
              <th>Cache L2</th>
              <th>Cache L3</th>
              <th>TDP</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (<tr><td colSpan='8'>Sin datos</td></tr>) : (data.map(el => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />))}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default CrudTable