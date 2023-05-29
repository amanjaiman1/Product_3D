import React from 'react'
import "./Button.css"

function Button({children,rest}) {
  return (
    <button className='bg-primary hover:bg-blue-700 outline-none p-3 rounded-lg text-white' {...rest}>{children}</button>
  )
}

export default Button