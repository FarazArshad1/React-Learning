import { useReducer } from "react";

function Counter() {

    function counterReducer(state, action) {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 }
            case "DECREMENT":
                return { count: state.count - 1 }
            case "RESET":
                return { count: 0 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    return (
        <div>
            <p>Count : {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
            <button onClick={() => dispatch({ type: "RESET" })}> Reset </button>
        </div>
    )
}

export default Counter;