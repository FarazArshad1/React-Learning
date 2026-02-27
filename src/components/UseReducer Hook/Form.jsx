import { useReducer } from "react";

function Form() {

    function reducer(state,action){
        return {
            ...state,
            [action.name] : action.value
        }
    }

    const [formData, dispatch] = useReducer(reducer, { username: "", email: "" })

    function handleChange(event) {
        dispatch({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <div>
            <form action="">
                <input type="text" name="username" placeholder="UserName" value={formData.username} onChange={handleChange} />Name
                <br /><br />
                <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />Email
            </form>

            <p>
                {formData.username} - {formData.email}
            </p>
        </div>
    )
} 

export default Form;