import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <button onClick={() => navigate('/')}>first</button>


      <p className='navbarText'>
      <button onClick={() => navigate('/second')}>second</button>
      </p>


      <p className='navbarText'>
      <button onClick={() => navigate('/third')}>third</button>
      </p>

      <p className='navbarText'>
      <button onClick={() => navigate('/form')}>form</button>
      </p>


    </div>
  )
}
