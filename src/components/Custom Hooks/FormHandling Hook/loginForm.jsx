import useFormHook from "./useFormHook";

function LoginForm() {

    const initialValues = {
        email: "",
        password: "",
    }

    const onSubmit = (values) => {
        console.log("Form Submitted with values: ", values);
    }

    const { values, handleChange, handleSubmit, resetForm } = useFormHook(initialValues, onSubmit);
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input 
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    )
}
