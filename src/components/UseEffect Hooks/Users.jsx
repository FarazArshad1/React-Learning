import { useState, useEffect } from 'react'

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <div>
            <p>Users List</p>
            {users.map((u)=> (
                <li key={u.id}>{u.name}</li>
            ))}
        </div>
    )
}
