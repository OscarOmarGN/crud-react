import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  let { id, nombre, nucleos, hilos, relojBase, relojMaximo, cacheL2, cacheL3, tdp } = el;

  return (
    
      <tr>
        <td>{nombre}</td>
        <td>{nucleos}</td>
        <td>{hilos}</td>
        <td>{relojBase}</td>
        <td>{relojMaximo}</td>
        <td>{cacheL2}</td>
        <td>{cacheL3}</td>
        <td>{tdp}</td>
        <td>
          <button className='boton-editar' onClick={() => setDataToEdit(el)} >Editar</button>
          <button className='boton-eliminar' onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
  )
}

export default CrudTableRow