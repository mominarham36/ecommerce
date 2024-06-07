import React, { useContext } from 'react'
import { MyContext } from '../../MyContext';


export const Second = () => {
  const { user, age, setUser, setAge } = useContext(MyContext);
  return (
    <div>
      <p className='textColor'>Second user == {user}</p>
      {/* <button onClick={()=> setUser('change hua') }> change value</button> */}
      </div>
  )
}
