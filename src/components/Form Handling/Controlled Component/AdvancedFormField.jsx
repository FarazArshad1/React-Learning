import { useState } from 'react'

export default function AdvancedFormField() {
    const [formData, setFormData] = useState({ gender: "Male", agree: true, country: "UK" })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((previous) => ({
            ...previous, 
            [name]: type == "checkbox" ? checked : value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Form with Checkbox, Radio & Select</h2>

            <label>
                <input type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender == "Male"}
                    onChange={handleChange}
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender == "Female"}
                    onChange={handleChange}
                />
                Female
            </label>
            <br />

            <label>Country :
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="Pakistan">Pakistan</option>
                    <option value="UK">UK</option>
                    <option value="China">China</option>
                </select>
            </label>
            <br />

            <label>
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                I agree to the terms & Conditions
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
    )
}
