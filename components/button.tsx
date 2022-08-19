import React from 'react'

const Button = ({type, children}) => {
  if (type === 'primary') {
    return (<button className='btn btn-primary'>{children}</button>)
  } else if (type === 'secondary') {
    return (<button className='btn btn-secondary'>{children}</button>)
  } else if (type === 'tertiary') {
    return (<button className='btn btn-tertiary'>{children}</button>)
  }
}

export default Button