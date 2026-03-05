import { useState } from "react";

function CounterWithoutUsememo() {

    const[count, setCount] = useState(0)
    const [text, setText] = useState("")

    const expensiveCalculation = () => {
        console.log("Calculating...")
        let total = 0;
        for (let i = 0; i < 10000000000; i++){
            total += i;
        }
        return total;
    }

    const result = expensiveCalculation()

    return(
        <div>
            <h2>Result : {result}</h2>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <p>Count : {count}</p>
        </div>
    )
}


export default CounterWithoutUsememo;
