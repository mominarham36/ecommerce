import { React, useEffect, useState } from 'react'
import axios from 'axios';

export const Dashboard = () => {
    const [name, setName] = useState('INTIATED  Name')
    const [users,setUsers] = useState([])

    const changeValue = () => {
        // console.log(name)
        setName('changed Value ')
        console.log('name=>', name)
    }

    const fetchvalue = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        // console.log('users =>', users);
        setUsers(users);
    }

    useEffect(() => {
        fetchvalue()
    }, [])
    return (
        <div>
            <p className='textColor'>{name}</p>
            <button onClick={() => fetchvalue()}>change </button>
            {  users.length == 0 ? <p className='textColor'>NO Data </p> : users.map((user )=>{
                return(
                    <p className='textColor'>
                        {user.name}
                        </p>
                )
            })}
        </div>
    )
}
