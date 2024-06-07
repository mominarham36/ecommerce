import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../MyContext';
import axios from 'axios';

export const Third = () => {
  const { user, setUser } = useContext(MyContext);
  const fetchvalue = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    console.log('users =>', users);
    setUser(users)

  }
  useEffect(() => {

  }, [])
  return (
    <div>
      <p className='textColor'>Third</p>
      <button onClick={() => fetchvalue()} >fetch name </button>
      {user.length == 0 ? <p className='textColor'>NO Data </p> : user.map((u) => {
        return (<p className='textColor'>{u.name}</p>)
      })
      }
    </div>
  )
}
