import React, {useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const dbInicial = [
  {
    id: 1,
    nombre: "AMD Ryzen 9 7945HX",
    nucleos: 16,
    hilos: 32,
    relojBase: '2.5GHz',
    relojMaximo: '5.4GHz',
    cacheL2: '16MB',
    cacheL3: '64MB',
    tdp: '55W'
  },
  {
    id: 2,
    nombre: "AMD Ryzen 7 7745HX",
    nucleos: 8,
    hilos: 16,
    relojBase: '3.6GHz',
    relojMaximo: '5.1GHz',
    cacheL2: '8MB',
    cacheL3: '32MB',
    tdp: '55W'
  },
  {
    id: 3,
    nombre: "AMD Ryzen 5 7645HX",
    nucleos: 6,
    hilos: 12,
    relojBase: '4.0Hz',
    relojMaximo: '5.0GHz',
    cacheL2: '6MB',
    cacheL3: '32MB',
    tdp: '55W'
  },
  {
    id: 4,
    nombre: "AMD Ryzen 9 7940HS",
    nucleos: 8,
    hilos: 16,
    relojBase: '4.0GHz',
    relojMaximo: '5.2GHz',
    cacheL2: '8MB',
    cacheL3: '16MB',
    tdp: '35-54W'
  },
  {
    id: 5,
    nombre: "AMD Ryzen 7 7840HS",
    nucleos: 8,
    hilos: 16,
    relojBase: '3.8GHz',
    relojMaximo: '5.1GHz',
    cacheL2: '8MB',
    cacheL3: '16MB',
    tdp: '33-54W'
  },

]

const CrudApp = () => {

  const [db, setDb] = useState(dbInicial);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id ${id}`);
    if(isDelete){
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD Básico (simulado)</h2>
      <article className="crud-basico">
        <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
      </article>
    </div>
  )
}

export default CrudApp