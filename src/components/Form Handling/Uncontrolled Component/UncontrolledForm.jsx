import { useRef } from 'react'

export default function UncontrolledForm() {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "Name": nameRef.current.value,
            "Email": emailRef.current.value,
        }

        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled Form</h2>
            <input type="text" ref={nameRef} placeholder='Name' />
            <br />

            <input type="email" ref={emailRef} placeholder='email' />
            <br />

            <button type='submit'>Submit</button>
        </form>
    )
}
