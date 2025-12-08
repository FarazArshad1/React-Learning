import { useState } from 'react'

export default function Student() {

    const [student, setStudent] = useState({
        name: "John",
        grade: "A",
        city: "Dehli"
    })

    const changeCity = () => {
        setStudent({...student, city : "Mumbai"})
    }

    return (
        <div>
            <h2>Name : {student.name}</h2>
            <h2>Grade : {student.grade}</h2>
            <h3>City : {student.city}</h3>

            <button onClick={changeCity}> Change City</button>
        </div>
    )
}

