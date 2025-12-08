import { useState } from 'react'

export default function UserProfile() {

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(18)
    return (
        <div>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>

            <button onClick={() => setName("New Name")} style = {{background : 'grey'}}>change Name</button>
            <br /><br />
            <button onClick={() => setAge(20)} style={{ background: 'grey'}} >Change Age</button>
        </div>
    )
}
