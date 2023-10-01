import React from 'react'

type ButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  classname?: string;
  children: React.ReactNode;
};

const Button = ({type, classname, children}: ButtonProps) => {
  if (type === 'primary') {
    return (<button className={`${classname} btn btn-primary`}>{children}</button>)
  } else if (type === 'secondary') {
    return (
      <button className={`${classname} btn btn-secondary`}>{children}</button>
    );
  } else if (type === 'tertiary') {
    return (
      <button className={`${classname} btn btn-tertiary`}>{children}</button>
    );
  }
}

export default Button