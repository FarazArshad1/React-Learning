import { useState } from "react";

function useForm(initialValues = {}, callback) {
    const [values, setValues] = useState(initialValues)

    // Handle input Change
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues(prev => ({
            ...prev,
            [name] : value,
        }))
    }

    // Handle Form Submit
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(callback) {
            callback(values)
        }
    }

    // Handle Form Reset
    const resetForm = () => {
        setValues(initialValues)
    }

    return {
        values,
        handleChange,
        handleSubmit,
        resetForm
    }

}