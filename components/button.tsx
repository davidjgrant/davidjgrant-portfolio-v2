import React from 'react'

const Button = ({style, children}) => {
  if (style === 'primary') {
    return (<div className='btn btn-primary'>{children}</div>)
  } else if (style === 'secondary') {
    return (<div className='btn btn-secondary'>{children}</div>)
  }
}

export default Button