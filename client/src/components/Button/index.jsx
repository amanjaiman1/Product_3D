import React from 'react'

function Button({children,rest}) {
  return (
    <button className='bg-primary border-2 outline-none p-3 rounded-lg text-white hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary ' {...rest}>{children}</button>
  )
}

export default Button