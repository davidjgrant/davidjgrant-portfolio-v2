import React from 'react'

const Roles = ({roles}) => {
  return (
    <div className='mt-4'>
      <ul className='flex items-center justify-center gap-x-4 flex-wrap'>
        <span className='text-lg font-semibold'>Roles: </span>
        {roles.map(role => {return <li key={role}>{role}</li>})}
      </ul>
    </div>
  )
}

export default Roles