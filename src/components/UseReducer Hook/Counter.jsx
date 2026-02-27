import { useReducer } from "react";

function Counter() {

    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 }
            case "decrement":
                return { count: state.count - 1 }
            case "reset":
                return { count: 0 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 })


    return (
        <div>
            <h2>Count : {state.count}</h2>
            <h2 onClick={() => dispatch({ type: "increment" })}>+</h2>
            <h2 onClick={() => dispatch({ type: "decrement" })}>-</h2>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Counter;