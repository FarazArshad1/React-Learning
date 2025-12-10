import { useState } from 'react'

export default function MultiInputForm() {

    const [formData, setFormData] = useState({ name: "", email: "", age: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((previous) => ({
            ...previous, [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Multiple Input Form</h2>

            <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} />
            <br />

            <input type="text" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
            <br />

            <input type="number" name="age" placeholder='Age' value={formData.age} onChange={handleChange} />
            <br />

            <button type='submit'>Submit</button>

        </form>
    )
}
