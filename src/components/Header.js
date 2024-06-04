import React from 'react'

const Header = ({logo}) => {
  return (
    <div>
        <img src={logo} alt='Logo' className='logo' />
    </div>
  )
}

export default Header