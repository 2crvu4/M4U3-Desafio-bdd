import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Formulario = ({ lstColaboradores, setLstColaboradores, setLstFiltrada }) => {

    const [nombre, setNombre] = useState ('');
    const [email, setEmail] = useState ('');

    const agregarColaborador = (e) => {
        e.preventDefault(); // Detenemos el submit, lo que permite agregar informacion y no refrescar la aplicacion perdiendo los datos. 
        setLstColaboradores([...lstColaboradores, { nombre: nombre, correo: email }]); 
        setLstFiltrada([...lstColaboradores, { nombre: nombre, correo: email }]); 
    }

    return (
        <div className='p-2'>
            <form onSubmit={agregarColaborador}>
                <div className='pt-3'> 
                    <div>
                        <label htmlFor="nombre">Nombre Colaborador</label>
                    </div>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='ingrese nombre colaborador'
                        onChange={ (e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='py-3'>
                    <div>
                        <label htmlFor="nombre">Email Colaborador</label>
                    </div>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='ingrese email colaborador'
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>

                <Button variant='primary' type='submit'>
                    Agregar colaborador
                </Button>
            </form>
        </div>
    )
}

export default Formulario