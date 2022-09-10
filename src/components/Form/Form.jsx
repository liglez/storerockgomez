import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Form = () => {
    // const [nombre, setNombre]  = useState('');
    // const [apellido, setApellido]  = useState('');
    const [dataForm, setDataForm] =useState({nombre:'', apellido:'',edad:0, talla:''})

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(dataForm);
        setDataForm({...dataForm, nombre:'', apellido:'', edad:'', talla:''})

    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setDataForm({...dataForm, [name] : value})
        console.log(dataForm);

    }

    useEffect(()=>{
        // window.addEventListener('mousemove', handleMouse);
        console.log('inicializo evento');

        return () => {   // Esta return se ejecuta primro el return y luego vuelve hacer el useEfect funcion de cleanup
             // window.removeEventListener('mousemove',handleMouse);
             console.log('borra evento despues del render')
        }
    },[]);

    

    return (
        <div style={{marginTop:'20px'}}>
            <form action='' onSubmit={handleSubmit}>
                <input type='text' placeholder='Nombre' name='nombre' value={dataForm.nombre} onChange={handleChange} />
                <input type='text' placeholder='Apellido' name='apellido' value={dataForm.apellido}  onChange={handleChange}/>
                <input type='text' placeholder='edad' name='edad' value={dataForm.edad} onChange={handleChange} />
                <select value={dataForm.talla} onChange={handleChange} name='talla'>
                    <option value='A'>A</option> 
                    <option value='B'>B</option> 
                    <option value='C' >C</option> 
                </select>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form;

/*
const handleChangeName = (e) => {
    // const [] =  e.target;
    console.log(e.target.value);
    setNombre(e.target.value);

}
const handleChangeLastName = (e) => {
const {name, value}=  e.target
console.log(value);
console.dir(name);
console.log(apellido)
setApellido(value);

} 
*/