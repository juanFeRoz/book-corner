import React from 'react'
import { BarraNavegacion } from '../navbar/barra-navegacion';
import BarraPrivada from '../navbar/barra-privada';

export default function MiLista() {
  return (
    <>
      <BarraPrivada />
      <h1 className='display-1'>Aqui van los libros que el usuario a guardado</h1>
      <p className='lead text-center'>Por el momento no hay base de datos del usuario</p>
    </>
  );
}
