import React from 'react'

function Table({listas, remove }) {
  return (
    <div className='flex'>
        <table className='m-auto w-2/4'>
  <thead>
    <tr className='bg-green-800'>
      <th className='border-2'>Nombre</th>
      <th className='border-2'>Apellido</th>
      <th className='border-2'>Edad</th>
      <th className='border-2'>Peso</th>
      <th className='border-2'>Años de experiencia</th>
      <th className='border-2'>Labor</th>
      <th className='bg-white'></th>
    </tr>
  </thead>
  <tbody className='text-center bg-green-400 capitalize'>
   {
    listas.map((lista, index)=>(
        <tr key={index}>
        <td className='border-2'>{lista.name}</td>
        <td className='border-2'>{lista.apellido}</td>
        <td className='border-2'>{lista.edad}</td>
        <td className='border-2'>{lista.peso}</td>
        <td className='border-2'>{lista.experiencia}</td>
        <td className='border-2'>{lista.labor}</td>
        <div className='border-2'><button className='bg-red-700 px-16 py-1  rounded-xl' onClick={()=>remove(lista.id)}
        >Eliminar</button></div>
        
      </tr>
    ))
   }
  </tbody>
</table>
    </div>
  )
}

export default Table