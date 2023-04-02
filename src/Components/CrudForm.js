import React, {useState, useEffect} from 'react';

const formInicial = {
  id: null,
  nombre: "",
  nucleos: '',
  hilos: '',
  relojBase: '',
  relojMaximo: '',
  cacheL2: '',
  cacheL3: '',
  tdp: ''
}


const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

  const [form, setForm] = useState(formInicial);

useEffect(() => {
  if(dataToEdit){
    setForm(dataToEdit);
  } else {
    setForm(formInicial);
  }
}, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.nombre || !form.nucleos || !form.hilos || !form.relojBase || !form.relojMaximo || !form.cacheL2 || !form.cacheL3 || !form.tdp){
      alert('Datos incompletos');
      return;
    }

    if(form.id === null){
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  }
  const handleReset = (e) => {
    setForm(formInicial);
    setDataToEdit(null);
  }

  return (
    <div className='crud-form'>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name='nombre' placeholder='nombre' onChange={handleChange} value={form.nombre} />
        <input type="text" name='nucleos' placeholder='nucleos' onChange={handleChange} value={form.nucleos} />
        <input type="text" name='hilos' placeholder='hilos' onChange={handleChange} value={form.hilos} />
        <input type="text" name='relojBase' placeholder='relojBase' onChange={handleChange} value={form.relojBase} />
        <input type="text" name='relojMaximo' placeholder='relojMaximo' onChange={handleChange} value={form.relojMaximo} />
        <input type="text" name='cacheL2' placeholder='cacheL2' onChange={handleChange} value={form.cacheL2} />
        <input type="text" name='cacheL3' placeholder='cacheL3' onChange={handleChange} value={form.cacheL3} />
        <input type="text" name='tdp' placeholder='tdp' onChange={handleChange} value={form.tdp} />
        <div className="botones-form">          
          <input type="submit" value='Enviar' />
          <input type="reset" value='Limpiar' onClick={handleReset} />
        </div>
      </form>
    </div>
  )
}

export default CrudForm