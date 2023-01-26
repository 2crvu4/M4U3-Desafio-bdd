import React  from 'react';

const ListaColaboradores = ({lstColaboradores}) => {

    return (
        <div className='p-2'>
            <h2>Lista colaboradores:</h2>
            <ul>
                {lstColaboradores.map( (c) => <li key={c.id} > {c.nombre} - {c.correo}</li>)}
            </ul>
        </div>
    )
}

export default ListaColaboradores